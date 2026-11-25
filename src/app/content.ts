/* Site content shared by the home page and the case studies page. */

export interface Stat {
  value: string;
  label: string;
}

export interface Principle {
  title: string;
  text: string;
}

/** A row in the home page's "Selected work" index. */
export interface WebWork {
  title: string;
  kind: string;
  description: string;
  stack: string[];
  url?: string;
  /** Homepage screenshot (1440 × 900) shown in a browser frame. */
  screenshot?: string;
  domain?: string;
}

/** The case study shown large on the home page. */
export interface FeaturedCase {
  id: string;
  label: string;
  heading: string;
  summary: string;
  /** The same task walked through before and after the redesign. */
  task: { before: string[]; beforeNote: string; after: string[]; afterNote: string };
  compare: { before: Shot; after: Shot };
  results: { value: string; label: string }[];
}

/** A smaller case study card on the home page. */
export interface CaseCard {
  id: string;
  title: string;
  text: string;
  /** Screenshot at the top of the card. */
  shot: { src: string; alt: string; width: number; height: number };
}

export interface InternalApp {
  eyebrow: string;
  title: string;
  description: string;
  tags: string[];
  /** Link to a live demo of the app, if one is published. */
  demoUrl?: string;
}

/** A live, clickable demo listed in the header’s Live demos menu. */
export interface Demo {
  title: string;
  /** One short line under the title in the menu. */
  description: string;
  /** Path of a static app build under /public. */
  url: string;
}

/** Live demos. To add one: copy its build into public/demos/<name>/ and add an entry here. */
export const demos: Demo[] = [
  {
    title: 'Customer Order Inquiry',
    description: 'A customer’s orders, shipping and payments on one page',
    url: 'demos/customer-order-inquiry/',
  },
  {
    title: 'Custom Email System',
    description: 'Order emails merged from approved templates',
    url: 'demos/on-demand-email-system/',
  },
];

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
  /** Product name for the label above the headline; falls back to the part of `title` before ' — '. */
  name?: string;
  /** Case study page headline; falls back to `title`. A newline forces a line break on wide screens. */
  heading?: string;
  /** Longer intro for the case study page; falls back to `summary`. */
  lede?: string;
  /** Callout beside the lede that names the headline change and links to the first screen. */
  keyChange?: { lead: string; text: string; link: string };
  /** Role, stack, timeline and team, shown in a row under the intro. */
  facts?: { label: string; value: string }[];
  /** Large screenshot at the end of the page header. */
  heroShot?: Shot;
  /** Context section: who uses the app, a flow diagram and the stages of the work. */
  context?: CaseContext;
  problem: string;
  approach: string;
  result?: string;
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

export interface CaseContext {
  heading: string;
  paragraphs: string[];
  /** Steps of the optional flow diagram, top to bottom. */
  flow?: { icon: 'record' | 'tree' | 'review'; title: string; sub?: string; outcomes?: boolean }[];
  roles?: { label: string; chips: string[] };
  /** Lead-in line shown above the stage cards. */
  stagesIntro: string;
  stages: { title: string; date: string; text: string }[];
}

export interface ScreenPair {
  title: string;
  /** Short intro under the title. Optional when `notes` carry the story. */
  caption?: string;
  /** The issue, what changed and why, shown in three columns under the screenshots. */
  notes?: { issue: string; changed: string; why: string };
  /** A task walked through before and after, shown as two numbered lists. */
  steps?: { task: string; before: string[]; after: string[] };
  /** Highlight this pair as the headline change. */
  featured?: boolean;
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
  location?: string;
  period: string;
  /** Full-time, Part-time, Internship… */
  kind?: string;
  bullets: string[];
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
  { value: '15', label: 'years designing and building for the web' },
  { value: '12+', label: 'years leading front-end work at OMSC' },
  { value: '50+', label: 'internal applications designed and shipped' },
  { value: '10+', label: 'public websites, blogs and intranets' },
];

