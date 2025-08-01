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
];
