# Edmonton Walk-In Bath Experts — Website

A production-ready marketing website for **Edmonton Walk-In Bath Experts**
(operated by **Senior Safety Solutions Inc.**), built to generate qualified
requests for in-home consultations.

Built with **Next.js (App Router) + TypeScript**, mobile-first and accessible,
with SEO metadata and LocalBusiness structured data on every page.

---

## Quick start

You'll need **Node.js 18.17 or newer**.

```bash
# 1. Install dependencies
npm install

# 2. Run the site locally at http://localhost:3000
npm run dev

# 3. Build for production
npm run build

# 4. Run the production build locally
npm run start
```

Other useful commands:

```bash
npm run lint     # Check code with ESLint
```

---

## ⭐ Where to edit your business information

**Almost everything you'll want to change lives in one file:**

```
lib/site.ts
```

Open it to update your phone number, email, service areas, hours, product
options, features, installation steps, financing points, and FAQ answers.
Changing a value there updates it everywhere on the site automatically.

A few things to update **before you go live**:

| What | Where |
| --- | --- |
| Company phone, email, hours | `lib/site.ts` → `siteConfig` |
| **Live website address** (for SEO, sitemap, structured data) | `lib/site.ts` → `siteConfig.url` |
| Service-area communities | `lib/site.ts` → `serviceAreas` |
| Products, features, FAQ text | `lib/site.ts` |
| Where consultation form leads are sent | `app/api/consultation/route.ts` |

> **Important:** set `siteConfig.url` to your real domain (e.g.
> `https://www.yourdomain.ca`) before deploying. It's used for canonical URLs,
> the sitemap, and structured data.

---

## Receiving consultation requests (form leads)

The consultation form posts to `app/api/consultation/route.ts`, which validates
the submission server-side and **emails the lead to you using
[Resend](https://resend.com)**. To turn it on:

1. Create a free account at https://resend.com and create an **API key**.
2. Set the environment variable `RESEND_API_KEY` (in Vercel:
   **Settings → Environment Variables**; locally: copy `.env.example` to
   `.env.local` and fill it in).
3. **For a quick first test**, that's enough — Resend's built-in test sender
   delivers to the email that owns your Resend account.
4. **For production** (so leads can go to any inbox), verify your domain in
   Resend (**Resend → Domains**) and set `LEAD_FROM_EMAIL` to an address on
   that domain, e.g. `Edmonton Walk-In Bath Experts <website@yourdomain.ca>`.

By default, leads are sent to your business email from `lib/site.ts`
(`siteConfig.email` = `info@walkinbathexperts.com`). Override with
`LEAD_TO_EMAIL` if you want them elsewhere. When a customer includes their
email, the lead email's **reply-to** is set to them, so you can reply directly.

> ⚠️ **Set `RESEND_API_KEY` before you launch.** Without it the form still
> says "thank you", but the request is only written to the server log — on
> Vercel that means you would never see it. Send yourself a test request after
> launch to confirm it arrives.

Prefer a different service (SendGrid, Postmark, a Zapier webhook, your CRM)?
Swap the call inside `deliverLead()` in the same file. Never put API keys
directly in code — always use environment variables.

---

## Deploying

### Option A — Vercel (recommended, easiest)

Vercel is made by the creators of Next.js and has a free tier suitable for a
small business site.

1. Push this project to a GitHub, GitLab, or Bitbucket repository.
2. Go to [vercel.com](https://vercel.com), sign in, and **Import** the repo.
3. Vercel auto-detects Next.js — just click **Deploy**.
4. Add your custom domain in **Project → Settings → Domains**.
5. If you add environment variables (e.g. an email API key), set them under
   **Project → Settings → Environment Variables**.

### Option B — Any Node.js host

Because this uses a server API route for the form, run it as a Node app:

```bash
npm install
npm run build
npm run start   # serves on port 3000 (set PORT to change)
```

Put it behind a reverse proxy (e.g. Nginx) with HTTPS. This works on services
like Render, Railway, DigitalOcean App Platform, AWS, etc.

---

## What's included

**Pages**

- Home (`/`)
- Walk-In Bathtubs (`/walk-in-bathtubs`)
- Features & Options (`/features-and-options`)
- Installation Process (`/installation-process`)
- Financing (`/financing`)
- Service Areas (`/service-areas`)
- About Us (`/about`)
- Frequently Asked Questions (`/faq`)
- Request a Consultation (`/request-a-consultation`)
- Privacy Policy (`/privacy-policy`)
- Custom 404 page

**Under the hood**

- SEO metadata + canonical URLs on every page (`lib/seo.ts`)
- **LocalBusiness** structured data, plus FAQ and Breadcrumb schema (`lib/structuredData.ts`)
- Auto-generated `sitemap.xml` and `robots.txt` (`app/sitemap.ts`, `app/robots.ts`)
- Web manifest, SVG favicon, Apple touch icon, and a 1200×630 social share
  image (`public/og-image.jpg`)
- Accessible navigation (keyboard-friendly, mobile menu) and forms
  (labels, error summary, `aria-*`, honeypot spam trap)
- Reusable components in `components/`
- **Custom icon set** drawn for this business (walk-in tub, grab bar, jets,
  funding, warranty and more) in `components/Icon.tsx`, with standalone SVG
  copies in `public/icons/`
- Phone-only quick-contact bar (Call now / Free consultation) pinned to the
  bottom of the screen
- Warm, calm design system with large readable text and strong contrast
  (`app/globals.css`)

---

## Project structure

```
app/
  layout.tsx                 Root layout: header, footer, global schema
  page.tsx                   Home page
  globals.css                Design system (colors, type, components)
  home.module.css            Home-page styles
  <route>/page.tsx           One folder per page
  api/consultation/route.ts  Form submission endpoint
  sitemap.ts, robots.ts      SEO files
  manifest.ts, icon.svg      PWA manifest + favicon
  not-found.tsx              404 page
components/                  Reusable UI (Header, Footer, forms, cards, etc.)
lib/
  site.ts                    ★ All business info & content (edit here)
  seo.ts                     Metadata helper
  structuredData.ts          JSON-LD builders
```

---

## Notes on content

In keeping with honest, trustworthy marketing, this site intentionally contains:

- **No fabricated testimonials.** The home page shows a "What you can count on"
  section instead. When you have real, permission-granted reviews, the
  `components/Testimonials.tsx` component is ready to fill in and add back.
- **Photo sections hide or show an illustration until real photos exist.** The
  before/after gallery stays hidden until you add a before *and* after photo
  for a project in `lib/site.ts → siteImages`.
- **Funding program details** (SHARP, Home Accessibility Tax Credit, RAMP) live
  in `lib/site.ts → fundingPrograms` and were checked against the official
  pages in October 2026. Re-check them each April and October.
- **No invented prices, awards, certifications, or statistics.**

Add these only when you have accurate, verifiable information.

---

© 2026 Senior Safety Solutions Inc. Operating as Edmonton Walk-In Bath Experts.
