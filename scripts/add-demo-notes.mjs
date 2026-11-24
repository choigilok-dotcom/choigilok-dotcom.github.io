/*
 * Adds the "Want to see the real code?" note to the bottom of every live demo.
 *
 * Runs after `ng build` (see .github/workflows/deploy.yml). It finds every
 * <build>/demos/<name>/index.html and inserts the note before </body>, so each
 * demo gets it automatically on every deploy. Demo apps need no changes.
 *
 * The "private project code" link points to
 * https://github.com/choigilok-dotcom/<name>, so name each demo folder after its
 * GitHub repository. Running it twice on the same build changes nothing.
 *
 * Usage: node scripts/add-demo-notes.mjs dist/portfolio/browser
 */
import { existsSync, readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const EMAIL = 'choigilok@gmail.com';
const GITHUB_OWNER = 'choigilok-dotcom';
const MARKER = 'id="demo-code-note"';
const BAR_HEIGHT = 40;

const buildDir = process.argv[2] ?? 'dist/portfolio/browser';
const demosDir = join(buildDir, 'demos');

if (!existsSync(demosDir)) {
  console.log(`No demos folder in ${buildDir}; nothing to do.`);
  process.exit(0);
}

/** "customer-order-inquiry" -> "Customer Order Inquiry" */
const titleFromFolder = (name) =>
  name
    .split('-')
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(' ');

const noteFor = (name) => {
  const subject = encodeURIComponent(`${titleFromFolder(name)} code access`);
  return `
  <!-- Added at deploy time by scripts/add-demo-notes.mjs -->
  <style>
    /* Full-height app layouts end above the note instead of under it */
    .h-screen, .min-h-screen { height: calc(100vh - ${BAR_HEIGHT}px) !important; min-height: 0 !important; }
    body { padding-bottom: ${BAR_HEIGHT}px; }
    #demo-code-note {
      position: fixed; left: 0; right: 0; bottom: 0; z-index: 2147483647;
      min-height: ${BAR_HEIGHT}px; box-sizing: border-box; padding: 8px 16px;
      display: flex; align-items: center; justify-content: center; text-align: center;
      background: #ffffff; border-top: 1px solid #e6e6e6;
      font: 600 12.5px/1.4 Inter, system-ui, -apple-system, 'Segoe UI', sans-serif;
      color: #ab2525;
    }
    #demo-code-note a { color: #ab2525; text-decoration: underline; }
    #demo-code-note a:hover { color: #7f1b1b; }
  </style>
  <div ${MARKER} role="note">
    <span>Want to see the real code?&nbsp;<a href="mailto:${EMAIL}?subject=${subject}">Email me</a>&nbsp;for access to the&nbsp;<a href="https://github.com/${GITHUB_OWNER}/${name}" target="_blank" rel="noopener">private project code</a>. This demo uses sample data.</span>
  </div>
`;
};

let added = 0;
for (const entry of readdirSync(demosDir, { withFileTypes: true })) {
  if (!entry.isDirectory()) continue;
  const file = join(demosDir, entry.name, 'index.html');
  if (!existsSync(file)) continue;

  const html = readFileSync(file, 'utf8');
  if (html.includes(MARKER)) {
    console.log(`= ${entry.name}: note already present`);
    continue;
  }
  if (!html.includes('</body>')) {
    console.warn(`! ${entry.name}: no </body> tag, skipped`);
    continue;
  }
  writeFileSync(file, html.replace('</body>', `${noteFor(entry.name)}</body>`));
  console.log(`+ ${entry.name}: note added`);
  added++;
}
console.log(`Demo notes added: ${added}`);
