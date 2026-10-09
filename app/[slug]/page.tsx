import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Swash from "@/components/Swash";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";
import JsonLd from "@/components/JsonLd";
import ServiceCard from "@/components/ServiceCard";
import { accentStyles } from "@/components/accents";
import { services, getService } from "@/lib/services";
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

const accentHex: Record<string, string> = {
  coral: "#ff4d6d",
  teal: "#00a87e",
  violet: "#8a4dff",
  sun: "#ffd23f",
  sky: "#0097e0",
};

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const a = accentStyles[service.accent];
  const others = services.filter((s) => s.slug !== service.slug).slice(0, 3);

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
      <section className="confetti relative overflow-hidden px-4 pb-16 pt-14 sm:px-6 sm:pt-20">
        <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full opacity-15 blur-3xl" style={{ background: accentHex[service.accent] }} aria-hidden="true" />
        <div className="pointer-events-none absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-violet/10 blur-3xl" aria-hidden="true" />
        <div className="mx-auto max-w-4xl text-center">
          <p className={`sticker ${a.soft} ${a.text}`}>
            <span aria-hidden="true">{service.emoji}</span>
            {service.hero.eyebrow}
          </p>
          <h1 className="mt-6 font-display text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl">
            {service.hero.title}{" "}
            <Swash color={accentHex[service.accent]}>{service.hero.highlight}</Swash>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">
            {service.hero.subtitle}
          </p>

          <div className="mx-auto mt-8 flex max-w-2xl flex-wrap items-center justify-center gap-3">
            {[service.ages, service.duration, service.format].map((chip) => (
              <span key={chip} className="rounded-full border border-ink/10 bg-white px-4 py-2 text-sm font-bold text-ink-soft shadow-lift">
                {chip}
              </span>
            ))}
          </div>

          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className={`w-full rounded-full ${a.bg} ${a.fg} px-8 py-4 text-center text-base font-bold shadow-lift-lg transition hover:-translate-y-0.5 hover:opacity-90 sm:w-auto`}
            >
              Book a Free Trial Class
            </Link>
            <a
              href="#how-it-works"
              className="w-full rounded-full border-2 border-ink/10 bg-white px-8 py-4 text-center text-base font-bold text-ink transition hover:border-ink/25 sm:w-auto"
            >
              How it works ↓
            </a>
          </div>
        </div>
      </section>

      {/* ───────── Outcomes ───────── */}
      <section className="bg-cream px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center font-display text-3xl font-semibold sm:text-4xl">
            What students <Swash color={accentHex[service.accent]}>walk away with</Swash>
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {service.outcomes.map((o, i) => (
              <div key={o.title} className={`rounded-3xl border-2 border-ink/5 bg-white p-7 shadow-lift transition hover:-translate-y-1 hover:shadow-lift-lg ${i % 2 === 1 ? "lg:translate-y-3" : ""}`}>
                <span className={`flex h-10 w-10 -rotate-6 items-center justify-center rounded-xl ${a.soft} font-display text-base font-bold ${a.text}`}>
                  {i + 1}
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold">{o.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-soft">{o.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ───────── Journey ───────── */}
      <section id="how-it-works" className="scroll-mt-20 px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center font-display text-3xl font-semibold sm:text-4xl">
            The journey, step by step
          </h2>
          <ol className="relative mt-14 space-y-10 before:absolute before:bottom-6 before:left-6 before:top-2 before:w-0.5 before:bg-ink/10 sm:before:left-7">
            {service.steps.map((s, i) => (
              <li key={s.title} className="relative flex gap-6 pl-0">
                <span className={`relative z-10 flex h-12 w-12 shrink-0 -rotate-6 items-center justify-center rounded-2xl ${a.bg} ${a.fg} font-display text-lg font-bold shadow-lift sm:h-14 sm:w-14`}>
                  {i + 1}
                </span>
                <div className="rounded-3xl border-2 border-ink/5 bg-white p-6 shadow-lift transition hover:-translate-y-0.5">
                  <h3 className="font-display text-lg font-semibold">{s.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-ink-soft">{s.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ───────── FAQ ───────── */}
      <section className="bg-cream px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center font-display text-3xl font-semibold sm:text-4xl">
            {service.shortName} questions, answered
          </h2>
          <div className="mt-10">
            <FAQ faqs={service.faqs} />
          </div>
        </div>
      </section>

      {/* ───────── Related ───────── */}
      <section className="px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center font-display text-2xl font-semibold sm:text-3xl">
            Families also love
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((s) => (
              <ServiceCard key={s.slug} service={s} />
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title={`Try a free ${service.shortName.toLowerCase()} class`}
        text="Meet the tutor, experience the method live, and get a personal plan — free, with no obligation."
      />
    </>
  );
}
