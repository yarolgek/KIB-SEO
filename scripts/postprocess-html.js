/**
 * Post-process exported HTML: fix Framer opacity, meta titles, CTAs, images
 * Uses fragment mode so cheerio does not wrap content in <html><body>.
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import * as cheerio from 'cheerio';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const siteDir = path.join(__dirname, '../site');

const SKIP = new Set([
  path.join(siteDir, 'contact', 'index.html'),
  path.join(siteDir, 'newsletter', 'index.html'),
]);

const TEAM_IMAGES = {
  'Saman Ghajar': '/1767794639240.jpeg',
  'Nima Ghajar': '/zve00453(2) copy.jpg',
};

function walkHtmlFiles(dir, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name.startsWith('_') || entry.name === 'js' || entry.name === 'css' || entry.name === 'assets') continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) walkHtmlFiles(full, files);
    else if (entry.name.endsWith('.html')) files.push(full);
  }
  return files;
}

function splitFrontMatter(raw) {
  if (!raw.startsWith('---\n') && !raw.startsWith('---\r\n')) {
    // Broken front matter from previous bad pass: ---\n...\n---<html>
    const m = raw.match(/^---\n([\s\S]*?)\n---/);
    if (m) {
      return { fm: `---\n${m[1]}\n---\n`, body: raw.slice(m[0].length) };
    }
    return { fm: '', body: raw };
  }
  const end = raw.indexOf('\n---', 3);
  if (end === -1) return { fm: '', body: raw };
  return {
    fm: raw.slice(0, end + 4) + '\n',
    body: raw.slice(end + 4),
  };
}

function unwrapDocument(body) {
  let b = body.trim();
  // Strip accidental document wrappers from previous postprocess
  b = b.replace(/^<html[^>]*>\s*<head>[\s\S]*?<\/head>\s*<body>/i, '');
  b = b.replace(/<\/body>\s*<\/html>\s*$/i, '');
  return b;
}

function processFile(filePath) {
  if (SKIP.has(filePath)) {
    console.log('Skip', path.relative(siteDir, filePath));
    return;
  }

  const raw = fs.readFileSync(filePath, 'utf8');
  let { fm, body } = splitFrontMatter(raw);
  body = unwrapDocument(body);
  if (!body.trim()) return;

  // Fragment mode (isDocument = false)
  const $ = cheerio.load(body, { decodeEntities: false }, false);

  $('[style]').each((_, el) => {
    let style = $(el).attr('style') || '';
    style = style
      .replace(/opacity:\s*0[^;]*;?/gi, '')
      .replace(/transform:\s*translateY\([^)]+\)[^;]*;?/gi, '')
      .trim();
    if (style) $(el).attr('style', style);
    else $(el).removeAttr('style');
  });

  $('img').each((_, el) => {
    const alt = $(el).attr('alt') || '';
    let cls = $(el).attr('class') || '';
    if (cls.includes('opacity-0')) {
      cls = cls.replace(/\bopacity-0\b/g, '').trim();
      $(el).attr('class', cls || null);
    }
    if (!$(el).attr('src')) {
      for (const [name, src] of Object.entries(TEAM_IMAGES)) {
        if (alt.includes(name)) {
          $(el).attr('src', src);
          break;
        }
      }
    }
    $(el).parent().find('.animate-pulse').remove();
  });

  $('button').each((_, el) => {
    if ($(el).attr('type') === 'submit') return;
    const text = $(el).text().trim().toLowerCase();
    const cls = $(el).attr('class') || '';
    let href = null;
    if (
      text.includes('strategiegespräch') ||
      text.includes('beratung') ||
      text.includes('buchen') ||
      text.includes('loslegen')
    ) {
      href = '/contact/';
    } else if (text.includes('dienstleistungen')) {
      href = '/#services';
    }
    if (href) {
      const $a = $(`<a href="${href}" class="${cls}"></a>`);
      $a.html($(el).html());
      $(el).replaceWith($a);
    }
  });

  $('.cursor-pointer').each((_, el) => {
    const title = $(el).find('h3').first().text().trim();
    const map = { KI: '/ai/', 'Local SEO': '/local-seo/', Werbeanzeigen: '/ads/' };
    if (map[title]) $(el).attr('data-href', map[title]);
  });

  $('[class*="opacity-0"]').each((_, el) => {
    let cls = $(el).attr('class') || '';
    cls = cls.replace(/\bopacity-0\b/g, '').trim();
    $(el).attr('class', cls || null);
    $(el).attr('data-animate', '');
  });

  let newFm = fm;
  const h1 = $('h1').first().text().replace(/\s+/g, ' ').trim();
  if (h1 && (fm.includes('| KI Brueder Mönchengladbach') || /title: "[a-z0-9-/_ ]+ \| KI Brueder/.test(fm))) {
    const safeTitle = h1.slice(0, 70).replace(/"/g, '\\"');
    newFm = newFm.replace(/title: "[^"]*"/, `title: "${safeTitle} | KI Brueder"`);
    const desc = $('main p, .leading-relaxed').first().text().replace(/\s+/g, ' ').trim().slice(0, 155);
    if (desc) {
      newFm = newFm.replace(/description: "[^"]*"/, `description: "${desc.replace(/"/g, '\\"')}"`);
    }
  }

  const html = $.root().html() || body;
  fs.writeFileSync(filePath, newFm + html + '\n');
  console.log('Fixed', path.relative(siteDir, filePath));
}

const files = walkHtmlFiles(siteDir);
for (const f of files) processFile(f);
console.log(`Post-processed ${files.length} files`);
