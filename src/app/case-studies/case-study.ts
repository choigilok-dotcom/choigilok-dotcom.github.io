import { Component, ElementRef, computed, input, signal, viewChild } from '@angular/core';
import { RouterLink } from '@angular/router';
import { GalleryGroup, Shot, caseStudies, profile } from '../content';

/** One case study page. The route passes the case id through `data.id`. */
@Component({
  selector: 'app-case-study',
  imports: [RouterLink],
  templateUrl: './case-study.html',
})
export class CaseStudy {
  readonly id = input.required<string>();

  private readonly index = computed(() => caseStudies.findIndex((c) => c.id === this.id()));
  protected readonly cs = computed(() => caseStudies[this.index()]);
  protected readonly prev = computed(() => caseStudies[this.index() - 1]);
  protected readonly next = computed(() => caseStudies[this.index() + 1]);
  protected readonly email = profile.email;

  /* ---------- Prototype tabs ---------- */

  protected readonly activeTab = signal(0);

  /** Arrow keys, Home and End move between tabs (WAI-ARIA tabs pattern). */
  protected onTabKey(event: KeyboardEvent, count: number): void {
    const moves: Record<string, number> = {
      ArrowRight: (this.activeTab() + 1) % count,
      ArrowLeft: (this.activeTab() - 1 + count) % count,
      Home: 0,
      End: count - 1,
    };
    const next = moves[event.key];
    if (next === undefined) return;
    event.preventDefault();
    this.activeTab.set(next);
    document.getElementById(`proto-tab-${next}`)?.focus();
  }

  /* ---------- Screenshot lightbox ---------- */

  private readonly lightboxEl = viewChild<ElementRef<HTMLDialogElement>>('lightbox');
  protected readonly lightboxShots = signal<Shot[]>([]);
  protected readonly lightboxIndex = signal(0);
  protected readonly lightboxShot = computed(() => this.lightboxShots()[this.lightboxIndex()]);

  protected openShot(shots: Shot[], shot: Shot): void {
    this.lightboxShots.set(shots);
    this.lightboxIndex.set(Math.max(0, shots.findIndex((s) => s.src === shot.src)));
    this.lightboxEl()?.nativeElement.showModal();
  }

  protected closeShot(): void {
    this.lightboxEl()?.nativeElement.close();
  }

  protected stepShot(delta: number): void {
    const count = this.lightboxShots().length;
    this.lightboxIndex.update((i) => (i + delta + count) % count);
  }

  protected onLightboxKey(event: KeyboardEvent): void {
    if (event.key === 'ArrowRight') this.stepShot(1);
    if (event.key === 'ArrowLeft') this.stepShot(-1);
  }

  /** Close when the click lands on the backdrop (the dialog element itself). */
  protected onLightboxClick(event: MouseEvent): void {
    if (event.target === event.currentTarget) this.closeShot();
  }

  /** Every full screenshot of a case study in story order (original, then each prototype). */
  protected allShots(compare: Shot[] = [], progression: Shot[] = []): Shot[] {
    const extra = compare.filter((c) => !progression.some((p) => p.src === c.src));
    return [...extra, ...progression];
  }

  /** Every gallery image of a case study, in page order. */
  protected galleryShots(gallery: GalleryGroup[]): Shot[] {
    return gallery.flatMap((g) => g.shots);
  }
}
