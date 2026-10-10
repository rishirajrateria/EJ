# The Education Junction — Website

Visual-first, SEO-engineered Next.js website for **The Education Junction**:
live online handwriting, cursive, calligraphy, abacus and phonics classes for
families in the **UK & USA**.

## Tech

- **Next.js 15** (App Router, fully static — every page pre-rendered)
- **Tailwind CSS 4** with an "exercise book" design system: ruled and squared paper,
  coloured exercise-book covers for each class, teacher's red-pen marks
- Fonts: Bricolage Grotesque (headings), Figtree (body), Playpen Sans (handwritten notes),
  Playwrite GB S (the cursive model taught in British schools), Reenie Beanie (the messy "before")
- `public/junction.js`: a tiny script for the interactive abacus, the mobile menu and the
  free-trial reply-slip form (everything renders fully without it)
- Zero client-side data fetching; ~106 kB first-load JS

## Pages

| Route | Purpose |
|---|---|
| `/` | Home — hero, classes grid, trust, testimonials, FAQ |
| `/handwriting-classes` · `/cursive-writing-classes` · `/calligraphy-classes` · `/abacus-classes` · `/phonics-classes` | Service landing pages (keyword-targeted) |
| `/blog` + 8 articles | SEO content engine targeting high-intent parent searches |
| `/about`, `/contact` | Brand + free-trial conversion page |

## Built-in SEO

- Per-page titles, meta descriptions, canonicals, `hreflang` (en-GB / en-US / x-default)
- **JSON-LD**: EducationalOrganization, WebSite, Course, FAQPage, Article, BreadcrumbList, AboutPage, ContactPage
- `sitemap.xml` and `robots.txt` generated from code (always in sync with content)
- **`/llms.txt`** — structured site summary for AI assistants (ChatGPT, Claude, Gemini, Perplexity) following llmstxt.org
- Open Graph image generated at build (`/opengraph-image`)
- 301 redirects from old shop/e-commerce URLs to the new pages (see `next.config.ts`)
- All AI/LLM crawlers explicitly allowed in robots

## Develop & deploy

```bash
npm install
npm run dev     # local dev at localhost:3000
npm run build   # production build (all pages static)
```

Deploy to **Vercel** (recommended): import the repo, framework auto-detected,
then point the `theeducationjunction.com` domain at it. Set
`www.theeducationjunction.com` as the primary domain (the code's canonical URL).

## Post-launch SEO checklist

1. **Google Search Console**: verify the domain, submit `https://www.theeducationjunction.com/sitemap.xml`.
2. **Bing Webmaster Tools**: same (powers ChatGPT/Copilot search).
3. Create a **Google Business Profile** if a UK/US contact address exists.
4. Keep publishing: one blog post every 1–2 weeks (add to `lib/blog-posts-*.ts`).
5. Replace the placeholder email/social URLs in `lib/site.ts` with the real ones.
6. Update testimonials/stats in `app/page.tsx` with real numbers as they grow.

## Editing content

- **Services**: `lib/services.ts` (copy, FAQs, outcomes — pages re-generate automatically)
- **Blog posts**: `lib/blog-posts-1.ts`, `lib/blog-posts-2.ts`
- **Site identity** (name, email, socials, domain): `lib/site.ts`
