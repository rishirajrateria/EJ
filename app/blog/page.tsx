import type { Metadata } from "next";
import Link from "next/link";
import TrialSlip from "@/components/TrialSlip";
import Glyph, { categoryGlyph } from "@/components/Glyph";
import { Underline } from "@/components/Marks";
import { posts } from "@/lib/blog";
import { palette } from "@/lib/palette";

export const metadata: Metadata = {
  title: "Blog — Handwriting, Abacus & Learning Guides for Parents",
  description:
    "Expert guides on handwriting improvement, cursive, abacus and mental math for parents in the UK & USA. Practical, honest advice from the tutors at The Education Junction.",
  alternates: {
    canonical: "/blog",
    languages: { "en-GB": "/blog", "en-US": "/blog", "x-default": "/blog" },
  },
};

function formatDate(iso: string) {
  return new Date(iso + "T00:00:00Z").toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  });
}

export default function BlogIndexPage() {
  const [featured, ...rest] = posts;
  const fp = palette[featured.accent];

  return (
    <>
      <section className="paper-ruled paper-margin px-4 pb-14 pt-12 sm:px-6 sm:pt-16">
        <div className="mx-auto max-w-6xl">
          <h1>
            <span className="label-caps block text-blue">The Junction Journal</span>
            <span className="mt-4 block max-w-3xl font-display text-[clamp(2.8rem,7vw,5rem)] font-extrabold leading-[0.98] tracking-[-0.03em] [font-stretch:88%]">
              Guides parents{" "}
              <span className="relative inline-block font-script text-[0.72em] font-normal tracking-normal text-redpen [font-stretch:100%]">
                actually use
                <Underline />
              </span>
            </span>
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-ink-soft">
            Practical advice on handwriting, cursive and the abacus, from the tutors
            who teach them every day.
          </p>
        </div>
      </section>

      <section className="px-4 pb-24 pt-6 sm:px-6">
        <div className="mx-auto max-w-6xl">
          {/* Featured: an open notebook spread */}
          <Link
            href={`/blog/${featured.slug}`}
            className="group grid overflow-hidden rounded-md border-2 border-ink bg-white shadow-[8px_8px_0_#16205c] transition hover:-translate-y-1 md:grid-cols-[0.9fr_1.1fr]"
          >
            <div className={`cover-linen relative flex min-h-56 items-center justify-center ${fp.cover} ${fp.onCover}`}>
              <Glyph name={categoryGlyph[featured.category]} className="h-28 w-28 transition group-hover:scale-110 group-hover:-rotate-6" />
              <span className="label-caps absolute left-5 top-5 rounded-sm bg-white px-2 py-1 text-ink">Latest guide</span>
            </div>
            <div className="paper-ruled flex flex-col justify-center p-7 sm:p-10">
              <p className="label-caps text-ink-soft">
                {featured.category} · {featured.readMinutes} min read
              </p>
              <h2 className="mt-3 font-display text-2xl font-extrabold leading-tight tracking-tight group-hover:text-blue sm:text-3xl">
                {featured.title}
              </h2>
              <p className="mt-3 leading-relaxed text-ink-soft">{featured.description}</p>
              <span className="mt-5 font-bold text-blue">Read the guide →</span>
            </div>
          </Link>

          {/* Notebook pages with coloured divider tabs */}
          <div className="mt-14 grid gap-x-7 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((p) => {
              const c = palette[p.accent];
              return (
                <Link key={p.slug} href={`/blog/${p.slug}`} className="group relative block pt-7">
                  <span className={`absolute left-5 top-0 flex h-8 items-center gap-1.5 rounded-t-md px-3 ${c.cover} ${c.onCover}`}>
                    <Glyph name={categoryGlyph[p.category]} className="h-4 w-4" />
                    <span className="label-caps">{p.category}</span>
                  </span>
                  <article className="relative flex h-full flex-col rounded-md border-2 border-ink/10 bg-white p-6 shadow-page transition group-hover:-translate-y-1 group-hover:border-ink/25">
                    <h2 className="font-display text-xl font-extrabold leading-snug tracking-tight text-ink group-hover:text-blue">
                      {p.title}
                    </h2>
                    <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-ink-soft">{p.description}</p>
                    <p className="mt-5 border-t-2 border-dashed border-rule pt-3 text-xs font-bold text-ink-soft">
                      <time dateTime={p.date}>{formatDate(p.date)}</time> · {p.readMinutes} min read
                    </p>
                  </article>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <TrialSlip
        title="Prefer results to reading?"
        text="A free trial lesson does more than any article. Meet a tutor and get a personal plan this week."
      />
    </>
  );
}
