/**
 * Inject service-regions + service-cta includes from React source CTAs.
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const siteDir = path.join(__dirname, '../site');
const pagesDir = path.join(__dirname, '../src/pages');

const PAGE_MAP = {
  ai: 'AIPage.tsx',
  seo: 'SEOPage.tsx',
  ads: 'AdsPage.tsx',
  'website-erstellung': 'WebsiteErstellungPage.tsx',
  'seo-services': 'SEOServicesPage.tsx',
  'seo-analyse': 'SEOAnalysePage.tsx',
  'website-optimierung': 'WebsiteOptimierungPage.tsx',
  'landing-page-design': 'LandingPageDesignPage.tsx',
  'google-ads': 'GoogleAdsPage.tsx',
  'facebook-ads': 'FacebookAdsPage.tsx',
  'meta-ads': 'MetaAdsPage.tsx',
  'digitale-werbung': 'DigitaleWerbungPage.tsx',
  'search-engine-marketing': 'SEMPage.tsx',
  'email-marketing': 'EmailMarketingPage.tsx',
  'google-maps-optimierung': 'GoogleMapsPage.tsx',
  'google-business-profile': 'GoogleBusinessPage.tsx',
  'lead-generierung': 'LeadGenerierungPage.tsx',
  'conversion-optimierung': 'ConversionPage.tsx',
  'web-analyse-setup': 'WebAnalysePage.tsx',
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
  return {
    title: stripJsx(title),
    text: stripJsx(text),
    button,
  };
}

function buildFooter(cta) {
  return [
    '',
    '  {% include "service-regions.njk" %}',
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
  inner = inner.replace(/\s*\{% include "service-regions\.njk" %\}[\s\S]*$/g, '');
  inner = inner.replace(/\s*\{% set ctaTitle[\s\S]*$/g, '');
  return html.slice(0, mainOpen) + inner.trimEnd() + '\n' + html.slice(mainClose);
}

for (const [slug, pageFile] of Object.entries(PAGE_MAP)) {
  const reactPath = path.join(pagesDir, pageFile);
  const htmlPath = path.join(siteDir, slug, 'index.html');
  if (!fs.existsSync(reactPath) || !fs.existsSync(htmlPath)) {
    console.warn('Skip', slug);
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
  console.log(`✓ ${slug} → "${cta.button}"`);
}

console.log('Done injecting service footers.');
