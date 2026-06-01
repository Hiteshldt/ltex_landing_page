# LeafTex Website — Project Overview & Reference

> One-stop reference for this codebase: what it is, how it's built, the services it
> uses, how to run and deploy it, and where to change things. Written so that you (or
> any developer / AI assistant) can pick it up later and understand everything quickly.
>
> Last updated: 2026-06-01

---

## 1. What this is

This is the **marketing website for LeafTex** (LeafTex Bio Pvt Ltd), a Coimbatore-based
biomaterials startup.

**What LeafTex does (the business):** it upcycles agricultural and marine waste —
specifically **banana pseudostem, pineapple leaf, and algae** — into three commercial
product lines:

1. **Natural fibers** (banana, pineapple, algae) — high-tenacity, naturally dyeable, spinner-ready.
2. **Vegan leather** — cruelty-free, customizable, in five colorways.
3. **Leaf-Guard™** — a starch-based edible coating that extends produce shelf-life 40–60%.

The brand pitch is "Farm to Fashion — trace your thread," with **blockchain traceability**
as a core differentiator. It's an early-stage startup, so the site intentionally makes
**no certification/compliance claims** (no "vegan certified", "food-safe", REACH, MRV, etc.).

**What the website is:** a multi-page marketing/brochure site with a working contact form
for capturing leads (spinners, brands, packhouses, investors).

---

## 2. Tech stack

| Layer            | Choice                                    | Notes |
| ---------------- | ----------------------------------------- | ----- |
| Framework        | **Next.js 16** (App Router)               | File-based routing under `src/app/` |
| UI library       | **React 19**                              | Mix of server components (pages) + client components (interactive sections) |
| Language         | **JavaScript** (`.js` / `.jsx`)           | No TypeScript |
| Bundler          | **Turbopack**                             | Next 16 default |
| Styling          | **Plain CSS** (`src/app/globals.css`) + inline styles | No Tailwind / CSS-in-JS framework. A small design-token system via CSS variables |
| Fonts            | **Google Fonts** — Plus Jakarta Sans (display/sans) + JetBrains Mono (mono) | Loaded in `layout.js` |
| Email            | **Resend** (see §6)                       | Contact form delivery |
| Hosting (target) | **Vercel** (see §7)                       | Not yet deployed |
| Path alias       | `@/` → `src/` (configured in `jsconfig.json`) | e.g. `@/components/sections/Hero` |

No database. No auth. No CMS — all content is hard-coded in the components (easy to edit).

---

## 3. Pages / routes

All under `src/app/`. Every page sets its own SEO `metadata` (title, description, canonical).

| Route                        | File                                   | Purpose |
| ---------------------------- | -------------------------------------- | ------- |
| `/`                          | `app/page.js`                          | Home — hero, problem, advantage, fiber teaser, impact, FAQ |
| `/products`                  | `app/products/page.jsx`                | Overview of the 3 product lines + full material library |
| `/products/fibers`           | `app/products/fibers/page.jsx`         | Banana/pineapple/algae fibers detail |
| `/products/vegan-leather`    | `app/products/vegan-leather/page.jsx`  | Vegan leather + 5 colorways |
| `/products/leaf-guard`       | `app/products/leaf-guard/page.jsx`     | Leaf-Guard™ edible coating |
| `/technology`                | `app/technology/page.jsx`              | Circular process + blockchain traceability |
| `/about`                     | `app/about/page.jsx`                   | Company mission + impact (founders section hidden) |
| `/contact`                   | `app/contact/page.jsx`                 | Contact form + direct details |
| `/api/contact`               | `app/api/contact/route.js`             | POST handler that sends the lead email via Resend |
| `/sitemap.xml`               | `app/sitemap.js`                       | Auto-generated sitemap |
| `/robots.txt`                | `app/robots.js`                        | Auto-generated robots rules |

Pricing is deliberately **not shown** anywhere — product pages link to "Request pricing →"
(the contact page) instead.

---

## 4. Project structure

