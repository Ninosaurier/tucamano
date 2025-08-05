import { Injectable } from '@angular/core';
import { Deck } from '../models/deck.model';

@Injectable({
  providedIn: 'root'
})
export class DeckService {
  private storageKey = 'flashcard_decks';

  constructor() { }

  private getRawDecks(): Deck[] {
    const raw = localStorage.getItem(this.storageKey);
    return raw ? JSON.parse(raw) : [];
  }

  private saveRawDecks(decks: Deck[]): void {
    localStorage.setItem(this.storageKey, JSON.stringify(decks));
  }

  getAllDecks(): Deck[] {
    return this.getRawDecks();
  }

  getDeckByTitle(title: string): Deck | undefined {
    return this.getRawDecks().find(d => d.title === title);
  }

  addDeck(deck: Deck): void {
    const decks = this.getRawDecks();
    decks.push(deck);
    this.saveRawDecks(decks);
  }
}
