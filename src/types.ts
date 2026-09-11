export type Level = 'primary' | 'middle' | 'secondary';
export type Difficulty = 'easy' | 'medium' | 'hard';

export interface Question {
  id: string;
  text: string;
  options: string[];
  correctAnswer: number; // index of options
  difficulty?: Difficulty;
  subject?: string;
  explanation?: string;
  remedyPlan?: string;
  lessonTitle?: string;
  levelId?: string;
  yearId?: string;
  trackId?: string;
  semester?: number | string;
}

export interface CustomQuestion extends Question {
  levelId: string;
  yearId: string;
  subjectId: string;
  subjectName?: string;
  trackId?: string;
  semester?: number | string;
  lessonTitle?: string;
  authorEmail?: string;
  createdAt?: string;
}

export interface CustomLesson {
  id: string;
  title: string;
  description?: string;
  content: string;
  levelId: string;
  yearId: string;
  subjectId: string;
  subjectName?: string;
  trackId?: string;
  semester?: number | string;
  authorEmail?: string;
  createdAt?: string;
  order?: number;
}

export interface Subject {
  id: string;
  name: string;
  icon: string;
  color: string;
}

export interface YearData {
  id: string;
  name: string;
  subjects?: Subject[]; // Override level subjects
  tracks?: TrackData[]; // Add tracks for years that have them (e.g. Secondary)
}

export interface TrackData {
  id: string;
  name: string;
  subjects?: Subject[]; // Override level subjects if track-specific
}

export interface LevelData {
  id: Level;
  name: string;
  tracks?: TrackData[];
  years: YearData[];
  subjects: Subject[];
}

export interface AnnualContestParticipant {
  id: string;
  userId: string;
  userName: string;
  userEmail: string;
  studentId?: string;
  levelId: string;
  yearId: string;
  yearName: string;
  trackId?: string;
  trackName?: string;
  contestScore: number;
  totalAppPoints: number;
  streakCount: number;
  subjectsExaminedCount: number;
  submittedAt: string;
  isWinner?: boolean;
  certificateEmailSent?: boolean;
  status: 'submitted' | 'approved' | 'winner';
  answersSummary?: {
    totalQuestions: number;
    correctAnswers: number;
    timeSpentSeconds: number;
  };
}

export interface AnnualContestConfig {
  id: string;
  title: string;
  startDate: string; // e.g., "2026-06-03"
  endDate: string; // e.g., "2026-06-05"
  resultsDate: string; // e.g., "2026-06-25"
  winnerId?: string;
  winnerName?: string;
  winnerEmail?: string;
  winnerYearName?: string;
  isAnnounced?: boolean;
  announcedAt?: string;
}
