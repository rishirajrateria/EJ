import Link from "next/link";
import Logo from "./Logo";
import Glyph, { serviceGlyph } from "./Glyph";
import { services } from "@/lib/services";
import { palette } from "@/lib/palette";

function Wordmark() {
  return (
    <span className="flex flex-col leading-none">
      <span className="font-script text-[11px] text-redpen">The</span>
      <span className="font-display text-[19px] font-extrabold tracking-tight text-ink">
        Education Junction
      </span>
    </span>
  );
}

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b-2 border-rule bg-paper/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2.5" aria-label="The Education Junction home">
          <Logo />
          <Wordmark />
        </Link>

        {/* Desktop */}
        <nav className="hidden items-center gap-7 md:flex" aria-label="Main">
          <div className="group relative">
            <button className="flex items-center gap-1 text-[15px] font-bold text-ink-soft transition hover:text-ink" aria-haspopup="true">
              Classes
              <svg className="h-3.5 w-3.5 transition group-hover:rotate-180" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <div className="invisible absolute left-1/2 top-full w-72 -translate-x-1/2 pt-3 opacity-0 transition duration-150 group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
              <div className="rounded-xl border-2 border-ink bg-white p-2 shadow-[0_6px_0_#16205c]">
                {services.map((s) => {
                  const p = palette[s.accent];
                  return (
                    <Link
                      key={s.slug}
                      href={`/${s.slug}`}
                      className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-[15px] font-semibold text-ink transition hover:bg-blue-soft"
                    >
                      <span className={`flex h-8 w-8 items-center justify-center rounded-md ${p.cover} ${p.onCover}`}>
                        <Glyph name={serviceGlyph[s.slug]} className="h-5 w-5" />
                      </span>
                      {s.menuLabel}
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
          <Link href="/about" className="text-[15px] font-bold text-ink-soft transition hover:text-ink">
            About
          </Link>
          <Link href="/blog" className="text-[15px] font-bold text-ink-soft transition hover:text-ink">
            Blog
          </Link>
          <Link href="/contact" className="btn btn-primary !px-5 !py-2.5 text-[15px]">
            Book a free trial
          </Link>
        </nav>

        {/* Mobile: <details> opens and closes without JavaScript */}
        <details className="group md:hidden" data-menu>
          <summary
            className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-xl border-2 border-ink bg-white shadow-[0_3px_0_#16205c]"
            aria-label="Menu"
          >
            <svg className="h-5 w-5 group-open:hidden" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="M3 6h14M3 10h14M3 14h9" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
            </svg>
            <svg className="hidden h-5 w-5 group-open:block" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="M5 5l10 10M15 5L5 15" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
            </svg>
          </summary>
          <nav
            className="absolute inset-x-0 top-full border-b-2 border-rule bg-paper px-4 pb-6 pt-2 shadow-[0_16px_24px_-16px_rgb(22_32_92/0.4)]"
            aria-label="Mobile"
          >
            <p className="label-caps px-2 pb-2 pt-3 text-ink-soft">Classes</p>
            <div className="grid grid-cols-1 gap-1">
              {services.map((s) => {
                const p = palette[s.accent];
                return (
                  <Link
                    key={s.slug}
                    href={`/${s.slug}`}
                    className="flex items-center gap-3 rounded-lg px-2 py-2 text-base font-semibold text-ink"
                  >
                    <span className={`flex h-8 w-8 items-center justify-center rounded-md ${p.cover} ${p.onCover}`}>
                      <Glyph name={serviceGlyph[s.slug]} className="h-5 w-5" />
                    </span>
                    {s.menuLabel}
                  </Link>
                );
              })}
            </div>
            <div className="mt-3 flex gap-2 border-t-2 border-dashed border-rule px-2 pt-3">
              <Link href="/about" className="py-2 pr-4 text-base font-bold text-ink">About</Link>
              <Link href="/blog" className="py-2 pr-4 text-base font-bold text-ink">Blog</Link>
            </div>
            <Link href="/contact" className="btn btn-primary mt-3 w-full">
              Book a free trial
            </Link>
          </nav>
        </details>
      </div>
    </header>
  );
}