```
src/
  app/
    layout.js          Root layout: <Nav> + <Footer> wrap every page; global SEO
                       metadata; Organization + WebSite JSON-LD; font links
    page.js            Home page
    globals.css        ALL styling — design tokens + component styles
    icon.png           Favicon (Next.js icon convention; auto-linked)
    sitemap.js         /sitemap.xml
    robots.js          /robots.txt
    api/contact/route.js   Contact form backend (Resend)
    about/ contact/ technology/ products/...   route folders (see §3)
  components/
    layout/            Nav.jsx, Footer.jsx  (site chrome, shown on every page)
    sections/          Big page sections: Hero, Problem, Advantage, Platform,
                       Products, Process, Traceability, Impact, FAQ, Marquee, Team
    ui/                Reusable building blocks:
                       - Primitives.jsx  → Reveal (scroll animation), SectionHead,
                         Counter, Wordmark (logo), ImgPlaceholder
                       - PageIntro.jsx   → standard top-of-page header for inner pages
                       - StemCrossSection.jsx → animated SVG diagram in the hero
                       - ContactForm.jsx → the client-side form
                       - JsonLd.jsx      → helper to emit structured data scripts
public/                Images served at /<name>.png (fiber, algae-fiber, pineapple-fiber,
                       coating, + 5 leather swatches: CaramelBrown, ChocolateBrown,
                       tan-beige, Amber, espresso-black)
docs/                  This document
README.md              Quick-start
.env.local             Secrets (git-ignored) — Resend key + recipients
.env.example           Template for .env.local (committed)
```

**Import convention:** always use the `@/` alias, e.g. `import Hero from "@/components/sections/Hero"`.

---

## 5. Design system & key behaviors

- **Design tokens** live at the top of `globals.css` as CSS variables: brand green
  `--green: #18C25A`, ink/grey scale, panel backgrounds, fonts. Change the brand color
  in one place.
- **Typography classes:** `.display-xl/l/m/s` (headings), `.body-l/.body-s`, `.label-mono`
  (the small uppercase mono labels), `.green-word` (green highlight on a word).
- **Reusable patterns:** `.container` (max-width wrapper), `.card` / `.card.outline` /
  `.card.dark`, `.btn` / `.btn-green` / `.btn-ghost`, `.chip`, `.check-list`.
- **Animations:** `Reveal` (fade-up on scroll via IntersectionObserver), the green
  `Marquee` ticker, the auto-rotating `StemCrossSection` SVG, and the live "ledger" in
  Traceability. All respect `prefers-reduced-motion`.
- **Responsive:** breakpoints mostly at 900px / 720px; the nav collapses to a hamburger
  menu under 900px.

**Server vs client components:** pages and layout are server components (good for SEO).
Anything interactive (`Nav`, `Hero`, `ContactForm`, sections using state/effects) starts
with `"use client"`.

---

## 6. Services — Resend (email)

The contact form is the site's lead-capture channel. Flow:

```
Visitor fills /contact form
   → ContactForm.jsx validates + POSTs JSON to /api/contact
   → route.js validates again, checks honeypot + rate-limit
   → Resend API sends a formatted email
   → lands in the lead inbox; reply-to = the visitor's email
```

