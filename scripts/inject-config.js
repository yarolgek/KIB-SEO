import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outPath = path.join(__dirname, '../_site/js/config.js');

const supabaseUrl = process.env.SUPABASE_URL || process.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY || process.env.VITE_SUPABASE_ANON_KEY || '';

const content = `window.SITE_CONFIG = {
  supabaseUrl: ${JSON.stringify(supabaseUrl)},
  supabaseAnonKey: ${JSON.stringify(supabaseAnonKey)},
  contactWebhook: 'https://hook.eu2.make.com/g2rleywbhes1xomav35o21zibyep3n6j',
  newsletterWebhook: 'https://hook.eu2.make.com/ksfuh0scnsz9wdo9idv88j8kbpwfds73',
};
`;

const dir = path.dirname(outPath);
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}
fs.writeFileSync(outPath, content);
console.log('Injected SITE_CONFIG into', outPath);
