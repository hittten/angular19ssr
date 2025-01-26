import {Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'home',
    loadComponent: () => import('./home-page.component').then(m => m.HomePageComponent)
  },
  {
    path: 'ssr',
    loadComponent: () => import('./ssr-page.component').then(m => m.SsrPageComponent)
  },
  {
    path: 'pre-render',
    loadComponent: () => import('./pre-render-page.component').then(m => m.PreRenderPageComponent)
  },
  {
    path: '**',
    loadComponent: () => import('./not-found-page.component').then(m => m.NotFoundPageComponent)
  }
];
