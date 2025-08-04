import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonText,
  IonLabel,
  IonItem,
  IonBackButton,
  IonButtons
} from '@ionic/angular/standalone';
import { SignSearchResult } from 'src/app/models/sign-search-result.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sign-detail',
  templateUrl: './sign-detail.page.html',
  styleUrls: ['./sign-detail.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    IonText,
    IonLabel,
    IonItem,
    IonBackButton,
    IonButtons
  ],
})
export class SignDetailPage implements OnInit {
  signData: SignSearchResult | null = null;

  constructor(private route: ActivatedRoute) {
    const nav = history.state as { sign: SignSearchResult };
    if (nav?.sign) {
      this.signData = nav.sign;
    }
  }

  ngOnInit() {}
}
