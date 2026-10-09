import type { Metadata } from "next";
import Swash from "@/components/Swash";
import CTASection from "@/components/CTASection";
import JsonLd from "@/components/JsonLd";
import { site, absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us — Who We Are & How We Teach",
  description:
    "The Education Junction teaches handwriting, cursive, calligraphy, abacus and phonics in live online classes to families across the UK & USA. Meet our method and values.",
  alternates: {
    canonical: "/about",
    languages: { "en-GB": "/about", "en-US": "/about", "x-default": "/about" },
  },
};

const values = [
  {
    emoji: "🔬",
    title: "Method over worksheets",
    text: "Every programme is a structured sequence of levels with measurable milestones — because random practice produces random results.",
  },
  {
    emoji: "👀",
    title: "Live, always",
    text: "No pre-recorded videos, ever. Skills like handwriting and mental math are built by instant feedback from a real teacher.",
  },
  {
    emoji: "🤝",
    title: "Honest with parents",
    text: "Clear progress reviews, realistic timelines, and if we think a child should wait six months — we say so.",
  },
  {
    emoji: "🎉",
    title: "Joy is the strategy",
    text: "Children practise what they enjoy. Games, challenges and celebrated wins are built into every single class.",
  },
];

const aboutJsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": absoluteUrl("/about"),
  name: "About The Education Junction",
  url: absoluteUrl("/about"),
  about: { "@id": absoluteUrl("/#organization") },
};

export default function AboutPage() {
  return (
    <>
      <JsonLd data={aboutJsonLd} />

      <section className="px-4 pb-16 pt-14 sm:px-6 sm:pt-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-coral">About us</p>
          <h1 className="mt-3 font-display text-4xl font-semibold leading-[1.1] sm:text-5xl">
            Where skills <Swash color="#0d9488">meet</Swash>
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-ink-soft">
            A junction is where paths come together. {site.name} is where
            beautiful handwriting meets brilliant mental math — live online
            classes taught by specialists to children and adults across the
            United Kingdom and United States.
          </p>
        </div>
      </section>

      <section className="bg-cream px-4 py-16 sm:px-6">
        <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="font-display text-3xl font-semibold">Why we exist</h2>
            <p className="mt-5 leading-relaxed text-ink-soft">
              Schools no longer have time to properly teach the foundational
              skills that quietly shape a child&apos;s confidence: forming
              letters correctly, writing fluently, calculating comfortably.
              Parents see the result in messy books and math anxiety — and are
              told to &quot;practise more at home&quot;.
            </p>
            <p className="mt-4 leading-relaxed text-ink-soft">
              We fill exactly that gap. Specialist tutors, proven step-by-step
              methods, and small live classes where every stroke and every
              bead-move gets watched and corrected. Practice without feedback
              rehearses mistakes; practice with feedback transforms students.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { value: "5", label: "specialist programmes" },
              { value: "2,000+", label: "students taught" },
              { value: "UK & USA", label: "time-zone friendly" },
              { value: "4.9★", label: "average rating" },
            ].map((s) => (
              <div key={s.label} className="rounded-3xl bg-white p-6 text-center shadow-lift">
                <p className="font-display text-3xl font-bold text-coral">{s.value}</p>
                <p className="mt-1 text-xs font-semibold text-ink-soft">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center font-display text-3xl font-semibold">
            What we <Swash>stand for</Swash>
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {values.map((v) => (
              <div key={v.title} className="flex gap-5 rounded-3xl border border-ink/5 bg-white p-7 shadow-lift">
                <span className="text-3xl" aria-hidden="true">{v.emoji}</span>
                <div>
                  <h3 className="font-display text-lg font-semibold">{v.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{v.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
