import type { Metadata } from "next";
import Link from "next/link";
import BeforeAfter from "@/components/BeforeAfter";
import { BookShelf } from "@/components/BookCover";
import Abacus from "@/components/Abacus";
import ReportCard from "@/components/ReportCard";
import DotSteps from "@/components/DotSteps";
import IndexCards, { type Testimonial } from "@/components/IndexCards";
import FAQ from "@/components/FAQ";
import TrialSlip from "@/components/TrialSlip";
import SectionHead from "@/components/SectionHead";
import JsonLd from "@/components/JsonLd";
import { Underline } from "@/components/Marks";
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

const steps = [
  { title: "Book a free trial", text: "Pick a time in your time zone. It takes 30 seconds." },
  { title: "Get a personal plan", text: "The tutor assesses the student and maps out the path." },
  { title: "Watch them improve", text: "Live classes, ten minutes of daily practice, progress every week." },
];

const reasons = [
  {
    lead: "100% live.",
    text: "A tutor watches every stroke and every bead, and corrects it on the spot.",
  },
  {
    lead: "A method, not worksheets.",
    text: "Structured levels with clear milestones, so you can see progress week by week.",
  },
  {
    lead: "Built for UK & US families.",
    text: "After-school and weekend slots in UK, Eastern, Central and Pacific time.",
  },
];

const testimonials: Testimonial[] = [
  {
    quote:
      "My son's teacher asked what changed. His books went from unreadable to the neatest in class in two months.",
    name: "Sarah M.",
    detail: "London",
  },
  {
    quote:
      "She now does three-digit sums in her head faster than I can type them into a calculator.",
    name: "David R.",
    detail: "Texas",
  },
  {
    quote:
      "As an adult I was embarrassed by my writing. Eight weeks later I enjoy writing cards by hand.",
    name: "Emma K.",
    detail: "Manchester",
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

      {/* ───────── Hero: an exercise-book page ───────── */}
      <section className="paper-ruled paper-margin overflow-hidden px-4 pb-20 pt-12 sm:px-6 sm:pt-16">
        <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.05fr_1fr]">
          <div>
            <h1>
              <span className="label-caps block text-blue">
                Online handwriting &amp; abacus classes · UK &amp; USA
              </span>
              <span className="mt-5 block font-display text-[clamp(3.1rem,8.4vw,5.8rem)] font-extrabold leading-[0.95] tracking-[-0.035em] [font-stretch:86%]">
                From scribble to{" "}
                <span className="relative inline-block font-script text-[0.74em] font-normal tracking-normal text-redpen [font-stretch:100%]">
                  superb
                  <Underline />
                </span>
              </span>
            </h1>
            <p className="mt-8 max-w-md text-lg leading-relaxed text-ink-soft">
              Live online lessons in handwriting, cursive, calligraphy, abacus and
              phonics, for children from age 3 and for adults.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link href="/contact" className="btn btn-primary">
                Book a free trial
              </Link>
              <Link href="#classes" className="btn btn-secondary">
                See the classes
              </Link>
            </div>
            <ul className="mt-9 flex flex-wrap gap-x-6 gap-y-2 text-sm font-bold text-ink">
              <li><span className="text-yellow-deep">★</span> 4.9 from parents</li>
              <li><span className="text-green-deep">●</span> Max 4 per class</li>
              <li><span className="text-pink">●</span> UK &amp; US time zones</li>
            </ul>
          </div>
          <BeforeAfter />
        </div>
      </section>

      {/* ───────── Classes: a shelf of exercise books ───────── */}
      <section id="classes" className="scroll-mt-20 px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHead title="Choose a subject" note="mix & match!" />
          <div className="mt-12">
            <BookShelf items={services} />
          </div>
        </div>
      </section>

      {/* ───────── Why it works ───────── */}
      <section className="px-4 pb-20 sm:px-6 sm:pb-24">
        <div className="mx-auto grid max-w-6xl gap-10 border-t-2 border-ink pt-12 lg:grid-cols-[0.8fr_1.2fr]">
          <h2 className="font-display text-[clamp(2rem,4.6vw,3.2rem)] font-extrabold leading-[1.04] tracking-tight [font-stretch:92%]">
            Real teaching. Not an app.
          </h2>
          <ul className="divide-y-2 divide-dashed divide-rule">
            {reasons.map((r) => (
              <li key={r.lead} className="py-5 text-xl leading-relaxed text-ink-soft first:pt-0 sm:text-2xl">
                <strong className="hl font-display font-extrabold text-ink">{r.lead}</strong> {r.text}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ───────── Abacus: try it ───────── */}
      <section className="paper-squared border-y-2 border-rule px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHead title="Try a 30-second abacus lesson" />
            <ol className="mt-8 space-y-4 text-lg text-ink">
              <li className="flex items-center gap-4">
                <span className="h-6 w-11 shrink-0 bg-pink [clip-path:polygon(16%_0,84%_0,100%_50%,84%_100%,16%_100%,0_50%)]" aria-hidden="true" />
                <span><strong>Top beads</strong> are worth 5.</span>
              </li>
              <li className="flex items-center gap-4">
                <span className="h-6 w-11 shrink-0 bg-blue [clip-path:polygon(16%_0,84%_0,100%_50%,84%_100%,16%_100%,0_50%)]" aria-hidden="true" />
                <span><strong>Bottom beads</strong> are worth 1 each.</span>
              </li>
              <li className="flex items-center gap-4">
                <span className="flex h-6 w-11 shrink-0 items-center" aria-hidden="true">
                  <span className="h-2 w-full rounded-sm bg-ink" />
                </span>
                <span>A bead counts when it touches the <strong>bar</strong>.</span>
              </li>
            </ol>
            <p className="mt-8 max-w-md leading-relaxed text-ink-soft">
              In class, children learn to picture these beads in their head, and
              that is how they calculate faster than a calculator.
            </p>
            <Link href="/abacus-classes" className="mt-6 inline-flex font-bold text-blue underline decoration-2 underline-offset-4 hover:text-blue-deep">
              Explore abacus classes →
            </Link>
          </div>
          <div className="flex justify-center lg:justify-end">
            <Abacus />
          </div>
        </div>
      </section>

      {/* ───────── Results ───────── */}
      <section className="px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHead title="Our report card" />
          <div className="mt-14">
            <ReportCard />
          </div>
        </div>
      </section>

      {/* ───────── How to start ───────── */}
      <section className="px-4 pb-20 sm:px-6 sm:pb-24">
        <div className="mx-auto max-w-6xl">
          <SectionHead title="Three steps to get started" />
          <div className="mt-12">
            <DotSteps steps={steps} />
          </div>
        </div>
      </section>

      {/* ───────── Parents ───────── */}
      <section className="bg-yellow-soft px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHead title="Notes from parents" note="real results!" />
          <div className="mt-14">
            <IndexCards items={testimonials} />
          </div>
        </div>
      </section>

      {/* ───────── FAQ ───────── */}
      <section className="px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHead title="Questions parents ask" className="mx-auto max-w-3xl" />
          <div className="mt-10">
            <FAQ faqs={homeFaqs} />
          </div>
        </div>
      </section>

      <TrialSlip />
    </>
  );
}
