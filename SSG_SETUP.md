# Static Site Generation (SSG) Setup

This project has been converted from a client-side React SPA to a pre-rendered static site optimized for SEO.

## Overview

All pages are now pre-rendered at build time into static HTML files. This means:

- Full page content is visible in the HTML source (no JavaScript required to render content)
- Better SEO - search engines see complete pages immediately
- Faster initial page loads
- All routing uses directory-based structure (e.g., `/about/index.html`)

## Build Process

The build process now includes two steps:

1. **Vite Build**: Bundles the React application
2. **Pre-rendering**: Renders each route to static HTML using Puppeteer

### Build Commands

```bash
# Full build with pre-rendering (recommended for production)
npm run build

# Fast build without pre-rendering (for development/testing)
npm run build:fast

# Just pre-render existing dist folder
npm run prerender
```

## How Pre-rendering Works

The pre-render script (`scripts/prerender.js`):

1. Starts a local preview server with the built SPA
2. Uses Puppeteer (headless Chrome) to load each page
3. Waits for content to fully render
4. Saves the complete HTML to disk
5. Creates the appropriate directory structure (`/route/index.html`)

### Routes Pre-rendered

- `/` → `dist/index.html`
- `/about` → `dist/about/index.html`
- `/contact` → `dist/contact/index.html`
- `/booking` → `dist/booking/index.html`
- `/ai` → `dist/ai/index.html`
- `/local-seo` → `dist/local-seo/index.html`
- `/ads` → `dist/ads/index.html`
- `/blog` → `dist/blog/index.html`
- `/newsletter` → `dist/newsletter/index.html`
- `/imprint` → `dist/imprint/index.html`
- `/privacy` → `dist/privacy/index.html`

## Page Rendering Event

To ensure content is fully rendered before pre-rendering, the app dispatches a `render-event` when all content is loaded:

```typescript
// src/main.tsx
window.addEventListener('load', () => {
  setTimeout(() => {
    document.dispatchEvent(new Event('render-event'));
  }, 0);
});
```

The pre-render script waits for this event before capturing the page.

## SEO Benefits

✓ **Instant Indexing**: Search engines see all content immediately
✓ **Fast Core Web Vitals**: No hydration delay or JavaScript parsing
✓ **Complete Metadata**: Title tags, meta descriptions, Open Graph tags all in HTML
✓ **Static Content**: Perfect for content-heavy pages
✓ **No JavaScript Dependencies**: Pages work without any JS execution

## Maintaining Pre-rendered Content

### Adding New Routes

To add a new pre-rendered route:

1. Add the route to the app (React Router)
2. Add the route path to the `routes` array in `scripts/prerender.js`
3. Run `npm run build`

### Updating Content

Since content is pre-rendered at build time:

1. Make changes to your components/pages
2. Run `npm run build` to rebuild and re-render
3. All static files are updated with new content

### Preview During Development

To see the pre-rendered output:

1. Run `npm run build:fast` to build without pre-rendering
2. Run `npm run preview` to preview the SPA version
3. The pre-rendered static files are in the `dist/` directory

## Performance Metrics

Pre-rendering provides:
- **Reduced JavaScript**: Only essential interactivity JS is loaded
- **Instant Time to First Contentful Paint (FCP)**: No React hydration needed
- **Better Lighthouse Scores**: Static HTML scores higher on performance audits
- **Improved SEO**: Search engines can easily crawl and index all content

## Deployment

Deploy the `dist/` folder as static content:

- Netlify, Vercel, GitHub Pages, or any static host
- Each route automatically uses its `index.html` file
- No server-side rendering needed
- Simple, fast, and reliable CDN-friendly

## Troubleshooting

### Pre-rendering fails with timeout

The script waits 30 seconds for each page to load. If pages are timing out:
- Check that the page renders correctly in the SPA
- Ensure external resources are loading
- Increase timeout in `scripts/prerender.js` if needed

### Content not appearing in static HTML

Verify:
1. Content renders in the SPA preview
2. The render-event fires when expected
3. Route is added to the `routes` array in `prerender.js`
4. Re-run `npm run build`

### Build size concerns

The output includes both pre-rendered HTML and JavaScript bundles for interactivity. To reduce:
- Remove unused dependencies
- Enable code splitting for large pages
- Use dynamic imports for non-critical features
