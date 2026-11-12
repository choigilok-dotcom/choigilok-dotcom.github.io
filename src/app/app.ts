import { Component, ElementRef, inject, signal, viewChild } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { filter, map } from 'rxjs';
import { caseStudies, profile } from './content';

@Component({
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
  host: {
    '(document:click)': 'onDocumentClick($event)',
  },
})
export class App {
  private readonly router = inject(Router);
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);
  private readonly menuButton = viewChild<ElementRef<HTMLButtonElement>>('menuButton');

  protected readonly name = profile.name;
  protected readonly initials = profile.initials;
  protected readonly year = new Date().getFullYear();
  protected readonly caseStudies = caseStudies;

  /* ---------- Case studies dropdown ---------- */

  protected readonly menuOpen = signal(false);

  /** True on any case study page, so the menu button shows as current. */
  protected readonly onCasePage = toSignal(
    this.router.events.pipe(
      filter((e) => e instanceof NavigationEnd),
      map(() => this.router.url.startsWith('/case-studies')),
    ),
    { initialValue: false },
  );

  protected closeMenu(returnFocus = false): void {
    if (!this.menuOpen()) return;
    this.menuOpen.set(false);
    if (returnFocus) this.menuButton()?.nativeElement.focus();
  }

  /** Close when a click lands outside the menu. */
  protected onDocumentClick(event: MouseEvent): void {
    const menu = this.host.nativeElement.querySelector('.nav-menu');
    if (menu && !menu.contains(event.target as Node)) this.closeMenu();
  }
}
