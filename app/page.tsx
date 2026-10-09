import type { Metadata } from "next";
import Link from "next/link";
import Swash from "@/components/Swash";
import HeroIllustration from "@/components/HeroIllustration";
import ServiceCard from "@/components/ServiceCard";
import CTASection from "@/components/CTASection";
import FAQ from "@/components/FAQ";
import JsonLd from "@/components/JsonLd";
import Ticker from "@/components/Ticker";
import Wave from "@/components/Wave";
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
    grad: "btn-grad",
  },
  {
    emoji: "🔍",
    title: "Get a personal plan",
    text: "We assess the student's level and map the exact path forward.",
    grad: "btn-grad-candy",
  },
  {
    emoji: "🚀",
    title: "Watch them transform",
    text: "Live classes, tiny daily practice, visible progress every week.",
    grad: "btn-grad",
  },
];

const testimonials = [
  {
    quote:
      "My son's teacher asked what changed — his books went from unreadable to the neatest in class in two months.",
    name: "Sarah M.",
    detail: "Parent, London 🇬🇧 · Handwriting",
    tilt: "md:-rotate-2",
  },
  {
    quote:
      "She now does three-digit sums in her head faster than I can type them into a calculator. It's genuinely astonishing.",
    name: "David R.",
    detail: "Parent, Texas 🇺🇸 · Abacus",
    tilt: "md:rotate-1 md:translate-y-2",
  },
  {
    quote:
      "As an adult I was embarrassed by my writing. Eight weeks later I actually enjoy writing cards by hand.",
    name: "Priya K.",
    detail: "Adult learner, Manchester 🇬🇧 · Handwriting",
    tilt: "md:-rotate-1",
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
      <section className="confetti relative overflow-hidden px-4 pb-16 pt-14 sm:px-6 sm:pt-20">
        {/* color washes */}
        <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-violet/15 blur-3xl" aria-hidden="true" />
        <div className="pointer-events-none absolute -right-24 top-24 h-80 w-80 rounded-full bg-coral/15 blur-3xl" aria-hidden="true" />
        {/* floating doodles */}
        <span className="animate-float-slow pointer-events-none absolute left-[6%] top-24 hidden text-3xl lg:block" style={{ "--float-rotate": "-12deg" } as React.CSSProperties} aria-hidden="true">✏️</span>
        <span className="animate-float pointer-events-none absolute bottom-24 right-[4%] hidden text-3xl lg:block" style={{ "--float-rotate": "14deg", animationDelay: "0.8s" } as React.CSSProperties} aria-hidden="true">🎨</span>
        <svg className="animate-float pointer-events-none absolute left-[3%] bottom-36 hidden h-10 w-16 lg:block" viewBox="0 0 64 24" fill="none" aria-hidden="true" style={{ animationDelay: "1.4s" }}>
          <path d="M2 18 Q 12 2 22 14 T 42 12 T 62 6" stroke="#00c49a" strokeWidth="4" strokeLinecap="round" />
        </svg>

        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
          <div className="text-center lg:text-left">
            <p className="sticker bg-teal-soft text-teal">
              <span className="h-2 w-2 animate-pulse rounded-full bg-teal" aria-hidden="true" />
              Live online classes · UK 🇬🇧 &amp; USA 🇺🇸
            </p>
            <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
              Beautiful <Swash>handwriting</Swash>.
              <br />
              Brilliant <span className="text-grad-candy">minds</span>.
            </h1>
            <p className="mx-auto mt-6 max-w-md text-lg leading-relaxed text-ink-soft lg:mx-0">
              Expert-led classes in handwriting, cursive, calligraphy, abacus
              mental math and phonics — for kids and adults.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start">
              <Link
                href="/contact"
                className="btn-grad w-full rounded-full px-8 py-4 text-center text-base font-bold text-white shadow-lift-lg transition hover:-translate-y-0.5 sm:w-auto"
              >
                Book a Free Trial 🎉
              </Link>
              <Link
                href="#classes"
                className="w-full rounded-full border-2 border-ink/10 bg-white px-8 py-4 text-center text-base font-bold text-ink transition hover:border-violet/40 hover:text-violet sm:w-auto"
              >
                See Classes ↓
              </Link>
            </div>
            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:max-w-lg">
              {stats.map((s) => (
                <div key={s.label} className="text-center lg:text-left">
                  <p className="text-grad-sunset font-display text-2xl font-bold">{s.value}</p>
                  <p className="text-xs font-semibold text-ink-soft">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
          <HeroIllustration />
        </div>
      </section>

      {/* ───────────────────────── Ticker ───────────────────────── */}
      <Ticker />

      {/* ───────────────────────── Classes ───────────────────────── */}
      <section id="classes" className="scroll-mt-20 bg-cream px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="sticker bg-coral-soft text-coral">🎒 Our classes</p>
            <h2 className="mt-5 font-display text-3xl font-semibold sm:text-4xl">
              Five skills. One <Swash color="#8a4dff">junction</Swash>.
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
            <div className="bg-night relative flex flex-col justify-center overflow-hidden rounded-3xl p-7 text-white shadow-lift">
              <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-amber/30 blur-2xl" aria-hidden="true" />
              <p className="text-3xl" aria-hidden="true">🎁</p>
              <h3 className="mt-4 font-display text-xl font-semibold">Not sure where to start?</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/75">
                Take a free assessment class — we&apos;ll recommend the perfect
                programme for your child (or you).
              </p>
              <Link
                href="/contact"
                className="btn-grad mt-5 inline-flex w-fit items-center gap-1.5 rounded-full px-5 py-2.5 text-sm font-bold transition"
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
      <div className="bg-cream">
        <Wave fill="#fffaf3" />
      </div>

      {/* ───────────────────────── Why us ───────────────────────── */}
      <section className="px-4 pb-20 pt-10 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="sticker bg-teal-soft text-teal">💚 Why families choose us</p>
            <h2 className="mt-5 font-display text-3xl font-semibold sm:text-4xl">
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
              <div key={c.title} className="rounded-3xl border-2 border-ink/5 bg-white p-8 shadow-lift transition hover:-translate-y-1 hover:shadow-lift-lg">
                <span className={`hover-wiggle flex h-14 w-14 -rotate-3 items-center justify-center rounded-2xl ${c.bg} text-3xl`} aria-hidden="true">
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
      <div className="bg-paper">
        <Wave fill="#fff1d1" />
      </div>
      <section className="bg-cream px-4 pb-20 pt-10 sm:px-6">
        <div className="mx-auto max-w-5xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="sticker bg-violet-soft text-violet">🚀 Getting started</p>
            <h2 className="mt-5 font-display text-3xl font-semibold sm:text-4xl">
              Three steps to <span className="text-grad-sunset">transformation</span>
            </h2>
          </div>
          <ol className="mt-14 grid gap-8 sm:grid-cols-3 sm:gap-6">
            {steps.map((s, i) => (
              <li key={s.title} className={`relative rounded-3xl bg-white p-8 text-center shadow-lift transition hover:-translate-y-1 ${i === 1 ? "sm:translate-y-3" : ""}`}>
                <span className={`${s.grad} absolute -top-4 left-1/2 flex h-9 w-9 -translate-x-1/2 -rotate-6 items-center justify-center rounded-xl font-display text-sm font-bold text-white shadow-lift`}>
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
      <div className="bg-cream">
        <Wave fill="#fffaf3" />
      </div>

      {/* ───────────────────────── Testimonials ───────────────────────── */}
      <section className="px-4 pb-20 pt-10 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="sticker bg-amber-soft text-amber">💬 Happy families</p>
            <h2 className="mt-5 font-display text-3xl font-semibold sm:text-4xl">
              Results parents <Swash>brag about</Swash>
            </h2>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <figure key={t.name} className={`flex flex-col rounded-3xl border-2 border-ink/5 bg-white p-8 shadow-lift transition hover:rotate-0 hover:shadow-lift-lg ${t.tilt}`}>
                <p className="text-amber" aria-label="5 out of 5 stars">★★★★★</p>
                <blockquote className="mt-4 flex-1 leading-relaxed text-ink">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-5 border-t-2 border-dashed border-ink/10 pt-4">
                  <p className="font-bold text-ink">{t.name}</p>
                  <p className="text-xs font-semibold text-ink-soft">{t.detail}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* ───────────────────────── FAQ ───────────────────────── */}
      <div className="bg-paper">
        <Wave fill="#fff1d1" />
      </div>
      <section className="bg-cream px-4 pb-20 pt-10 sm:px-6">
        <div className="mx-auto max-w-4xl">
          <div className="mx-auto max-w-2xl text-center">
            <p className="sticker bg-sky-soft text-sky">💡 Good to know</p>
            <h2 className="mt-5 font-display text-3xl font-semibold sm:text-4xl">Questions, answered</h2>
          </div>
          <div className="mt-10">
            <FAQ faqs={homeFaqs} />
          </div>
        </div>
      </section>
      <div className="bg-cream">
        <Wave fill="#fffaf3" />
      </div>

      <CTASection />
    </>
  );
}
