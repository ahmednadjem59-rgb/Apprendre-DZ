import { Question } from "../types";

/**
 * Normalizes question text for robust deduplication across slight whitespace,
 * punctuation, and formatting differences.
 */
export function cleanQuestionText(text: string): string {
  if (!text) return "";
  return text
    .replace(/[\u064B-\u065F\u0670]/g, "") // Remove Arabic diacritics / tashkeel
    .replace(/[^\w\s\u0600-\u06FF]/g, "") // Remove punctuation
    .replace(/\s+/g, " ")
    .trim()
    .toLowerCase();
}

/**
 * Shuffles options for an array of questions while:
 * 1. Accurately tracking the correct option so that correctAnswer always points to the right answer.
 * 2. Distributing correct answer indices across 0, 1, 2, 3 so consecutive questions do NOT have the same correct answer index.
 * 3. Never getting biased toward option 0, 1, 2 or 3.
 *
 * This directly satisfies the user's requirement:
 * "مثلا الان الاجابة الصحيحة ١ المرة ٢ يكون ٣ مزيج لاتركز على خيار واحد فقط"
 */
export function shuffleAndBalanceQuestions<T extends Question>(questions: T[]): T[] {
  let prevCorrectIndex = -1;

  return questions.map((q) => {
    if (!q || !Array.isArray(q.options) || q.options.length <= 1) {
      return q;
    }

    let correctIdx = typeof q.correctAnswer === 'number' ? q.correctAnswer : parseInt(q.correctAnswer as any, 10);
    if (isNaN(correctIdx) || correctIdx < 0 || correctIdx >= q.options.length) {
      correctIdx = 0;
    }

    const correctText = q.options[correctIdx];
    // Guard against malformed questions where correctAnswer index is out of bounds
    if (correctText === undefined) {
      return q;
    }

    const originalOptions = [...q.options];
    const totalOptions = originalOptions.length;

    // Available candidate indices for the correct answer
    // Exclude prevCorrectIndex to ensure consecutive questions have DIFFERENT answer choices (1 -> 3 -> 0 -> 2 ...)
    const allIndices = Array.from({ length: totalOptions }, (_, i) => i);
    let candidateIndices = allIndices.filter((i) => i !== prevCorrectIndex);
    if (candidateIndices.length === 0) {
      candidateIndices = allIndices;
    }

    // Pick target index randomly from candidates
    const targetCorrectIndex = candidateIndices[Math.floor(Math.random() * candidateIndices.length)];
    prevCorrectIndex = targetCorrectIndex;

    // Distractors (the wrong options)
    const wrongOptions = originalOptions.filter((_, i) => i !== correctIdx);

    // Fisher-Yates shuffle for distractors
    for (let i = wrongOptions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = wrongOptions[i];
      wrongOptions[i] = wrongOptions[j];
      wrongOptions[j] = temp;
    }

    // Assemble new options array with correctText placed precisely at targetCorrectIndex
    const newOptions: string[] = [];
    let wrongIdx = 0;
    for (let i = 0; i < totalOptions; i++) {
      if (i === targetCorrectIndex) {
        newOptions.push(correctText);
      } else {
        newOptions.push(wrongOptions[wrongIdx++] ?? "");
      }
    }

    return {
      ...q,
      options: newOptions,
      correctAnswer: targetCorrectIndex
    };
  });
}

/**
 * LocalStorage utilities to track answered and seen questions
 * both on a daily basis and continuously across sessions,
 * ensuring questions do not appear repeatedly.
 */
const STORAGE_PREFIX = "apprendre_dz_daily_answered_";
const ALL_SEEN_STORAGE_KEY = "apprendre_dz_all_seen_questions_v1";

export function getTodayDateString(): string {
  return new Date().toISOString().split("T")[0];
}

export function getDailyAnsweredSet(): { ids: Set<string>; texts: Set<string> } {
  const ids = new Set<string>();
  const texts = new Set<string>();

  try {
    // 1. Read today's answered questions
    const today = getTodayDateString();
    const rawToday = localStorage.getItem(`${STORAGE_PREFIX}${today}`);
    if (rawToday) {
      const parsed = JSON.parse(rawToday);
      if (Array.isArray(parsed.ids)) {
        parsed.ids.forEach((id: string) => ids.add(id));
      }
      if (Array.isArray(parsed.texts)) {
        parsed.texts.forEach((txt: string) => texts.add(txt));
      }
    }

    // 2. Read persistent rolling cross-session answered questions
    const rawAll = localStorage.getItem(ALL_SEEN_STORAGE_KEY);
    if (rawAll) {
      const parsedAll = JSON.parse(rawAll);
      if (Array.isArray(parsedAll.ids)) {
        parsedAll.ids.forEach((id: string) => ids.add(id));
      }
      if (Array.isArray(parsedAll.texts)) {
        parsedAll.texts.forEach((txt: string) => texts.add(txt));
      }
    }

    // Clean up old daily keys from more than 7 days ago to avoid filling localStorage
    const keysToRemove: string[] = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key && key.startsWith(STORAGE_PREFIX) && key !== `${STORAGE_PREFIX}${today}`) {
        keysToRemove.push(key);
      }
    }
    keysToRemove.forEach((k) => localStorage.removeItem(k));
  } catch (e) {
    console.warn("Could not read answered questions set from localStorage:", e);
  }

  return { ids, texts };
}

export function saveDailyAnswered(id: string, text: string) {
  try {
    const today = getTodayDateString();
    const clean = cleanQuestionText(text);

    // 1. Update daily storage
    const key = `${STORAGE_PREFIX}${today}`;
    const raw = localStorage.getItem(key);
    let ids: string[] = [];
    let texts: string[] = [];

    if (raw) {
      try {
        const parsed = JSON.parse(raw);
        ids = Array.isArray(parsed.ids) ? parsed.ids : [];
        texts = Array.isArray(parsed.texts) ? parsed.texts : [];
      } catch {
        ids = [];
        texts = [];
      }
    }

    if (id && !ids.includes(id)) ids.push(id);
    if (clean && !texts.includes(clean)) texts.push(clean);

    if (ids.length > 2000) ids = ids.slice(-2000);
    if (texts.length > 2000) texts = texts.slice(-2000);

    localStorage.setItem(key, JSON.stringify({ ids, texts }));

    // 2. Update persistent rolling cross-session storage
    const rawAll = localStorage.getItem(ALL_SEEN_STORAGE_KEY);
    let allIds: string[] = [];
    let allTexts: string[] = [];
    if (rawAll) {
      try {
        const parsedAll = JSON.parse(rawAll);
        allIds = Array.isArray(parsedAll.ids) ? parsedAll.ids : [];
        allTexts = Array.isArray(parsedAll.texts) ? parsedAll.texts : [];
      } catch {
        allIds = [];
        allTexts = [];
      }
    }

    if (id && !allIds.includes(id)) allIds.push(id);
    if (clean && !allTexts.includes(clean)) allTexts.push(clean);

    if (allIds.length > 3000) allIds = allIds.slice(-3000);
    if (allTexts.length > 3000) allTexts = allTexts.slice(-3000);

    localStorage.setItem(ALL_SEEN_STORAGE_KEY, JSON.stringify({ ids: allIds, texts: allTexts }));
  } catch (e) {
    console.warn("Could not save answered question to localStorage:", e);
  }
}
