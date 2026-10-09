import Link from "next/link";
import type { Service } from "@/lib/services";
import { accentStyles } from "./accents";

const cardGrad: Record<Service["accent"], string> = {
  coral: "bg-gradient-to-br from-white to-coral-soft/60",
  teal: "bg-gradient-to-br from-white to-teal-soft/60",
  violet: "bg-gradient-to-br from-white to-violet-soft/60",
  amber: "bg-gradient-to-br from-white to-amber-soft/60",
  sky: "bg-gradient-to-br from-white to-sky-soft/60",
};

export default function ServiceCard({ service }: { service: Service }) {
  const a = accentStyles[service.accent];
  return (
    <Link
      href={`/${service.slug}`}
      className={`group relative flex flex-col overflow-hidden rounded-3xl border-2 ${a.border} ${cardGrad[service.accent]} p-7 shadow-lift ring-0 ring-transparent transition hover:-translate-y-1.5 hover:rotate-1 hover:shadow-lift-lg hover:ring-4 ${a.ring}`}
    >
      <span
        className={`hover-wiggle flex h-14 w-14 -rotate-3 items-center justify-center rounded-2xl ${a.soft} text-3xl shadow-sm transition group-hover:scale-110 group-hover:rotate-3`}
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
        <span className="rounded-full bg-white px-3 py-1 text-ink-soft shadow-sm">Live online</span>
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