export const principles: Principle[] = [
  {
    title: 'Prototype fast',
    text: 'I turn ideas into clickable prototypes early, so users and stakeholders react to something real before anything gets built.',
  },
  {
    title: 'Ship production code',
    text: 'I build the design myself as accessible, responsive front-end code from reusable components, so what ships matches what was tested.',
  },
  {
    title: 'Measure and improve',
    text: 'I watch how people use what shipped, then improve usability, accessibility and speed based on evidence.',
  },
  {
    title: 'Systemize',
    text: 'One design system, so every new app starts consistent instead of from scratch.',
  },
];

export const webWork: WebWork[] = [
  {
    title: 'MAS Website',
    kind: 'Public · Full site',
    description:
      'The car-buying program for U.S. military and State Department personnel serving overseas. I build every page, from vehicle shopping and trade-ins to order tracking, with content from Contentful and live data from REST APIs.',
    stack: ['Angular', 'TypeScript', 'Bootstrap', 'Contentful', 'REST APIs'],
    url: 'https://militaryautosource.com',
    domain: 'militaryautosource.com',
    screenshot: 'images/mas-home.jpg',
  },
  {
    title: 'IAS Website',
    kind: 'Public · Bilingual',
    description:
      'I took this site bilingual. With Angular localization, I launched a full Spanish version of every page from the same codebase as the English site, so newcomers buying a car in the U.S. can shop in their own language.',
    stack: [
      'Angular',
      'Angular Localization',
      'TypeScript',
      'Bootstrap',
      'Contentful',
      'REST APIs',
    ],
    url: 'https://intlauto.com',
    domain: 'intlauto.com',
    screenshot: 'images/ias-home.jpg',
  },
  {
    title: 'Company intranet',
    kind: 'Internal · 3 platforms',
    description:
      'The company’s internal site for employees. I’ve built it three times on three platforms as the business and its technology evolved, and keep adding sections as needs change.',
    stack: ['IBM WebSphere', 'Microsoft SharePoint', 'Liferay + WildFly'],
  },
  {
    title: 'Company blogs',
    kind: 'Public · 5+ blogs',
    description:
      'Public blogs for the company’s brands, including IAS, MAS and Relocate USA. I develop and maintain their templates, themes and plugins, keeping design, functionality and performance consistent across all of them.',
    stack: ['IAS Blog', 'MAS Blog', 'Relocate USA', 'and more'],
  },
];

