import Link from "next/link";
import type { Service } from "@/lib/services";
import { accentStyles } from "./accents";

export default function ServiceCard({ service }: { service: Service }) {
  const a = accentStyles[service.accent];
  return (
    <Link
      href={`/${service.slug}`}
      className={`group relative flex flex-col overflow-hidden rounded-3xl border ${a.border} bg-white p-7 shadow-lift ring-0 ring-transparent transition hover:-translate-y-1.5 hover:shadow-lift-lg hover:ring-4 ${a.ring}`}
    >
      <span
        className={`flex h-14 w-14 items-center justify-center rounded-2xl ${a.soft} text-3xl transition group-hover:scale-110`}
        aria-hidden="true"
      >
        {service.emoji}
      </span>
      <h3 className="mt-5 font-display text-xl font-semibold text-ink">
        {service.menuLabel}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-ink-soft">
        {service.hero.subtitle.split("—")[0].trim().slice(0, 110)}
        {service.hero.subtitle.length > 110 ? "…" : ""}
      </p>
      <div className="mt-4 flex flex-wrap gap-2 text-[11px] font-bold">
        <span className={`rounded-full ${a.soft} ${a.text} px-3 py-1`}>{service.ages}</span>
        <span className="rounded-full bg-cream px-3 py-1 text-ink-soft">Live online</span>
      </div>
      <span className={`mt-5 inline-flex items-center gap-1.5 text-sm font-bold ${a.text}`}>
        Explore classes
        <svg className="h-4 w-4 transition group-hover:translate-x-1" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path d="M3 8h10m0 0L9 4m4 4l-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
    </Link>
  );
}
