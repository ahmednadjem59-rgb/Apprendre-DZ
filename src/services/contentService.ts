import { Question, Difficulty } from "../types";
import { getFallbackQuestions, get50WeeklyContestQuestions } from "../data/fallbackQuestions";
import { getCurriculumLessonsForSubject } from "../data/curriculumLessons";
import { generateInstantLessonArticle, generateInstantRevisionArticle } from "../data/curriculumLessonsContent";
import { shuffleAndBalanceQuestions } from "../utils/questionHelpers";

// In-memory caches for instant zero-latency retrieval across the application
const lessonContentCache = new Map<string, string>();
const revisionContentCache = new Map<string, string>();
const questionsCache = new Map<string, Question[]>();
const contestQuestionsCache = new Map<string, Question[]>();
const lessonIndexCache = new Map<string, { title: string; description: string }[]>();

/**
 * Fast fetch wrapper with reasonable timeout to prevent network hanging while allowing LLM responses
 */
async function fetchWithTimeout(url: string, options: RequestInit, timeoutMs = 15000): Promise<Response> {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const res = await fetch(url, { ...options, signal: controller.signal });
    clearTimeout(timer);
    return res;
  } catch (err) {
    clearTimeout(timer);
    throw err;
  }
}

export function getInstantLessonContent(
  level: string,
  year: string,
  subject: string,
  lessonTitle: string,
  track?: string,
  semester?: number
): string {
  const cacheKey = `${level}_${year}_${subject}_${lessonTitle}_${track || ''}_${semester || ''}`;
  if (lessonContentCache.has(cacheKey)) {
    return lessonContentCache.get(cacheKey)!;
  }
  const instant = generateInstantLessonArticle(level, year, subject, lessonTitle, track, semester);
  lessonContentCache.set(cacheKey, instant);
  return instant;
}

export function getInstantRevisionContent(
  level: string,
  year: string,
  subject: string,
  track?: string,
  semester?: number
): string {
  const cacheKey = `${level}_${year}_${subject}_${track || ''}_${semester || ''}`;
  if (revisionContentCache.has(cacheKey)) {
    return revisionContentCache.get(cacheKey)!;
  }
  const instant = generateInstantRevisionArticle(level, year, subject, track, semester);
  revisionContentCache.set(cacheKey, instant);
  return instant;
}

function normalizeSubject(subject: string): string {
  const s = subject.trim();
  if (s.includes('عربي')) return "اللغة العربية";
  if (s.includes('رياضيات')) return "الرياضيات";
  if (s.includes('إسلامية')) return "تربية إسلامية";
  if (s.includes('مدنية')) return "تربية مدنية";
  if (s.includes('فيزياء')) return "الفيزياء";
  if (s.includes('طبيعة') || s.includes('علوم')) return "العلوم الطبيعية";
  if (s.includes('تاريخ')) return "التاريخ";
  if (s.includes('فرنسية')) return "اللغة الفرنسية";
  if (s.includes('إنجليزية')) return "اللغة الإنجليزية";
  return s;
}

function deriveIdsFromNames(levelName: string, yearName: string): { levelId: string; yearId: string } {
  const levelId = levelName.includes('ابتدائي') ? 'primary' : levelName.includes('متوسط') ? 'middle' : 'secondary';
  let yearId = '1ap';
  if (levelId === 'primary') {
    if (yearName.includes('الأولى') || yearName.includes('1')) yearId = '1ap';
    else if (yearName.includes('الثانية') || yearName.includes('2')) yearId = '2ap';
    else if (yearName.includes('الثالثة') || yearName.includes('3')) yearId = '3ap';
    else if (yearName.includes('الرابعة') || yearName.includes('4')) yearId = '4ap';
    else if (yearName.includes('الخامسة') || yearName.includes('5')) yearId = '5ap';
  } else if (levelId === 'middle') {
    if (yearName.includes('الأولى') || yearName.includes('1')) yearId = '1am';
    else if (yearName.includes('الثانية') || yearName.includes('2')) yearId = '2am';
    else if (yearName.includes('الثالثة') || yearName.includes('3')) yearId = '3am';
    else if (yearName.includes('الرابعة') || yearName.includes('4')) yearId = '4am';
  } else if (levelId === 'secondary') {
    if (yearName.includes('الأولى') || yearName.includes('1')) yearId = '1as';
    else if (yearName.includes('الثانية') || yearName.includes('2')) yearId = '2as';
    else if (yearName.includes('الثالثة') || yearName.includes('3')) yearId = '3as';
  }
  return { levelId, yearId };
}