export const apps: InternalApp[] = [
  {
    eyebrow: 'Customers & sales',
    title: 'Customer Order Inquiry',
    description:
      'A read-only tool that puts a customer’s orders, shipping, payments and history on one page, so staff can answer a call without switching between four systems. The company design system’s starter kit was extracted from it.',
    tags: ['Claude Design', 'Prototyping', 'Angular', 'TypeScript', 'Tailwind CSS', 'REST Service'],
    demoUrl: 'demos/customer-order-inquiry/',
  },
  {
    eyebrow: 'Customer communication',
    title: 'Custom Email System',
    description:
      'Staff pick an order and an approved template, and the email fills in the customer and order details before it’s sent. Editors build and manage the templates themselves, and every sent email is logged against its order.',
    tags: ['Angular', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Express', 'Zod', 'REST APIs'],
    demoUrl: 'demos/on-demand-email-system/',
  },
];

const inv = 'images/inventory/';
const detail = (name: string, width: number, height: number): Detail => ({
  src: `${inv}detail-${name}.webp`,
  width,
  height,
});

const ds = 'images/design-system/';
const dsShot = (
  file: string,
  label: string,
  caption: string,
  width = 1440,
  height = 900,
): Shot => ({
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
const dtPair = (
  name: string,
  title: string,
  notes: { issue: string; changed: string; why: string },
  shotCaptions: [string, string],
  extras?: Shot[],
  stackRedesign?: boolean,
): ScreenPair => ({
  title,
  notes,
  before: dtShot(`before-${name}`, `Original · ${title}`, shotCaptions[0]),
  after: dtShot(`after-${name}`, `Redesign · ${title}`, shotCaptions[1]),
  extras,
  stackRedesign,
});

export const caseStudies: CaseStudy[] = [
  {
    id: 'doctree',
    number: '01',
    title: 'Document Management System — from a collapsible tree to a one-click filter sidebar',
    heading: 'From a collapsible tree\nto a one-click filter sidebar',
    meta: 'Document management · Redesign · Angular rebuild',
    summary:
      'I redesigned an internal document management app and rebuilt its front end in Angular. The biggest change is how people find documents: instead of opening and closing a tree of groups, they tick the document types they want and get one table.',
    lede: 'I redesigned an internal document management app and rebuilt its front end in Angular. The biggest change is how people find documents. Instead of opening and closing a tree of groups, they tick the document types they want and get one table. Along the way, editing stopped creating duplicate records, and every existing link kept working.',
    context: {
      heading: 'The app and the people who use it',
      paragraphs: [
        'Document Management System stores the documents attached to records in the company’s ERP system, across more than 300 document types. People open it from a link in the ERP, find the documents for one record, review them, and accept or reject each one. Administrators decide which roles can see which document types.',
        'Access is role-based. Some people can see every document type, others only the types assigned to them, and a small group manages the settings. The original interface was built on a commercial grid component as a collapsible tree: documents grouped by type, each group expanded by hand.',
      ],
      stagesIntro: 'I worked in four stages, each shippable on its own:',
      stages: [
        {
          title: 'Redesign',
          date: 'Sept 3 – Oct 14',
          text: 'Filter sidebar and flat Documents table in place of the tree, plus new navigation and page frame, built in the existing server-rendered pages.',
        },
        {
          title: 'Remove the paid grid',
          date: 'Oct 15',
          text: 'Replaced the commercial component library with my own table, so no license key or vendor CDN.',
        },
        {
          title: 'Move to Angular',
          date: 'Oct 15 – Oct 21',
          text: 'Rebuilt every page as typed components behind the same URLs, and fixed the bugs an audit turned up.',
        },
        {
          title: 'Design system',
          date: 'Oct 27',
          text: 'Design tokens and one shared style for buttons, cards, dialogs and search boxes.',
        },
      ],
    },
    heroShot: dtShot(
      'after-search-results',
      'The Documents page today',
      'Document types are checkboxes in the sidebar on the left, and the results fill one table.',
    ),
    problem:
      'Document Management System stores the documents attached to ERP records across more than 300 document types. People open it from a link in the ERP, find the documents for one record, review them, and accept or reject each one. The original grouped documents in a collapsible tree, one group per type, so finding anything meant expanding a group, scanning it, collapsing it and moving to the next. Status icons had no labels, editing created duplicate records, and failed uploads looked successful.',
    approach:
      'A filter sidebar replaced the collapsible tree: every document type is a checkbox with its document count, and one click shows one type or several together in the same table. I worked in four stages, each shippable on its own: the redesign on the existing pages, replacing the paid grid with my own table, rebuilding every page in Angular (strict TypeScript, signals) behind the same URLs, and a small design system. Before the rebuild I audited every behaviour of the old pages, so each one was kept or fixed on purpose.',
    result:
      'Finding documents of two types went from a six-step open-scan-close loop to two steps: tick both types, read one table. Editing no longer creates duplicate records, all 11 Documents URLs still work so ERP links are untouched, and no paid UI libraries remain. 1,056 automated tests cover the new code at 100% line, branch and function coverage.',
    chips: [
      'UX research',
      'Interaction design',
      'Angular',
      'TypeScript',
      'Tailwind CSS',
      'Design system',
      'Testing',
    ],
    screens: [
      {
        title:
          'Biggest improvement · Finding documents: from opening and closing groups to ticking a box',
        featured: true,
        before: dtShot(
          'before-search-results',
          'Original · Collapsible tree',
          'A collapsible tree: one group per document type, opened and closed by hand.',
        ),
        after: dtShot(
          'after-search-results',
          'Redesign · Filter sidebar',
          'Every document type is a checkbox with a count. Tick one or several.',
        ),
        extras: [
          dtShot(
            'after-sidebar-collapsed',
            'New · Collapsible sidebar',
            'Need more room? The sidebar folds to a thin strip and stays that way next visit.',
          ),
        ],
        notes: {
          issue:
            'The original page grouped documents in a collapsible tree, one group per document type. To find something, people expanded a group, scanned it, collapsed it and moved to the next one. Looking at two or three types meant keeping several groups open and scrolling between them. Every search cost clicks and memory: which group was it in, and which groups had I already checked?',
          changed:
            'I replaced the tree with a filter sidebar beside one flat table. Every document type is a checkbox, with its document count next to it. Tick one type to see only those documents, or tick several to see them together. Text search and a date range sit in the same sidebar. When the table needs more width, the sidebar collapses to a thin strip, and the browser remembers that choice.',
          why: 'People choose what they want to see instead of digging for it. One click replaces an open-scan-close loop, the counts show where documents are before anyone clicks, and the table can take the full width whenever it’s needed. It saves physical effort (clicks and scrolling) and mental effort (remembering where you’ve been).',
        },
        steps: {
          task: 'Finding documents of two types',
          before: [
            'Find the first type’s group in the tree.',
            'Expand it and scan the rows.',
            'Collapse it, or scroll past it.',
            'Find the second type’s group.',
            'Expand it and scan again.',
            'Repeat for every other type, keeping track of which groups you’ve checked.',
          ],
          after: ['Tick both types in the sidebar.', 'Read one table.'],
        },
      },
      {
        title: 'Documents · The table didn’t say what needed review',
        before: dtShot(
          'before-search-results',
          'Original · Status icons and columns',
          'Unlabelled status icons; columns cut off on the right.',
        ),
        after: dtShot(
          'after-columns-menu',
          'Redesign · Review tabs and Columns menu',
          'Review-state tabs with counts, a legend and a Columns menu.',
        ),
        notes: {
          issue:
            'Status was shown by unlabelled icons, including two different ✕ marks. Nothing separated documents still waiting for review from finished ones. Columns ran off the right edge, there was no way to hide any of them, and raw keys such as customer_account_id appeared in a corner table.',
          changed:
            'Tabs split documents by review state with counts: To Review 43, Rejected 8, Accepted 6, All 57. A legend names each status icon, and the page header uses readable labels. The first columns stay in place when the table scrolls sideways, empty cells show a dash, and a Columns menu (“11 of 11”) hides any column except Document.',
          why: 'Reviewers start from “what still needs review”, every status has a name, and people decide how much table they need.',
        },
      },
      dtPair(
        'nav-menu',
        'Every page · Navigation was hidden and the header was noisy',
        {
          issue:
            'Pages were hidden in a side drawer. The header held four buttons in four colours, and the title repeated itself: “OMSG Document Management Service: OMSG DMS: Home”. The signed-in email floated below the header.',
          changed:
            'Navigation moved into the header as Home, Administration and Account menus. The current section is underlined and the page title sits next to the logo. Each role in the menu has a one-line description, such as “Restricted to assigned types”.',
          why: 'People see where they are and what their role allows without opening anything.',
        },
        ['Pages live in a hamburger drawer.', 'Menus in the header, with role descriptions.'],
      ),
      dtPair(
        'home',
        'Home · The search form buried its main action',
        {
          issue:
            'The form was split into four boxed groups under a large heading, and the Submit button was below the fold on a laptop screen.',
          changed:
            'One card with labelled sections and helper text next to each label. The Search button sits at the top right of the card.',
          why: 'The one action on the page is always visible, and there is less to scroll past.',
        },
        ['Submit sits below the fold.', 'One card, Search always in view.'],
      ),
      dtPair(
        'edit',
        'Documents · Editing covered the table and saved duplicate records',
        {
          issue:
            'The pencil icon opened a context menu titled “Menu” that covered the status column. “Add Document Properties” opened an empty form, and saving it created a second record instead of updating the first. I found this in an audit of every behaviour on the page before the rebuild.',
          changed:
            'A side panel shows the file name, upload date and uploader, then three sections: Document Type, Status (with the current status shown) and Document Properties. Each has its own Save. Fields come pre-filled, and Save updates the existing record.',
          why: 'People edit what they can see, and no duplicate records pile up unnoticed.',
        },
        [
          'Step 1: the pencil opens a “Menu” over the status column.',
          'One side panel next to the table: file details, then Document Type, Status and Document Properties, each pre-filled with its own Save.',
        ],
        [
          dtShot(
            'before-properties',
            'Original · Properties form',
            'Step 2: “Add Document Properties” opens an empty form; saving it adds a duplicate record.',
          ),
        ],
        true,
      ),
      dtPair(
        'upload',
        'Documents · Uploads looked successful even when they failed',
        {
          issue:
            'The upload dialog scrolled inside itself, the File field was below its fold, and the type was a plain dropdown of about 300 options. Any server response closed the dialog as if the upload had worked.',
          changed:
            'A compact form with File first and a searchable type picker. When an upload fails, the dialog stays open and says why. The server enforces a list of allowed file types and a 10 MB limit.',
          why: 'Fewer steps, and people know whether their document actually arrived.',
        },
        ['A tall dialog; the File field is out of view.', 'A compact form with File first.'],
        [
          dtShot(
            'after-upload-type-picker',
            'New · Document type picker',
            'A searchable picker for 300+ document types.',
          ),
        ],
      ),
      dtPair(
        'admin-home',
        'Administration · The admin landing page didn’t explain itself',
        {
          issue:
            'A large green tile sat next to three blue buttons in a different style, with nothing to say what each one managed.',
          changed:
            'Two matching cards, each with a one-line description and the same button style.',
          why: 'Administrators can tell the options apart before clicking.',
        },
        ['One green tile, three blue buttons.', 'Two matching cards with descriptions.'],
      ),
      dtPair(
        'document-types',
        'Administration · Admin tables had no count, no Add button and a typo',
        {
          issue:
            'The grids had a filter icon on every column but no record count and no visible way to add an entry. One header read “Acccess Level”.',
          changed:
            'A search box, a record count (“306 out of 306”), Columns and Add buttons, sortable headers, and the same table style as the Documents page. The typo is gone.',
          why: 'Admin pages work like the rest of the app, so there is one table to learn.',
        },
        ['Document types: filter icons, no count.', 'Search, “306 out of 306”, Columns and Add.'],
        [
          dtShot(
            'before-role-mapping',
            'Original · Role mapping',
            'Role mapping, with “Acccess Level”.',
          ),
          dtShot(
            'after-role-mapping',
            'Redesign · Role mapping',
            'The same table style as Documents.',
          ),
        ],
      ),
      {
        title: 'People without a role · A blank “Forbidden” page for new users',
        beforeNote: 'A blank page with only the word “Forbidden”',
        after: dtShot(
          'after-no-access',
          'Redesign · No access',
          'A card that explains what happened.',
        ),
        notes: {
          issue:
            'Someone who signed in without a Document Management System role got a blank page with the single word “Forbidden”.',
          changed:
            'A card that says the account does not have a Document Management System role yet, and a way back to Home.',
          why: 'Anyone without access yet sees this page first. It now tells them what is wrong instead of looking like a crash.',
        },
      },
    ],
  },
  {
    id: 'mas-inventory',
    number: '02',
    title: 'MAS Inventory — redesigning the sales team’s vehicle search',
    heading: 'Redesigning the sales team’s vehicle search',
    meta: 'UX audit · Prototyping · Design system',
    summary:
      'A 10-point UX audit of the sales team’s vehicle search, and four prototypes that fix it.',
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
        stillOpen:
          'MSRP and savings are still small text under the price, and days in stock is plain text.',
      },
      {
        src: `${inv}prototype-3.webp`,
        label: 'Prototype 3 · Pricing',
        tab: 'Pricing',
        caption:
          'Every card shows MSRP and savings the same way, and days in stock becomes a chip.',
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
        focus:
          'Tuned the card for the tasks sales staff repeat all day. This is the current direction.',
        solves: [
          {
            issue: 5,
            text: 'Copy buttons next to Stock and VIN — one click instead of selecting text.',
          },
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
    name: 'Design System',
    heading: 'A design system for internal applications',
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
          dsShot(
            'foundations-color',
            'Color',
            'Brand colors, ink, surfaces and status pills.',
            1816,
            1186,
          ),
          dsShot(
            'foundations-type',
            'Type',
            'Inter for the interface, IBM Plex Mono for every number, on a fixed scale from 10 to 21px.',
            1816,
            916,
          ),
          dsShot(
            'foundations-layout',
            'Spacing, radius and elevation',
            'Spacing steps, three radii, five shadows, the app header and Font Awesome icons.',
            1816,
            1280,
          ),
        ],
      },
      {
        title: 'Components',
        note: 'The five shared Angular components each new app starts with. They replaced button and status-pill markup that had been copied by hand into about 10 feature files.',
        natural: true,
        shots: [
          dsShot(
            'components',
            'Shared components',
            'Button (six variants and two sizes), Badge, SectionCard, FieldList and ProgressSteps.',
            1440,
            292,
          ),
        ],
      },
      {
        title: 'In use: Customer Order Inquiry',
        note: 'The reference app the starter kit was extracted from. Staff find a customer, pick an order and read its vehicle, shipping, financial and activity detail. Shown with sample data.',
        shots: [
          dsShot(
            'app-landing',
            'Landing',
            'Search by customer number or name, with three cards explaining the flow.',
          ),
          dsShot(
            'app-summary',
            'Account summary',
            'One card per order, with a FieldList and a progress column.',
          ),
          dsShot(
            'app-vehicle',
            'Vehicle details',
            'Options and codes, a status pill and the ProgressSteps bar.',
          ),
          dsShot(
            'app-financials',
            'Financials',
            'Financing, pricing and the AR ledger. Every figure is set in IBM Plex Mono.',
          ),
          dsShot(
            'app-activity',
            'Activity',
            'Tasks, documents, mail history and comments, in tabs with a segmented control.',
          ),
        ],
      },
    ],
  },
];

export const experience: Job[] = [
  {
    role: 'Front-End Developer / UX Designer',
    company: 'OMSC',
    location: 'Long Island, NY',
    period: 'April 2014 – Present',
    bullets: [
      'Lead UX engineering and front-end modernization of IAS and MAS websites using JavaScript, HTML5, and CSS3; launched IAS in Spanish and improved architecture, usability, and performance through GA4, Clarity, and Lighthouse analysis.',
      'Design, develop, and maintain 50+ enterprise applications, including end-to-end UX and front-end development of seven major business applications.',
      'Architected and built a company-wide design system with reusable UI components, standardized design patterns, interaction guidelines, and an Angular starter kit, adopted across seven applications.',
      'Manage Contentful CMS architecture and content experiences, including content models, publishing workflows, and three corporate blog platforms (IAS, MAS, and Relocated USA).',
      'Designed, developed, and modernized three corporate intranets using IBM WebSphere, SharePoint, and Liferay.',
      'Integrate AI-assisted design and development workflows using Claude AI for UX exploration, prototyping, and UI engineering; previously developed the HDMilitary.com e-commerce platform using Magento.',
    ],
  },
  {
    role: 'UX Engineer & Frontend Developer',
    company: 'Instigator',
    location: 'New York, NY',
    period: 'January 2012 – December 2013',
    kind: 'Part-time',
    bullets: [
      'Designed and developed responsive, user-centered websites using HTML, CSS, JavaScript, jQuery, and Bootstrap, translating design concepts into functional web experiences.',
      'Conducted UX research and usability evaluations, including surveys, design reviews, and card sorting; developed user personas, information architecture, and workflows, and validated designs through wireframes and interactive prototypes.',
    ],
  },
  {
    role: 'Assistant Professor',
    company: 'Pratt Institute',
    location: 'New York, NY',
    period: 'August 2008 – May 2014',
    kind: 'Full-time',
    bullets: [
      'Developed and introduced an Information Architecture and UX Design course, teaching user-centered design methods, including design briefs, personas, card sorting, prototyping, and wireframing.',
      'Designed and taught web development courses covering HTML, CSS, XML, database design, WordPress, Drupal, PHP, MySQL, and Adobe Photoshop.',
    ],
  },
  {
    role: 'Usability Specialist Intern',
    company: 'ITAL, University of Texas at Austin',
    period: 'January 2003 – June 2003',
    kind: 'Internship',
    bullets: [
      'Conducted usability evaluations of The University of Texas website, developing test plans, assessing user interactions, and documenting findings to recommend UX improvements; produced captioned video content using QuickTime Pro and SMIL.',
    ],
  },
];

export interface Degree {
  degree: string;
  school: string;
  year: string;
  focus?: string;
}

export const education: Degree[] = [
  {
    degree: 'Ph.D., School of Information',
    school: 'University of Texas at Austin',
    year: '2008',
    focus:
      'Human-Computer Interaction, Information Architecture, UX Design, Usability, and Evaluation Methodology.',
  },
  { degree: 'M.A. in Communication', school: 'Ewha Womans University, Seoul, Korea', year: '1998' },
  { degree: 'B.A. in Communication', school: 'Ewha Womans University, Seoul, Korea', year: '1994' },
];

/* ---------- Home page: case studies and toolkit ---------- */

export const featuredCase: FeaturedCase = {
  id: 'doctree',
  label: 'Document management · Angular rebuild · 2026',
  heading: 'From a collapsible tree to a one-click filter sidebar',
  summary:
    'I redesigned an internal document management app used to review documents across 300+ types, then rebuilt its front end in Angular. Finding documents went from an open-scan-close loop to ticking a box. Along the way, editing stopped creating duplicate records and every existing link kept working.',
  task: {
    beforeNote: '2 doc types',
    before: [
      'Find the group',
      'Expand and scan',
      'Collapse',
      'Find the next group',
      'Expand and scan',
      'Remember what you checked',
    ],
    afterNote: 'same task',
    after: ['Tick both types', 'Read one table'],
  },
  compare: {
    before: dtShot('before-search-results', 'Before', 'A tree of groups, opened one at a time.'),
    after: dtShot('after-search-results', 'After', 'Filters, review tabs and one table.'),
  },
  results: [
    { value: '11 / 11', label: 'URLs unchanged, so ERP links kept working' },
    { value: '1,056', label: 'automated tests, 100% coverage on new code' },
    { value: '0', label: 'paid UI libraries after replacing the vendor grid' },
    { value: '9', label: 'usability issues found and fixed' },
  ],
};

export const caseCards: CaseCard[] = [
  {
    id: 'mas-inventory',
    title: 'MAS Inventory: redesigning the sales team’s vehicle search',
    text: 'A 10-point UX audit of the sales team’s vehicle search, and four prototypes that fix it.',
    shot: {
      src: 'images/inventory/prototype-4.webp',
      alt: 'Prototype 4 of the MAS Inventory search: a filter sidebar and vehicle cards with price, specs, stock number, VIN and location.',
      width: 1213,
      height: 826,
    },
  },
  {
    id: 'design-system',
    title: 'A design system for internal applications',
    text: 'One shared design system and Angular starter kit, now behind seven internal apps. New apps start consistent instead of from scratch.',
    shot: {
      src: 'images/design-system/foundations-color.webp',
      alt: 'The design system’s color foundations: brand colors, ink, surfaces and status pills.',
      width: 1816,
      height: 1186,
    },
  },
];

/** A skill group in the Toolkit grid. `key` items are highlighted and listed first. */
export interface SkillGroup {
  group: string;
  note: string;
  key: string[];
  more: string[];
}

export const toolkit: SkillGroup[] = [
  {
    group: 'UX/UI design & prototyping',
    note: 'Wireframes, visual design and clickable prototypes.',
    key: ['Figma'],
    more: ['Balsamiq', 'Photoshop', 'Illustrator'],
  },
  {
    group: 'Front-end development',
    note: 'Production web apps and responsive sites.',
    key: ['Angular', 'TypeScript', 'Tailwind CSS'],
    more: ['HTML5', 'CSS3', 'JavaScript', 'Sass', 'CSS Grid', 'Flexbox', 'AngularJS', 'Bootstrap'],
  },
  {
    group: 'AI-assisted design & development',
    note: 'Faster prototypes and front-end builds with AI.',
    key: ['Claude AI'],
    more: ['AI-assisted UX design', 'AI-assisted prototyping', 'AI-assisted front-end development'],
  },
  {
    group: 'Evaluation',
    note: 'Usage, accessibility and performance, measured.',
    key: ['GA4', 'Microsoft Clarity', 'Google Lighthouse'],
    more: [],
  },
  {
    group: 'CMS & enterprise platforms',
    note: 'Public sites, blogs and company intranets.',
    key: ['Contentful'],
    more: ['WordPress', 'SharePoint', 'Liferay', 'IBM WebSphere', 'Drupal', 'Magento'],
  },
  {
    group: 'Development tools',
    note: 'Version control, debugging and packages.',
    key: ['Git'],
    more: ['Chrome DevTools', 'npm'],
  },
];
