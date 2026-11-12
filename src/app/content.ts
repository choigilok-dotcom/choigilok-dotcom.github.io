/* Site content shared by the home page and the case studies page. */

export interface Stat {
  value: string;
  label: string;
  accent?: boolean;
}

export interface Principle {
  icon: 'spark' | 'code' | 'chart' | 'grid';
  title: string;
  text: string;
}

export interface Website {
  title: string;
  description: string;
  url: string;
  domain: string;
  screenshot: string;
  bilingual?: boolean;
  tint: 'indigo' | 'sky';
  tags: string[];
}

export interface Platform {
  eyebrow: string;
  title: string;
  description: string;
  tags: string[];
}

export interface InternalApp {
  eyebrow: string;
  title: string;
  description: string;
  tags: string[];
}

/** A full screenshot that opens in the lightbox. */
export interface Shot {
  src: string;
  label: string;
  caption: string;
  width: number;
  height: number;
}

/** One prototype iteration, shown as a tab against the original. */
export interface Prototype extends Shot {
  /** Short tab name, e.g. "Structure". */
  tab: string;
  /** One sentence on what this iteration set out to do. */
  focus: string;
  /** Issues this iteration solved; `issue` links to the numbered audit item. */
  solves: { issue?: number; text: string }[];
  /** What this iteration left for the next one. */
  stillOpen?: string;
}

/** A cropped detail image shown inline in the audit. */
export interface Detail {
  src: string;
  width: number;
  height: number;
}

export interface AuditItem {
  title: string;
  problem: string;
  fix: string;
  before?: Detail;
  after?: Detail;
  /** Wide crops: stack before and after full-width instead of side by side. */
  wide?: boolean;
}

export interface CaseStudy {
  /** Anchor id on the case studies page. */
  id: string;
  number: string;
  title: string;
  meta: string;
  /** One line for the home page preview card. */
  summary: string;
  problem: string;
  approach: string;
  result: string;
  status?: string;
  chips?: string[];
  /** Before / after pair shown large. */
  compare?: Shot[];
  audit?: AuditItem[];
  /** Prototype iterations shown as tabs. */
  progression?: Prototype[];
  /** Grouped screenshots of the work itself. */
  gallery?: GalleryGroup[];
}

export interface GalleryGroup {
  title: string;
  note: string;
  /** Show shots at their natural size, one per row on small screens (boards, sheets). */
  natural?: boolean;
  shots: Shot[];
}

export interface Job {
  role: string;
  company: string;
  period: string;
  summary?: string;
  areas?: { title: string; text: string }[];
}

export const profile = {
  name: 'Gilok Choi',
  initials: 'GC',
  title: 'Front-End Developer / UX Designer',
  location: 'Long Island, New York',
  email: 'higilok@yahoo.com',
  linkedinUrl: 'https://www.linkedin.com/in/gilok-choi-13b859235/',
  githubUrl: 'https://github.com/choigilok-dotcom',
  // Put your résumé in /public (e.g. public/resume.pdf) and set this to 'resume.pdf'
  // to show the "Download résumé" button.
  resumeUrl: '',
};

export const heroStats: Stat[] = [
  { value: '15', label: 'Years designing & building for the web' },
  { value: '50+', label: 'Internal applications designed and shipped', accent: true },
  { value: '10+', label: 'Public websites, blogs and intranets' },
];

