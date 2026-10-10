import type { Metadata } from "next";
import TrialSlip from "@/components/TrialSlip";
import ReportCard from "@/components/ReportCard";
import SectionHead from "@/components/SectionHead";
import Checklist from "@/components/Checklist";
import JsonLd from "@/components/JsonLd";
import { Underline } from "@/components/Marks";
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
    title: "Method over worksheets",
    text: "Every programme is a sequence of levels with measurable milestones, because random practice gives random results.",
  },
  {
    title: "Live, always",
    text: "No pre-recorded videos, ever. Handwriting and mental arithmetic are built by instant feedback from a real teacher.",
  },
  {
    title: "Honest with parents",
    text: "Clear progress reviews and realistic timelines. If we think a child should wait six months, we say so.",
  },
  {
    title: "Joy is the strategy",
    text: "Children practise what they enjoy, so games, challenges and celebrated wins are part of every class.",
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

      <section className="paper-ruled paper-margin px-4 pb-16 pt-12 sm:px-6 sm:pt-16">
        <div className="mx-auto max-w-6xl">
          <h1>
            <span className="label-caps block text-blue">About us</span>
            <span className="mt-4 block max-w-4xl font-display text-[clamp(2.8rem,7vw,5rem)] font-extrabold leading-[0.98] tracking-[-0.03em] [font-stretch:88%]">
              Where neat writing meets{" "}
              <span className="relative inline-block font-script text-[0.72em] font-normal tracking-normal text-redpen [font-stretch:100%]">
                quick minds
                <Underline />
              </span>
            </span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-ink-soft">
            {site.name} teaches handwriting, cursive, calligraphy, abacus and phonics
            in small live online classes, to children and adults across the United
            Kingdom and the United States.
          </p>
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHead title="Why we exist" />
          <div className="space-y-5 text-lg leading-relaxed text-ink-soft">
            <p>
              Schools rarely have time to teach the skills that quietly shape a
              child&apos;s confidence: forming letters correctly, writing fluently,
              calculating comfortably. Parents see the result in messy books and
              number worries, and are told to <span className="hl text-ink">practise more at home</span>.
            </p>
            <p>
              We fill that gap with specialist tutors, step-by-step methods and small
              live classes where every stroke and every bead gets watched and
              corrected. <strong className="text-ink">Practice without feedback repeats mistakes. Practice with feedback changes them.</strong>
            </p>
          </div>
        </div>
      </section>

      <section className="paper-squared border-y-2 border-rule px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <ReportCard />
        </div>
      </section>

      <section className="px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHead title="What we stand for" />
          <div className="mt-12">
            <Checklist items={values} />
          </div>
        </div>
      </section>

      <TrialSlip />
    </>
  );
}
