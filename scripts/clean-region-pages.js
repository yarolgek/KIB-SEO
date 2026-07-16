/**
 * Clean exported region page HTML without re-parsing (preserves structure).
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const siteDir = path.join(__dirname, '../site');

const REGION_SLUGS = [
  null,
  'rheydt', 'wickrath', 'korschenbroich', 'grevenbroich', 'erkelenz',
  'odenkirchen', 'rheindahlen', 'eicken', 'giesenkirchen', 'hardterbroich',
  'holt', 'geistenbeck', 'moenchengladbach-sued', 'moenchengladbach-nord',
  'moenchengladbach-ost',
];

function regionPath(slug) {
  return slug
    ? path.join(siteDir, 'regionen', slug, 'index.html')
    : path.join(siteDir, 'regionen', 'index.html');
}

function splitFrontMatter(raw) {
  if (!raw.startsWith('---')) return { fm: '', body: raw };
  const end = raw.indexOf('\n---', 3);
  if (end === -1) return { fm: '', body: raw };
  return { fm: raw.slice(0, end + 4) + '\n', body: raw.slice(end + 4).trim() };
}

function stripFooter(html) {
  return html
    .replace(/\s*\{% set ctaTitle[\s\S]*?\{% include "service-cta\.njk" %\}/g, '')
    .trim();
}

function extractMain(body) {
  const match = body.match(/<main class="max-w-4xl mx-auto px-4 py-32">([\s\S]*?)<\/main>/);
  if (match) return match[1];
  return body
    .replace(/^[\s\S]*?<main class="max-w-4xl mx-auto px-4 py-32">/, '')
    .replace(/<\/main>[\s\S]*$/, '');
}

function cleanContent(html) {
  let out = html.replace(
    /<section class="bg-gradient-to-r from-yellow-500 to-orange-500[\s\S]*?<\/section>/g,
    ''
  );

  out = out.replace(/href="(\/[^"#?]*?)"/g, (match, href) => {
    if (!href.endsWith('/') && !href.includes('.')) return `href="${href}/"`;
    return match;
  });

  return out.trim();
}

function formatHtml(html) {
  const voidTags = new Set(['area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'source', 'track', 'wbr']);
  let depth = 0;
  return html
    .replace(/></g, '>\n<')
    .split('\n')
    .map((raw) => {
      const line = raw.trim();
      if (!line) return '';
      if (line.startsWith('</')) depth = Math.max(0, depth - 1);
      const indent = '  '.repeat(depth);
      const out = indent + line;
      const tag = line.match(/^<([a-z0-9-]+)/i)?.[1]?.toLowerCase();
      const isVoid = tag && (voidTags.has(tag) || line.endsWith('/>'));
      if (line.startsWith('<') && !line.startsWith('</') && !line.startsWith('<!') && !isVoid && !line.includes('</')) {
        depth++;
      }
      return out;
    })
    .filter(Boolean)
    .join('\n');
}

for (const slug of REGION_SLUGS) {
  const filePath = regionPath(slug);
  if (!fs.existsSync(filePath)) {
    console.warn('Skip missing', slug || 'index');
    continue;
  }

  const raw = fs.readFileSync(filePath, 'utf8');
  const { fm, body } = splitFrontMatter(raw);
  const main = extractMain(stripFooter(body));
  const cleaned = cleanContent(main);
  const pretty = formatHtml(cleaned);
  const output = `${fm}<main class="max-w-4xl mx-auto px-4 py-32">\n${pretty}\n</main>\n`;
  fs.writeFileSync(filePath, output);
  console.log(`✓ ${slug ? `regionen/${slug}` : 'regionen/'} (${output.split('\n').length} lines)`);
}

console.log('Done cleaning region pages.');
