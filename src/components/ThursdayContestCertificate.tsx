import React, { useRef } from 'react';
import { motion } from 'motion/react';
import { Award, Printer, Mail, Shield, Sparkles, X, Trophy } from 'lucide-react';

interface ThursdayContestCertificateProps {
  userName: string;
  userEmail?: string;
  studentId?: string;
  points?: number;
  contestDate?: string;
  onClose?: () => void;
  onSendEmail?: () => void;
  isEmailSending?: boolean;
}

export const ThursdayContestCertificate: React.FC<ThursdayContestCertificateProps> = ({
  userName,
  userEmail,
  studentId,
  points = 100,
  contestDate,
  onClose,
  onSendEmail,
  isEmailSending = false
}) => {
  const certificateRef = useRef<HTMLDivElement>(null);

  const handlePrint = () => {
    window.print();
  };

  const formattedDate = contestDate || new Date().toLocaleDateString('ar-DZ', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-md overflow-y-auto" dir="rtl">
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        className="bg-white rounded-[2.5rem] shadow-2xl max-w-3xl w-full p-6 sm:p-8 space-y-6 relative border-4 border-amber-400 my-8"
      >
        {onClose && (
          <button
            onClick={onClose}
            className="absolute top-4 left-4 p-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-full transition-colors z-10 cursor-pointer"
            title="إغلاق"
          >
            <X size={20} />
          </button>
        )}

        {/* Certificate Frame */}
        <div
          ref={certificateRef}
          className="relative bg-gradient-to-b from-amber-50/60 via-white to-amber-50/40 p-8 sm:p-12 rounded-[2rem] border-8 border-double border-amber-500 shadow-inner text-center space-y-6 overflow-hidden"
          style={{ fontFamily: 'system-ui, -apple-system, sans-serif' }}
        >
          {/* Watermark Logo */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5">
            <Trophy size={320} className="text-amber-600" />
          </div>

          {/* Top Badges */}
          <div className="flex justify-between items-center relative z-10">
            <div className="flex items-center gap-2 text-right">
              <div className="w-10 h-10 bg-amber-500 text-white rounded-xl flex items-center justify-center shadow-md">
                <Sparkles size={22} />
              </div>
              <div>
                <p className="text-[11px] font-black text-amber-900 tracking-wider">منصة Apprendre DZ التعليمية</p>
                <p className="text-[9px] text-slate-500 font-bold">الجمهورية الجزائرية الديمقراطية الشعبية</p>
              </div>
            </div>
            <div className="w-14 h-14 bg-gradient-to-br from-amber-400 to-yellow-600 text-white rounded-full flex items-center justify-center shadow-lg border-2 border-white">
              <Trophy size={30} />
            </div>
          </div>

          {/* Certificate Title */}
          <div className="space-y-2 relative z-10 pt-2">
            <span className="px-4 py-1.5 bg-amber-100 text-amber-900 border border-amber-300 rounded-full text-xs font-black tracking-widest inline-block uppercase">
              ★ شهادة بطل الأسبوع الرسمية ★
            </span>
            <h1 className="text-3xl sm:text-4xl font-black text-amber-900 tracking-tight">
              بطل مسابقة الخميس الوطنية الكبرى
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 font-bold max-w-md mx-auto">
              تُمنح هذه الشهادة الفخرية تقديراً لإحراز المركز الأول والتفوق في مسابقة الـ 50 سؤالاً الأسبوعية
            </p>
          </div>

          {/* Student Info */}
          <div className="py-4 space-y-3 relative z-10">
            <p className="text-xs text-slate-500 font-bold">تتشرف إدارة المنصة بتتويج الطالب(ة) المتميز(ة):</p>
            <div className="inline-block px-8 py-3 bg-gradient-to-r from-amber-100/80 via-yellow-50 to-amber-100/80 border-b-4 border-amber-500 rounded-2xl shadow-sm">
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900">{userName}</h2>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-2 text-xs font-black text-slate-700 pt-1">
              <span className="bg-amber-100 text-amber-900 px-3 py-1 rounded-full border border-amber-200">
                👑 فائز وطني واحد فقط لهذا الأسبوع
              </span>
              {studentId && (
                <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full border border-blue-200">
                  🆔 رقم التلميذ: {studentId}
                </span>
              )}
            </div>
          </div>

          {/* Praise Note */}
          <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed max-w-lg mx-auto relative z-10">
            نظير تفوقه(ا) الاستثنائي وتحقيق أعلى نتيجة في مسابقة بطل الخميس (50 سؤالاً: 25 ثقافة عامة + 25 منهاج دراسي)، ونيله المكافأة الكبرى (+100 نقطة ذهبية والتتويج الرسمي).
          </p>

          {/* Footer & Signature */}
          <div className="pt-6 border-t-2 border-amber-200/80 flex flex-col sm:flex-row items-center justify-between gap-4 relative z-10 text-xs">
            <div className="text-right space-y-1">
              <p className="text-slate-500 font-bold">تاريخ التتويج الرسمي:</p>
              <p className="font-black text-slate-900">{formattedDate}</p>
            </div>
            
            {/* Golden Seal */}
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-gradient-to-br from-amber-400 via-yellow-500 to-amber-600 rounded-full flex flex-col items-center justify-center text-white shadow-xl border-4 border-yellow-200">
                <Shield size={20} />
                <span className="text-[8px] font-black">معتمد 100%</span>
              </div>
              <span className="text-[9px] font-black text-amber-800 mt-1">الختم الذهبي لبطل الخميس</span>
            </div>

            <div className="text-left space-y-1">
              <p className="text-slate-500 font-bold">إدارة المسابقات والتكريم:</p>
              <p className="font-black text-blue-700">Apprendre DZ National Board</p>
            </div>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-5 py-2.5 bg-slate-900 hover:bg-slate-800 text-white rounded-2xl font-black text-xs flex items-center gap-2 shadow-md transition-all active:scale-95 cursor-pointer"
            >
              <Printer size={16} />
              <span>طباعة / حفظ PDF</span>
            </button>
            {onSendEmail && userEmail && (
              <button
                onClick={onSendEmail}
                disabled={isEmailSending}
                className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-black text-xs flex items-center gap-2 shadow-md transition-all active:scale-95 disabled:opacity-50 cursor-pointer"
              >
                <Mail size={16} />
                <span>{isEmailSending ? 'جاري الإرسال...' : 'إرسال الشهادة إلى الإيميل'}</span>
              </button>
            )}
          </div>
          {onClose && (
            <button
              onClick={onClose}
              className="px-6 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-2xl font-black text-xs transition-all cursor-pointer"
            >
              إغلاق
            </button>
          )}
        </div>
      </motion.div>
    </div>
  );
};
