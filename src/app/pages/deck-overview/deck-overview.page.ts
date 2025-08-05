import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonSearchbar,
  IonItem,
  IonCard,
  IonCardHeader,
  IonCardContent,
  IonCardSubtitle,
  IonCardTitle,
  IonLabel,
  IonList,
  IonText,
  IonIcon,
  IonButton,
  IonModal,
  IonInput,
  IonGrid,
  IonRow,
  IonCol
} from '@ionic/angular/standalone';
import { OverlayEventDetail } from '@ionic/core/components';
import { DeckService } from 'src/app/service/deck.service';
import { Deck } from 'src/app/models/deck.model';
import {v4 as uuidv4} from 'uuid';

@Component({
  selector: 'app-deck-overview',
  templateUrl: './deck-overview.page.html',
  styleUrls: ['./deck-overview.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    IonButtons,
    IonBackButton,
    IonSearchbar,
    IonItem,
    IonCard,
    IonCardHeader,
    IonCardContent,
    IonCardSubtitle,
    IonCardTitle,
    IonLabel,
    IonList,
    IonText,
    IonIcon,
    IonButton,
    IonModal,
    IonInput,
    IonGrid,
    IonRow,
    IonCol
  ],
})
export class DeckOverviewPage implements OnInit {
  @ViewChild(IonModal) modal!: IonModal;

  draftDeckName: string = '';
  decks: Deck[] = [];
  filteredDecks: Deck[] = [];
  searchTerm = '';
  loading = false;
  isModalOpen = false;

  message = 'This modal example uses triggers to automatically open a modal when the button is clicked.';

  constructor(private deckService: DeckService) {}

  ngOnInit() {
    this.decks = this.deckService.getAllDecks();
    console.log(this.decks);
  }

  closeNewDeckModal() {
    this.modal.dismiss(null, 'cancel');
  }

  confirmNewDeck() {
    this.createNewDeck(this.draftDeckName);
    this.decks = this.deckService.getAllDecks();
    this.modal.dismiss(null, 'cancel');
  }

  onWillDismiss(event: CustomEvent<OverlayEventDetail>) {
    if (event.detail.role === 'confirm') {
      this.message = `Hello, ${event.detail.data}!`;
    }
  }

  createNewDeck(draftDeckName: string) {
    let newDeck: Deck = {id: uuidv4(), title: draftDeckName, flashcards: []};
    this.deckService.addDeck(newDeck);
  }

  filterDecks() {
    const term = this.searchTerm.toLowerCase().trim();
  
    if (!term) {
      this.filteredDecks = this.decks;
    } else {
      this.filteredDecks = this.decks.filter(deck =>
        deck.title.toLowerCase().includes(term)
      );
    }
  }
}
