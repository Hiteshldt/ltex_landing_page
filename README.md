# LeafTex — marketing site

Multi-page marketing site for **LeafTex**, a biomaterials platform that upcycles
banana, pineapple, and algae agricultural waste into premium fibers, vegan leather,
and Leaf-Guard™ edible coating — with native blockchain traceability.

Built with **Next.js 16** (App Router) + **React 19**. Plain CSS design system, no UI
framework. Contact form delivers email via **Resend**.

📖 **Full reference:** see [`docs/PROJECT_OVERVIEW.md`](docs/PROJECT_OVERVIEW.md) — the
complete guide to the site, tech stack, services (Resend, Vercel), deployment, and how to
change things.

## Getting started

```bash
npm install
cp .env.example .env.local   # then fill in the Resend values (see below)
npm run dev                  # http://localhost:3000
```

Other scripts: `npm run build` (production build), `npm run start` (serve the build),
`npm run lint`.

## Contact form setup

The contact form (`/contact`) posts to `POST /api/contact`, which sends email through
Resend. It will not deliver mail until these are set in `.env.local`:

| Variable          | Purpose                                                        |
| ----------------- | -------------------------------------------------------------- |
| `RESEND_API_KEY`  | API key from [resend.com](https://resend.com/api-keys)         |
| `CONTACT_TO`      | Where submissions are emailed (e.g. `founders@leaftex.bio`)    |
| `CONTACT_FROM`    | Verified sender. Sandbox `onboarding@resend.dev` works for testing; verify the `leaftex.bio` domain in Resend to send to arbitrary recipients. |

Current setup (in `.env.local`): the `leaftex.bio` domain is verified, so leads send from
**no-reply@leaftex.bio** to **leaftex2026@gmail.com + founders@leaftex.bio**. (Confirm
founders@leaftex.bio is a real mailbox that actually receives — see the full doc.)

Without a key, the form fails gracefully and asks visitors to email directly.
The API route needs a Node/serverless runtime (Vercel, Netlify, etc.) — not a static export.

## Project structure

```
src/
  app/
    layout.js              Root layout — Nav + Footer, global SEO metadata, Org/WebSite JSON-LD
    page.js                Home
    globals.css            Design tokens + all component styles
    icon.png               Favicon (Next icon convention)
    sitemap.js             Generated /sitemap.xml
    robots.js              Generated /robots.txt
    api/contact/route.js   Contact form handler (Resend)
    about/                 /about
    contact/               /contact
    technology/            /technology
    products/              /products  + /products/{fibers,vegan-leather,leaf-guard}
  components/
    layout/                Nav, Footer
    sections/              Page sections: Hero, Problem, Advantage, Platform, Products,
                           Process, Traceability, Impact, FAQ, Marquee, Team
    ui/                    Reusable primitives: Primitives (Reveal/SectionHead/Counter/
                           Wordmark/ImgPlaceholder), PageIntro, StemCrossSection,
                           ContactForm, JsonLd
public/                    Product/swatch images served at /<name>.png
```

Imports use the `@/` alias (configured in `jsconfig.json`) → `@/components/sections/Hero`, etc.

## Notes

- **Founders/Team** is built (`components/sections/Team.jsx`) but intentionally hidden —
  see the commented import in `src/app/about/page.jsx` to re-enable.
- **SEO**: per-route metadata + canonicals, generated sitemap/robots, and JSON-LD
  (Organization, WebSite, Product, FAQPage, BreadcrumbList, ContactPage).
