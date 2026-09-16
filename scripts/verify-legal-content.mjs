import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';

const root = new URL('..', import.meta.url).pathname;
const includeGenerated = process.argv.includes('--generated');
const roots = ['src', '.github/ISSUE_TEMPLATE'];
if (includeGenerated && existsSync(join(root, 'dist'))) roots.push('dist');

const forbidden = [
  [new RegExp(['soumitsrah', 'cafecito\\.tech'].join('@'), 'gi'), 'retired personal contact'],
  [/(^|[\s"'])\/worklog\//gim, 'worklog route'],
  [/\b(?:PyCoffeeMaker|Cortado pipeline)\b/gi, 'internal project name'],
  [/\b(?:RSS|Atom)\s+(?:feed|ingestion)|\bweb[ -]?scrap(?:e|ing|er)|\bcrawler\b/gi, 'specific acquisition mechanism'],
  [/Internal counsel-review draft — not effective and not currently offered\./g, 'future paid-terms draft'],
  [/Insurance Underwriting Preparation/g, 'underwriting worklog title'],
];

const files = [];
function walk(path) {
  if (!existsSync(path)) return;
  for (const name of readdirSync(path)) {
    const file = join(path, name);
    if (statSync(file).isDirectory()) walk(file);
    else files.push(file);
  }
}
for (const path of roots) walk(join(root, path));

const failures = [];
for (const file of files) {
  const text = readFileSync(file, 'utf8');
  for (const [pattern, label] of forbidden) {
    pattern.lastIndex = 0;
    if (pattern.test(text)) failures.push(`${relative(root, file)} exposes ${label}`);
  }
}

const terms = readFileSync(join(root, 'src/content/docs/terms-of-use.md'), 'utf8');
const privacy = readFileSync(join(root, 'src/content/docs/privacy-policy.md'), 'utf8');
const freeTier = 'All Cafecito products are currently available as free tier. When paid services are introduced, applicable pricing, billing, renewal, cancellation, refund, tax, and additional contract terms will be presented before purchase.';
const sourceClaim = 'Cafecito collects data from nearly 15,000 different public-information and publicly available sources/outlets daily.';
if (!terms.includes(freeTier)) failures.push('Terms omit the approved free-tier statement');
if (!privacy.includes(sourceClaim)) failures.push('Privacy Policy omits the approved source-scale statement');

if (failures.length) {
  console.error(failures.join('\n'));
  process.exit(1);
}
console.log(`Legal content verification passed (${files.length} files checked${includeGenerated ? ', including dist' : ''}).`);
