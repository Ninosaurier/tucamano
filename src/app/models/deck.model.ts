import { Flashcard } from "./flashcard.model";

export interface Deck {
  id: string;         // UUID oder slug
  title: string;      // Name des Stapels
  description?: string; // optional
  flashcards: Flashcard[];  // Liste der Karten
}