export async function generateQuestions(
  level: string,
  year: string,
  subject: string,
  difficulty: Difficulty = 'medium',
  track?: string,
  count: number = 10,
  semester?: number
): Promise<Question[]> {
  const normalizedSubject = normalizeSubject(subject);
  const cacheKey = `${level}_${year}_${normalizedSubject}_${difficulty}_${track || ''}_${semester || ''}_${count}`;
  if (questionsCache.has(cacheKey)) {
    const cached = questionsCache.get(cacheKey)!;
    if (cached && cached.length >= count) {
      return cached.slice(0, count);
    }
  }

  const { levelId, yearId } = deriveIdsFromNames(level, year);
  const fallback = getFallbackQuestions(normalizedSubject, count, difficulty, levelId, yearId, track);

  try {
    const res = await fetchWithTimeout("/api/generate-questions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ level, year, subject: normalizedSubject, difficulty, track, count, semester })
    }, 15000);

    if (res.ok) {
      const data = await res.json();
      if (data.questions && Array.isArray(data.questions) && data.questions.length > 0) {
        const balanced = shuffleAndBalanceQuestions(data.questions);
        questionsCache.set(cacheKey, balanced);
        return balanced;
      }
    }
  } catch (error: any) {
    console.warn("API /api/generate-questions fetch timed out or failed, using instant curriculum fallback:", error?.message || error);
  }

  // Cache fallback to keep consecutive loads instant
  const balancedFallback = shuffleAndBalanceQuestions(fallback);
  questionsCache.set(cacheKey, balancedFallback);
  return balancedFallback;
}

export async function generateContestQuestions(
  level: string,
  round: number = 1,
  count: number = 25,
  isAcademic: boolean = false
): Promise<Question[]> {
  const cacheKey = `${level}_${round}_${count}_${isAcademic}`;
  if (contestQuestionsCache.has(cacheKey)) {
    return contestQuestionsCache.get(cacheKey)!;
  }

  const full50 = get50WeeklyContestQuestions(level);
  const defaultQuestions = shuffleAndBalanceQuestions(isAcademic ? full50.slice(25, 50) : full50.slice(0, 25));

  try {
    const res = await fetchWithTimeout("/api/generate-contest-questions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ level, round, count, isAcademic })
    }, 15000);

    if (res.ok) {
      const data = await res.json();
      if (data.questions && Array.isArray(data.questions) && data.questions.length > 0) {
        const balanced = shuffleAndBalanceQuestions(data.questions);
        contestQuestionsCache.set(cacheKey, balanced);
        return balanced;
      }
    }
  } catch (error: any) {
    console.warn("API /api/generate-contest-questions fetch timed out or failed, using instant fallback:", error?.message || error);
  }

  contestQuestionsCache.set(cacheKey, defaultQuestions);
  return defaultQuestions;
}

export async function generate50WeeklyContestQuestions(level: string): Promise<Question[]> {
  try {
    const generalPart = await generateContestQuestions(level, 1, 25, false);
    const academicPart = await generateContestQuestions(level, 2, 25, true);

    const full50Fallback = get50WeeklyContestQuestions(level);

    const safeGeneral = generalPart.length >= 25 
      ? generalPart.slice(0, 25) 
      : [...generalPart, ...full50Fallback.slice(0, 25 - generalPart.length)];

    const safeAcademic = academicPart.length >= 25 
      ? academicPart.slice(0, 25) 
      : [...academicPart, ...full50Fallback.slice(25, 50 - academicPart.length + 25)];

    return shuffleAndBalanceQuestions([...safeGeneral, ...safeAcademic].slice(0, 50));
  } catch (e) {
    console.warn("Using instant 50 contest fallback:", e);
    return shuffleAndBalanceQuestions(get50WeeklyContestQuestions(level));
  }
}

