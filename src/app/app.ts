import { Component, ElementRef, inject, signal, viewChild } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { filter, map } from 'rxjs';
import { caseStudies, demos, profile } from './content';

/** The header's dropdown menus. */
type MenuId = 'cases' | 'demos';

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
  private readonly casesButton = viewChild<ElementRef<HTMLButtonElement>>('casesButton');
  private readonly demosButton = viewChild<ElementRef<HTMLButtonElement>>('demosButton');

  protected readonly name = profile.name;
  protected readonly initials = profile.initials;
  protected readonly year = new Date().getFullYear();
  protected readonly caseStudies = caseStudies;
  protected readonly demos = demos;

  /* ---------- Header dropdowns (Case studies, Live demos) ---------- */

  /** Which dropdown is open; only one at a time. */
  protected readonly openMenu = signal<MenuId | null>(null);

  /** True on any case study page, so the menu button shows as current. */
  protected readonly onCasePage = toSignal(
    this.router.events.pipe(
      filter((e) => e instanceof NavigationEnd),
      map(() => this.router.url.startsWith('/case-studies')),
    ),
    { initialValue: false },
  );

  protected toggleMenu(id: MenuId): void {
    this.openMenu.set(this.openMenu() === id ? null : id);
  }

  protected closeMenu(returnFocus = false): void {
    const id = this.openMenu();
    if (!id) return;
    this.openMenu.set(null);
    if (!returnFocus) return;
    const button = id === 'cases' ? this.casesButton() : this.demosButton();
    button?.nativeElement.focus();
  }

  /** Close when a click lands outside every menu. */
  protected onDocumentClick(event: MouseEvent): void {
    const menus = this.host.nativeElement.querySelectorAll('.nav-menu');
    const inside = Array.from(menus).some((m) => m.contains(event.target as Node));
    if (!inside) this.closeMenu();
  }
}