**Provider: [Resend](https://resend.com)** — a transactional email API chosen for
reliability, a generous free tier, and clean Next.js integration.

**Configuration** (all in `.env.local`, never committed):

| Variable         | Current value                                | Meaning |
| ---------------- | -------------------------------------------- | ------- |
| `RESEND_API_KEY` | `re_...` (the live, send-only key)           | Auth for Resend |
| `CONTACT_TO`     | `leaftex2026@gmail.com,founders@leaftex.bio` | Lead inboxes (comma-separated; route splits into a list) |
| `CONTACT_FROM`   | `LeafTex <no-reply@leaftex.bio>`             | Branded sender on the verified `leaftex.bio` domain |

**Domain status: VERIFIED for sending** (confirmed 2026-06-01 by a successful branded-sender
test). This lifted Resend's sandbox restriction, so leads now send **from**
`no-reply@leaftex.bio` **to both** the Gmail and founders@leaftex.bio.

**⚠️ Mailbox caveat:** Resend *sending* to founders@leaftex.bio working ≠ that mailbox
*receiving*. founders@leaftex.bio only actually collects mail if it's a real inbox (e.g.
Google Workspace / Zoho with MX records). leaftex2026@gmail.com is the guaranteed inbox;
confirm founders@leaftex.bio receives a test before relying on it. (The Resend "Enable
Receiving" MX records are for Resend inbound only, not a general mailbox.)

**Security note:** the API key was shared in plaintext once; rotate it in the Resend
dashboard if there's any concern, then update `RESEND_API_KEY` in `.env.local` (and in
Vercel's env settings once deployed).

**Note on the public email address:** the site visibly shows `founders@leaftex.bio` as
the "email us directly" address (brand-facing). Form leads, however, are delivered to
whatever `CONTACT_TO` is set to. Until founders@leaftex.bio is a working mailbox you
monitor, the Gmail is the reliable lead inbox.

---

## 7. Services — Vercel (hosting / deployment)

**Target host: [Vercel](https://vercel.com)** — the company behind Next.js; zero-config
deploys, global CDN, and serverless functions for the `/api/contact` route.

> Why Vercel (or another Node host) is required: the contact form uses a server route
> (`/api/contact`). A purely static export can't run it. Vercel runs it as a serverless
> function automatically.

**Status: NOT deployed yet.** The code is also currently **untracked in git** (the repo's
last commit is an older static version). To go live:

1. **Commit the project to git** and push to a GitHub/GitLab repo.
2. In Vercel: **New Project → import the repo.** Framework auto-detects as Next.js;
   build command `next build`, output handled automatically.
3. **Add Environment Variables** in Vercel (Project → Settings → Environment Variables) —
   mirror `.env.local`: `RESEND_API_KEY`, `CONTACT_TO`, `CONTACT_FROM`. (`.env.local` is
   NOT uploaded — you must set these in the dashboard.)
4. **Deploy.** Vercel gives a `*.vercel.app` URL.
5. **Custom domain:** add `leaftex.bio` in Vercel → Domains and point DNS as instructed.
6. After domain is live, update `SITE_URL` in `app/layout.js`, `sitemap.js`, and
   `robots.js` if it ever differs from `https://leaftex.bio`.

---

## 8. SEO setup (already done)

- Per-route `metadata` with titles, descriptions, and canonical URLs; a global title
  template `"%s — LeafTex"`.
- `metadataBase` set to `https://leaftex.bio`; Open Graph + Twitter card tags (default
  image `/fiber.png`).
- **Structured data (JSON-LD)** via `components/ui/JsonLd.jsx`: Organization + WebSite
  (global), Product (each product page), FAQPage (home), BreadcrumbList (inner pages),
  ContactPage.
- Generated `sitemap.xml` and `robots.txt`.
- Semantic HTML: one `<h1>` per page, `<main>` landmark, descriptive `alt` text, lazy
  images.

**TODO for stronger SEO:** add a real 1200×630 Open Graph share image (currently reuses a
product photo).

---

## 9. Running locally

```bash
npm install
cp .env.example .env.local    # then paste the Resend values
npm run dev                   # http://localhost:3000
```

| Command         | What it does |
| --------------- | ------------ |
| `npm run dev`   | Dev server with hot reload |
| `npm run build` | Production build (also runs ESLint) |
| `npm run start` | Serve the production build locally (loads `.env.local`) |
| `npm run lint`  | ESLint (`next/core-web-vitals`) |

---

## 10. How to make common changes

- **Edit copy / numbers:** the text lives directly in the relevant component under
  `components/sections/` (e.g. the impact stats in `Impact.jsx`, fiber specs in
  `Platform.jsx`).
- **Swap a product image:** drop the new file in `public/` with the same name, or add a
  new name and update the `src` in `Platform.jsx` / `Products.jsx` (and the colorway list
  in `vegan-leather/page.jsx`).
- **Add a nav link:** edit `LINKS` (and/or `PRODUCTS` dropdown) in `components/layout/Nav.jsx`.
- **Add an FAQ:** add an item to `faqData` in `components/sections/FAQ.jsx` (it also feeds
  the FAQ structured data on the home page).
- **Re-enable the founders/team section:** in `app/about/page.jsx`, uncomment the `Team`
  import and the `<Team />` usage. The component is `components/sections/Team.jsx`.
- **Change the brand green:** edit `--green` in `globals.css`.
- **Change where leads go:** edit `CONTACT_TO` in `.env.local` (and in Vercel once deployed).

---

## 11. Current status & open items

- ✅ Site built, all routes working, production build clean.
- ✅ Contact form live; leads send from **no-reply@leaftex.bio** to **leaftex2026@gmail.com
  + founders@leaftex.bio**.
- ✅ **Resend domain `leaftex.bio` verified for sending.** (Confirm founders@leaftex.bio is a
  real mailbox that receives — see §6 caveat.)
- ⏳ **Not deployed to Vercel yet**; project **not yet committed to git** (last commit is
  the old static site). Remember to set the env vars in Vercel's dashboard (§7).
- 🙈 Founders/team section intentionally hidden (no names shown for now).
- 🖼️ Could add a dedicated OG share image.
- 🔑 Consider rotating the Resend API key (was shared in plaintext once).
