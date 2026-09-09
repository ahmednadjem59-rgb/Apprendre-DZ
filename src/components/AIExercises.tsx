import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sparkles, 
  Brain, 
  ChevronRight, 
  ChevronLeft, 
  CheckCircle2, 
  XCircle, 
  RefreshCcw, 
  Loader2,
  Trophy,
  ArrowRight
} from 'lucide-react';
import { generateExercises, Exercise } from '../services/geminiService';

interface AIExercisesProps {
  subject: string;
  year: string;
  onBack: () => void;
  onScoreUpdate: (points: number) => void;
}

export const AIExercises: React.FC<AIExercisesProps> = ({ subject, year, onBack, onScoreUpdate }) => {
  const [loading, setLoading] = useState(true);
  const [exercises, setExercises] = useState<Exercise[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const fetchExercises = async () => {
    setLoading(true);
    try {
      const data = await generateExercises(subject, year);
      setExercises(data);
      setCurrentIndex(0);
      setSelectedOption(null);
      setIsAnswered(false);
      setShowResult(false);
      setScore(0);
    } catch (error) {
      console.error("Error generating exercises:", error instanceof Error ? error.message : error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchExercises();
  }, [subject, year]);

  const handleOptionSelect = (index: number) => {
    if (isAnswered) return;
    setSelectedOption(index);
  };

  const handleConfirmAnswer = () => {
    if (selectedOption === null || isAnswered) return;
    
    setIsAnswered(true);
    if (selectedOption === exercises[currentIndex].correctAnswerIndex) {
      setScore(prev => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < exercises.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setShowResult(true);
      if (score === exercises.length) {
        onScoreUpdate(15); // Bonus for perfect score
      } else {
        onScoreUpdate(score * 2);
      }
    }
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] space-y-6" dir="rtl">
        <div className="relative">
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="w-20 h-20 border-4 border-blue-500/20 border-t-blue-600 rounded-full"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <Brain className="text-blue-600 animate-pulse" size={32} />
          </div>
        </div>
        <div className="text-center space-y-2">
          <h3 className="text-xl font-black text-slate-800">جاري توليد التمارين...</h3>
          <p className="text-slate-500 font-bold">يتم تصميم أسئلة مخصصة لك الآن</p>
        </div>
      </div>
    );
  }

  if (showResult) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center py-12 px-4 text-center max-w-md mx-auto"
        dir="rtl"
      >
        <div className="w-24 h-24 bg-amber-100 rounded-full flex items-center justify-center mb-6 shadow-xl shadow-amber-100/50">
          <Trophy size={48} className="text-amber-500" />
        </div>
        <h2 className="text-3xl font-black text-slate-900 mb-2">أحسنت يا بطل!</h2>
        <p className="text-slate-500 font-bold mb-8 text-lg">
          لقد أكملت مجموعة التمارين بنجاح.
        </p>
        
        <div className="w-full bg-slate-50 border border-slate-100 rounded-[2rem] p-8 mb-8 space-y-4">
          <div className="flex justify-between items-center text-slate-600 font-black">
            <span>النتيجة النهائية:</span>
            <span className="text-2xl text-blue-600">{score} / {exercises.length}</span>
          </div>
          <div className="w-full h-3 bg-slate-200 rounded-full overflow-hidden">
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: `${(score / exercises.length) * 100}%` }}
              className="h-full bg-gradient-to-r from-blue-500 to-indigo-600"
            />
          </div>
          <p className="text-xs text-slate-400 font-bold">تمت إضافة نقاط التفوق إلى رصيدك</p>
        </div>

        <div className="grid grid-cols-2 gap-4 w-full">
          <button 
            onClick={fetchExercises}
            className="flex items-center justify-center gap-2 py-4 bg-blue-600 text-white rounded-2xl font-black shadow-lg shadow-blue-200 hover:scale-105 active:scale-95 transition-all"
          >
            <RefreshCcw size={20} />
            تمارين جديدة
          </button>
          <button 
            onClick={onBack}
            className="flex items-center justify-center gap-2 py-4 bg-slate-100 text-slate-600 rounded-2xl font-black hover:bg-slate-200 transition-all"
          >
            <ArrowRight size={20} />
            العودة للمواد
          </button>
        </div>
      </motion.div>
    );
  }

  const currentExercise = exercises[currentIndex];

  return (
    <div className="max-w-2xl mx-auto space-y-8" dir="rtl">
      {/* Header */}
      <div className="flex items-center justify-between">
        <button 
          onClick={onBack}
          className="p-3 bg-slate-100 text-slate-600 rounded-xl hover:bg-slate-200 transition-all"
        >
          <ChevronRight size={24} />
        </button>
        <div className="flex flex-col items-center">
          <span className="text-xs font-black text-slate-400 uppercase tracking-widest leading-none mb-1">تمارين {subject}</span>
          <div className="flex items-center gap-2">
            <Sparkles className="text-amber-400" size={16} />
            <h2 className="text-xl font-black text-slate-900">تمرين {currentIndex + 1} من {exercises.length}</h2>
          </div>
        </div>
        <div className="w-12" /> {/* Spacer */}
      </div>

      {/* Progress Bar */}
      <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
        <motion.div 
          animate={{ width: `${((currentIndex + 1) / exercises.length) * 100}%` }}
          className="h-full bg-blue-600"
        />
      </div>

      {/* Question Card */}
      <motion.div 
        key={currentIndex}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="bg-white border border-slate-100 rounded-[2.5rem] p-8 shadow-sm space-y-8"
      >
        <h3 className="text-2xl font-black text-slate-900 leading-tight">
          {currentExercise.question}
        </h3>

        <div className="grid gap-4">
          {currentExercise.options.map((option, idx) => {
            let stateClass = "bg-slate-50 border-slate-100 text-slate-700 hover:border-blue-200";
            if (isAnswered) {
              if (idx === currentExercise.correctAnswerIndex) {
                stateClass = "bg-emerald-50 border-emerald-400 text-emerald-700 ring-4 ring-emerald-500/10";
              } else if (idx === selectedOption) {
                stateClass = "bg-rose-50 border-rose-400 text-rose-700 ring-4 ring-rose-500/10";
              } else {
                stateClass = "bg-slate-50 border-slate-100 text-slate-400 opacity-50";
              }
            } else if (idx === selectedOption) {
              stateClass = "bg-blue-50 border-blue-600 text-blue-700 ring-4 ring-blue-500/10";
            }

            return (
              <button
                key={idx}
                disabled={isAnswered}
                onClick={() => handleOptionSelect(idx)}
                className={`w-full p-5 rounded-2xl border-2 text-right font-black text-lg transition-all flex items-center justify-between gap-4 ${stateClass}`}
              >
                <span>{option}</span>
                {isAnswered && idx === currentExercise.correctAnswerIndex && <CheckCircle2 className="text-emerald-500 shrink-0" size={24} />}
                {isAnswered && idx === selectedOption && idx !== currentExercise.correctAnswerIndex && <XCircle className="text-rose-500 shrink-0" size={24} />}
              </button>
            );
          })}
        </div>

        <AnimatePresence>
          {isAnswered && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="bg-blue-50/50 border border-blue-100 rounded-2xl p-5 space-y-2"
            >
              <div className="flex items-center gap-2 text-blue-800 font-black text-sm">
                <Brain size={18} />
                <span>شرح الحل:</span>
              </div>
              <p className="text-blue-800/80 font-bold text-sm leading-relaxed">
                {currentExercise.explanation}
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="pt-4">
          {!isAnswered ? (
            <button 
              disabled={selectedOption === null}
              onClick={handleConfirmAnswer}
              className="w-full py-5 bg-slate-900 text-white rounded-2xl font-black text-lg shadow-xl shadow-slate-200 transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:grayscale"
            >
              تأكيد الإجابة
            </button>
          ) : (
            <button 
              onClick={handleNext}
              className="w-full py-5 bg-blue-600 text-white rounded-2xl font-black text-lg shadow-xl shadow-blue-200 transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-3"
            >
               {currentIndex === exercises.length - 1 ? 'عرض النتيجة النهائية' : 'السؤال التالي'}
               <ChevronLeft size={24} />
            </button>
          )}
        </div>
      </motion.div>
    </div>
  );
};
