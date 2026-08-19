# Before & After — Home Staging & Redesign (static site)

A fully static, framework-free version of the site. Nothing to build, nothing to install.

## Files
- `index.html` — the whole page
- `styles.css` — compiled stylesheet (Tailwind output; edit directly or replace)
- `site.js` — FAQ accordion, smooth scrolling, contact form handler
- `assets/` — photography
- `favicon.ico`

## Hosting
Upload the contents of this folder to any web host (cPanel/public_html, Netlify,
Vercel, Cloudflare Pages, S3, GitHub Pages). No server-side runtime is needed.

## Local preview
    python3 -m http.server 8000
then open http://localhost:8000

## Making it yours
- Business name: search `Before` in `index.html` (header, footer, meta tags).
- Copy/services/FAQ: edit directly in `index.html` (FAQ answers also live in `site.js`).
- Colors: edit the CSS variables in the `:root` block near the top of `styles.css`
  (`--primary` is the terracotta, `--background` the cream).
- Fonts: Bodoni Moda (headings) + Jost (body), loaded from Google Fonts in `index.html`.
- Contact form: it currently just shows a thank-you message. Point it at a real
  endpoint — e.g. set `action="https://formspree.io/f/xxxx" method="POST"` on the
  `<form>` and remove the submit handler in `site.js`.
