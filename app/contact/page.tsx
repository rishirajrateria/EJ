import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import TrialSlip from "@/components/TrialSlip";
import DotSteps from "@/components/DotSteps";
import SectionHead from "@/components/SectionHead";
import { site, absoluteUrl } from "@/lib/site";

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

const next = [
  { title: "We reply within 24 hours", text: "With trial slots on UK and US evenings and weekends." },
  { title: "Join a real live lesson", text: "Nothing to install beyond a video call." },
  { title: "Get an honest plan", text: "Continue only if you love it." },
];

export default function ContactPage() {
  return (
    <>
      <JsonLd data={contactJsonLd} />

      <TrialSlip
        form
        headingLevel="h1"
        title="Book a free trial class"
        text="Fill in the slip and we'll reply within 24 hours with trial times in your time zone. Not sure which class? Leave the boxes empty and we'll recommend one."
      />

      <section className="px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHead title="What happens next" />
          <div className="mt-12">
            <DotSteps steps={next} />
          </div>
          <div className="mt-16 rounded-md border-2 border-ink/15 bg-white p-6 sm:flex sm:items-center sm:justify-between sm:gap-6">
            <div>
              <p className="label-caps text-ink-soft">Prefer plain email?</p>
              <p className="mt-1 select-all break-all font-display text-2xl font-extrabold text-blue">{site.email}</p>
            </div>
            <p className="mt-3 max-w-sm text-sm text-ink-soft sm:mt-0">
              Tell us the student&apos;s age, the class you&apos;re interested in and
              your time zone.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
