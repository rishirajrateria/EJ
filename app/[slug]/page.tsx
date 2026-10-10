import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import FAQ from "@/components/FAQ";
import JsonLd from "@/components/JsonLd";
import TrialSlip from "@/components/TrialSlip";
import SectionHead from "@/components/SectionHead";
import Checklist from "@/components/Checklist";
import DotSteps from "@/components/DotSteps";
import BeforeAfter from "@/components/BeforeAfter";
import Abacus from "@/components/Abacus";
import { BookShelf, Cover } from "@/components/BookCover";
import { Underline } from "@/components/Marks";
import { services, getService } from "@/lib/services";
import { palette } from "@/lib/palette";
import { site, absoluteUrl } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  const path = `/${service.slug}`;
  return {
    title: service.seoTitle,
    description: service.seoDescription,
    alternates: {
      canonical: path,
      languages: { "en-GB": path, "en-US": path, "x-default": path },
    },
    openGraph: {
      title: service.seoTitle,
      description: service.seoDescription,
      url: path,
      type: "website",
    },
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const p = palette[service.accent];
  const others = services.filter((s) => s.slug !== service.slug);

  const courseJsonLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    "@id": absoluteUrl(`/${service.slug}#course`),
    name: service.name,
    description: service.seoDescription,
    url: absoluteUrl(`/${service.slug}`),
    provider: { "@id": absoluteUrl("/#organization") },
    educationalLevel: "Beginner to advanced",
    teaches: service.outcomes.map((o) => o.title),
    availableLanguage: "en",
    offers: {
      "@type": "Offer",
      category: "Free trial class",
      availability: "https://schema.org/InStock",
      areaServed: [
        { "@type": "Country", name: "United Kingdom" },
        { "@type": "Country", name: "United States" },
      ],
    },
    hasCourseInstance: {
      "@type": "CourseInstance",
      courseMode: "Online",
      courseWorkload: "PT2H",
      instructor: { "@type": "Person", name: `${site.shortName} certified tutor` },
    },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: site.url },
      {
        "@type": "ListItem",
        position: 2,
        name: service.name,
        item: absoluteUrl(`/${service.slug}`),
      },
    ],
  };

  return (
    <>
      <JsonLd data={courseJsonLd} />
      <JsonLd data={faqJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />

      {/* ───────── Hero ───────── */}
      <section className="paper-ruled paper-margin overflow-hidden px-4 pb-20 pt-10 sm:px-6 sm:pt-14">
        <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <nav aria-label="Breadcrumb" className="text-sm font-bold text-ink-soft">
              <Link href="/" className="hover:text-ink">Home</Link>
              <span className="mx-2" aria-hidden="true">/</span>
              <Link href="/#classes" className="hover:text-ink">Classes</Link>
            </nav>
            <h1 className="mt-6">
              <span className={`label-caps block ${p.text}`}>{service.name} · Online</span>
              <span className="mt-4 block font-display text-[clamp(2.8rem,7vw,5rem)] font-extrabold leading-[0.98] tracking-[-0.03em] [font-stretch:88%]">
                {service.hero.title}{" "}
                <span className="relative inline-block font-script text-[0.72em] font-normal tracking-normal text-redpen [font-stretch:100%]">
                  {service.hero.highlight}
                  <Underline />
                </span>
              </span>
            </h1>
            <p className="mt-8 max-w-lg text-lg leading-relaxed text-ink-soft">{service.hero.subtitle}</p>

            {/* facts, written like a book label */}
            <dl className="mt-8 grid max-w-lg gap-x-6 gap-y-3 rounded-md border-2 border-ink/15 bg-white px-5 py-4 sm:grid-cols-3">
              {[
                ["Age", service.ages.replace(/^Ages /, "")],
                ["Length", service.duration],
                ["Format", service.format.replace(/^Live online · /, "Live · ")],
              ].map(([k, v]) => (
                <div key={k}>
                  <dt className="label-caps text-ink-soft">{k}</dt>
                  <dd className="mt-0.5 border-b border-dotted border-ink/30 pb-1 font-hand text-[15px] font-semibold text-blue-deep">{v}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link href="/contact" className="btn btn-primary">
                Book a free trial
              </Link>
              <a href="#lesson-plan" className="btn btn-secondary">
                See the lesson plan
              </a>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            {service.slug === "handwriting-classes" ? (
              <BeforeAfter />
            ) : service.slug === "abacus-classes" ? (
              <Abacus />
            ) : (
              <div className="group w-[min(78%,340px)] rotate-[3deg]">
                <Cover service={service} large />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ───────── Outcomes ───────── */}
      <section className="px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHead title="By the end of the course" />
          <div className="mt-12">
            <Checklist items={service.outcomes} />
          </div>
        </div>
      </section>

      {/* ───────── Lesson plan ───────── */}
      <section id="lesson-plan" className={`scroll-mt-20 px-4 py-20 sm:px-6 sm:py-24 ${p.soft}`}>
        <div className="mx-auto max-w-6xl">
          <SectionHead title="The lesson plan" note="one step at a time" />
          <div className="mt-12">
            <DotSteps steps={service.steps} label={(i) => `Stage ${i + 1}`} />
          </div>
        </div>
      </section>

      {/* ───────── FAQ ───────── */}
      <section className="px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHead title={`${service.shortName} questions`} className="mx-auto max-w-3xl" />
          <div className="mt-10">
            <FAQ faqs={service.faqs} />
          </div>
        </div>
      </section>

      {/* ───────── Other classes ───────── */}
      <section className="border-t-2 border-rule px-4 py-20 sm:px-6 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <SectionHead title="Other subjects" />
          <div className="mt-12">
            <BookShelf items={others} />
          </div>
        </div>
      </section>

      <TrialSlip title={`Book a free ${service.shortName.toLowerCase()} lesson`} />
    </>
  );
}
