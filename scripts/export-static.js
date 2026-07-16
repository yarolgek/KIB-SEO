/**
 * One-time export: render React SPA routes → clean HTML content pages for 11ty
 */
import puppeteer from 'puppeteer';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import { spawn } from 'child_process';
import * as cheerio from 'cheerio';
import { appConfig } from '../app.config.ts';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const distDir = path.join(root, 'dist');
const siteDir = path.join(root, 'site');
const pagesDir = path.join(siteDir, 'pages');

const EXTRA_ROUTES = ['/blog/do-less', '/blog/beat-any-ad'];
const routes = [...new Set([...appConfig.routes, ...EXTRA_ROUTES])];

const PAGE_META = {
  '/': {
    title: 'KI Brueder | Bester Internet Marketing Service Mönchengladbach',
    description: 'Professioneller Internet Marketing Service in Mönchengladbach. Local SEO, Google Maps Optimierung, KI-Automatisierung & Online Marketing.',
    bilingual: true,
  },
  '/about': {
    title: 'Über KI Brueder | Local SEO und Marketing Experten',
    description: 'Erfahren Sie mehr über KI Brueder, Ihren Partner für Local SEO und Marketing in Mönchengladbach.',
    bilingual: true,
  },
  '/contact': {
    title: 'Kontakt KI Brueder | Kostenlose Beratung',
    description: 'Buchen Sie ein kostenloses Strategiegespräch für Local SEO, Google Maps und digitale Werbung.',
    bilingual: true,
    hasForms: true,
    skipExport: true,
  },
  '/newsletter': {
    title: 'Newsletter | KI Brueder',
    description: 'Tägliche Tipps für Local SEO und Geschäftswachstum.',
    bilingual: true,
    hasForms: true,
    skipExport: true,
  },
  '/blog': {
    title: 'Local SEO und Marketing Blog | KI Brueder',
    description: 'Einblicke in Local SEO, Marketing und Geschäftswachstum.',
    bilingual: true,
  },
  '/imprint': {
    title: 'Impressum | KI Brueder',
    description: 'Rechtliche Informationen und Kontaktdaten für KI Brueder.',
    bilingual: true,
  },
  '/privacy': {
    title: 'Datenschutz | KI Brueder',
    description: 'Datenschutzrichtlinie von KI Brueder.',
    bilingual: true,
  },
};

function getMeta(route) {
  if (PAGE_META[route]) return PAGE_META[route];
  const slug = route.replace(/^\//, '').replace(/\//g, ' ');
  return {
    title: `${slug} | KI Brueder Mönchengladbach`,
    description: `Professionelle Dienstleistungen von KI Brueder in Mönchengladbach: ${slug}.`,
    bilingual: false,
  };
}

function startPreviewServer() {
  return new Promise((resolve) => {
    const server = spawn('npx', ['vite', 'preview', '--port', '4173', '--strictPort'], {
      cwd: root,
      stdio: 'ignore',
      shell: true,
    });
    setTimeout(() => resolve(server), 3000);
  });
}

function cleanHtml(html) {
  const $ = cheerio.load(html);
  const rootEl = $('#root');
  if (!rootEl.length) return '';

  // Remove nested navbars (keep none — layout provides nav)
  rootEl.find('nav').remove();
  // Remove footers (layout provides footer)
  rootEl.find('footer').remove();
  // Remove cookie banners
  rootEl.find('[class*="cookie"], .fixed.bottom-0').filter((_, el) => {
    const text = $(el).text().toLowerCase();
    return text.includes('cookie') || text.includes('akzeptieren');
  }).remove();

  // Remove React event noise / empty style scripts
  rootEl.find('script').remove();

  // Fix internal links to trailing-slash style
  rootEl.find('a[href]').each((_, el) => {
    let href = $(el).attr('href') || '';
    if (href.startsWith('/') && !href.startsWith('//') && !href.includes('#') && !href.includes('.')) {
      if (!href.endsWith('/')) href += '/';
      $(el).attr('href', href);
    }
  });

  // Prefer loading="lazy" on images
  rootEl.find('img').each((_, el) => {
    if (!$(el).attr('loading')) $(el).attr('loading', 'lazy');
  });

  return rootEl.html() || '';
}

function writePage(route, content, meta) {
  const permalink = route === '/' ? '/' : `${route}/`;
  const outRel =
    route === '/'
      ? 'index.html'
      : path.join(route.replace(/^\//, ''), 'index.html');
  const outPath = path.join(siteDir, outRel);
  fs.mkdirSync(path.dirname(outPath), { recursive: true });

  const frontMatter = `---
layout: base.njk
title: ${JSON.stringify(meta.title)}
description: ${JSON.stringify(meta.description)}
bilingual: ${meta.bilingual !== false}
hasForms: ${!!meta.hasForms}
permalink: ${permalink}
---
`;

  fs.writeFileSync(outPath, frontMatter + content + '\n');
  console.log(`  ✓ ${outRel}`);
}

async function main() {
  console.log('Exporting React routes to static HTML pages...\n');
  fs.mkdirSync(pagesDir, { recursive: true });

  const server = await startPreviewServer();
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  try {
    for (const route of routes) {
      const meta = getMeta(route);
      if (meta.skipExport) {
        console.log(`  · skip ${route} (hand-written form page)`);
        continue;
      }

      console.log(`Rendering ${route}...`);
      const page = await browser.newPage();
      try {
        await page.goto(`http://localhost:4173${route}`, {
          waitUntil: 'networkidle0',
          timeout: 60000,
        });
        // Wait for React content
        await page.waitForSelector('#root > *', { timeout: 30000 });
        await new Promise((r) => setTimeout(r, 500));
        const html = await page.content();
        const cleaned = cleanHtml(html);
        if (!cleaned || cleaned.length < 100) {
          console.warn(`  ✗ ${route}: content too short, skipping`);
        } else {
          writePage(route, cleaned, meta);
        }
      } catch (err) {
        console.error(`  ✗ ${route}:`, err.message);
      } finally {
        await page.close();
      }
    }
  } finally {
    await browser.close();
    server.kill();
  }

  console.log('\nExport complete. Hand-written contact/newsletter pages are separate.');
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
