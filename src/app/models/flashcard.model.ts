export interface Flashcard {
  id: string;
  term: string;
  videoUrl: string;
  notes?: string;
  learned: boolean;
}