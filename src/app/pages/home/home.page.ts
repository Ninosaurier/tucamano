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

  constructor() {}

  ngOnInit() {}
}
