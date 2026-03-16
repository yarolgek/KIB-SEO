import puppeteer from 'puppeteer';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import { spawn } from 'child_process';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Import prerender config
import { appConfig } from '../app.config.ts';

const routes = appConfig.routes;

function startPreviewServer() {
  return new Promise((resolve) => {
    const server = spawn('npx', ['vite', 'preview', '--port', '4173'], {
      cwd: path.join(__dirname, '..'),
      stdio: 'ignore',
    });

    setTimeout(() => resolve(server), 2000);
  });
}

export async function prerender() {
  const distDir = path.join(__dirname, '../dist');
  const baseUrl = 'http://localhost:5173';

  console.log('Starting pre-rendering...');

  let server;
  let browser;

  try {
    server = await startPreviewServer();
    console.log('Preview server started');

    await new Promise(r => setTimeout(r, 2000));

    browser = await puppeteer.launch({
      headless: appConfig.headless,
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    });

    for (const route of routes) {
      const page = await browser.newPage();

      try {
        console.log(`Rendering ${route}...`);

        const url = `${appConfig.baseUrl}${route}`;
        await page.goto(url, { waitUntil: appConfig.waitUntil, timeout: appConfig.timeout });

        const html = await page.content();

        const filePath = route === '/'
          ? path.join(distDir, 'index.html')
          : path.join(distDir, `${route.replace(/^\//, '')}/index.html`);

        const dir = path.dirname(filePath);
        if (!fs.existsSync(dir)) {
          fs.mkdirSync(dir, { recursive: true });
        }

        fs.writeFileSync(filePath, html);
        console.log(`  ✓ Saved to ${filePath}`);
      } catch (error) {
        console.error(`  ✗ Failed to render ${route}:`, error.message);
      } finally {
        await page.close();
      }
    }

    console.log('Pre-rendering complete!');
  } catch (error) {
    console.error('Pre-rendering error:', error);
    process.exit(1);
  } finally {
    if (browser) {
      await browser.close();
    }
    if (server) {
      server.kill();
    }
  }
}

prerender();