export async function generateStudyPlan(
  subject: string,
  mistakes: { question: string; correctAnswer: string; userAnswer: string }[]
): Promise<string> {
  try {
    const res = await fetchWithTimeout("/api/generate-study-plan", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ subject, mistakes })
    }, 12000);

    if (res.ok) {
      const data = await res.json();
      if (data.plan) {
        return data.plan;
      }
    }
  } catch (error: any) {
    console.warn("API /api/generate-study-plan fetch failed:", error?.message || error);
  }

  return "واصل المذاكرة والتدريب، ركز على مراجعة مفاهيم الدرس الأساسية وحل التمارين المنهجية، والنجاح حليفك!";
}

export async function generateLessonIndex(
  level: string,
  year: string,
  subject: string,
  track?: string,
  semester?: number
): Promise<{ title: string; description: string }[]> {
  const cacheKey = `${level}_${year}_${subject}_${track || ''}_${semester || ''}`;
  if (lessonIndexCache.has(cacheKey)) {
    return lessonIndexCache.get(cacheKey)!;
  }

  // 1. Instant Algerian Curriculum Lessons (Zero-wait loading)
  const { levelId, yearId } = deriveIdsFromNames(level, year);
  const subjectSlug = subject.includes('عرب') ? 'arabic' :
    subject.includes('رياضيات') ? 'math' :
    subject.includes('إسلام') ? 'islamic' :
    subject.includes('مدن') ? 'civic' :
    subject.includes('فيزياء') ? 'physics' :
    subject.includes('طبيع') || subject.includes('علوم') ? 'science' :
    subject.includes('تاريخ') || subject.includes('جغرافيا') ? 'history' :
    subject.includes('فرنس') ? 'french' :
    subject.includes('إنجليز') ? 'english' :
    subject.includes('فلسف') ? 'philosophy' : 'generic';

  const instantCurriculum = getCurriculumLessonsForSubject(levelId, yearId, subjectSlug, track);
  if (instantCurriculum && instantCurriculum.length > 0) {
    lessonIndexCache.set(cacheKey, instantCurriculum);
    return instantCurriculum;
  }

  try {
    const res = await fetchWithTimeout("/api/generate-lesson-index", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ level, year, subject, track, semester })
    }, 8000);

    if (res.ok) {
      const data = await res.json();
      if (data.index && Array.isArray(data.index) && data.index.length > 0) {
        lessonIndexCache.set(cacheKey, data.index);
        return data.index;
      }
    }
  } catch (error: any) {
    console.warn("API /api/generate-lesson-index fetch failed, using fallback:", error?.message || error);
  }

  return instantCurriculum;
}

export async function generateLesson(
  level: string,
  year: string,
  subject: string,
  lessonTitle: string,
  track?: string,
  semester?: number
): Promise<string> {
  const cacheKey = `${level}_${year}_${subject}_${lessonTitle}_${track || ''}_${semester || ''}`;
  if (lessonContentCache.has(cacheKey)) {
    return lessonContentCache.get(cacheKey)!;
  }

  try {
    const res = await fetchWithTimeout("/api/generate-lesson", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ level, year, subject, lessonTitle, track, semester })
    }, 16000);

    if (res.ok) {
      const data = await res.json();
      if (data.content && data.content.length > 50) {
        lessonContentCache.set(cacheKey, data.content);
        return data.content;
      }
    }
  } catch (error: any) {
    console.warn("API /api/generate-lesson fetch failed, using instant curriculum fallback:", error?.message || error);
  }

  // Fallback to rich, beautifully formatted curriculum lesson content
  const instant = getInstantLessonContent(level, year, subject, lessonTitle, track, semester);
  lessonContentCache.set(cacheKey, instant);
  return instant;
}

export async function generateRevision(
  level: string,
  year: string,
  subject: string,
  track?: string,
  semester?: number
): Promise<string> {
  const cacheKey = `${level}_${year}_${subject}_${track || ''}_${semester || ''}`;
  if (revisionContentCache.has(cacheKey)) {
    return revisionContentCache.get(cacheKey)!;
  }

  try {
    const res = await fetchWithTimeout("/api/generate-revision", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ level, year, subject, track, semester })
    }, 16000);

    if (res.ok) {
      const data = await res.json();
      if (data.content && data.content.length > 50) {
        revisionContentCache.set(cacheKey, data.content);
        return data.content;
      }
    }
  } catch (error: any) {
    console.warn("API /api/generate-revision fetch failed, using instant revision fallback:", error?.message || error);
  }

  const instant = getInstantRevisionContent(level, year, subject, track, semester);
  revisionContentCache.set(cacheKey, instant);
  return instant;
}

