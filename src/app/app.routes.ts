import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./features/dashboard/dashboard.routes').then(m => m.DASHBOARD_ROUTES),
  },
  {
    path: 'stock/:symbol',
    loadChildren: () => import('./features/stock-detail/stock-detail.routes').then(m => m.STOCK_DETAIL_ROUTES),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
