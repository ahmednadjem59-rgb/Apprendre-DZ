import { getFallbackExercises } from "../data/fallbackQuestions";

export interface Exercise {
  question: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
}

export async function generateExercises(subject: string, year: string, topic?: string): Promise<Exercise[]> {
  try {
    const res = await fetch("/api/generate-exercises", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ subject, year, topic })
    });

    if (!res.ok) {
      console.warn("Server returned non-ok for exercises, falling back to local bank:", res.status);
      return getFallbackExercises(subject);
    }

    const data = await res.json();
    if (data.exercises && Array.isArray(data.exercises) && data.exercises.length > 0) {
      return data.exercises;
    }
    return getFallbackExercises(subject);
  } catch (error: any) {
    console.warn("Error calling /api/generate-exercises, using fallback:", error?.message || error);
    return getFallbackExercises(subject);
  }
}
