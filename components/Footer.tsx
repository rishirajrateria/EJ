import Link from "next/link";
import Logo from "./Logo";
import { services } from "@/lib/services";
import { site } from "@/lib/site";

// Like the back cover of a school exercise book, with the times tables.
function TimesTable() {
  const n = Array.from({ length: 12 }, (_, i) => i + 1);
  return (
    <div className="hidden rounded-lg border border-white/15 p-3 lg:block" aria-hidden="true">
      <p className="label-caps mb-2 text-white/50">Multiplication square</p>
      <div className="grid grid-cols-12 gap-px font-mono text-[10px] tabular-nums leading-[18px] text-white/45">
        {n.map((r) =>
          n.map((c) => (
            <span
              key={`${r}-${c}`}
              className={`w-[26px] text-center ${r === 1 || c === 1 ? "font-bold text-yellow/90" : ""} ${r === c ? "text-white/80" : ""}`}
            >
              {r * c}
            </span>
          ))
        )}
      </div>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="cover-linen bg-ink text-white">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="flex flex-col gap-12 lg:flex-row lg:justify-between">
          <div className="grid gap-10 sm:grid-cols-3 lg:grid-cols-[1.3fr_1fr_0.8fr] lg:gap-12">
            <div className="sm:col-span-3 lg:col-span-1">
              <Link href="/" className="flex items-center gap-2.5" aria-label="The Education Junction home">
                <span className="rounded-[10px] bg-white p-0.5">
                  <Logo />
                </span>
                <span className="flex flex-col leading-none">
                  <span className="font-script text-[11px] text-yellow">The</span>
                  <span className="font-display text-[19px] font-extrabold tracking-tight">Education Junction</span>
                </span>
              </Link>
              <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/75">
                Live online classes in handwriting, cursive, calligraphy, abacus and
                phonics for kids and adults across the UK and USA.
              </p>
              <p className="mt-5 text-sm font-semibold text-white/85">
                <a href={`mailto:${site.email}`} className="underline decoration-white/40 underline-offset-4 hover:decoration-white">
                  {site.email}
                </a>
              </p>
            </div>

            <nav aria-label="Classes">
              <h3 className="label-caps text-white/55">Classes</h3>
              <ul className="mt-4 space-y-2.5">
                {services.map((s) => (
                  <li key={s.slug}>
                    <Link href={`/${s.slug}`} className="text-sm text-white/85 transition hover:text-yellow">
                      {s.menuLabel}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <nav aria-label="Explore">
              <h3 className="label-caps text-white/55">Explore</h3>
              <ul className="mt-4 space-y-2.5">
                <li><Link href="/about" className="text-sm text-white/85 transition hover:text-yellow">About us</Link></li>
                <li><Link href="/blog" className="text-sm text-white/85 transition hover:text-yellow">Blog</Link></li>
                <li><Link href="/contact" className="text-sm text-white/85 transition hover:text-yellow">Free trial class</Link></li>
                <li><a href={site.social.instagram} rel="noopener noreferrer" target="_blank" className="text-sm text-white/85 transition hover:text-yellow">Instagram</a></li>
                <li><a href={site.social.youtube} rel="noopener noreferrer" target="_blank" className="text-sm text-white/85 transition hover:text-yellow">YouTube</a></li>
              </ul>
            </nav>
          </div>
          <TimesTable />
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-white/20 pt-6 text-xs text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} The Education Junction · Teaching online across the United Kingdom and United States</p>
          <p className="font-script text-sm text-white/80">Beautiful handwriting. Brilliant minds.</p>
        </div>
      </div>
    </footer>
  );
}
