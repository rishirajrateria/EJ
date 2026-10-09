import type { Metadata } from "next";
import Link from "next/link";
import Swash from "@/components/Swash";
import CTASection from "@/components/CTASection";
import { accentStyles } from "@/components/accents";
import { posts } from "@/lib/blog";

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

  return (
    <>
      <section className="px-4 pb-8 pt-14 text-center sm:px-6 sm:pt-20">
        <p className="text-sm font-bold uppercase tracking-widest text-coral">The Junction Journal</p>
        <h1 className="mx-auto mt-3 max-w-2xl font-display text-4xl font-semibold leading-[1.1] sm:text-5xl">
          Guides parents <Swash>actually use</Swash>
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-lg text-ink-soft">
          Practical, honest advice on handwriting, cursive, abacus and mental
          math — from the tutors who teach them every day.
        </p>
      </section>

      <section className="px-4 pb-20 pt-8 sm:px-6">
        <div className="mx-auto max-w-6xl">
          {/* Featured post */}
          <Link
            href={`/blog/${featured.slug}`}
            className="group grid overflow-hidden rounded-[2rem] border border-ink/5 bg-navy text-white shadow-lift-lg transition hover:-translate-y-1 md:grid-cols-2"
          >
            <div className="relative flex min-h-56 items-center justify-center overflow-hidden bg-navy p-10">
              <div className="pointer-events-none absolute -left-16 -top-16 h-56 w-56 rounded-full bg-coral/30 blur-3xl" aria-hidden="true" />
              <div className="pointer-events-none absolute -bottom-16 -right-10 h-56 w-56 rounded-full bg-violet/30 blur-3xl" aria-hidden="true" />
              <span className="relative text-8xl transition group-hover:scale-110" aria-hidden="true">
                {featured.emoji}
              </span>
            </div>
            <div className="flex flex-col justify-center p-8 sm:p-10">
              <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-wide text-white/50">
                <span className="rounded-full bg-coral px-3 py-1 text-white">Latest</span>
                <span>{featured.category}</span>
                <span>·</span>
                <span>{featured.readMinutes} min read</span>
              </div>
              <h2 className="mt-4 font-display text-2xl font-semibold leading-snug sm:text-3xl">
                {featured.title}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-white/70">{featured.description}</p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-coral">
                Read the guide
                <svg className="h-4 w-4 transition group-hover:translate-x-1" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 8h10m0 0L9 4m4 4l-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </div>
          </Link>

          {/* Grid */}
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((p) => {
              const a = accentStyles[p.accent];
              return (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="group flex flex-col rounded-3xl border border-ink/5 bg-white p-7 shadow-lift transition hover:-translate-y-1.5 hover:shadow-lift-lg"
                >
                  <div className="flex items-center justify-between">
                    <span className={`flex h-12 w-12 items-center justify-center rounded-2xl ${a.soft} text-2xl transition group-hover:scale-110`} aria-hidden="true">
                      {p.emoji}
                    </span>
                    <span className={`rounded-full ${a.soft} ${a.text} px-3 py-1 text-[11px] font-bold`}>
                      {p.category}
                    </span>
                  </div>
                  <h2 className="mt-5 font-display text-lg font-semibold leading-snug text-ink">
                    {p.title}
                  </h2>
                  <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-ink-soft">
                    {p.description}
                  </p>
                  <p className="mt-4 flex items-center gap-2 text-xs font-semibold text-ink-soft">
                    <time dateTime={p.date}>{formatDate(p.date)}</time>
                    <span aria-hidden="true">·</span>
                    {p.readMinutes} min read
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection
        title="Prefer results over reading?"
        text="A free trial class does more than any article — meet a tutor and get a personal plan this week."
      />
    </>
  );
}
