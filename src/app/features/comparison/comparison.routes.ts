import { Routes } from '@angular/router';

export const COMPARISON_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/comparison-page.component').then(m => m.ComparisonPageComponent),
    title: 'Compare - StockTracker',
  },
];
