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
  IonList,
  IonSpinner,
  IonSearchbar,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonCardContent,
  IonThumbnail,
  IonBackButton,
  IonButtons
} from '@ionic/angular/standalone';
import { SignEntry } from 'src/app/models/sign-entry.model';
import { HttpClient } from '@angular/common/http';
import { SearchResponse, SignSearchResult } from 'src/app/models/sign-search-result.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-sign',
  templateUrl: './search-sign.page.html',
  styleUrls: ['./search-sign.page.scss'],
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
    IonList,
    IonSpinner,
    IonSearchbar,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    IonThumbnail,
    IonBackButton,
    IonButtons   
  ],
})
export class SearchSignPage implements OnInit {
  searchTerm = '';
  results: any[] = [];
  loading = false;
  error = '';

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit() {}

  onSearchChange() {
    const term = this.searchTerm.trim();
    if (!term) {
      this.results = [];
      return;
    }
  
    this.loading = true;
    this.error = '';
  
    const body = {
      query: `
        {
          search(word: "${term}") {
            id
            text
            type
            currentVideo {
              videoUrl
              license
              user {
                name
              }
            }
          }
        }
      `
    };
  
    this.http.post<SearchResponse>('/api', body, {
      headers: { 'Content-Type': 'application/json' }
    }).subscribe({
      next: (res) => {
        this.results = res?.data?.search || [];
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Fehler beim Laden der Daten.';
        console.error(err);
        this.loading = false;
      },
    });
  }

  onSelectSignResult(sign: SignSearchResult) {
    this.router.navigateByUrl('/sign-detail', { state: { sign } });
  }
  
}
