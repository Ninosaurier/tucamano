import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonCol,
  IonRow,
  IonGrid,
  IonButton,
  IonIcon,
  IonImg
} from '@ionic/angular/standalone';
import { ICONS_FLAGS } from 'src/app/constants/icon-flags';
import { Router } from '@angular/router';
import { ROUTE_PATHS } from 'src/app/constants/route-paths';
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    IonCol,
    IonRow,
    IonGrid,
    IonButton,
    IonIcon,
    IonImg
  ],
})
export class HomePage implements OnInit {

  ICONS_FLAGS = ICONS_FLAGS;

  constructor(private router: Router) {}

  ngOnInit() {}

  goToDictionarySelectorPage() {
    this.router.navigateByUrl(ROUTE_PATHS.DICTIONARY_SELECTOR, { replaceUrl: true });
  }

  goToCreditPage() {
    this.router.navigateByUrl(ROUTE_PATHS.CREDIT, { replaceUrl: false });
  }

  goToSearchSignPage() {
    this.router.navigateByUrl(ROUTE_PATHS.SEARCH_SIGN, { replaceUrl: false });
  }

  goToFlashCardPage() {
    this.router.navigateByUrl(ROUTE_PATHS.FLASH_CARD_DECK_OVERVIEW, { replaceUrl: false });
  }
}
