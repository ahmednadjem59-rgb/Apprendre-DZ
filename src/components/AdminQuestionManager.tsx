import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Plus,
  Trash2,
  Edit3,
  CheckCircle2,
  HelpCircle,
  BookOpen,
  Sparkles,
  Search,
  Filter,
  Flame,
  ArrowRight,
  Save,
  X,
  Layers,
  GraduationCap,
  Eye,
  Check,
  AlertCircle,
  FileText,
  Bookmark,
  Calendar,
  ListOrdered,
  ChevronDown
} from 'lucide-react';
import { LEVELS } from '../constants';
import { CustomQuestion, CustomLesson, Difficulty } from '../types';
import { db } from '../lib/firebase';
import {
  collection,
  doc,
  setDoc,
  deleteDoc,
  onSnapshot,
  query
} from 'firebase/firestore';

interface AdminQuestionManagerProps {
  currentUserEmail: string;
  onBack: () => void;
  showNotification?: (title: string, message: string, type?: 'success' | 'warning' | 'error' | 'info') => void;
  initialTab?: 'questions' | 'lessons';
  initialLevelId?: string;
  initialYearId?: string;
  initialSubjectId?: string;
  initialSemester?: number;
}

export const AdminQuestionManager: React.FC<AdminQuestionManagerProps> = ({
  currentUserEmail,
  onBack,
  showNotification,
  initialTab = 'questions',
  initialLevelId,
  initialYearId,
  initialSubjectId,
  initialSemester
}) => {
  const [activeTab, setActiveTab] = useState<'questions' | 'lessons'>(initialTab);

  // --- Questions State ---
  const [questionsList, setQuestionsList] = useState<CustomQuestion[]>([]);
  const [isLoadingQuestions, setIsLoadingQuestions] = useState(true);
  const [searchQuestionQuery, setSearchQuestionQuery] = useState('');
  const [filterQuestionLevel, setFilterQuestionLevel] = useState<string>('all');
  const [filterQuestionSubject, setFilterQuestionSubject] = useState<string>('all');
  const [filterQuestionDifficulty, setFilterQuestionDifficulty] = useState<string>('all');

  // Question Form State
  const [editingQuestionId, setEditingQuestionId] = useState<string | null>(null);
  const [levelId, setLevelId] = useState<string>(initialLevelId || 'secondary');
  const [yearId, setYearId] = useState<string>(initialYearId || '3as');
  const [trackId, setTrackId] = useState<string>('exp_science');
  const [subjectId, setSubjectId] = useState<string>(initialSubjectId || 'math');
  const [semester, setSemester] = useState<number>(initialSemester || 1);
  const [difficulty, setDifficulty] = useState<Difficulty>('medium');
  const [questionText, setQuestionText] = useState('');
  const [options, setOptions] = useState<string[]>(['', '', '', '']);
  const [correctAnswer, setCorrectAnswer] = useState<number>(0);
  const [remedyPlan, setRemedyPlan] = useState('');
  const [isSavingQuestion, setIsSavingQuestion] = useState(false);
  const [keepAddingQuestions, setKeepAddingQuestions] = useState(true);

  // --- Lessons State ---
  const [lessonsList, setLessonsList] = useState<CustomLesson[]>([]);
  const [isLoadingLessons, setIsLoadingLessons] = useState(true);
  const [searchLessonQuery, setSearchLessonQuery] = useState('');
  const [filterLessonLevel, setFilterLessonLevel] = useState<string>('all');
  const [filterLessonSubject, setFilterLessonSubject] = useState<string>('all');
  const [filterLessonSemester, setFilterLessonSemester] = useState<string>('all');

  // Lesson Form State
  const [editingLessonId, setEditingLessonId] = useState<string | null>(null);
  const [lessonLevelId, setLessonLevelId] = useState<string>(initialLevelId || 'secondary');
  const [lessonYearId, setLessonYearId] = useState<string>(initialYearId || '3as');
  const [lessonTrackId, setLessonTrackId] = useState<string>('exp_science');
  const [lessonSubjectId, setLessonSubjectId] = useState<string>(initialSubjectId || 'math');
  const [lessonSemester, setLessonSemester] = useState<number>(initialSemester || 1);
  const [lessonTitle, setLessonTitle] = useState('');
  const [lessonDescription, setLessonDescription] = useState('');
  const [lessonContent, setLessonContent] = useState('');
  const [lessonOrder, setLessonOrder] = useState<number>(1);
  const [isSavingLesson, setIsSavingLesson] = useState(false);
  const [keepAddingLessons, setKeepAddingLessons] = useState(true);
  const [previewLessonModal, setPreviewLessonModal] = useState<CustomLesson | null>(null);

  // Real-time questions listener
  useEffect(() => {
    try {
      const q = query(collection(db, 'custom_questions'));
      const unsubscribe = onSnapshot(
        q,
        (snapshot) => {
          const items: CustomQuestion[] = [];
          snapshot.forEach((docSnap) => {
            const data = docSnap.data();
            items.push({
              id: docSnap.id,
              text: data.text || '',
              options: data.options || [],
              correctAnswer: typeof data.correctAnswer === 'number' ? data.correctAnswer : 0,
              difficulty: data.difficulty || 'medium',
              levelId: data.levelId || 'all',
              yearId: data.yearId || 'all',
              trackId: data.trackId || '',
              subjectId: data.subjectId || '',
              subjectName: data.subjectName || '',
              semester: data.semester || 1,
              remedyPlan: data.remedyPlan || '',
              authorEmail: data.authorEmail || '',
              createdAt: data.createdAt || new Date().toISOString()
            });
          });
          setQuestionsList(items);
          setIsLoadingQuestions(false);
        },
        (err) => {
          console.error('Error fetching custom questions:', err);
          setIsLoadingQuestions(false);
        }
      );
      return () => unsubscribe();
    } catch (e) {
      console.error('Firestore questions subscription error:', e);
      setIsLoadingQuestions(false);
    }
  }, []);

  // Real-time lessons listener
  useEffect(() => {
    try {
      const q = query(collection(db, 'custom_lessons'));
      const unsubscribe = onSnapshot(
        q,
        (snapshot) => {
          const items: CustomLesson[] = [];
          snapshot.forEach((docSnap) => {
            const data = docSnap.data();
            items.push({
              id: docSnap.id,
              title: data.title || '',
              description: data.description || '',
              content: data.content || '',
              levelId: data.levelId || 'all',
              yearId: data.yearId || 'all',
              trackId: data.trackId || '',
              subjectId: data.subjectId || '',
              subjectName: data.subjectName || '',
              semester: data.semester || 1,
              authorEmail: data.authorEmail || '',
              createdAt: data.createdAt || new Date().toISOString(),
              order: typeof data.order === 'number' ? data.order : 1
            });
          });
          // Sort lessons by order
          items.sort((a, b) => (a.order || 0) - (b.order || 0));
          setLessonsList(items);
          setIsLoadingLessons(false);
        },
        (err) => {
          console.error('Error fetching custom lessons:', err);
          setIsLoadingLessons(false);
        }
      );
      return () => unsubscribe();
    } catch (e) {
      console.error('Firestore lessons subscription error:', e);
      setIsLoadingLessons(false);
    }
  }, []);

  // Compute available levels, years, tracks, and subjects for Question form
  const currentLevelObj = useMemo(() => {
    return LEVELS.find((l) => l.id === levelId) || LEVELS[0];
  }, [levelId]);

  const availableYears = useMemo(() => {
    return currentLevelObj?.years || [];
  }, [currentLevelObj]);

  const currentYearObj = useMemo(() => {
    return availableYears.find((y) => y.id === yearId) || availableYears[0];
  }, [availableYears, yearId]);

  const availableTracks = useMemo(() => {
    return currentYearObj?.tracks || [];
  }, [currentYearObj]);

  const currentTrackObj = useMemo(() => {
    if (availableTracks.length === 0) return null;
    return availableTracks.find((t) => t.id === trackId) || availableTracks[0];
  }, [availableTracks, trackId]);

  const availableSubjects = useMemo(() => {
    if (currentTrackObj?.subjects && currentTrackObj.subjects.length > 0) {
      return currentTrackObj.subjects;
    }
    if (currentYearObj?.subjects && currentYearObj.subjects.length > 0) {
      return currentYearObj.subjects;
    }
    if (currentLevelObj?.subjects && currentLevelObj.subjects.length > 0) {
      return currentLevelObj.subjects;
    }
    return [
      { id: 'math', name: 'الرياضيات', icon: 'Calculator', color: 'bg-blue-600' },
      { id: 'physics', name: 'الفيزياء', icon: 'Flame', color: 'bg-indigo-600' },
      { id: 'science', name: 'العلوم الطبيعية', icon: 'Beaker', color: 'bg-emerald-600' },
      { id: 'arabic', name: 'اللغة العربية', icon: 'BookOpen', color: 'bg-teal-600' },
      { id: 'french', name: 'اللغة الفرنسية', icon: 'Languages', color: 'bg-cyan-600' },
      { id: 'english', name: 'اللغة الإنجليزية', icon: 'Languages', color: 'bg-orange-600' },
      { id: 'history', name: 'تاريخ وجغرافيا', icon: 'Globe', color: 'bg-amber-600' },
      { id: 'islamic', name: 'التربية الإسلامية', icon: 'Heart', color: 'bg-rose-600' },
      { id: 'philosophy', name: 'الفلسفة', icon: 'Star', color: 'bg-rose-700' }
    ];
  }, [currentTrackObj, currentYearObj, currentLevelObj]);

  // Compute available items for Lesson form
  const lessonLevelObj = useMemo(() => {
    return LEVELS.find((l) => l.id === lessonLevelId) || LEVELS[0];
  }, [lessonLevelId]);

  const availableLessonYears = useMemo(() => {
    return lessonLevelObj?.years || [];
  }, [lessonLevelObj]);

  const lessonYearObj = useMemo(() => {
    return availableLessonYears.find((y) => y.id === lessonYearId) || availableLessonYears[0];
  }, [availableLessonYears, lessonYearId]);

  const availableLessonTracks = useMemo(() => {
    return lessonYearObj?.tracks || [];
  }, [lessonYearObj]);

  const lessonTrackObj = useMemo(() => {
    if (availableLessonTracks.length === 0) return null;
    return availableLessonTracks.find((t) => t.id === lessonTrackId) || availableLessonTracks[0];
  }, [availableLessonTracks, lessonTrackId]);

  const availableLessonSubjects = useMemo(() => {
    if (lessonTrackObj?.subjects && lessonTrackObj.subjects.length > 0) {
      return lessonTrackObj.subjects;
    }
    if (lessonYearObj?.subjects && lessonYearObj.subjects.length > 0) {
      return lessonYearObj.subjects;
    }
    if (lessonLevelObj?.subjects && lessonLevelObj.subjects.length > 0) {
      return lessonLevelObj.subjects;
    }
    return availableSubjects;
  }, [lessonTrackObj, lessonYearObj, lessonLevelObj, availableSubjects]);

  // Sync Question Form Selectors
  useEffect(() => {
    if (availableYears.length > 0 && !availableYears.some((y) => y.id === yearId)) {
      setYearId(availableYears[0].id);
    }
  }, [availableYears, yearId]);

  useEffect(() => {
    if (availableTracks.length > 0 && (!trackId || !availableTracks.some((t) => t.id === trackId))) {
      setTrackId(availableTracks[0].id);
    }
  }, [availableTracks, trackId]);

  useEffect(() => {
    if (availableSubjects.length > 0 && !availableSubjects.some((s) => s.id === subjectId)) {
      setSubjectId(availableSubjects[0].id);
    }
  }, [availableSubjects, subjectId]);

  // Sync Lesson Form Selectors
  useEffect(() => {
    if (availableLessonYears.length > 0 && !availableLessonYears.some((y) => y.id === lessonYearId)) {
      setLessonYearId(availableLessonYears[0].id);
    }
  }, [availableLessonYears, lessonYearId]);

  useEffect(() => {
    if (availableLessonTracks.length > 0 && (!lessonTrackId || !availableLessonTracks.some((t) => t.id === lessonTrackId))) {
      setLessonTrackId(availableLessonTracks[0].id);
    }
  }, [availableLessonTracks, lessonTrackId]);

  useEffect(() => {
    if (availableLessonSubjects.length > 0 && !availableLessonSubjects.some((s) => s.id === lessonSubjectId)) {
      setLessonSubjectId(availableLessonSubjects[0].id);
    }
  }, [availableLessonSubjects, lessonSubjectId]);

  const handleOptionChange = (index: number, val: string) => {
    const updated = [...options];
    updated[index] = val;
    setOptions(updated);
  };

  // --- Save Question ---
  const handleSaveQuestion = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!questionText.trim()) {
      showNotification?.('تنبيه', 'يرجى كتابة نص السؤال أولاً', 'warning');
      return;
    }

    const filledOptions = options.map((opt) => opt.trim());
    if (filledOptions.some((opt) => !opt)) {
      showNotification?.('تنبيه', 'يرجى كتابة جميع الخيارات الأربعة', 'warning');
      return;
    }

    setIsSavingQuestion(true);
    try {
      const qId = editingQuestionId || `cq_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;
      const selectedSubjectObj = availableSubjects.find((s) => s.id === subjectId);
      const subjectDisplayName = selectedSubjectObj?.name || subjectId;

      const questionData = {
        text: questionText.trim(),
        options: filledOptions,
        correctAnswer: Number(correctAnswer),
        difficulty,
        levelId,
        yearId,
        trackId: availableTracks.length > 0 ? trackId : '',
        subjectId,
        subjectName: subjectDisplayName,
        semester: Number(semester),
        remedyPlan: remedyPlan.trim() || 'إجابة نموذجية وافية',
        authorEmail: currentUserEmail,
        createdAt: new Date().toISOString()
      };

      await setDoc(doc(db, 'custom_questions', qId), questionData, { merge: true });

      showNotification?.(
        'تم بنجاح',
        editingQuestionId ? 'تم تحديث السؤال في بنك الأسئلة بنجاح ✨' : 'تمت إضافة السؤال بنجاح إلى بنك الأسئلة! ⭐',
        'success'
      );

      if (editingQuestionId || !keepAddingQuestions) {
        setEditingQuestionId(null);
        setQuestionText('');
        setOptions(['', '', '', '']);
        setCorrectAnswer(0);
        setRemedyPlan('');
      } else {
        setQuestionText('');
        setOptions(['', '', '', '']);
        setCorrectAnswer(0);
        setRemedyPlan('');
      }
    } catch (err: any) {
      console.error('Error saving question:', err);
      showNotification?.('خطأ', 'فشل حفظ السؤال في قاعدة البيانات: ' + (err.message || ''), 'error');
    } finally {
      setIsSavingQuestion(false);
    }
  };

  // --- Save Lesson ---
  const handleSaveLesson = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!lessonTitle.trim()) {
      showNotification?.('تنبيه', 'يرجى كتابة عنوان الدرس', 'warning');
      return;
    }

    if (!lessonContent.trim()) {
      showNotification?.('تنبيه', 'يرجى كتابة محتوى وشرح الدرس', 'warning');
      return;
    }

    setIsSavingLesson(true);
    try {
      const lId = editingLessonId || `cl_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;
      const selectedSubjectObj = availableLessonSubjects.find((s) => s.id === lessonSubjectId);
      const subjectDisplayName = selectedSubjectObj?.name || lessonSubjectId;

      const lessonData = {
        title: lessonTitle.trim(),
        description: lessonDescription.trim() || `شرح مبسط ومفصل لدرس ${lessonTitle.trim()}`,
        content: lessonContent.trim(),
        levelId: lessonLevelId,
        yearId: lessonYearId,
        trackId: availableLessonTracks.length > 0 ? lessonTrackId : '',
        subjectId: lessonSubjectId,
        subjectName: subjectDisplayName,
        semester: Number(lessonSemester),
        order: Number(lessonOrder) || 1,
        authorEmail: currentUserEmail,
        createdAt: new Date().toISOString()
      };

      await setDoc(doc(db, 'custom_lessons', lId), lessonData, { merge: true });

      showNotification?.(
        'تم بنجاح',
        editingLessonId ? 'تم تحديث الدرس في بنك الدروس بنجاح ✨' : 'تمت إضافة الدرس بنجاح إلى بنك الدروس! 📚',
        'success'
      );

      if (editingLessonId || !keepAddingLessons) {
        setEditingLessonId(null);
        setLessonTitle('');
        setLessonDescription('');
        setLessonContent('');
        setLessonOrder(lessonsList.length + 1);
      } else {
        setLessonTitle('');
        setLessonDescription('');
        setLessonContent('');
        setLessonOrder((prev) => prev + 1);
      }
    } catch (err: any) {
      console.error('Error saving lesson:', err);
      showNotification?.('خطأ', 'فشل حفظ الدرس في قاعدة البيانات: ' + (err.message || ''), 'error');
    } finally {
      setIsSavingLesson(false);
    }
  };

  const handleEditQuestion = (q: CustomQuestion) => {
    setEditingQuestionId(q.id);
    setQuestionText(q.text);
    setOptions(q.options.length === 4 ? q.options : [...q.options, '', '', '', ''].slice(0, 4));
    setCorrectAnswer(q.correctAnswer || 0);
    setDifficulty(q.difficulty || 'medium');
    setLevelId(q.levelId || 'secondary');
    setYearId(q.yearId || '3as');
    setTrackId(q.trackId || '');
    setSubjectId(q.subjectId || 'math');
    setSemester(Number(q.semester) || 1);
    setRemedyPlan(q.remedyPlan || '');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleEditLesson = (l: CustomLesson) => {
    setEditingLessonId(l.id);
    setLessonTitle(l.title);
    setLessonDescription(l.description || '');
    setLessonContent(l.content || '');
    setLessonLevelId(l.levelId || 'secondary');
    setLessonYearId(l.yearId || '3as');
    setLessonTrackId(l.trackId || '');
    setLessonSubjectId(l.subjectId || 'math');
    setLessonSemester(Number(l.semester) || 1);
    setLessonOrder(l.order || 1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDeleteQuestion = async (id: string) => {
    if (!window.confirm('هل أنت متأكد من رغبتك في حذف هذا السؤال نهائياً؟')) return;
    try {
      await deleteDoc(doc(db, 'custom_questions', id));
      showNotification?.('تم الحذف', 'تم حذف السؤال من بنك الأسئلة', 'info');
      if (editingQuestionId === id) {
        setEditingQuestionId(null);
      }
    } catch (err: any) {
      showNotification?.('خطأ', 'فشل حذف السؤال: ' + (err.message || ''), 'error');
    }
  };

  const handleDeleteLesson = async (id: string) => {
    if (!window.confirm('هل أنت متأكد من رغبتك في حذف هذا الدرس نهائياً؟')) return;
    try {
      await deleteDoc(doc(db, 'custom_lessons', id));
      showNotification?.('تم الحذف', 'تم حذف الدرس من بنك الدروس', 'info');
      if (editingLessonId === id) {
        setEditingLessonId(null);
      }
    } catch (err: any) {
      showNotification?.('خطأ', 'فشل حذف الدرس: ' + (err.message || ''), 'error');
    }
  };

  // Filter questions
  const filteredQuestions = useMemo(() => {
    return questionsList.filter((q) => {
      const matchSearch =
        !searchQuestionQuery ||
        q.text.toLowerCase().includes(searchQuestionQuery.toLowerCase()) ||
        q.options.some((o) => o.toLowerCase().includes(searchQuestionQuery.toLowerCase())) ||
        (q.subjectName && q.subjectName.toLowerCase().includes(searchQuestionQuery.toLowerCase()));

      const matchLevel = filterQuestionLevel === 'all' || !q.levelId || q.levelId === 'all' || q.levelId === filterQuestionLevel;
      const matchSubject = filterQuestionSubject === 'all' || !q.subjectId || q.subjectId === 'all' || q.subjectId === filterQuestionSubject;
      const matchDiff = filterQuestionDifficulty === 'all' || !q.difficulty || (q.difficulty as string) === 'all' || q.difficulty === filterQuestionDifficulty;

      return matchSearch && matchLevel && matchSubject && matchDiff;
    });
  }, [questionsList, searchQuestionQuery, filterQuestionLevel, filterQuestionSubject, filterQuestionDifficulty]);

  // Filter lessons
  const filteredLessons = useMemo(() => {
    return lessonsList.filter((l) => {
      const matchSearch =
        !searchLessonQuery ||
        l.title.toLowerCase().includes(searchLessonQuery.toLowerCase()) ||
        (l.description && l.description.toLowerCase().includes(searchLessonQuery.toLowerCase())) ||
        (l.subjectName && l.subjectName.toLowerCase().includes(searchLessonQuery.toLowerCase()));

      const matchLevel = filterLessonLevel === 'all' || !l.levelId || l.levelId === 'all' || l.levelId === filterLessonLevel;
      const matchSubject = filterLessonSubject === 'all' || !l.subjectId || l.subjectId === 'all' || l.subjectId === filterLessonSubject;
      const matchSemester = filterLessonSemester === 'all' || Number(l.semester) === Number(filterLessonSemester);

      return matchSearch && matchLevel && matchSubject && matchSemester;
    });
  }, [lessonsList, searchLessonQuery, filterLessonLevel, filterLessonSubject, filterLessonSemester]);

  return (
    <div className="space-y-8" dir="rtl" id="admin-content-manager">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-gradient-to-r from-blue-700 via-indigo-700 to-indigo-800 p-6 sm:p-8 rounded-[2.5rem] text-white shadow-xl">
        <div className="space-y-2 text-right">
          <div className="flex items-center gap-2 flex-wrap">
            <span className="px-3.5 py-1 rounded-full bg-amber-400 text-slate-900 text-xs font-black flex items-center gap-1">
              <Sparkles size={14} />
              <span>لوحة الإدارة الحصرية</span>
            </span>
            <span className="px-3 py-1 rounded-full bg-white/20 text-xs font-bold">
              المشرف: {currentUserEmail}
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black">إدارة المحتوى التعليمي (الدروس والأسئلة) 📚⭐</h1>
          <p className="text-xs sm:text-sm text-blue-100 font-medium max-w-2xl leading-relaxed">
            من هنا يمكنك إضافة وإدارة الأسئلة والاختبارات، وكذلك إضافة الدروس والشروحات والملخصات لجميع الأطوار والمواد التعليمية.
          </p>
        </div>

        <button
          onClick={onBack}
          className="px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-2xl font-black text-sm flex items-center gap-2 transition-all border border-white/20 self-end sm:self-auto cursor-pointer"
        >
          <ArrowRight size={18} />
          <span>العودة للوحة الإدارة</span>
        </button>
      </div>

      {/* Main Mode Tabs */}
      <div className="grid grid-cols-2 gap-3 p-1.5 bg-slate-100/80 rounded-3xl border border-slate-200 shadow-inner">
        <button
          onClick={() => setActiveTab('questions')}
          className={`py-4 px-6 rounded-2xl font-black text-base flex items-center justify-center gap-3 transition-all cursor-pointer ${
            activeTab === 'questions'
              ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30 scale-[1.01]'
              : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
          }`}
        >
          <HelpCircle size={22} />
          <span>بنك الأسئلة والاختبارات ({questionsList.length})</span>
        </button>

        <button
          onClick={() => setActiveTab('lessons')}
          className={`py-4 px-6 rounded-2xl font-black text-base flex items-center justify-center gap-3 transition-all cursor-pointer ${
            activeTab === 'lessons'
              ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-500/30 scale-[1.01]'
              : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
          }`}
        >
          <BookOpen size={22} />
          <span>بنك الدروس والملخصات ({lessonsList.length})</span>
        </button>
      </div>

      {/* TAB 1: QUESTIONS MANAGEMENT */}
      {activeTab === 'questions' && (
        <div className="space-y-8">
          {/* Question Add / Edit Form Card */}
          <div className="bg-white p-6 sm:p-8 rounded-[2.5rem] border-2 border-slate-100 shadow-xl space-y-6">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center shadow-sm">
                  {editingQuestionId ? <Edit3 size={24} /> : <Plus size={24} />}
                </div>
                <div>
                  <h2 className="text-xl font-black text-slate-900">
                    {editingQuestionId ? 'تعديل السؤال المحدد' : 'إضافة سؤال جديد إلى بنك الأسئلة'}
                  </h2>
                  <p className="text-xs text-slate-500 font-bold">
                    املأ تفاصيل السؤال وخيارات الإجابة والشرح النموذجي
                  </p>
                </div>
              </div>

              {editingQuestionId && (
                <button
                  onClick={() => {
                    setEditingQuestionId(null);
                    setQuestionText('');
                    setOptions(['', '', '', '']);
                    setCorrectAnswer(0);
                    setRemedyPlan('');
                  }}
                  className="px-4 py-2 bg-slate-100 text-slate-600 hover:bg-slate-200 rounded-xl text-xs font-black flex items-center gap-1.5"
                >
                  <X size={16} />
                  <span>إلغاء التعديل</span>
                </button>
              )}
            </div>

            <form onSubmit={handleSaveQuestion} className="space-y-6">
              {/* Scope Pickers: Level, Year, Track, Subject, Semester, Difficulty */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
                {/* Level */}
                <div className="space-y-1.5">
                  <label className="text-xs font-black text-slate-700 block">الطور التعليمي</label>
                  <select
                    value={levelId}
                    onChange={(e) => setLevelId(e.target.value)}
                    className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl font-bold text-xs text-slate-800 focus:bg-white focus:border-blue-500 outline-none"
                  >
                    {LEVELS.map((l) => (
                      <option key={l.id} value={l.id}>
                        {l.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Year */}
                <div className="space-y-1.5">
                  <label className="text-xs font-black text-slate-700 block">السنة الدراسية</label>
                  <select
                    value={yearId}
                    onChange={(e) => setYearId(e.target.value)}
                    className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl font-bold text-xs text-slate-800 focus:bg-white focus:border-blue-500 outline-none"
                  >
                    {availableYears.map((y) => (
                      <option key={y.id} value={y.id}>
                        {y.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Track (if secondary) */}
                {availableTracks.length > 0 && (
                  <div className="space-y-1.5">
                    <label className="text-xs font-black text-slate-700 block">الشعبة</label>
                    <select
                      value={trackId}
                      onChange={(e) => setTrackId(e.target.value)}
                      className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl font-bold text-xs text-slate-800 focus:bg-white focus:border-blue-500 outline-none"
                    >
                      {availableTracks.map((t) => (
                        <option key={t.id} value={t.id}>
                          {t.name}
                        </option>
                      ))}
                    </select>
                  </div>
                )}

                {/* Subject */}
                <div className="space-y-1.5">
                  <label className="text-xs font-black text-slate-700 block">المادة</label>
                  <select
                    value={subjectId}
                    onChange={(e) => setSubjectId(e.target.value)}
                    className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl font-bold text-xs text-slate-800 focus:bg-white focus:border-blue-500 outline-none"
                  >
                    {availableSubjects.map((s) => (
                      <option key={s.id} value={s.id}>
                        {s.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Semester */}
                <div className="space-y-1.5">
                  <label className="text-xs font-black text-slate-700 block">الفصل الدراسي</label>
                  <select
                    value={semester}
                    onChange={(e) => setSemester(Number(e.target.value))}
                    className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl font-bold text-xs text-slate-800 focus:bg-white focus:border-blue-500 outline-none"
                  >
                    <option value={1}>الفصل الأول 🍂</option>
                    <option value={2}>الفصل الثاني ❄️</option>
                    <option value={3}>الفصل الثالث 🌸</option>
                  </select>
                </div>

                {/* Difficulty */}
                <div className="space-y-1.5">
                  <label className="text-xs font-black text-slate-700 block">مستوى الصعوبة</label>
                  <select
                    value={difficulty}
                    onChange={(e) => setDifficulty(e.target.value as Difficulty)}
                    className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl font-bold text-xs text-slate-800 focus:bg-white focus:border-blue-500 outline-none"
                  >
                    <option value="easy">سهل 🟢</option>
                    <option value="medium">متوسط 🟡</option>
                    <option value="hard">صعب 🔥</option>
                  </select>
                </div>
              </div>

              {/* Question Text */}
              <div className="space-y-2">
                <label className="text-sm font-black text-slate-800 flex items-center justify-between">
                  <span>نص السؤال:</span>
                  <span className="text-xs text-slate-400 font-normal">صيغة واضحة ومباشرة</span>
                </label>
                <textarea
                  value={questionText}
                  onChange={(e) => setQuestionText(e.target.value)}
                  placeholder="اكتب نص السؤال هنا بدقة..."
                  rows={3}
                  className="w-full p-4 bg-slate-50 border-2 border-slate-200 rounded-2xl font-bold text-sm text-slate-900 focus:bg-white focus:border-blue-500 outline-none transition-all resize-y"
                  required
                />
              </div>

              {/* 4 Options with Correct Answer Selector */}
              <div className="space-y-3">
                <label className="text-sm font-black text-slate-800 block">
                  خيارات الإجابة (حدد الدائرة بجانب الإجابة الصحيحة):
                </label>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {options.map((opt, idx) => {
                    const isCorrect = correctAnswer === idx;
                    return (
                      <div
                        key={idx}
                        onClick={() => setCorrectAnswer(idx)}
                        className={`p-3.5 rounded-2xl border-2 transition-all flex items-center gap-3 cursor-pointer ${
                          isCorrect
                            ? 'bg-emerald-50 border-emerald-500 shadow-sm'
                            : 'bg-slate-50 border-slate-200 hover:border-blue-200'
                        }`}
                      >
                        <div
                          className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 font-black text-xs transition-colors ${
                            isCorrect ? 'bg-emerald-600 text-white' : 'bg-slate-200 text-slate-600'
                          }`}
                        >
                          {isCorrect ? <Check size={14} /> : String.fromCharCode(65 + idx)}
                        </div>

                        <input
                          type="text"
                          value={opt}
                          onChange={(e) => {
                            e.stopPropagation();
                            handleOptionChange(idx, e.target.value);
                          }}
                          placeholder={`الخيار ${idx + 1}...`}
                          className="w-full bg-transparent font-bold text-xs sm:text-sm text-slate-800 outline-none"
                          required
                        />

                        {isCorrect && (
                          <span className="text-[10px] font-black text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full shrink-0">
                            صحيح ✔
                          </span>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Remedy / Explanation */}
              <div className="space-y-2">
                <label className="text-xs font-black text-slate-700 block">
                  الشرح النموذجي والخطة العلاجية (يظهر للطالب عند الإجابة الخاطئة):
                </label>
                <textarea
                  value={remedyPlan}
                  onChange={(e) => setRemedyPlan(e.target.value)}
                  placeholder="اكتب التفسير العلمي وخطوات الحل لتثبيت الفهم لدى الطالب..."
                  rows={2}
                  className="w-full p-3.5 bg-slate-50 border border-slate-200 rounded-xl font-bold text-xs text-slate-900 focus:bg-white focus:border-blue-500 outline-none resize-y"
                />
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                <label className="flex items-center gap-2 cursor-pointer text-xs font-bold text-slate-600">
                  <input
                    type="checkbox"
                    checked={keepAddingQuestions}
                    onChange={(e) => setKeepAddingQuestions(e.target.checked)}
                    className="w-4 h-4 rounded text-blue-600"
                  />
                  <span>البقاء في الصفحة لمتابعة إضافة أسئلة أخرى تباعاً</span>
                </label>

                <button
                  type="submit"
                  disabled={isSavingQuestion}
                  className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-2xl font-black text-sm shadow-xl shadow-blue-500/20 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  <Save size={18} />
                  <span>{isSavingQuestion ? 'جاري الحفظ...' : editingQuestionId ? 'حفظ التعديلات' : 'إضافة السؤال للبنك'}</span>
                </button>
              </div>
            </form>
          </div>

          {/* Questions Bank List & Filters */}
          <div className="bg-white p-6 sm:p-8 rounded-[2.5rem] border-2 border-slate-100 shadow-xl space-y-6">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-slate-100 pb-4">
              <div>
                <h3 className="text-xl font-black text-slate-900">
                  قائمة الأسئلة المضافة ({filteredQuestions.length})
                </h3>
                <p className="text-xs text-slate-500 font-bold">
                  تصفح وبحث وتعديل أو حذف الأسئلة المعتمدة في النظام
                </p>
              </div>

              {/* Search & Filter Controls */}
              <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
                <div className="relative flex-1 sm:w-56">
                  <Search size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    value={searchQuestionQuery}
                    onChange={(e) => setSearchQuestionQuery(e.target.value)}
                    placeholder="بحث في الأسئلة..."
                    className="w-full pr-9 pl-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-800 outline-none focus:bg-white focus:border-blue-500"
                  />
                </div>

                <select
                  value={filterQuestionLevel}
                  onChange={(e) => setFilterQuestionLevel(e.target.value)}
                  className="p-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-800 outline-none"
                >
                  <option value="all">كل الأطوار</option>
                  {LEVELS.map((l) => (
                    <option key={l.id} value={l.id}>
                      {l.name}
                    </option>
                  ))}
                </select>

                <select
                  value={filterQuestionDifficulty}
                  onChange={(e) => setFilterQuestionDifficulty(e.target.value)}
                  className="p-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-800 outline-none"
                >
                  <option value="all">كل الصعوبات</option>
                  <option value="easy">سهل</option>
                  <option value="medium">متوسط</option>
                  <option value="hard">صعب</option>
                </select>
              </div>
            </div>

            {/* List */}
            {isLoadingQuestions ? (
              <div className="py-16 text-center text-slate-400 font-bold">جاري تحميل الأسئلة من السحابة...</div>
            ) : filteredQuestions.length === 0 ? (
              <div className="py-16 text-center text-slate-400 font-bold space-y-2">
                <HelpCircle size={40} className="mx-auto text-slate-300" />
                <p>لا توجد أسئلة تطابق معايير البحث الحالية.</p>
                <p className="text-xs">استخدم النموذج أعلاه لإضافة أول سؤال!</p>
              </div>
            ) : (
              <div className="space-y-4">
                {filteredQuestions.map((q, idx) => (
                  <div
                    key={q.id}
                    className="p-5 bg-slate-50/70 hover:bg-slate-50 rounded-2xl border border-slate-200 transition-all space-y-3"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="w-7 h-7 rounded-xl bg-blue-100 text-blue-700 font-black text-xs flex items-center justify-center">
                          {idx + 1}
                        </span>
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black bg-blue-50 text-blue-700 border border-blue-200">
                          {q.subjectName || q.subjectId}
                        </span>
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black bg-slate-200 text-slate-700">
                          الفصل {q.semester || 1}
                        </span>
                        <span
                          className={`px-2 py-0.5 rounded-full text-[10px] font-black ${
                            q.difficulty === 'easy'
                              ? 'bg-emerald-100 text-emerald-700'
                              : q.difficulty === 'hard'
                              ? 'bg-rose-100 text-rose-700'
                              : 'bg-amber-100 text-amber-700'
                          }`}
                        >
                          {q.difficulty === 'easy' ? 'سهل' : q.difficulty === 'hard' ? 'صعب' : 'متوسط'}
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleEditQuestion(q)}
                          className="p-2 text-blue-600 hover:bg-blue-100 rounded-xl transition-colors cursor-pointer"
                          title="تعديل السؤال"
                        >
                          <Edit3 size={16} />
                        </button>
                        <button
                          onClick={() => handleDeleteQuestion(q.id)}
                          className="p-2 text-rose-600 hover:bg-rose-100 rounded-xl transition-colors cursor-pointer"
                          title="حذف السؤال"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </div>

                    <h4 className="text-sm sm:text-base font-black text-slate-900 leading-relaxed">
                      {q.text}
                    </h4>

                    {/* Options Preview */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                      {q.options.map((opt, oIdx) => (
                        <div
                          key={oIdx}
                          className={`p-2.5 rounded-xl border flex items-center gap-2 ${
                            oIdx === q.correctAnswer
                              ? 'bg-emerald-50 border-emerald-300 text-emerald-900 font-black'
                              : 'bg-white border-slate-200 text-slate-600'
                          }`}
                        >
                          <span
                            className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-black shrink-0 ${
                              oIdx === q.correctAnswer ? 'bg-emerald-600 text-white' : 'bg-slate-100 text-slate-500'
                            }`}
                          >
                            {String.fromCharCode(65 + oIdx)}
                          </span>
                          <span className="truncate">{opt}</span>
                          {oIdx === q.correctAnswer && <Check size={12} className="text-emerald-600 mr-auto" />}
                        </div>
                      ))}
                    </div>

                    {q.remedyPlan && (
                      <div className="p-3 bg-blue-50/60 rounded-xl text-xs text-blue-900 border border-blue-100">
                        <span className="font-black text-blue-700 block mb-0.5">💡 الخطة العلاجية:</span>
                        <p>{q.remedyPlan}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* TAB 2: LESSONS MANAGEMENT */}
      {activeTab === 'lessons' && (
        <div className="space-y-8">
          {/* Lesson Add / Edit Form Card */}
          <div className="bg-white p-6 sm:p-8 rounded-[2.5rem] border-2 border-slate-100 shadow-xl space-y-6">
            <div className="flex items-center justify-between border-b border-slate-100 pb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center shadow-sm">
                  {editingLessonId ? <Edit3 size={24} /> : <BookOpen size={24} />}
                </div>
                <div>
                  <h2 className="text-xl font-black text-slate-900">
                    {editingLessonId ? 'تعديل الدرس المحدد' : 'إضافة درس جديد إلى بنك الدروس'}
                  </h2>
                  <p className="text-xs text-slate-500 font-bold">
                    أدخل عنوان الدرس ونبذته ومحتواه المفصل ليظهر فوراً للطلاب في فهرس المادة
                  </p>
                </div>
              </div>

              {editingLessonId && (
                <button
                  onClick={() => {
                    setEditingLessonId(null);
                    setLessonTitle('');
                    setLessonDescription('');
                    setLessonContent('');
                  }}
                  className="px-4 py-2 bg-slate-100 text-slate-600 hover:bg-slate-200 rounded-xl text-xs font-black flex items-center gap-1.5"
                >
                  <X size={16} />
                  <span>إلغاء التعديل</span>
                </button>
              )}
            </div>

            <form onSubmit={handleSaveLesson} className="space-y-6">
              {/* Scope Pickers: Level, Year, Track, Subject, Semester, Order */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
                {/* Level */}
                <div className="space-y-1.5">
                  <label className="text-xs font-black text-slate-700 block">الطور التعليمي</label>
                  <select
                    value={lessonLevelId}
                    onChange={(e) => setLessonLevelId(e.target.value)}
                    className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl font-bold text-xs text-slate-800 focus:bg-white focus:border-emerald-500 outline-none"
                  >
                    {LEVELS.map((l) => (
                      <option key={l.id} value={l.id}>
                        {l.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Year */}
                <div className="space-y-1.5">
                  <label className="text-xs font-black text-slate-700 block">السنة الدراسية</label>
                  <select
                    value={lessonYearId}
                    onChange={(e) => setLessonYearId(e.target.value)}
                    className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl font-bold text-xs text-slate-800 focus:bg-white focus:border-emerald-500 outline-none"
                  >
                    {availableLessonYears.map((y) => (
                      <option key={y.id} value={y.id}>
                        {y.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Track (if secondary) */}
                {availableLessonTracks.length > 0 && (
                  <div className="space-y-1.5">
                    <label className="text-xs font-black text-slate-700 block">الشعبة</label>
                    <select
                      value={lessonTrackId}
                      onChange={(e) => setLessonTrackId(e.target.value)}
                      className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl font-bold text-xs text-slate-800 focus:bg-white focus:border-emerald-500 outline-none"
                    >
                      {availableLessonTracks.map((t) => (
                        <option key={t.id} value={t.id}>
                          {t.name}
                        </option>
                      ))}
                    </select>
                  </div>
                )}

                {/* Subject */}
                <div className="space-y-1.5">
                  <label className="text-xs font-black text-slate-700 block">المادة</label>
                  <select
                    value={lessonSubjectId}
                    onChange={(e) => setLessonSubjectId(e.target.value)}
                    className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl font-bold text-xs text-slate-800 focus:bg-white focus:border-emerald-500 outline-none"
                  >
                    {availableLessonSubjects.map((s) => (
                      <option key={s.id} value={s.id}>
                        {s.name}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Semester */}
                <div className="space-y-1.5">
                  <label className="text-xs font-black text-slate-700 block">الفصل الدراسي</label>
                  <select
                    value={lessonSemester}
                    onChange={(e) => setLessonSemester(Number(e.target.value))}
                    className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl font-bold text-xs text-slate-800 focus:bg-white focus:border-emerald-500 outline-none"
                  >
                    <option value={1}>الفصل الأول 🍂</option>
                    <option value={2}>الفصل الثاني ❄️</option>
                    <option value={3}>الفصل الثالث 🌸</option>
                  </select>
                </div>

                {/* Order */}
                <div className="space-y-1.5">
                  <label className="text-xs font-black text-slate-700 block">ترتيب الدرس</label>
                  <input
                    type="number"
                    min={1}
                    max={100}
                    value={lessonOrder}
                    onChange={(e) => setLessonOrder(Number(e.target.value))}
                    className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl font-bold text-xs text-slate-800 focus:bg-white focus:border-emerald-500 outline-none"
                  />
                </div>
              </div>

              {/* Lesson Title */}
              <div className="space-y-2">
                <label className="text-sm font-black text-slate-800 flex items-center justify-between">
                  <span>عنوان الدرس:</span>
                  <span className="text-xs text-slate-400 font-normal">مثال: الدرس 1: النهايات والاستمرارية</span>
                </label>
                <input
                  type="text"
                  value={lessonTitle}
                  onChange={(e) => setLessonTitle(e.target.value)}
                  placeholder="اكتب عنوان الدرس بدقة..."
                  className="w-full p-4 bg-slate-50 border-2 border-slate-200 rounded-2xl font-bold text-sm text-slate-900 focus:bg-white focus:border-emerald-500 outline-none transition-all"
                  required
                />
              </div>

              {/* Lesson Description */}
              <div className="space-y-2">
                <label className="text-xs font-black text-slate-700 block">
                  نبذة مختصرة أو ملخص سريع (يظهر تحت عنوان الدرس في الفهرس):
                </label>
                <input
                  type="text"
                  value={lessonDescription}
                  onChange={(e) => setLessonDescription(e.target.value)}
                  placeholder="ملخص محتوى الدرس في جملة واحدة..."
                  className="w-full p-3.5 bg-slate-50 border border-slate-200 rounded-xl font-bold text-xs text-slate-900 focus:bg-white focus:border-emerald-500 outline-none"
                />
              </div>

              {/* Lesson Content (Full Markdown Text) */}
              <div className="space-y-2">
                <label className="text-sm font-black text-slate-800 flex items-center justify-between">
                  <span>الشرح والمحتوى الكامل للدرس (يدعم التنسيق، العناوين، والنقاط):</span>
                  <span className="text-xs text-emerald-600 font-bold">تنسيق Markdown مدعوم ⭐</span>
                </label>
                <textarea
                  value={lessonContent}
                  onChange={(e) => setLessonContent(e.target.value)}
                  placeholder="اكتب أو الصق الشرح الكامل للدرس هنا بالتفصيل، مع القواعد والأمثلة والملخصات..."
                  rows={8}
                  className="w-full p-4 bg-slate-50 border-2 border-slate-200 rounded-2xl font-bold text-xs sm:text-sm text-slate-900 focus:bg-white focus:border-emerald-500 outline-none transition-all resize-y leading-relaxed font-mono"
                  required
                />
              </div>

              {/* Actions */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                <label className="flex items-center gap-2 cursor-pointer text-xs font-bold text-slate-600">
                  <input
                    type="checkbox"
                    checked={keepAddingLessons}
                    onChange={(e) => setKeepAddingLessons(e.target.checked)}
                    className="w-4 h-4 rounded text-emerald-600"
                  />
                  <span>البقاء في الصفحة لمتابعة إضافة دروس أخرى</span>
                </label>

                <button
                  type="submit"
                  disabled={isSavingLesson}
                  className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white rounded-2xl font-black text-sm shadow-xl shadow-emerald-500/20 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  <Save size={18} />
                  <span>{isSavingLesson ? 'جاري الحفظ...' : editingLessonId ? 'حفظ تعديلات الدرس' : 'إضافة الدرس لبنك الدروس'}</span>
                </button>
              </div>
            </form>
          </div>

          {/* Lessons Bank List & Filters */}
          <div className="bg-white p-6 sm:p-8 rounded-[2.5rem] border-2 border-slate-100 shadow-xl space-y-6">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-b border-slate-100 pb-4">
              <div>
                <h3 className="text-xl font-black text-slate-900">
                  قائمة الدروس المعتمدة ({filteredLessons.length})
                </h3>
                <p className="text-xs text-slate-500 font-bold">
                  تصفح وبحث ومعاينة وتعديل الدروس المعتمدة التي تظهر في فهرس المادة
                </p>
              </div>

              {/* Search & Filter Controls */}
              <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
                <div className="relative flex-1 sm:w-56">
                  <Search size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    value={searchLessonQuery}
                    onChange={(e) => setSearchLessonQuery(e.target.value)}
                    placeholder="بحث في الدروس..."
                    className="w-full pr-9 pl-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-800 outline-none focus:bg-white focus:border-emerald-500"
                  />
                </div>

                <select
                  value={filterLessonLevel}
                  onChange={(e) => setFilterLessonLevel(e.target.value)}
                  className="p-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-800 outline-none"
                >
                  <option value="all">كل الأطوار</option>
                  {LEVELS.map((l) => (
                    <option key={l.id} value={l.id}>
                      {l.name}
                    </option>
                  ))}
                </select>

                <select
                  value={filterLessonSemester}
                  onChange={(e) => setFilterLessonSemester(e.target.value)}
                  className="p-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-bold text-slate-800 outline-none"
                >
                  <option value="all">كل الفصول</option>
                  <option value="1">الفصل الأول</option>
                  <option value="2">الفصل الثاني</option>
                  <option value="3">الفصل الثالث</option>
                </select>
              </div>
            </div>

            {/* List */}
            {isLoadingLessons ? (
              <div className="py-16 text-center text-slate-400 font-bold">جاري تحميل الدروس من السحابة...</div>
            ) : filteredLessons.length === 0 ? (
              <div className="py-16 text-center text-slate-400 font-bold space-y-2">
                <BookOpen size={40} className="mx-auto text-slate-300" />
                <p>لا توجد دروس مضافة تطابق معايير البحث الحالية.</p>
                <p className="text-xs">استخدم النموذج أعلاه لإضافة أول درس!</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {filteredLessons.map((l, idx) => (
                  <div
                    key={l.id}
                    className="p-5 bg-slate-50/70 hover:bg-slate-50 rounded-2xl border border-slate-200 transition-all flex flex-col justify-between gap-4"
                  >
                    <div className="space-y-3">
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="w-7 h-7 rounded-xl bg-emerald-100 text-emerald-800 font-black text-xs flex items-center justify-center">
                            {l.order || idx + 1}
                          </span>
                          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black bg-emerald-50 text-emerald-700 border border-emerald-200">
                            {l.subjectName || l.subjectId}
                          </span>
                          <span className="px-2.5 py-0.5 rounded-full text-[10px] font-black bg-slate-200 text-slate-700">
                            الفصل {l.semester || 1}
                          </span>
                        </div>

                        <div className="flex items-center gap-1.5">
                          <button
                            onClick={() => setPreviewLessonModal(l)}
                            className="p-2 text-slate-600 hover:bg-slate-200 rounded-xl transition-colors cursor-pointer"
                            title="معاينة الدرس"
                          >
                            <Eye size={16} />
                          </button>
                          <button
                            onClick={() => handleEditLesson(l)}
                            className="p-2 text-blue-600 hover:bg-blue-100 rounded-xl transition-colors cursor-pointer"
                            title="تعديل الدرس"
                          >
                            <Edit3 size={16} />
                          </button>
                          <button
                            onClick={() => handleDeleteLesson(l.id)}
                            className="p-2 text-rose-600 hover:bg-rose-100 rounded-xl transition-colors cursor-pointer"
                            title="حذف الدرس"
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>
                      </div>

                      <div>
                        <h4 className="text-base font-black text-slate-900">{l.title}</h4>
                        {l.description && (
                          <p className="text-xs text-slate-500 font-medium mt-1 leading-relaxed line-clamp-2">
                            {l.description}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="pt-3 border-t border-slate-200/60 flex items-center justify-between text-[11px] text-slate-400">
                      <span>{l.content.length} حرف</span>
                      <button
                        onClick={() => setPreviewLessonModal(l)}
                        className="text-emerald-600 font-black hover:underline flex items-center gap-1 cursor-pointer"
                      >
                        <span>قراءة الدرس كاملاً</span>
                        <ArrowRight size={12} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Lesson Preview Modal */}
      <AnimatePresence>
        {previewLessonModal && (
          <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white max-w-3xl w-full max-h-[85vh] rounded-[2.5rem] shadow-2xl flex flex-col overflow-hidden text-right border border-slate-100"
            >
              <div className="p-6 bg-slate-50 border-b border-slate-100 flex items-center justify-between">
                <div>
                  <span className="px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-xs font-black">
                    {previewLessonModal.subjectName || previewLessonModal.subjectId} - الفصل {previewLessonModal.semester}
                  </span>
                  <h3 className="text-xl font-black text-slate-900 mt-2">{previewLessonModal.title}</h3>
                </div>
                <button
                  onClick={() => setPreviewLessonModal(null)}
                  className="w-10 h-10 rounded-full bg-slate-200 hover:bg-slate-300 flex items-center justify-center text-slate-700 transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="p-6 overflow-y-auto space-y-4 flex-1">
                {previewLessonModal.description && (
                  <div className="p-4 bg-emerald-50/50 rounded-2xl border border-emerald-100 text-emerald-900 font-bold text-sm">
                    {previewLessonModal.description}
                  </div>
                )}
                <div className="prose prose-slate max-w-none text-slate-800 font-medium leading-relaxed whitespace-pre-wrap">
                  {previewLessonModal.content}
                </div>
              </div>

              <div className="p-4 bg-slate-50 border-t border-slate-100 flex justify-end">
                <button
                  onClick={() => setPreviewLessonModal(null)}
                  className="px-6 py-2.5 bg-slate-900 text-white rounded-xl text-xs font-black hover:bg-slate-800"
                >
                  إغلاق المعاينة
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};
