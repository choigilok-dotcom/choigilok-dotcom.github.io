import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { experience, profile } from '../content';

@Component({
  selector: 'app-experience',
  imports: [RouterLink],
  templateUrl: './experience.html',
})
export class Experience {
  protected readonly experience = experience;
  protected readonly email = profile.email;
  protected readonly resumeUrl = profile.resumeUrl;
}
