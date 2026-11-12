import { Routes } from '@angular/router';
import { CaseStudy } from './case-studies/case-study';
import { caseStudies } from './content';
import { Home } from './home/home';

export const routes: Routes = [
  { path: '', component: Home, title: 'Gilok Choi — Front-End Developer / UX Designer' },
  // One page per case study; `data.id` binds to the component's `id` input.
  ...caseStudies.map((cs) => ({
    path: `case-studies/${cs.id}`,
    component: CaseStudy,
    data: { id: cs.id },
    title: `${cs.title.split(' — ')[0]} — Case study ${cs.number} — Gilok Choi`,
  })),
  { path: 'case-studies', redirectTo: `case-studies/${caseStudies[0].id}`, pathMatch: 'full' },
  { path: '**', redirectTo: '' },
];
