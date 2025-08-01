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
  IonLabel,
  IonItem,
  IonText,
  IonItemDivider,
  IonList
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-credit',
  templateUrl: './credit.page.html',
  styleUrls: ['./credit.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonItemDivider,
    IonToolbar,
    CommonModule,
    FormsModule,
    IonLabel,
    IonItem,
    IonList
  ],
})
export class CreditPage implements OnInit {
  version = 'v0.0.1 Alpha';
  constructor() {}

  ngOnInit() {}
}
