import { ViewportScroller } from '@angular/common';
import {
  ApplicationConfig,
  inject,
  provideAppInitializer,
  provideBrowserGlobalErrorListeners,
} from '@angular/core';
import { provideRouter, withComponentInputBinding, withInMemoryScrolling } from '@angular/router';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(
      routes,
      // Scroll to #fragments (nav links, case study jump links) and to the top on page change.
      withInMemoryScrolling({ anchorScrolling: 'enabled', scrollPositionRestoration: 'enabled' }),
      // Route data (the case study id) binds to component inputs.
      withComponentInputBinding(),
    ),
    // Keep fragment targets clear of the sticky header (it wraps to two rows on phones).
    provideAppInitializer(() => {
      inject(ViewportScroller).setOffset(() => {
        const header = document.querySelector('.site-header');
        return [0, (header?.getBoundingClientRect().height ?? 72) + 16];
      });
    }),
  ],
};
