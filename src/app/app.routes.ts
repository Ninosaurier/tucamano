import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'splash',
    pathMatch: 'full',
  },
  {
    path: 'splash',
    loadComponent: () => import('./pages/splash/splash.page').then( m => m.SplashPage)
  },
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.page').then( m => m.HomePage)
  },
  {
    path: 'dictionary-selector',
    loadComponent: () => import('./pages/dictionary-selector/dictionary-selector.page').then( m => m.DictionarySelectorPage)
  },
  {
    path: 'credit',
    loadComponent: () => import('./pages/credit/credit.page').then( m => m.CreditPage)
  },
  {
    path: 'search-sign',
    loadComponent: () => import('./pages/search-sign/search-sign.page').then( m => m.SearchSignPage)
  },
  {
    path: 'sign-detail',
    loadComponent: () => import('./pages/sign-detail/sign-detail.page').then( m => m.SignDetailPage)
  },
  {
    path: 'deck-overview',
    loadComponent: () => import('./pages/deck-overview/deck-overview.page').then( m => m.DeckOverviewPage)
  },
];
