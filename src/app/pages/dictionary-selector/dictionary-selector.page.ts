import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonGrid,
  IonRow,
  IonCol,
  IonList,
  IonSearchbar,
  IonImg
} from '@ionic/angular/standalone';
import { SignLanguage } from 'src/app/models/sign-language.model';
import { SIGN_LANGUAGES } from 'src/app/data/sign-languages';
import { Router } from '@angular/router';
import { ROUTE_PATHS } from 'src/app/constants/route-paths';

@Component({
  selector: 'app-dictionary-selector',
  templateUrl: './dictionary-selector.page.html',
  styleUrls: ['./dictionary-selector.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    IonGrid,
    IonRow,
    IonCol,
    IonList,
    IonSearchbar,
    IonImg
  ],
})
export class DictionarySelectorPage implements OnInit {

  searchTerm: string = '';
  signLanguageItems: SignLanguage[] = [...SIGN_LANGUAGES];
  filteredItems: SignLanguage[] = [];

  constructor(private router: Router) {}

  ngOnInit() {
    this.filteredItems = [...this.signLanguageItems]; // Anfangszustand: alles anzeigen
  }

  filterSignLanguage() {
    const term = this.searchTerm.toLowerCase();
    this.filteredItems = this.signLanguageItems.filter(signLanguageItems =>
      signLanguageItems.name.toLowerCase().includes(term)
    );
  }

  setSignDictionary() {
    this.router.navigateByUrl(ROUTE_PATHS.HOME, { replaceUrl: true });

  }
}
