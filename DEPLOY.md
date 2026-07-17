# KIBrueder — Deploy & Workflow

Static HTML site built with Eleventy + Tailwind. Source lives in `site/`. Production output is `_site/`.

## Connect GitHub → Netlify (one-time)

1. Open [Netlify](https://app.netlify.com) and select the site that owns **kibrueder.de** (or create a new site).
2. **Site configuration → Build & deploy → Continuous deployment → Link repository**
   - Repository: `yarolgek/KIB-SEO`
   - Branch: `main`
3. Confirm build settings (already in [`netlify.toml`](netlify.toml)):
   - **Build command:** `npm run build`
   - **Publish directory:** `_site`
   - **Node version:** 20
4. **Site configuration → Environment variables** — add:
   - `SUPABASE_URL` — your Supabase project URL
   - `SUPABASE_ANON_KEY` — public anon key (RLS-protected)
5. If this is a **new** Netlify site, move the custom domain:
   - Old site → Domain management → Remove `kibrueder.de`
   - New site → Domain management → Add `kibrueder.de` (DNS should already point to Netlify)
6. Trigger a deploy (push to `main` or “Deploy site”).
7. Disconnect the old bolt.new deploy source if it still exists.

## Daily workflow (Cursor → Live)

```bash
# 1. Preview locally
npm run dev
# → http://localhost:8080

# 2. Edit pages under site/
#    Shared layout: site/_includes/
#    Styles: site/css/input.css
#    Scripts: site/js/

# 3. Commit & push
git add .
git commit -m "Update homepage copy"
git push origin main

# 4. Netlify builds & deploys automatically (~1–2 min)
```

## Useful commands

| Command | Purpose |
|---------|---------|
| `npm run dev` | Local preview with live reload |
| `npm run build` | Production build → `_site/` |
| `npm run preview` | Serve `_site/` locally |
| `npm run export:react` | One-time re-export from legacy React (optional) |

## Forms

- **Contact** → Netlify Forms (`name="contact"` on `/contact/`). Enable email alerts under **Netlify → Forms → Form notifications**.
- **Newsletter** → Supabase `newsletter_subscriptions` + Make.com webhook (needs env vars above)

## Language

- German is the default in all HTML (SEO).
- Core pages load `js/i18n.js` for an EN/DE toggle (German stays in the HTML source).

## Legacy React

The original React/Vite app remains under `src/` for reference. Production no longer uses it. After you are happy with the static site, you can delete `src/`, Vite configs, and React dependencies.
