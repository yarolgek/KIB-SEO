/**
 * Light tidy pass for already-clean service pages (indent + leaf tags).
 * Prefer clean:services (regex) + inject:service-footers for full rebuild.
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const siteDir = path.join(__dirname, '../site');

const SERVICES = [
  'ai', 'seo', 'ads', 'website-erstellung',
  'seo-services', 'seo-analyse', 'website-optimierung', 'landing-page-design',
  'google-ads', 'facebook-ads', 'meta-ads', 'digitale-werbung',
  'search-engine-marketing', 'email-marketing', 'google-maps-optimierung',
  'google-business-profile', 'lead-generierung', 'conversion-optimierung',
  'web-analyse-setup',
];

function splitFrontMatter(raw) {
  if (!raw.startsWith('---')) return { fm: '', body: raw };
  const end = raw.indexOf('\n---', 3);
  if (end === -1) return { fm: '', body: raw };
  return { fm: raw.slice(0, end + 4) + '\n', body: raw.slice(end + 4).trim() };
}

function extractMainAndFooter(body) {
  const match = body.match(/<main[^>]*>([\s\S]*)<\/main>/);
  const inner = match ? match[1] : body;

  const regionsIdx = inner.lastIndexOf('{% include "service-regions.njk" %}');
  const ctaIdx = inner.lastIndexOf('{% set ctaTitle');
  const start = regionsIdx !== -1 ? regionsIdx : ctaIdx;

  if (start === -1) return { content: inner.trim(), footer: '' };

  const content = inner.slice(0, start)
    .replace(/\s*\{% set ctaTitle[\s\S]*?%\}/g, '')
    .replace(/\s*\{% set ctaText[\s\S]*?%\}/g, '')
    .replace(/\s*\{% set ctaButton[\s\S]*?%\}/g, '')
    .trimEnd();

  const footerRaw = inner.slice(start).trim();
  const title = footerRaw.match(/\{% set ctaTitle = (".*?") %\}/)?.[1];
  const text = footerRaw.match(/\{% set ctaText = (".*?") %\}/)?.[1];
  const button = footerRaw.match(/\{% set ctaButton = (".*?") %\}/)?.[1];
  const hasRegions = footerRaw.includes('service-regions.njk');

  const lines = [];
  if (hasRegions) lines.push('  {% include "service-regions.njk" %}', '');
  if (title && text && button) {
    lines.push(
      `  {% set ctaTitle = ${title} %}`,
      `  {% set ctaText = ${text} %}`,
      `  {% set ctaButton = ${button} %}`,
      '  {% include "service-cta.njk" %}',
    );
  }
  return { content, footer: lines.join('\n') };
}

function formatHtml(html) {
  const voidTags = new Set([
    'area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input',
    'link', 'meta', 'source', 'track', 'wbr',
  ]);
  let depth = 1;
  return html
    .replace(/></g, '>\n<')
    .split('\n')
    .map((raw) => {
      const line = raw.trim();
      if (!line) return '';
      if (line.startsWith('</')) depth = Math.max(1, depth - 1);
      const out = `${'  '.repeat(depth)}${line}`;
      const tag = line.match(/^<([a-z0-9-]+)/i)?.[1]?.toLowerCase();
      const isVoid = tag && (voidTags.has(tag) || line.endsWith('/>'));
      const isSelfClosingPair =
        line.startsWith('<') && line.includes('</') && !line.startsWith('</');
      if (
        line.startsWith('<') &&
        !line.startsWith('</') &&
        !line.startsWith('<!') &&
        !isVoid &&
        !isSelfClosingPair
      ) {
        depth++;
      }
      return out;
    })
    .filter(Boolean)
    .join('\n');
}

for (const slug of SERVICES) {
  const filePath = path.join(siteDir, slug, 'index.html');
  if (!fs.existsSync(filePath)) continue;

  const raw = fs.readFileSync(filePath, 'utf8');
  const { fm, body } = splitFrontMatter(raw);
  const { content, footer } = extractMainAndFooter(body);
  const pretty = formatHtml(content);

  const output = [
    fm.trimEnd(),
    '<main class="max-w-4xl mx-auto px-4 py-32">',
    '',
    pretty,
    '',
    footer,
    '</main>',
    '',
  ].join('\n');

  fs.writeFileSync(filePath, output);
  console.log(`✓ ${slug}/ (${output.split('\n').length} lines)`);
}

console.log('Done.');
