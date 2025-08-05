import { Flashcard } from "./flashcard.model";

export interface Deck {
  title: string;      // Name des Stapels
  description?: string; // optional
  flashcards: Flashcard[];  // Liste der Karten
}