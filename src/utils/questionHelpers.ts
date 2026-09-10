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

    const correctText = q.options[q.correctAnswer];
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
    const wrongOptions = originalOptions.filter((_, i) => i !== q.correctAnswer);

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
        newOptions.push(wrongOptions[wrongIdx++] || "");
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
 * LocalStorage utilities to track questions answered TODAY
 * so that when the student studies today, they never see the same question again.
 */
const STORAGE_PREFIX = "apprendre_dz_daily_answered_";

export function getTodayDateString(): string {
  return new Date().toISOString().split("T")[0];
}

export function getDailyAnsweredSet(): { ids: Set<string>; texts: Set<string> } {
  const ids = new Set<string>();
  const texts = new Set<string>();

  try {
    const today = getTodayDateString();
    const raw = localStorage.getItem(`${STORAGE_PREFIX}${today}`);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (Array.isArray(parsed.ids)) {
        parsed.ids.forEach((id: string) => ids.add(id));
      }
      if (Array.isArray(parsed.texts)) {
        parsed.texts.forEach((txt: string) => texts.add(txt));
      }
    }

    // Clean up old days from previous dates to avoid filling localStorage
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key && key.startsWith(STORAGE_PREFIX) && key !== `${STORAGE_PREFIX}${today}`) {
        localStorage.removeItem(key);
      }
    }
  } catch (e) {
    console.warn("Could not read daily answered set from localStorage:", e);
  }

  return { ids, texts };
}

export function saveDailyAnswered(id: string, text: string) {
  try {
    const today = getTodayDateString();
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

    if (id && !ids.includes(id)) {
      ids.push(id);
    }
    const clean = cleanQuestionText(text);
    if (clean && !texts.includes(clean)) {
      texts.push(clean);
    }

    // Keep max 1000 items per day
    if (ids.length > 1000) ids = ids.slice(-1000);
    if (texts.length > 1000) texts = texts.slice(-1000);

    localStorage.setItem(key, JSON.stringify({ ids, texts }));
  } catch (e) {
    console.warn("Could not save daily answered to localStorage:", e);
  }
}
