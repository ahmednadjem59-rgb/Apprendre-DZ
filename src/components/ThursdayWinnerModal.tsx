import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Trophy, Award, Sparkles, CheckCircle2, Mail, Star, Gift, ShieldCheck } from 'lucide-react';
import { ThursdayContestCertificate } from './ThursdayContestCertificate';

interface ThursdayWinnerModalProps {
  userName: string;
  userEmail: string;
  studentId?: string;
  score?: number;
  correctAnswers?: number;
  totalAnswered?: number;
  isTie?: boolean;
  onClose: () => void;
  onClaimReward?: () => void;
}

export const ThursdayWinnerModal: React.FC<ThursdayWinnerModalProps> = ({
  userName,
  userEmail,
  studentId,
  score = 100,
  correctAnswers = 50,
  totalAnswered = 50,
  isTie = false,
  onClose,
  onClaimReward
}) => {
  const [showCertificate, setShowCertificate] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const handleSendEmail = () => {
    setIsSending(true);
    setTimeout(() => {
      setIsSending(false);
      setEmailSent(true);
    }, 1000);
  };

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md" dir="rtl">
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.85, y: 30 }}
          className="bg-white rounded-[3rem] shadow-2xl max-w-xl w-full p-8 text-center space-y-6 relative border-4 border-amber-400 overflow-hidden"
        >
          {/* Confetti Background Stars */}
          <div className="absolute top-4 left-6 text-amber-400 animate-bounce">
            <Sparkles size={28} />
          </div>
          <div className="absolute top-6 right-8 text-yellow-500 animate-pulse">
            <Star size={32} />
          </div>
          <div className="absolute bottom-6 left-10 text-emerald-400 animate-ping">
            <Sparkles size={20} />
          </div>

          {/* Trophy Header */}
          <div className="relative mx-auto w-24 h-24 bg-gradient-to-tr from-amber-400 via-yellow-300 to-amber-500 rounded-3xl flex items-center justify-center shadow-xl shadow-amber-500/30 border-4 border-white">
            <Trophy size={50} className="text-amber-950 animate-bounce" />
          </div>

          <div className="space-y-2">
            <span className="px-4 py-1.5 bg-amber-100 text-amber-900 border border-amber-300 rounded-full text-xs font-black tracking-wider uppercase inline-block">
              {isTie ? '👑 تتويج أبطال مسابقة الخميس (تعادل في الصدارة)' : '👑 تتويج بطل مسابقة الخميس الرسمي'}
            </span>
            <h2 className="text-3xl font-black text-slate-900">
              ألف مبروك! لقد فزت بالمركز الأول 🏆
            </h2>
            <p className="text-sm text-slate-600 font-bold max-w-md mx-auto leading-relaxed">
              {isTie ? (
                <>
                  تهانينا الحارة لك يا <span className="text-blue-600 font-black">{userName}</span>! لقد أتممت الـ 50 سؤالاً وتصدرت المركز الأول بإجابات صحيحة متميزة وتوجت بطلاً وطنياً للأسبوع مع شريكك في الصدارة!
                </>
              ) : (
                <>
                  تهانينا الحارة لك يا <span className="text-blue-600 font-black">{userName}</span>! لقد تصدرت مسابقة الخميس الكبرى وتوجت بطلاً وطنياً للأسبوع!
                </>
              )}
            </p>
          </div>

          {/* Rewards Breakdown Cards */}
          <div className="bg-gradient-to-r from-amber-50 via-yellow-50 to-amber-50 p-6 rounded-3xl border-2 border-amber-200 text-right space-y-3 shadow-inner">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-amber-500 text-white flex items-center justify-center shrink-0 shadow-sm">
                <Gift size={18} />
              </div>
              <div>
                <p className="text-xs font-black text-slate-900">
                  المكافأة الكبرى: <span className="text-amber-700">+100 نقطة ذهبية إضافية</span> 💎
                </p>
                <p className="text-[10px] text-slate-500 font-bold">تمت إضافتها فوراً إلى رصيد حسابك الإجمالي.</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-emerald-500 text-white flex items-center justify-center shrink-0 shadow-sm">
                <Award size={18} />
              </div>
              <div>
                <p className="text-xs font-black text-slate-900">
                  شهادة التميز والتفوق الرسمية المعتمدة 📜
                </p>
                <p className="text-[10px] text-slate-500 font-bold">
                  تصلك عبر البريد: <span className="text-blue-600 font-mono">{userEmail || 'البريد المسجل'}</span>
                </p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3 pt-2">
            <button
              onClick={() => setShowCertificate(true)}
              className="w-full py-4 bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 text-white rounded-2xl font-black text-sm shadow-xl shadow-amber-500/20 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Award size={20} />
              <span>عرض واستلام شهادة بطل الخميس الذهبية 📜</span>
            </button>

            <button
              onClick={handleSendEmail}
              disabled={isSending || emailSent}
              className={`w-full py-3 rounded-2xl font-black text-xs flex items-center justify-center gap-2 border transition-all cursor-pointer ${
                emailSent
                  ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                  : 'bg-slate-100 hover:bg-slate-200 text-slate-800 border-slate-200'
              }`}
            >
              <Mail size={16} />
              <span>
                {emailSent ? '✓ تم إرسال الشهادة بنجاح إلى إيميلك!' : isSending ? 'جاري الإرسال...' : 'إرسال نسخة من الشهادة إلى إيميلي'}
              </span>
            </button>

            <button
              onClick={() => {
                if (onClaimReward) onClaimReward();
                onClose();
              }}
              className="w-full py-2.5 text-xs text-slate-400 hover:text-slate-700 font-bold transition-colors cursor-pointer"
            >
              إغلاق ومتابعة التفوق
            </button>
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {showCertificate && (
          <ThursdayContestCertificate
            userName={userName}
            userEmail={userEmail}
            studentId={studentId}
            points={score}
            onClose={() => setShowCertificate(false)}
            onSendEmail={handleSendEmail}
            isEmailSending={isSending}
          />
        )}
      </AnimatePresence>
    </>
  );
};
