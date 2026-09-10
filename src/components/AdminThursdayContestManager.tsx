import React, { useState, useEffect } from 'react';
import { Trophy, Crown, CheckCircle2, Gift } from 'lucide-react';
import { collection, onSnapshot, query, orderBy, limit, doc, setDoc, updateDoc, increment } from 'firebase/firestore';
import { db } from '../lib/firebase';

interface AdminThursdayContestManagerProps {
  currentUserEmail: string;
  showNotification: (msg: string, type: 'success' | 'error' | 'info' | 'warning') => void;
}

export const AdminThursdayContestManager: React.FC<AdminThursdayContestManagerProps> = ({
  currentUserEmail: _currentUserEmail,
  showNotification
}) => {
  const [leaderboard, setLeaderboard] = useState<any[]>([]);
  const [isAnnouncing, setIsAnnouncing] = useState(false);
  const [currentAnnouncedWinner, setCurrentAnnouncedWinner] = useState<any | null>(null);

  // Listen to weekly contest leaderboard
  useEffect(() => {
    const unsub = onSnapshot(
      query(collection(db, 'contest_participants'), orderBy('points', 'desc'), limit(50)),
      (snap) => {
        const list: any[] = [];
        snap.forEach((d) => list.push({ id: d.id, ...d.data() }));
        
        // Sort by correct answers descending, then points descending
        const sorted = list.sort((a, b) => {
          const correctDiff = (b.correctAnswers || 0) - (a.correctAnswers || 0);
          if (correctDiff !== 0) return correctDiff;
          const pointsDiff = (b.points || 0) - (a.points || 0);
          if (pointsDiff !== 0) return pointsDiff;
          if (b.completed50 && !a.completed50) return 1;
          if (!b.completed50 && a.completed50) return -1;
          return (b.totalAnswered || 0) - (a.totalAnswered || 0);
        });

        setLeaderboard(sorted);
      },
      (err) => console.error(err)
    );
    return () => unsub();
  }, []);

  // Listen to announced winner config
  useEffect(() => {
    const unsub = onSnapshot(doc(db, 'weekly_contest_config', 'current_thursday_winner'), (snap) => {
      if (snap.exists()) {
        setCurrentAnnouncedWinner(snap.data());
      }
    });
    return () => unsub();
  }, []);

  // Smart official crowning based on rules:
  // 1. If 2 or more tied with top correct answers and both completed 50 questions -> both crowned and receive 100 points!
  // 2. Otherwise, the #1 on the leaderboard is awarded 100 points directly in their account!
  const handleAutoCrownOfficialWinners = async () => {
    if (leaderboard.length === 0) {
      showNotification('لا يوجد متسابقون لتتويجهم حالياً.', 'warning');
      return;
    }

    const topCorrect = leaderboard[0].correctAnswers || 0;
    const topPoints = leaderboard[0].points || 0;

    const tiedTop = leaderboard.filter(c => 
      (c.correctAnswers || 0) === topCorrect && (c.points || 0) === topPoints
    );

    let finalWinners: any[] = [];
    let isTieCrowned = false;

    if (tiedTop.length > 1) {
      const allCompleted50 = tiedTop.every(c => c.completed50 || (c.totalAnswered || 0) >= 50);
      if (allCompleted50) {
        finalWinners = tiedTop;
        isTieCrowned = true;
      } else {
        finalWinners = [tiedTop[0]];
      }
    } else {
      finalWinners = [leaderboard[0]];
    }

    const winnerNamesStr = finalWinners.map(w => w.name).join(' و ');
    const confirmMsg = isTieCrowned 
      ? `تم رصد تعادل في الصدارة بين: (${winnerNamesStr}) وكلاهما أتم الـ 50 سؤالاً بنجاح.\nهل تريد تتويجهما معاً كأبطال للأسبوع وإيداع 100 نقطة مباشرة في حساب كل منهما؟`
      : `هل أنت متأكد من تتويج المتصدر (${finalWinners[0].name}) بـ (${finalWinners[0].correctAnswers || 0}/50 إجابة صحيحة) كبطل رسمي لمسابقة الخميس وإيداع 100 نقطة مباشرة في حسابه؟`;

    if (!confirm(confirmMsg)) return;

    setIsAnnouncing(true);
    try {
      const today = new Date().toISOString().split('T')[0];

      // 1. Directly award 100 points to each winner's user account in Firestore
      for (const w of finalWinners) {
        const userId = w.studentId || w.userId || w.id;
        if (userId) {
          try {
            await updateDoc(doc(db, 'users', userId), {
              totalPoints: increment(100)
            });
          } catch (e) {
            console.warn('Could not update user document:', e);
          }
        }
      }

      // 2. Set official winner document in Firestore
      await setDoc(doc(db, 'weekly_contest_config', 'current_thursday_winner'), {
        isTie: isTieCrowned,
        winnerId: finalWinners[0].userId || finalWinners[0].id,
        winnerIds: finalWinners.map(w => w.userId || w.id),
        winnerName: winnerNamesStr,
        winnerEmail: finalWinners[0].email || finalWinners[0].userEmail || '',
        winnerEmails: finalWinners.map(w => w.email || w.userEmail || ''),
        studentId: finalWinners.map(w => w.studentId).filter(Boolean).join(' | ') || ('ALG-' + (finalWinners[0].id ? finalWinners[0].id.slice(0, 5).toUpperCase() : '001')),
        score: finalWinners[0].points || 0,
        correctAnswers: finalWinners[0].correctAnswers || 0,
        totalAnswered: finalWinners[0].totalAnswered || 50,
        rewardPoints: 100,
        isAnnounced: true,
        contestDate: today,
        announcedAt: new Date().toISOString(),
        winners: finalWinners.map(w => ({
          userId: w.userId || w.id,
          name: w.name,
          email: w.email || w.userEmail || '',
          studentId: w.studentId || w.id,
          points: w.points || 0,
          correctAnswers: w.correctAnswers || 0,
          totalAnswered: w.totalAnswered || 50
        }))
      }, { merge: true });

      showNotification(
        isTieCrowned 
          ? `🏆 تم بنجاح تتويج الأبطال (${winnerNamesStr}) وإيداع 100 نقطة مباشرة في حساب كل منهما!`
          : `🏆 تم بنجاح تتويج (${finalWinners[0].name}) كبطل الخميس وإيداع 100 نقطة مباشرة في حسابه!`,
        'success'
      );
    } catch (err) {
      console.error(err);
      showNotification('حدث خطأ أثناء تتويج البطل. يرجى المحاولة ثانية.', 'error');
    } finally {
      setIsAnnouncing(false);
    }
  };

  const handleCrownSingleWinner = async (contestant: any) => {
    if (!confirm(`هل أنت متأكد من تتويج الطالب (${contestant.name}) كبطل لمسابقة الخميس ومنحه 100 نقطة مباشرة تضاف لحسابه؟`)) {
      return;
    }

    setIsAnnouncing(true);
    try {
      const userId = contestant.studentId || contestant.userId || contestant.id;
      if (userId) {
        try {
          await updateDoc(doc(db, 'users', userId), {
            totalPoints: increment(100)
          });
        } catch (e) {
          console.warn('Could not update user document:', e);
        }
      }

      const today = new Date().toISOString().split('T')[0];
      await setDoc(doc(db, 'weekly_contest_config', 'current_thursday_winner'), {
        isTie: false,
        winnerId: contestant.userId || contestant.id,
        winnerIds: [contestant.userId || contestant.id],
        winnerName: contestant.name,
        winnerEmail: contestant.email || contestant.userEmail || '',
        winnerEmails: [contestant.email || contestant.userEmail || ''],
        studentId: contestant.studentId || 'ALG-' + Math.floor(1000 + Math.random() * 9000),
        score: contestant.points || 100,
        correctAnswers: contestant.correctAnswers || 0,
        totalAnswered: contestant.totalAnswered || 50,
        rewardPoints: 100,
        isAnnounced: true,
        contestDate: today,
        announcedAt: new Date().toISOString(),
        winners: [{
          userId: contestant.userId || contestant.id,
          name: contestant.name,
          email: contestant.email || contestant.userEmail || '',
          studentId: contestant.studentId || contestant.id,
          points: contestant.points || 0,
          correctAnswers: contestant.correctAnswers || 0,
          totalAnswered: contestant.totalAnswered || 50
        }]
      }, { merge: true });

      showNotification(`🏆 تم بنجاح تتويج (${contestant.name}) كبطل الخميس وإضافة 100 نقطة مباشرة إلى حسابه!`, 'success');
    } catch (err) {
      console.error(err);
      showNotification('حدث خطأ أثناء تتويج البطل. يرجى المحاولة ثانية.', 'error');
    } finally {
      setIsAnnouncing(false);
    }
  };

  return (
    <div className="bg-white rounded-[2.5rem] p-6 sm:p-8 border-2 border-blue-100 shadow-xl space-y-6 text-right" dir="rtl">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-slate-100">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-amber-50 text-amber-600 rounded-2xl flex items-center justify-center shadow-sm">
            <Trophy size={28} />
          </div>
          <div>
            <span className="px-3 py-0.5 bg-amber-100 text-amber-900 rounded-full text-[10px] font-black inline-block mb-1">
              لوحة تحكم المسؤول 👑
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900">إدارة وتتويج بطل مسابقة الخميس</h3>
            <p className="text-xs text-slate-500 font-bold">
              صاحب المركز الأول يفوز بـ 100 نقطة ذهبية تودع مباشرة في حسابه.
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
          {currentAnnouncedWinner?.isAnnounced && (
            <div className="bg-emerald-50 border border-emerald-200 p-3 rounded-2xl flex items-center gap-2">
              <CheckCircle2 size={18} className="text-emerald-600 shrink-0" />
              <div className="text-xs">
                <span className="font-bold text-slate-600">البطل المتوج حالياً: </span>
                <strong className="text-emerald-800 font-black">{currentAnnouncedWinner.winnerName}</strong>
                <span className="text-amber-700 font-black mr-1">(+100 نقطة)</span>
              </div>
            </div>
          )}

          <button
            onClick={handleAutoCrownOfficialWinners}
            disabled={isAnnouncing || leaderboard.length === 0}
            className="px-4 py-2.5 bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-950 rounded-2xl font-black text-xs shadow-md shadow-amber-500/20 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
          >
            <Crown size={16} />
            <span>تتويج المتصدر ومنحه 100 نقطة 🏆</span>
          </button>
        </div>
      </div>

      {/* Leaderboard Table for Admin */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h4 className="text-sm font-black text-slate-900 flex items-center gap-2">
            <Crown size={18} className="text-amber-500" />
            <span>لوحة المتسابقين الرسمية (الترتيب بأكبر مجيب أسئلة صحيحة):</span>
          </h4>
          <span className="text-xs font-bold text-slate-500">إجمالي المشاركين: {leaderboard.length}</span>
        </div>

        {leaderboard.length === 0 ? (
          <div className="bg-slate-50 p-8 rounded-2xl text-center text-slate-400 font-bold text-xs">
            لا توجد مشاركات مسجلة في مسابقة الخميس حالياً.
          </div>
        ) : (
          <div className="overflow-x-auto rounded-2xl border border-slate-200">
            <table className="w-full text-right text-xs">
              <thead className="bg-slate-50 text-slate-700 font-black border-b border-slate-200">
                <tr>
                  <th className="p-3">الترتيب</th>
                  <th className="p-3">اسم الطالب</th>
                  <th className="p-3">رقم التلميذ / المعرف</th>
                  <th className="p-3 text-center">الإجابات الصحيحة</th>
                  <th className="p-3 text-center">النقاط</th>
                  <th className="p-3 text-center">الحالة</th>
                  <th className="p-3 text-center">الإجراء والتتويج</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {leaderboard.map((item, idx) => (
                  <tr key={item.id || idx} className={`hover:bg-slate-50 transition-colors ${idx === 0 ? 'bg-amber-50/60 font-bold' : ''}`}>
                    <td className="p-3 font-black">
                      <span className={`w-7 h-7 rounded-full inline-flex items-center justify-center text-xs ${
                        idx === 0 ? 'bg-amber-400 text-slate-950 font-black shadow-sm' :
                        idx === 1 ? 'bg-slate-300 text-slate-800' :
                        idx === 2 ? 'bg-amber-200 text-slate-800' : 'bg-slate-100 text-slate-600'
                      }`}>
                        {idx === 0 ? '👑' : idx + 1}
                      </span>
                    </td>
                    <td className="p-3 font-black text-slate-900">
                      <div className="flex items-center gap-2">
                        <span>{item.name || 'طالب مجهول'}</span>
                        {idx === 0 && <span className="text-[10px] bg-amber-400 text-slate-950 px-2 py-0.5 rounded-md font-black">المتصدر 👑</span>}
                      </div>
                    </td>
                    <td className="p-3 text-slate-600 font-mono text-[11px]">{item.studentId || item.id}</td>
                    <td className="p-3 text-center">
                      <span className="px-2.5 py-1 bg-emerald-100 text-emerald-800 rounded-lg font-black text-xs">
                        {item.correctAnswers ?? 0} / {item.totalAnswered ?? 50} صحيح
                      </span>
                    </td>
                    <td className="p-3 text-center font-black text-blue-600">{item.points || 0} نقطة</td>
                    <td className="p-3 text-center">
                      <span className={`px-2 py-0.5 rounded-md text-[10px] font-bold ${
                        item.status === 'completed' || item.completed50 ? 'bg-emerald-50 text-emerald-700 border border-emerald-200' :
                        item.status === 'eliminated' ? 'bg-rose-50 text-rose-700 border border-rose-200' :
                        'bg-amber-50 text-amber-700 border border-amber-200'
                      }`}>
                        {item.status === 'completed' || item.completed50 ? 'أتم الـ 50 سؤالاً ✅' :
                         item.status === 'eliminated' ? 'تم الإقصاء ❌' : 'مشارك نشط ⚡'}
                      </span>
                    </td>
                    <td className="p-3 text-center">
                      <div className="flex items-center justify-center gap-2">
                        <button
                          onClick={() => handleCrownSingleWinner(item)}
                          disabled={isAnnouncing}
                          className="px-3.5 py-2 bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-slate-950 rounded-xl font-black text-[11px] shadow-sm transition-all flex items-center gap-1.5 cursor-pointer disabled:opacity-50"
                        >
                          <Gift size={14} />
                          <span>تتويج وإضافة 100 نقطة 💎</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};