export const principles: Principle[] = [
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

export const websites: Website[] = [
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

export const platforms: Platform[] = [
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

export const apps: InternalApp[] = [
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

const inv = 'images/inventory/';
const detail = (name: string, width: number, height: number): Detail => ({
  src: `${inv}detail-${name}.webp`,
  width,
  height,
});

const ds = 'images/design-system/';
const dsShot = (file: string, label: string, caption: string, width = 1440, height = 900): Shot => ({
  src: `${ds}${file}.webp`,
  label,
  caption,
  width,
  height,
});

export const caseStudies: CaseStudy[] = [
  {
    id: 'mas-inventory',
    number: '01',
    title: 'MAS Inventory — redesigning the sales team’s vehicle search',
    meta: 'UX audit · Prototyping · Design system',
    summary: 'A 10-point UX audit of the sales team’s vehicle search, and four prototypes that fix it.',
    status: 'In progress',
    problem:
      'Promo badges covered the vehicle photos, and the price sat a full card-width away from the vehicle name. Pricing details changed from card to card, and Stock numbers and VINs were grey fine print. The filter sidebar clipped its own counts and showed database codes like MAS_ON_BASE. Only about 2½ vehicles fit on screen.',
    approach:
      'Audited the screen and iterated through four prototypes on the company design system. Moved badges off the photo and put name and price in one header bar. Made MSRP and savings consistent on every card. Gave Stock, VIN and arrival date a labeled column with copy buttons and color-coded stock age. Rebuilt the filters with collapsible sections, a price slider and counts that fit.',
    result:
      'Prototype 4 is the current direction: about 60% more vehicles per screen with no information lost, and the details sales staff look up most are labeled and one click to copy.',
    compare: [
      {
        src: `${inv}original.webp`,
        label: 'Before · Original',
        caption:
          'Badges cover the photo, price sits far from the name, Stock and VIN are fine print, and the filter sidebar clips its counts. (Stock numbers and VINs blurred.)',
        width: 1339,
        height: 905,
      },
      {
        src: `${inv}prototype-4.webp`,
        label: 'After · Prototype 4',
        caption:
          'Copy buttons for Stock and VIN, color-coded stock age, badges beside the model line, and savings right under the price.',
        width: 1213,
        height: 826,
      },
    ],
    audit: [
      {
        title: 'Badges cover the vehicle photo',
        problem:
          '“MAS Special”, “Clearance”, “Low mileage” and “New arrival” sit on top of the image and pile up, clashing with the dealer banner already printed in the photos.',
        fix: 'The photo keeps one round NEW / PRE-OWNED marker in the same spot on every card. Marketing badges move into the text as small labeled pills beside the model line.',
        before: detail('badges-before', 340, 255),
        after: detail('badges-after', 525, 175),
      },
      {
        title: 'Price is far from the vehicle name',
        problem:
          'The name is at the left of the card and the price is in a separate column on the far right, so matching a car to its price means reading across the whole card.',
        fix: 'Name and price share one header bar, so each card reads as one line: “2026 Chrysler Voyager … $44,542”.',
        before: detail('price-before', 983, 255),
        after: detail('price-after', 891, 183),
        wide: true,
      },
      {
        title: 'Pricing details change from card to card',
        problem:
          'One card shows only savings, one shows the price alone, and one shows MSRP plus savings, so sales staff can’t compare deals at a glance.',
        fix: 'Every card shows the same three things in the same place: price, MSRP with destination, and a green “Save $X” chip.',
        before: detail('pricing-before', 215, 284),
        after: detail('pricing-after', 207, 222),
      },
      {
        title: 'Specs run together as one line of text',
        problem:
          '“10,532 mi AWD 6 Cylinder Engine ● Black 23/32 mpg” has no structure, so comparing cars down the list is slow.',
        fix: 'Mileage, drivetrain and mpg become fixed-width chips that line up from card to card. Engine and color get their own rows with icons.',
        before: detail('specs-before', 424, 120),
        after: detail('specs-after', 360, 72),
      },
      {
        title: 'Stock number, VIN and arrival date are fine print',
        problem:
          'They’re tiny grey text that wraps mid-phrase, yet staff look them up constantly. (Blurred here.)',
        fix: 'A labeled Stock / VIN / Arrived column with copy buttons. Days in stock is color-coded: amber for aging inventory, teal for new arrivals.',
        before: detail('stock-before', 424, 45),
        after: detail('stock-after', 340, 72),
      },
      {
        title: 'The location layout breaks',
        problem:
          'The pin icon sits alone on one line with the address wrapped below it, and on/off-base status is a separate tag at the top of the card.',
        fix: 'One row holds the PX On-Base / AX Off-Base tag, the pin, the city and the facility.',
        before: detail('location-before', 424, 50),
        after: detail('location-after', 550, 40),
        wide: true,
      },
      {
        title: 'The filter sidebar is clipped and shows internal codes',
        problem:
          'Inventory counts are cut off (“Used (”), the sidebar scrolls sideways, and database codes like MAS_ON_BASE show to users.',
        fix: 'A base dropdown plus an All / New / Used toggle whose counts fit. Sections open and close, less-used filters start closed, and makes with zero vehicles are greyed out.',
        before: detail('filters-before', 278, 210),
        after: detail('filters-after', 220, 130),
      },
      {
        title: 'The price filter needs typing',
        problem: 'Empty min and max boxes give no hint of the price range in stock.',
        fix: 'A range slider preset to the inventory’s real range, $24,980 to $68,450.',
        before: detail('slider-before', 278, 80),
        after: detail('slider-after', 220, 90),
      },
      {
        title: 'Few vehicles fit on screen',
        problem: 'Each card is about 255px tall, so only about 2½ vehicles fit in one screen.',
        fix: 'Tighter cards show 4 to 4½ vehicles in about the same height — around 60% more per screen, with no information lost. Compare the full screens above.',
      },
      {
        title: 'Weak branding and floating actions',
        problem:
          'The white header has no brand mark, and the PDF and View vehicle buttons float at the bottom of a tall price column.',
        fix: 'A navy header with a logo and the search inside it. A small PDF icon button sits beside the primary “View Vehicle ›” button at the bottom-right of each card.',
        before: detail('header-before', 1339, 70),
        after: detail('header-after', 1154, 44),
        wide: true,
      },
    ],
    progression: [
      {
        src: `${inv}prototype-1.webp`,
        label: 'Prototype 1 · Structure',
        tab: 'Structure',
        caption:
          'Spec chips, a labeled Stock / VIN / Arrived column, collapsible filter sections and a price range slider.',
        width: 1198,
        height: 849,
        focus: 'Rebuilt the vehicle card and the filter sidebar from the ground up.',
        solves: [
          {
            issue: 1,
            text: 'Badges come off the photo. It keeps one round NEW / PRE-OWNED marker, and marketing badges move to the top-right of the card text.',
          },
          {
            issue: 4,
            text: 'Mileage, drivetrain and mpg become chips that line up from card to card. Engine and color get their own rows.',
          },
          {
            issue: 5,
            text: 'Stock number, VIN and arrival date get their own labeled column instead of grey fine print.',
          },
          {
            issue: 6,
            text: 'Pin, city and facility sit on one row with the PX On-Base / AX Off-Base tag.',
          },
          {
            issue: 7,
            text: 'A base dropdown and an All / New / Used toggle replace the clipped rows. Sections open and close, and zero-count makes are greyed out.',
          },
          { issue: 8, text: 'A price range slider replaces the empty min and max boxes.' },
          { issue: 9, text: 'Tighter cards fit about 4½ vehicles per screen instead of 2½.' },
          {
            issue: 10,
            text: 'A navy header with a logo and the search inside it. A PDF icon button sits beside “View Vehicle”.',
          },
        ],
        stillOpen: 'The price still sits in its own column, away from the vehicle name.',
      },
      {
        src: `${inv}prototype-2.webp`,
        label: 'Prototype 2 · Scanning',
        tab: 'Scanning',
        caption: 'Name and price share one header bar, so each vehicle reads as a single line.',
        width: 1176,
        height: 850,
        focus: 'Made each card readable in one glance, left to right.',
        solves: [
          {
            issue: 2,
            text: 'Name and price share a header bar across the top of the card, so “2026 Audi Q3 … $46,290” reads as one line.',
          },
          {
            text: 'Status badges and the base tag line up in one row above the specs, so a vehicle’s status reads in one place.',
          },
        ],
        stillOpen: 'MSRP and savings are still small text under the price, and days in stock is plain text.',
      },
      {
        src: `${inv}prototype-3.webp`,
        label: 'Prototype 3 · Pricing',
        tab: 'Pricing',
        caption: 'Every card shows MSRP and savings the same way, and days in stock becomes a chip.',
        width: 1182,
        height: 830,
        focus: 'Made the pricing read the same way on every card.',
        solves: [
          {
            issue: 3,
            text: 'Pricing becomes labeled rows — “MSRP w/ dest.” and “You save” — in the same place on every card.',
          },
          {
            issue: 5,
            text: 'Days in stock becomes a chip next to the arrival date, so aging inventory stands out.',
          },
          { text: 'Badges move to the right of the card, away from the specs.' },
        ],
        stillOpen: 'Staff still have to select Stock and VIN by hand to copy them.',
      },
      {
        src: `${inv}prototype-4.webp`,
        label: 'Prototype 4 · Daily use',
        tab: 'Daily use',
        caption:
          'Copy buttons for Stock and VIN, color-coded stock age, badges beside the model line, and savings right under the price.',
        width: 1213,
        height: 826,
        focus: 'Tuned the card for the tasks sales staff repeat all day. This is the current direction.',
        solves: [
          { issue: 5, text: 'Copy buttons next to Stock and VIN — one click instead of selecting text.' },
          {
            issue: 5,
            text: 'Days in stock is color-coded: amber for aging inventory, teal for new arrivals, so managers spot slow sellers.',
          },
          {
            issue: 3,
            text: 'MSRP and a green “Save $X” chip sit directly under the price in the header.',
          },
          { issue: 1, text: 'Marketing badges move beside the model line in the header.' },
          { issue: 6, text: 'The base tag moves into the location row.' },
        ],
      },
    ],
  },
  {
    id: 'design-system',
    number: '02',
    title: 'A design system for internal applications',
    meta: 'Design system · Angular · Claude AI',
    summary: 'One shared design system and Angular starter kit, now behind seven internal apps.',
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
    gallery: [
      {
        title: 'Foundations',
        note: 'Every value comes from a named, closed set: one primary blue, seven inks, six surfaces, a seven-step type scale and Tailwind’s default spacing. No one-off sizes or colors.',
        natural: true,
        shots: [
          dsShot('foundations-color', 'Color', 'Brand colors, ink, surfaces and status pills.', 1816, 1186),
          dsShot('foundations-type', 'Type', 'Inter for the interface, IBM Plex Mono for every number, on a fixed scale from 10 to 21px.', 1816, 916),
          dsShot('foundations-layout', 'Spacing, radius and elevation', 'Spacing steps, three radii, five shadows, the app header and Font Awesome icons.', 1816, 1280),
        ],
      },
      {
        title: 'Components',
        note: 'The five shared Angular components each new app starts with. They replaced button and status-pill markup that had been copied by hand into about 10 feature files.',
        natural: true,
        shots: [
          dsShot('components', 'Shared components', 'Button (six variants and two sizes), Badge, SectionCard, FieldList and ProgressSteps.', 1440, 292),
        ],
      },
      {
        title: 'In use: Customer Order Inquiry',
        note: 'The reference app the starter kit was extracted from. Staff find a customer, pick an order and read its vehicle, shipping, financial and activity detail. Shown with sample data.',
        shots: [
          dsShot('app-landing', 'Landing', 'Search by customer number or name, with three cards explaining the flow.'),
          dsShot('app-summary', 'Account summary', 'One card per order, with a FieldList and a progress column.'),
          dsShot('app-vehicle', 'Vehicle details', 'Options and codes, a status pill and the ProgressSteps bar.'),
          dsShot('app-financials', 'Financials', 'Financing, pricing and the AR ledger. Every figure is set in IBM Plex Mono.'),
          dsShot('app-activity', 'Activity', 'Tasks, documents, mail history and comments, in tabs with a segmented control.'),
        ],
      },
    ],
  },
  {
    id: 'websites',
    number: '03',
    title: 'IAS & MAS websites — Spanish launch and modernization',
    meta: 'Web · Localization · Performance',
    summary: 'Launched the Spanish IAS site and moved both company sites from Bootstrap to native HTML.',
    problem:
      'Both websites ran on Bootstrap components with JavaScript errors and performance issues, and content updates were hard to manage.',
    approach:
      'Developed and launched the Spanish IAS site, then replaced Bootstrap components with native HTML across both sites. I maintain the Contentful CMS and the templates, themes and plugins for 5+ company blogs including IAS, MAS and Relocate USA, monitored with GA4, Clarity and Lighthouse.',
    result:
      'Both sites run on maintainable native HTML with JavaScript errors resolved and ongoing performance monitoring. The Spanish version is live alongside English.',
  },
];

export const experience: Job[] = [
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

export const skills: { group: string; items: string[] }[] = [
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
