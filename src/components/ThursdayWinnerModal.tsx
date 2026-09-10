import React from 'react';
import { motion } from 'motion/react';
import { Trophy, Sparkles, Star, Gift, CheckCircle2, Zap } from 'lucide-react';

interface ThursdayWinnerModalProps {
  userName: string;
  userEmail?: string;
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
  correctAnswers = 50,
  totalAnswered = 50,
  isTie = false,
  onClose,
  onClaimReward
}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md" dir="rtl">
      <motion.div
        initial={{ opacity: 0, scale: 0.85, y: 30 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.85, y: 30 }}
        className="bg-white rounded-[3rem] shadow-2xl max-w-lg w-full p-8 text-center space-y-6 relative border-4 border-amber-400 overflow-hidden"
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
                تهانينا الحارة لك يا <span className="text-blue-600 font-black">{userName}</span>! لقد حققت أعلى نتيجة ({correctAnswers}/{totalAnswered} إجابة صحيحة) وتصدرت المركز الأول في مسابقة الخميس الكبرى!
              </>
            ) : (
              <>
                تهانينا الحارة لك يا <span className="text-blue-600 font-black">{userName}</span>! لقد تصدرت مسابقة الخميس الكبرى بـ ({correctAnswers}/{totalAnswered} إجابة صحيحة) وتوجت بطلاً وطنياً للأسبوع!
              </>
            )}
          </p>
        </div>

        {/* Grand Reward Card - ONLY 100 points */}
        <div className="bg-gradient-to-br from-amber-50 via-yellow-50 to-amber-100 p-6 rounded-3xl border-2 border-amber-300 text-right space-y-4 shadow-inner">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-amber-500 text-white flex items-center justify-center shrink-0 shadow-md">
              <Gift size={24} />
            </div>
            <div>
              <p className="text-sm font-black text-slate-900">
                مكافأة الفوز بالمركز الأول: <span className="text-amber-700 text-base font-black">+100 نقطة مباشرة</span> 💎
              </p>
              <p className="text-xs text-slate-600 font-bold mt-0.5">
                تم إيداع 100 نقطة ذهبية مباشرة في رصيد حسابك الإجمالي لمكافأة تفوقك واجتهادك.
              </p>
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm p-3.5 rounded-2xl border border-amber-200 flex items-center justify-between">
            <div className="flex items-center gap-2 text-emerald-700 font-black text-xs">
              <CheckCircle2 size={16} />
              <span>تمت إضافة الـ 100 نقطة لحسابك بنجاح</span>
            </div>
            <div className="px-3 py-1 bg-amber-500 text-white font-black text-xs rounded-xl shadow-sm">
              +100 PTS
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div className="space-y-2 pt-2">
          <button
            onClick={() => {
              if (onClaimReward) onClaimReward();
              onClose();
            }}
            className="w-full py-4 bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 text-white rounded-2xl font-black text-sm shadow-xl shadow-amber-500/20 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <Zap size={18} />
            <span>تأكيد استلام 100 نقطة ومتابعة التفوق</span>
          </button>
        </div>
      </motion.div>
    </div>
  );
};
