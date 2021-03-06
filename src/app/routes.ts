import { provideRouter, RouterConfig } from '@angular/router';
import { Notes, Main, About } from './containers';

export const routes: RouterConfig = [
  { 
      path: '', 
      component: Main,
      children: [
          {
              path: '',
              component: Notes
          },
          {
              path: 'about',
              component: About
          }
      ]
  },
  { path: '**', redirectTo: '' }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];