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
  /** Screen-by-screen redesign: original on the left, new design on the right. */
  screens?: ScreenPair[];
}

export interface ScreenPair {
  title: string;
  caption: string;
  /** Missing when there is no screenshot of the original; `beforeNote` describes it instead. */
  before?: Shot;
  beforeNote?: string;
  /** Missing until the new design is ready. */
  after?: Shot;
  /** Screens added by the redesign that have no original counterpart, shown under the pair. */
  extras?: Shot[];
  /** Show the original and `extras` side by side, then the redesign full width below. */
  stackRedesign?: boolean;
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
  email: 'choigilok@gmail.com',
  linkedinUrl: 'https://www.linkedin.com/in/gilok-choi-13b859235/',
  // Résumé files live in /public/resume.
  resumeUrl: 'resume/Gilok_Choi_Resume.pdf',
  resumeDocxUrl: 'resume/Gilok_Choi_Resume.docx',
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

const dt = 'images/doctree/';
/** All DocTree screenshots are 2162 × 1352. */
const dtShot = (file: string, label: string, caption: string): Shot => ({
  src: `${dt}${file}.webp`,
  label,
  caption,
  width: 2162,
  height: 1352,
});
const dtPair = (name: string, title: string, caption: string, extras?: Shot[], stackRedesign?: boolean): ScreenPair => ({
  title,
  caption,
  before: dtShot(`before-${name}`, `Original · ${title}`, caption),
  after: dtShot(`after-${name}`, `Redesign · ${title}`, caption),
  extras,
  stackRedesign,
});

const vd = 'images/vendor-disbursements/';
/** `redesign` is the [width, height] of images/vendor-disbursements/redesign-N.webp, once it exists. */
const vdScreen = (
  n: number,
  title: string,
  caption: string,
  width: number,
  height: number,
  redesign?: [number, number],
): ScreenPair => ({
  title,
  caption,
  before: { src: `${vd}original-${n}.webp`, label: `Original · ${title}`, caption, width, height },
  after: redesign && {
    src: `${vd}redesign-${n}.webp`,
    label: `Redesign · ${title}`,
    caption,
    width: redesign[0],
    height: redesign[1],
  },
});

export const caseStudies: CaseStudy[] = [
  {
    id: 'doctree',
    number: '01',
    title: 'Document Management System — from a collapsible tree to a review-first workspace',
    meta: 'Document management · Redesign · Angular rebuild',
    summary:
      'Redesigning an internal document management app, then rebuilding its front end in Angular without breaking a single link.',
    problem:
      'DocTree stores the documents attached to ERP records across 300+ document types. Reviewers open it from a link in the ERP, find a record’s documents, and accept or reject each one. The original showed documents as a collapsible tree grouped by type, so reviewers expanded groups one by one to find work. Status was shown by unlabelled icons, navigation hid in a drawer, editing created duplicate records, and failed uploads looked successful.',
    approach:
      'I worked in four stages, each shippable on its own: a redesign on the existing pages, replacing the paid grid component with my own table, rebuilding every page in Angular (strict TypeScript, signals) behind the same URLs, and a small design system. Before the rebuild I audited every behaviour of the old pages, so each one was kept or fixed on purpose.',
    result:
      'Reviewers start from what still needs review, with a status legend, filters in one place and an edit panel that updates records instead of duplicating them. All 11 Documents URLs still work, so ERP links are untouched. No paid UI libraries remain, the audit’s security gaps are fixed, and 1,056 automated tests cover the new code at 100% line, branch and function coverage.',
    chips: ['UX research', 'Interaction design', 'Angular', 'TypeScript', 'Tailwind CSS', 'Design system', 'Testing'],
    screens: [
      dtPair(
        'nav-menu',
        'Every page · Navigation',
        'Pages were hidden in a side drawer, the header held four buttons in four colours and a repeated title. Navigation now lives in the header as Home, Administration and Account menus, and each role has a one-line description.',
      ),
      dtPair(
        'home',
        'Home · Search',
        'The form was split into four boxed groups and the Search button sat below the fold on a laptop. Now one card with labelled sections, with Search always in view at the top right.',
      ),
      dtPair(
        'search-results',
        'Documents · Review table',
        'Documents were nested under collapsible type groups, with unlabelled status icons and raw keys like customer_account_id. Now one flat table with review-state tabs and counts, a status legend, readable labels and frozen first columns.',
        [
          dtShot('after-sidebar-collapsed', 'New · Collapsible filters', 'Search, a date range and a document-type checklist with counts in one sidebar. It collapses to a strip and the browser remembers the choice.'),
          dtShot('after-columns-menu', 'New · Columns menu', 'Show or hide any column except Document, so wide tables can be narrowed.'),
        ],
      ),
      dtPair(
        'edit',
        'Documents · Edit',
        'The pencil opened a context menu over the status column, and "Add Document Properties" opened an empty form that saved a duplicate record. Now a side panel with pre-filled Document Type, Status and Properties sections, each with its own Save that updates the existing record.',
        [dtShot('before-properties', 'Original · Properties form', 'The original properties form opened empty, and saving it created a second record.')],
        true,
      ),
      dtPair(
        'upload',
        'Documents · Upload',
        'The dialog scrolled inside itself, the File field was out of view, and any server response closed it as if the upload worked. Now a compact form with File first; a failed upload keeps the dialog open and says why.',
        [dtShot('after-upload-type-picker', 'New · Document type picker', 'A searchable picker replaces a plain dropdown of 300+ document types.')],
      ),
      dtPair(
        'admin-home',
        'Administration · Landing page',
        'A large green tile sat beside three blue buttons, with nothing saying what each managed. Now two matching cards, each with a one-line description.',
      ),
      dtPair(
        'document-types',
        'Administration · Document types',
        'Filter icons on every column but no record count and no visible way to add an entry. Now a search box, "306 out of 306", Columns and Add buttons, in the same table style as Documents.',
      ),
      dtPair(
        'role-mapping',
        'Administration · Role mapping',
        'The same grid issues, plus a misspelled "Acccess Level" header. Now sortable headers and the shared table style, so there is one table to learn.',
      ),
      {
        title: 'People without a role · No access',
        caption:
          'Someone who signed in without a DocTree role got a blank page with the single word "Forbidden". Now a card explains the account has no role yet and links back to Home.',
        beforeNote: 'A blank page with only the word “Forbidden”',
        after: dtShot('after-no-access', 'Redesign · No access', 'A card that explains what happened, with a way back to Home.'),
      },
    ],
  },
  {
    id: 'mas-inventory',
    number: '02',
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
    number: '03',
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
    id: 'vendor-disbursements',
    number: '04',
    title: 'Vendor Disbursements — redesigning the approval admin tools',
    meta: 'Admin tools · Workflow · Redesign',
    summary: 'Redesigning the tools admins use to move in-flight work and maintain the approval rules for vendor payments.',
    status: 'In progress',
    problem:
      'When someone changes roles or leaves, admins move the work waiting on them and update the approval rules that route each vendor payment. The original screens did the job, but key states were easy to miss: disabled steps looked like faint text, an error that blocks every bulk change was one line of red text, and moving someone’s work and replacing them in the rules lived in two separate tools.',
    approach:
      'Redesigning each admin screen of Reassign Work and Bulk Rules & Tester on the company design system, one screen at a time against the original.',
    result: 'In progress. Each redesigned screen appears next to its original below.',
    screens: [
      vdScreen(1, 'Reassign Work · Choose people', 'Pick whose work to move and who receives it. Everyone with work waiting is listed with counts by role.', 1497, 914, [1484, 911]),
      vdScreen(2, 'Reassign Work · Review disbursements', 'Select the disbursements to move and give a reason that is saved in each disbursement’s history.', 1514, 871, [1481, 910]),
      vdScreen(3, 'Reassign Work · Result', 'What moved, a CSV copy, and a reminder that the approval rules still send new work to the old person.', 1483, 865, [1478, 912]),
      vdScreen(4, 'Bulk Rules · Replace user', 'Swap one person for another on every approval rule and level, with a preview before anything is saved.', 1501, 907, [1476, 911]),
      vdScreen(5, 'Bulk Rules · Get the file', 'Download the ruleset as an Excel file, edit it, and upload it again.', 1476, 911, [1472, 911]),
      vdScreen(6, 'Bulk Rules · Review changes', 'See what the uploaded file adds, changes and deletes before testing it.', 1489, 911, [1480, 911]),
      vdScreen(7, 'Bulk Rules · Apply', 'Apply the tested change. A backup of the current rules is taken first.', 1498, 911, [1472, 910]),
    ],
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

// Experience section is hidden for now. Set to true to show it again (section + nav link).
export const showExperience = false;
// Skills (Toolkit) section is hidden for now. Set to true to show it again (section + nav link).
export const showSkills = false;

export const skills: { group: string; items: string[]; wide?: boolean }[] = [
  {
    group: 'UX/UI design & prototyping',
    items: ['Figma', 'Balsamiq', 'Photoshop', 'Illustrator'],
  },
  {
    group: 'Front-end development',
    items: [
      'HTML5',
      'CSS3',
      'JavaScript',
      'TypeScript',
      'Angular',
      'AngularJS',
      'Bootstrap',
      'Tailwind CSS',
      'Flexbox',
      'CSS Grid',
      'Sass',
    ],
  },
  {
    group: 'AI-assisted design & development',
    items: [
      'Claude AI',
      'AI-Assisted UX Design',
      'AI-Assisted Prototyping',
      'AI-Assisted Front-end Development',
    ],
  },
  {
    group: 'Evaluation tools',
    items: ['Google Lighthouse', 'GA4', 'Clarity'],
  },
  {
    group: 'Development tools',
    items: ['Git', 'Chrome DevTools', 'npm'],
  },
  {
    group: 'CMS & enterprise platforms',
    items: ['Contentful', 'WordPress', 'Drupal', 'SharePoint', 'Liferay', 'IBM WebSphere', 'Magento'],
  },
  {
    group: 'Additional technologies',
    items: ['jQuery', 'Dojo', 'PHP', 'Java', 'XML', 'MySQL'],
    wide: true,
  },
];
