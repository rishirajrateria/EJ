import Link from "next/link";
import Glyph, { serviceGlyph } from "./Glyph";
import type { Service } from "@/lib/services";
import { palette } from "@/lib/palette";

// A school exercise book: coloured cover, stapled spine, white name label.
export function Cover({ service, large = false }: { service: Service; large?: boolean }) {
  const p = palette[service.accent];
  const age = service.ages.replace(/^Ages /, "");
  return (
    <div className="relative">
      {/* the pages behind the cover */}
      <div
        className="paper-ruled absolute inset-y-[3%] left-[4%] right-0 translate-x-[5%] rounded-r-[5px] border border-ink/10 bg-white transition duration-300 group-hover:translate-x-[11%] group-hover:rotate-[3deg]"
        aria-hidden="true"
      />
      <div
        className={`cover-linen relative aspect-[5/7] overflow-hidden rounded-l-[3px] rounded-r-[6px] ${p.cover} shadow-book transition duration-300 group-hover:-translate-y-2 group-hover:-rotate-2`}
      >
        <span className={`absolute inset-y-0 left-0 w-[7%] ${p.spine}`} aria-hidden="true" />
        <span className="absolute left-[2.5%] top-[20%] h-[7%] w-[1.6%] rounded-full bg-white/70" aria-hidden="true" />
        <span className="absolute bottom-[20%] left-[2.5%] h-[7%] w-[1.6%] rounded-full bg-white/70" aria-hidden="true" />

        <div
          className={`absolute left-[16%] right-[9%] top-[13%] rounded-[5px] border-2 border-ink/15 bg-white text-ink shadow-sm ${large ? "px-5 py-4" : "px-[9%] py-[7%]"}`}
        >
          <p className={`label-caps text-ink-soft ${large ? "" : "!text-[8px]"}`}>Subject</p>
          <p className={`border-b border-dotted border-ink/40 pb-0.5 font-script leading-snug text-blue-deep ${large ? "text-2xl" : "text-[15px]"}`}>
            {service.shortName}
          </p>
          <p className={`label-caps mt-[8%] text-ink-soft ${large ? "" : "!text-[8px]"}`}>Name</p>
          <p className={`border-b border-dotted border-ink/40 ${large ? "h-8" : "h-[18px]"}`} />
          <p className={`label-caps mt-[8%] text-ink-soft ${large ? "" : "!text-[8px]"}`}>Age</p>
          <p className={`border-b border-dotted border-ink/40 pb-0.5 font-script leading-snug text-blue-deep ${large ? "text-lg" : "text-[12px]"}`}>
            {age}
          </p>
        </div>

        <Glyph
          name={serviceGlyph[service.slug]}
          className={`absolute bottom-[7%] right-[9%] opacity-90 ${p.onCover} ${large ? "h-16 w-16" : "h-[22%] w-[22%]"}`}
        />
      </div>
    </div>
  );
}

export function BookShelf({ items }: { items: Service[] }) {
  return (
    <div className="-mx-4 overflow-x-auto px-4 pb-4 sm:mx-0 sm:overflow-visible sm:px-0">
      <ul className={`flex snap-x snap-mandatory gap-6 sm:grid sm:gap-x-6 sm:gap-y-12 ${items.length >= 5 ? "sm:grid-cols-3 lg:grid-cols-5" : "sm:grid-cols-2 lg:grid-cols-4"}`}>
        {items.map((s) => (
          <li key={s.slug} className="w-[58%] shrink-0 snap-start sm:w-auto">
            <Link href={`/${s.slug}`} className="group block">
              <div className="relative pr-[6%]">
                <Cover service={s} />
              </div>
              {/* shelf */}
              <div className="mt-[-2px] h-2.5 rounded-sm bg-ink/85 shadow-[0_8px_12px_-6px_rgb(22_32_92/0.5)]" aria-hidden="true" />
              <h3 className="mt-4 font-display text-lg font-extrabold leading-tight tracking-tight text-ink group-hover:text-blue">
                {s.menuLabel}
              </h3>
              <p className="mt-1 text-sm text-ink-soft">{s.hero.eyebrow}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
