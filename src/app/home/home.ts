import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  apps,
  caseCards,
  education,
  featuredCase,
  heroStats,
  principles,
  profile,
  toolkit,
  webWork,
} from '../content';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  host: { class: 'home' },
})
export class Home {
  protected readonly location = profile.location;
  protected readonly email = profile.email;
  protected readonly linkedinUrl = profile.linkedinUrl;
  protected readonly resumeUrl = profile.resumeUrl;

  protected readonly heroStats = heroStats;
  protected readonly featured = featuredCase;
  protected readonly caseCards = caseCards;
  protected readonly principles = principles;
  protected readonly webWork = webWork;
  protected readonly apps = apps;
  protected readonly toolkit = toolkit;
  protected readonly education = education;

  /** Hero screenshot callouts: position on the image (%) and what each marks. */
  protected readonly pins = [
    {
      x: 2.5,
      y: 36,
      text: 'Every document type is a checkbox with a count, replacing a collapsible tree.',
    },
    { x: 29, y: 19, text: 'Tabs split work by review state, so “To Review” comes first.' },
    { x: 86.5, y: 18.4, text: 'A Columns menu lets people hide what they don’t need.' },
  ];
}
