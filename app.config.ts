export interface PrerenderConfig {
  prerender: boolean;
  routes: string[];
  baseUrl: string;
  timeout: number;
  headless: boolean | 'new';
  waitUntil: 'load' | 'domcontentloaded' | 'networkidle0' | 'networkidle2';
}
export const appConfig: PrerenderConfig = {
  prerender: true,
  routes: [
    // Core pages
    '/',
    '/about',
    '/contact',
    '/ai',
    '/blog',
    '/blog/do-less',
    '/blog/beat-any-ad',
    '/newsletter',
    '/imprint',
    '/privacy',

    // Core service pages (Rank 2)
    '/local-seo',
    '/seo',
    '/ads',
    '/website-erstellung',

    // Supporting service pages (Rank 3)
    '/seo-services',
    '/seo-analyse',
    '/website-optimierung',
    '/landing-page-design',
    '/google-ads',
    '/facebook-ads',
    '/meta-ads',
    '/digitale-werbung',
    '/search-engine-marketing',
    '/email-marketing',
    '/google-maps-optimierung',
    '/google-business-profile',
    '/lead-generierung',
    '/conversion-optimierung',
    '/web-analyse-setup',

    // Region overview
    '/regionen',

    // Surrounding cities
    '/regionen/rheydt',
    '/regionen/wickrath',
    '/regionen/korschenbroich',
    '/regionen/grevenbroich',
    '/regionen/erkelenz',
    '/regionen/rheindahlen',
    '/regionen/eicken',
    '/regionen/moenchengladbach-sued',

    // Mönchengladbach Stadtteile
    '/regionen/odenkirchen',
    '/regionen/giesenkirchen',
    '/regionen/hardterbroich',
    '/regionen/holt',
    '/regionen/geistenbeck',
    '/regionen/moenchengladbach-nord',
    '/regionen/moenchengladbach-ost',
  ],
  baseUrl: 'http://localhost:4173',
  timeout: 30000,
  headless: 'new',
  waitUntil: 'networkidle0',
};
export default appConfig;