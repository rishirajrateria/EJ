import type { Metadata } from "next";
import Link from "next/link";
import Swash from "@/components/Swash";
import HeroIllustration from "@/components/HeroIllustration";
import ServiceCard from "@/components/ServiceCard";
import CTASection from "@/components/CTASection";
import FAQ from "@/components/FAQ";
import JsonLd from "@/components/JsonLd";
import { services } from "@/lib/services";

export const metadata: Metadata = {
  title:
    "Online Handwriting & Abacus Classes for Kids and Adults | The Education Junction",
  description:
    "Live online handwriting improvement, cursive, calligraphy, abacus mental-math and phonics classes for kids and adults in the UK & USA. Expert tutors, visible results in weeks. Book a free trial.",
  alternates: {
    canonical: "/",
    languages: { "en-GB": "/", "en-US": "/", "x-default": "/" },
  },
};

const homeFaqs = [
  {
    q: "How do online classes at The Education Junction work?",
    a: "Every class is 100% live on video — never pre-recorded. Your tutor demonstrates on screen, watches the student work in real time, and gives instant correction. Sessions run 1:1 or in small groups of up to four, scheduled around UK and USA time zones.",
  },
  {
    q: "What do I need for the first class?",
    a: "Just a laptop or tablet with a camera, a pencil and paper. For abacus classes we'll tell you exactly which inexpensive student abacus to order. All worksheets are provided digitally.",
  },
  {
    q: "Is the trial class really free?",
    a: "Yes — completely free, no card details required. The student tries a real lesson, and you receive an honest assessment with a recommended plan. There's no obligation to continue.",
  },
  {
    q: "What ages do you teach?",
    a: "Phonics from age 3, handwriting and abacus from age 5, cursive from age 7, calligraphy from age 10 — and dedicated handwriting and calligraphy programmes for teens and adults.",
  },
];

const stats = [
  { value: "2,000+", label: "students taught" },
  { value: "8 wks", label: "to visible transformation" },
  { value: "1:1", label: "and small-group classes" },
  { value: "4.9★", label: "average parent rating" },
];

const steps = [
  {
    emoji: "📅",
    title: "Book a free trial",
    text: "Pick a time that suits your time zone. Takes 30 seconds.",
  },
  {
    emoji: "🔍",
    title: "Get a personal plan",
    text: "We assess the student's level and map the exact path forward.",
  },
  {
    emoji: "🚀",
    title: "Watch them transform",
    text: "Live classes, tiny daily practice, visible progress every week.",
  },
];

