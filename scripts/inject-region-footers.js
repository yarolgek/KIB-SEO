/**
 * Inject service-cta include on region pages from React source CTAs.
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const siteDir = path.join(__dirname, '../site');
const pagesDir = path.join(__dirname, '../src/pages');

const PAGE_MAP = {
  'regionen/index.html': 'RegionenPage.tsx',
  'regionen/rheydt/index.html': 'RegionRheydtPage.tsx',
  'regionen/wickrath/index.html': 'RegionWickrathPage.tsx',
  'regionen/korschenbroich/index.html': 'RegionKorschenbroichPage.tsx',
  'regionen/grevenbroich/index.html': 'RegionGrevenbroichPage.tsx',
  'regionen/erkelenz/index.html': 'RegionErkelenzPage.tsx',
  'regionen/odenkirchen/index.html': 'RegionOdenkirchenPage.tsx',
  'regionen/rheindahlen/index.html': 'RegionRheindahlenPage.tsx',
  'regionen/eicken/index.html': 'RegionEickenPage.tsx',
  'regionen/giesenkirchen/index.html': 'RegionGiesenkirchenPage.tsx',
  'regionen/hardterbroich/index.html': 'RegionHardterbroichPage.tsx',
  'regionen/holt/index.html': 'RegionHoltPage.tsx',
  'regionen/geistenbeck/index.html': 'RegionGeistenbeckPage.tsx',
  'regionen/moenchengladbach-sued/index.html': 'RegionMoenchengladbachSuedPage.tsx',
  'regionen/moenchengladbach-nord/index.html': 'RegionMoenchengladbachNordPage.tsx',
  'regionen/moenchengladbach-ost/index.html': 'RegionMoenchengladbachOstPage.tsx',
};

function normalize(s) {
  return s.replace(/\s+/g, ' ').trim();
}

function stripJsx(s) {
  return normalize(s.replace(/\{[\s\S]*?\}/g, '').replace(/className="[^"]*"/g, ''));
}

function extractButtonText(block) {
  const match = block.match(/<button[\s\S]*?<\/button>/);
  if (!match) return '';
  const afterClass = match[0].split(/className="[^"]*"\s*>/).pop() || '';
  return normalize(afterClass.replace(/<\/?button[^>]*>/g, '').replace(/\{[\s\S]*?\}/g, ''));
}

function extractCtaFromReact(filePath) {
  const src = fs.readFileSync(filePath, 'utf8');
  const blocks = [...src.matchAll(/from-yellow-500 to-orange-500[\s\S]*?<\/section>/g)];
  if (!blocks.length) return null;
  const block = blocks.at(-1)[0];
  const title = block.match(/<h2[^>]*>([\s\S]*?)<\/h2>/)?.[1];
  const text = block.match(/<p[^>]*>([\s\S]*?)<\/p>/)?.[1];
  const button = extractButtonText(block);
  if (!title || !text || !button) return null;
  return { title: stripJsx(title), text: stripJsx(text), button };
}

function buildFooter(cta) {
  return [
    '',
    `  {% set ctaTitle = ${JSON.stringify(cta.title)} %}`,
    `  {% set ctaText = ${JSON.stringify(cta.text)} %}`,
    `  {% set ctaButton = ${JSON.stringify(cta.button)} %}`,
    '  {% include "service-cta.njk" %}',
  ].join('\n');
}

function stripFooter(html) {
  const mainClose = html.lastIndexOf('</main>');
  const mainOpen = html.indexOf('<main');
  if (mainOpen === -1 || mainClose === -1) return html;
  let inner = html.slice(mainOpen, mainClose);
  inner = inner.replace(/\s*\{% set ctaTitle[\s\S]*$/g, '');
  return html.slice(0, mainOpen) + inner.trimEnd() + '\n' + html.slice(mainClose);
}

for (const [relPath, pageFile] of Object.entries(PAGE_MAP)) {
  const reactPath = path.join(pagesDir, pageFile);
  const htmlPath = path.join(siteDir, relPath);
  if (!fs.existsSync(reactPath) || !fs.existsSync(htmlPath)) {
    console.warn('Skip', relPath);
    continue;
  }

  const cta = extractCtaFromReact(reactPath);
  if (!cta) {
    console.warn('No CTA in', pageFile);
    continue;
  }

  let html = stripFooter(fs.readFileSync(htmlPath, 'utf8'));
  html = html.replace(/\s*<\/main>\s*$/, `${buildFooter(cta)}\n</main>\n`);
  fs.writeFileSync(htmlPath, html);
  console.log(`✓ ${relPath.replace('/index.html', '')}`);
}

console.log('Done injecting region footers.');
