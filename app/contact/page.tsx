import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import Swash from "@/components/Swash";
import { site, absoluteUrl } from "@/lib/site";
import { services } from "@/lib/services";

export const metadata: Metadata = {
  title: "Book a Free Trial Class — Contact Us",
  description:
    "Book a free online trial class in handwriting, cursive, calligraphy, abacus or phonics. UK & USA time zones. No card required — meet the tutor and get a personal plan.",
  alternates: {
    canonical: "/contact",
    languages: { "en-GB": "/contact", "en-US": "/contact", "x-default": "/contact" },
  },
};

const contactJsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "@id": absoluteUrl("/contact"),
  name: "Contact The Education Junction",
  url: absoluteUrl("/contact"),
  about: { "@id": absoluteUrl("/#organization") },
};

export default function ContactPage() {
  const mailSubject = encodeURIComponent("Free trial class request");
  const mailBody = encodeURIComponent(
    `Hello The Education Junction,

I'd like to book a free trial class.

Student name & age:
Class I'm interested in (handwriting / cursive / calligraphy / abacus / phonics):
Country & time zone (UK / USA):
Preferred days & times:

Thank you!`
  );

  return (
    <>
      <JsonLd data={contactJsonLd} />

      <section className="px-4 pb-20 pt-14 sm:px-6 sm:pt-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-teal">Free trial class</p>
          <h1 className="mt-3 font-display text-4xl font-semibold leading-[1.1] sm:text-5xl">
            Let&apos;s <Swash>get started</Swash>
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-lg text-ink-soft">
            One email is all it takes. Tell us the student&apos;s age and which
            class interests you — we&apos;ll reply within 24 hours with trial
            slots in your time zone.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <a
              href={`mailto:${site.email}?subject=${mailSubject}&body=${mailBody}`}
              className="group rounded-3xl bg-navy p-8 text-left text-white shadow-lift-lg transition hover:-translate-y-1"
            >
              <span className="text-3xl" aria-hidden="true">📧</span>
              <h2 className="mt-4 font-display text-xl font-semibold">Email us</h2>
              <p className="mt-1 break-all text-sm text-white/70">{site.email}</p>
              <p className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-coral">
                Opens a pre-filled email
                <svg className="h-4 w-4 transition group-hover:translate-x-1" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 8h10m0 0L9 4m4 4l-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </p>
            </a>
            <div className="rounded-3xl border border-ink/5 bg-white p-8 text-left shadow-lift">
              <span className="text-3xl" aria-hidden="true">🗓️</span>
              <h2 className="mt-4 font-display text-xl font-semibold">What happens next</h2>
              <ol className="mt-3 space-y-2 text-sm leading-relaxed text-ink-soft">
                <li><strong className="text-ink">1.</strong> We reply with trial slots (UK &amp; USA evenings and weekends).</li>
                <li><strong className="text-ink">2.</strong> You join a real live class — nothing to install beyond a video call.</li>
                <li><strong className="text-ink">3.</strong> You get an honest assessment and plan. Continue only if you love it.</li>
              </ol>
            </div>
          </div>

          <div className="mt-10 rounded-3xl bg-cream p-7 text-left">
            <h2 className="font-display text-lg font-semibold">Tell us which class — or ask us to recommend one</h2>
            <div className="mt-4 flex flex-wrap gap-2.5">
              {services.map((s) => (
                <span key={s.slug} className="rounded-full border border-ink/10 bg-white px-4 py-2 text-sm font-semibold text-ink-soft">
                  {s.emoji} {s.menuLabel}
                </span>
              ))}
            </div>
            <p className="mt-4 text-sm text-ink-soft">
              Trials are 100% free with no card details and no obligation. We
              teach in English, scheduled around United Kingdom and United
              States time zones.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