const testimonials = [
  {
    quote:
      "My son's teacher asked what changed — his books went from unreadable to the neatest in class in two months.",
    name: "Sarah M.",
    detail: "Parent, London 🇬🇧 · Handwriting",
  },
  {
    quote:
      "She now does three-digit sums in her head faster than I can type them into a calculator. It's genuinely astonishing.",
    name: "David R.",
    detail: "Parent, Texas 🇺🇸 · Abacus",
  },
  {
    quote:
      "As an adult I was embarrassed by my writing. Eight weeks later I actually enjoy writing cards by hand.",
    name: "Priya K.",
    detail: "Adult learner, Manchester 🇬🇧 · Handwriting",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: homeFaqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqJsonLd} />

      {/* ───────────────────────── Hero ───────────────────────── */}
      <section className="relative overflow-hidden px-4 pb-16 pt-14 sm:px-6 sm:pt-20">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
          <div className="text-center lg:text-left">
            <p className="inline-flex items-center gap-2 rounded-full bg-teal-soft px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-teal">
              <span className="h-2 w-2 animate-pulse rounded-full bg-teal" aria-hidden="true" />
              Live online classes · UK 🇬🇧 &amp; USA 🇺🇸
            </p>
            <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
              Beautiful <Swash>handwriting</Swash>.
              <br />
              Brilliant <Swash color="#0d9488">minds</Swash>.
            </h1>
            <p className="mx-auto mt-6 max-w-md text-lg leading-relaxed text-ink-soft lg:mx-0">
              Expert-led classes in handwriting, cursive, calligraphy, abacus
              mental math and phonics — for kids and adults.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
              <Link
                href="/contact"
                className="w-full rounded-full bg-coral px-8 py-4 text-center text-base font-bold text-white shadow-lift-lg transition hover:-translate-y-0.5 hover:bg-[#f0564a] sm:w-auto"
              >
                Book a Free Trial
              </Link>
              <Link
                href="#classes"
                className="w-full rounded-full border-2 border-ink/10 bg-white px-8 py-4 text-center text-base font-bold text-ink transition hover:border-ink/25 sm:w-auto"
              >
                See Classes ↓
              </Link>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:max-w-lg">
              {stats.map((s) => (
                <div key={s.label} className="text-center lg:text-left">
                  <p className="font-display text-2xl font-bold text-ink">{s.value}</p>
                  <p className="text-xs font-semibold text-ink-soft">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
          <HeroIllustration />
        </div>
      </section>

      {/* ───────────────────────── Classes ───────────────────────── */}
      <section id="classes" className="scroll-mt-20 bg-cream px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-coral">Our classes</p>
            <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
              Five skills. One <Swash color="#7c5cff">junction</Swash>.
            </h2>
            <p className="mt-4 text-ink-soft">
              Every programme is live, structured and taught by specialists —
              pick one, or combine them.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
            {/* Free trial filler card */}
            <div className="relative flex flex-col justify-center overflow-hidden rounded-3xl bg-navy p-7 text-white shadow-lift">
              <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-coral/30 blur-2xl" aria-hidden="true" />
              <p className="text-3xl" aria-hidden="true">🎁</p>
              <h3 className="mt-4 font-display text-xl font-semibold">Not sure where to start?</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/70">
                Take a free assessment class — we&apos;ll recommend the perfect
                programme for your child (or you).
              </p>
              <Link
                href="/contact"
                className="mt-5 inline-flex w-fit items-center gap-1.5 rounded-full bg-coral px-5 py-2.5 text-sm font-bold transition hover:bg-[#f0564a]"
              >
                Claim free class
                <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 8h10m0 0L9 4m4 4l-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ───────────────────────── Why us ───────────────────────── */}
      <section className="px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-teal">Why families choose us</p>
            <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
              Not an app. Not videos.
              <br />
              <Swash>Real teaching.</Swash>
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                emoji: "🎥",
                title: "100% live classes",
                text: "A real tutor watches every stroke and bead-move, correcting instantly — the feedback apps can't give.",
                bg: "bg-coral-soft",
              },
              {
                emoji: "🧭",
                title: "A method, not worksheets",
                text: "Structured levels with clear milestones, so progress is measurable week by week — never random practice.",
                bg: "bg-teal-soft",
              },
              {
                emoji: "🌍",
                title: "Built for UK & USA families",
                text: "Evening and weekend slots across UK, Eastern, Central and Pacific time — and curricula aligned to your schools.",
                bg: "bg-violet-soft",
              },
            ].map((c) => (
              <div key={c.title} className="rounded-3xl border border-ink/5 bg-white p-8 shadow-lift">
                <span className={`flex h-14 w-14 items-center justify-center rounded-2xl ${c.bg} text-3xl`} aria-hidden="true">
                  {c.emoji}
                </span>
                <h3 className="mt-5 font-display text-xl font-semibold">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────────────── How it works ───────────────────────── */}
      <section className="bg-cream px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-violet">Getting started</p>
            <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
              Three steps to <Swash color="#f59e0b">transformation</Swash>
            </h2>
          </div>
          <ol className="mt-12 grid gap-6 sm:grid-cols-3">
            {steps.map((s, i) => (
              <li key={s.title} className="relative rounded-3xl bg-white p-8 text-center shadow-lift">
                <span className="absolute -top-4 left-1/2 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full bg-navy font-display text-sm font-bold text-white">
                  {i + 1}
                </span>
                <p className="text-4xl" aria-hidden="true">{s.emoji}</p>
                <h3 className="mt-4 font-display text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ───────────────────────── Testimonials ───────────────────────── */}
      <section className="px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-amber">Happy families</p>
            <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">
              Results parents <Swash>brag about</Swash>
            </h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <figure key={t.name} className="flex flex-col rounded-3xl border border-ink/5 bg-white p-8 shadow-lift">
                <p className="text-amber" aria-label="5 out of 5 stars">★★★★★</p>
                <blockquote className="mt-4 flex-1 leading-relaxed text-ink">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-5 border-t border-ink/5 pt-4">
                  <p className="font-bold text-ink">{t.name}</p>
                  <p className="text-xs font-semibold text-ink-soft">{t.detail}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────────────── FAQ ───────────────────────── */}
      <section className="bg-cream px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-4xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-sky">Good to know</p>
            <h2 className="mt-3 font-display text-3xl font-semibold sm:text-4xl">Questions, answered</h2>
          </div>
          <div className="mt-10">
            <FAQ faqs={homeFaqs} />
          </div>
        </div>
      </section>

      <div className="h-16 bg-gradient-to-b from-cream to-paper" aria-hidden="true" />
      <CTASection />
    </>
  );
}
