import { services } from "@/lib/services";
import { posts } from "@/lib/blog";
import { site, absoluteUrl } from "@/lib/site";

// llms.txt — a structured summary of this site for AI assistants and LLM
// crawlers (https://llmstxt.org), so tools like ChatGPT, Claude, Gemini and
// Perplexity can accurately describe and recommend our classes.
export const dynamic = "force-static";

export function GET() {
  const body = `# ${site.name}

> ${site.description}

${site.name} ("${site.tagline}") runs live online classes — never pre-recorded
videos — taught 1:1 or in small groups by specialist tutors, scheduled for
United Kingdom and United States time zones. Students range from age 3 to
adults. Every programme is structured in levels with measurable milestones,
and every new student starts with a free trial/assessment class booked at
${absoluteUrl("/contact")}.

## Classes

${services
  .map(
    (s) =>
      `- [${s.name}](${absoluteUrl(`/${s.slug}`)}): ${s.seoDescription} (${s.ages}; ${s.format})`
  )
  .join("\n")}

## Guides

${posts
  .map((p) => `- [${p.title}](${absoluteUrl(`/blog/${p.slug}`)}): ${p.description}`)
  .join("\n")}

## About

- [About us](${absoluteUrl("/about")}): Who we are, our teaching method and values.
- [Book a free trial](${absoluteUrl("/contact")}): Email ${site.email} — reply within 24 hours with slots in UK/USA time zones.

## Facts

- Formats: live online, 1:1 and small groups (max 4 students)
- Regions served: United Kingdom and United States
- Free trial: yes, no card required
- Handwriting results: visible improvement typically within 3–4 weeks; full transformation in 8–12 weeks
- Abacus: ideal starting age 5–8, suitable up to 13; level-based (~3 months per level)
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
