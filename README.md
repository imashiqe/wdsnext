# Web Development Service USA — SEO-first React / Next.js website

Production-oriented React website using **Next.js App Router** and TypeScript. The domain is configured as **https://webdevelopmentserviceusa.com** in `lib/site.ts`.

## Run locally

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open http://localhost:3000. To validate a production build:

```bash
npm run lint
npm run build
npm run start
```

Node.js 20.9+ is recommended (Node 22 works).

## Site architecture

- `/` — conversion-focused homepage
- `/services` + 8 dedicated service pages
- `/industries` + 6 industry-specific pages
- `/insights` + 5 original educational articles
- `/about`, `/contact`, `/get-quote`
- `/robots.txt`, `/sitemap.xml`, `/opengraph-image`
- `/api/contact` — POST endpoint using Resend for email delivery

## Contact form — required production setup

The form is not configured to send email until you provide these values in your deployment environment:

```dotenv
RESEND_API_KEY=re_...
CONTACT_TO_EMAIL=your-verified-recipient@example.com
CONTACT_FROM_EMAIL=Website Leads <inquiries@your-verified-sending-domain.com>
NEXT_PUBLIC_WHATSAPP_NUMBER=8801710233118
```

* Get a Resend API key and verify your sending domain (DNS SPF/DKIM as Resend requires).
* Set the real email inbox to receive new inquiries.
* On missing configuration, the form returns an explicit message; the WhatsApp contact remains available.
* Before large-volume production usage, add a **persistent rate limiter** and spam defense (e.g. Cloudflare Turnstile). Honeypot and input validation are included; they are not enough for high-volume attack protection.
* Configure a privacy policy appropriate to your actual data processing practices before making the site public. No policy has been invented here.

## SEO included

- Server-rendered HTML and statically generated routes
- Unique title, meta description, canonical URL per public route
- Semantic headings and crawlable `<a>` links
- Metadata API, Open Graph/Twitter social metadata, generated social image
- Valid XML sitemap and robots.txt
- Organization, WebSite, BreadcrumbList, Service and BlogPosting JSON-LD
- Original service and editorial content, internal linking
- Responsiveness, reduced-motion support, keyboard focus states
- 404 route and selected redirects
- No invented testimonials, reviews, office addresses, awards, or SEO ranking claims

### Important SEO launch checklist

1. **Verify the canonical domain.** If the preferred spelling or www variant changes, update `lib/site.ts`, configure permanent host redirects in your hosting provider, and resubmit the sitemap.
2. If this is a redesign, **inventory all existing indexed URLs** and add an old-to-new redirect map in `next.config.ts` before launch. Do not blindly delete existing pages.
3. Verify site ownership in **Google Search Console** and **Bing Webmaster Tools**. Submit `https://webdevelopmentserviceusa.com/sitemap.xml`.
4. Connect real **GA4 or another analytics solution** and set up lead submission / WhatsApp-click tracking in a privacy-aware manner. Analytics IDs are intentionally not fabricated.
5. Add verified contact/business details, case studies, team information, and client-approved work examples. These can substantially improve trust and conversion.
6. Review all published service descriptions to ensure they reflect the services you actually provide.
7. Measure PageSpeed Insights / Core Web Vitals after deploying to production on actual hosting.
8. Build relevant useful industry and service content based on demonstrated expertise; avoid thousands of near-duplicate keyword/city doorway pages.
9. Configure automated backups, dependencies monitoring, and uptime reporting for production.
10. Check status codes, render output, indexability, redirects, and schema after deployment.

## Website credit / referral link

The sitewide footer displays **Developed by [Tantsoft](https://www.tantsoft.com/)**. The external link opens in a new tab and uses `rel="noopener noreferrer"`. The standalone HTML previews also show the link.

## Deploy

**Vercel:** import the repository; add the environment variables; attach your domain; enforce preferred host redirect and HTTPS; deploy. Vercel automatically supports Next.js App Router.

**Other VPS:** use Node.js 22, `npm ci && npm run build && npm run start` with a managed process and reverse proxy (Nginx/Caddy). Point DNS to the host; enable HTTPS and one canonical domain.

This is a ready-to-configure website, **not a live deployment**. The live domain's existing setup was not accessible in the build environment; preserve and audit existing URL history before replacing anything.

## 320-page SEO expansion (October 2026)

The project now includes **363 public routes** in the sitemap design:

| Type | Pages |
|---|---:|
| Existing home, company, service, industry and editorial routes | 26 |
| New playbook library index | 1 |
| New topical hubs | 16 |
| New individual implementation guides | 320 |
| **Total** | **363** |

### New routes

- `/playbooks` — browse all 16 subjects.
- `/playbooks/technical-seo` — one topical hub with 20 specific guides.
- `/playbooks/technical-seo/canonical-tag-audit` — one sample guide.
- 15 more hubs, each with 20 topic-specific guides, providing 320 in total.

### Editorial content source and update workflow

- `scripts/build_playbooks.py` is the maintained 320-entry editorial source. Every entry has its own title, objective, three actionable steps, a specific warning, and a validation criterion.
- `data/playbooks.json` is the generated content source used by Next.js pages.
- `lib/playbooks.ts` exposes typed guide lookups and related-page relationships.
- `app/playbooks/[pillar]/[slug]/page.tsx` generates unique static HTML pages, metadata, breadcrumbs, descriptive URLs, and a task-specific interactive checklist.
- `/playbooks` and `/playbooks/[pillar]` are navigable index pages with crawlable links.
- `app/sitemap.ts` now includes every guide, every hub and all existing public routes.
- Service pages link to relevant guide content; the homepage/header/footer also link to the playbook hub.
- The footer continues to say “Developed by Tantsoft,” linking to https://www.tantsoft.com/.

To update a guide's source:

```bash
python scripts/build_playbooks.py
python scripts/check_site.py
python scripts/export_inventory.py
npm run lint
npm run build
```

The CSV `SEO-PAGE-INVENTORY.csv` contains all planned public URLs, unique title text, content category and an **editorial review** field.

### Important: large-scale SEO risk and publishing quality

These pages are *practical checklist drafts*, not fabricated local service pages, fake case studies, or claims of rankings. They require expert editorial checks before deployment. Add real implementation examples, relevant original screenshots, references, measurable facts, and proof of actual agency capabilities where appropriate. Review the highest-value content first and consider staged rollout. Google warns against automatically publishing many unoriginal, low-value pages primarily to manipulate rankings. A page count alone is **not** an SEO benefit. See `SEO-PUBLISHING-GUIDE.md`.

All 363 URLs are coded as public HTML page routes with sitemap inclusion; **this does not mean Google has indexed them**. Google decides which pages to crawl and index after deployment. No artificial U.S. address, client rating, awards, or results have been added.

### Verification performed in this artifact environment

- `python scripts/build_playbooks.py` — 320 unique URL records generated.
- `python scripts/check_site.py` — route, content and attribution integrity passed.
- TypeScript/TSX **syntax parsing** passed (using the global TypeScript compiler).
- `npm run build` remains **unverified** because npm package downloads are blocked in this environment. Run dependency installation, lint and build in your deployment environment.
