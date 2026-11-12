import { Component } from '@angular/core';

interface Stat {
  value: string;
  label: string;
  accent?: boolean;
}

interface Principle {
  icon: 'spark' | 'code' | 'chart' | 'grid';
  title: string;
  text: string;
}

interface Website {
  title: string;
  description: string;
  url: string;
  domain: string;
  screenshot: string;
  bilingual?: boolean;
  tint: 'indigo' | 'sky';
  tags: string[];
}

interface Platform {
  eyebrow: string;
  title: string;
  description: string;
  tags: string[];
}

interface InternalApp {
  eyebrow: string;
  title: string;
  description: string;
  tags: string[];
}

interface CaseStudy {
  number: string;
  title: string;
  meta: string;
  problem: string;
  approach: string;
  result: string;
  chips?: string[];
}

interface Job {
  role: string;
  company: string;
  period: string;
  summary?: string;
  areas?: { title: string; text: string }[];
}

@Component({
  imports: [],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected readonly name = 'Gilok Choi';
  protected readonly initials = 'GC';
  protected readonly title = 'Front-End Developer / UX Designer';
  protected readonly location = 'Long Island, New York';
  protected readonly email = 'higilok@yahoo.com';
  protected readonly linkedinUrl = 'https://www.linkedin.com/in/gilok-choi-13b859235/';
  protected readonly githubUrl = 'https://github.com/choigilok-dotcom';
  // Put your résumé in /public (e.g. public/resume.pdf) and set this to 'resume.pdf'
  // to show the "Download résumé" button.
  protected readonly resumeUrl = '';
  protected readonly year = new Date().getFullYear();

  protected readonly heroStats: Stat[] = [
    { value: '15', label: 'Years designing & building for the web' },
    { value: '50+', label: 'Internal applications designed and shipped', accent: true },
    { value: '10+', label: 'Public websites, blogs and intranets' },
  ];

  protected readonly principles: Principle[] = [
    {
      icon: 'spark',
      title: 'Prototype fast',
      text: 'Clickable ideas in hours using Claude AI, so stakeholders react to something real.',
    },
    {
      icon: 'code',
      title: 'Ship production code',
      text: 'Maintainable Angular and TypeScript, built on shared components.',
    },
    {
      icon: 'chart',
      title: 'Measure & improve',
      text: 'GA4, Microsoft Clarity and Lighthouse guide UX, accessibility and performance work.',
    },
    {
      icon: 'grid',
      title: 'Systemize',
      text: 'One design system so every new app starts consistent instead of from scratch.',
    },
  ];

  protected readonly websites: Website[] = [
    {
      title: 'IAS Website',
      description:
        'Bilingual company website. I developed and launched the Spanish version and ship new pages and features driven by Marketing initiatives and business requirements.',
      url: 'https://intlauto.com',
      domain: 'intlauto.com',
      screenshot: 'images/ias-home.jpg',
      bilingual: true,
      tint: 'indigo',
      tags: ['Angular', 'TypeScript', 'Localization (EN / ES)', 'Contentful'],
    },
    {
      title: 'MAS Website',
      description:
        'Modernized from Bootstrap components to native HTML for maintainability and performance, with ongoing feature enhancements.',
      url: 'https://militaryautosource.com',
      domain: 'militaryautosource.com',
      screenshot: 'images/mas-home.jpg',
      tint: 'sky',
      tags: ['Angular', 'TypeScript', 'Responsive Design', 'Performance'],
    },
  ];

  protected readonly platforms: Platform[] = [
    {
      eyebrow: 'Internal · 3 platforms',
      title: 'Company intranet',
      description:
        'Built the company intranet three times as the business and its technology evolved, and keep adding new and updated sections for changing business needs.',
      tags: ['IBM WebSphere', 'Microsoft SharePoint', 'Liferay + WildFly'],
    },
    {
      eyebrow: 'Public · 5+ blogs',
      title: 'Company blogs',
      description:
        'Developed and maintain more than five company blogs — templates, themes and plugins kept consistent in design, functionality and performance.',
      tags: ['IAS Blog', 'MAS Blog', 'Relocate USA', '+ more'],
    },
  ];

  protected readonly apps: InternalApp[] = [
    {
      eyebrow: 'Customers & sales',
      title: 'Customer Order Inquiry',
      description:
        'A read-only inquiry tool for military vehicle orders — and the app the company design system’s starter kit was extracted from.',
      tags: ['Angular', 'TypeScript', 'Design system'],
    },
    {
      eyebrow: 'Operations',
      title: 'Operations Dashboard',
      description:
        'An at-a-glance view of day-to-day operations, built on the company design system alongside six other internal apps.',
      tags: ['Angular', 'TypeScript', 'REST APIs'],
    },
  ];

  protected readonly caseStudies: CaseStudy[] = [
    {
      number: '01',
      title: 'A design system for internal applications',
      meta: 'Design system · Angular · Claude AI',
      problem:
        'Internal apps were built one at a time with no shared standard. Every app looked and behaved differently, and hand-copied button and status-pill markup had spread across about 10 feature files.',
      approach:
        'Designed and built the system end to end in Claude AI — brand, color, type, spacing, tokens and usage rules. Extracted a portable starter kit from the Customer Order Inquiry tool with five shared Angular components: button, badge, section card, field list and progress steps.',
      result:
        'Seven internal applications now run on the system, with more in development — and every new app starts from the same kit.',
      chips: [
        'Task List',
        'Operations Dashboard',
        'Custom Email System',
        'Vendor Disbursement',
        'Customer Order Inquiry',
        'Vehicle Management',
        'Document Management',
      ],
    },
    {
      number: '02',
      title: 'IAS & MAS websites — Spanish launch and modernization',
      meta: 'Web · Localization · Performance',
      problem:
        'Both websites ran on Bootstrap components with JavaScript errors and performance issues, and content updates were hard to manage.',
      approach:
        'Developed and launched the Spanish IAS site, then replaced Bootstrap components with native HTML across both sites. I maintain the Contentful CMS and the templates, themes and plugins for 5+ company blogs including IAS, MAS and Relocate USA, monitored with GA4, Clarity and Lighthouse.',
      result:
        'Both sites run on maintainable native HTML with JavaScript errors resolved and ongoing performance monitoring. The Spanish version is live alongside English.',
    },
  ];

  protected readonly experience: Job[] = [
    {
      role: 'Front-End Developer / UX Designer',
      company: 'OMSC',
      period: 'Apr 2014 – Present · Full-time',
      areas: [
        {
          title: 'Websites & blogs',
          text: 'Build and maintain two bilingual company sites and the Contentful CMS, plus 5+ company blogs including IAS, MAS and Relocate USA.',
        },
        {
          title: 'Internal apps & intranet',
          text: 'Designed and built 50+ internal applications, and built and maintain the company intranet on three platforms: WebSphere, SharePoint and Liferay (WildFly).',
        },
        {
          title: 'UX & quality',
          text: 'Established the company design system and starter kit; drive UX, accessibility and performance improvements with GA4, Clarity and Lighthouse.',
        },
      ],
    },
    {
      role: 'Assistant Professor',
      company: 'Pratt Institute · New York',
      period: 'Sep 2008 – May 2014 · Full-time',
      summary:
        'Introduced a course in IA and UX Design, teaching design briefs, user personas, card sorting, fast prototyping, wireframes and related design methods.',
    },
    {
      role: 'Front-End Developer',
      company: 'Instigator · New York',
      period: 'Jan 2012 – Dec 2013 · Part-time',
      summary:
        'Built a responsive website with HTML, CSS, JavaScript, jQuery and Bootstrap, and ran design reviews and user surveys to identify needs and expectations.',
    },
  ];

  protected readonly skills: { group: string; items: string[] }[] = [
    {
      group: 'Front-end',
      items: [
        'Angular',
        'TypeScript',
        'JavaScript',
        'HTML',
        'CSS / SCSS',
        'Tailwind CSS',
        'Bootstrap',
        'DOM API',
        'Responsive Design',
        'REST APIs',
      ],
    },
    {
      group: 'UX & design',
      items: [
        'UX Design',
        'Design Systems',
        'Wireframing',
        'Prototyping',
        'Accessibility (WCAG)',
        'Figma',
        'Adobe XD',
        'Balsamiq',
        'Adobe Fireworks',
      ],
    },
    {
      group: 'Tools & workflow',
      items: [
        'Claude AI',
        'Contentful',
        'GA4',
        'Microsoft Clarity',
        'Lighthouse',
        'Git',
        'IBM WebSphere',
        'SharePoint',
        'Liferay',
        'WildFly',
      ],
    },
  ];
}
