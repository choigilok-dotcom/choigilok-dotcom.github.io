import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {
  apps,
  caseStudies,
  heroStats,
  platforms,
  principles,
  profile,
  skills,
  showSkills,
  websites,
} from '../content';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
})
export class Home {
  protected readonly location = profile.location;
  protected readonly email = profile.email;
  protected readonly linkedinUrl = profile.linkedinUrl;
  protected readonly resumeUrl = profile.resumeUrl;
  protected readonly resumeDocxUrl = profile.resumeDocxUrl;

  protected readonly heroStats = heroStats;
  protected readonly principles = principles;
  protected readonly websites = websites;
  protected readonly platforms = platforms;
  protected readonly apps = apps;
  protected readonly caseStudies = caseStudies;
  protected readonly skills = skills;
  protected readonly showSkills = showSkills;
}
