import Link from "next/link";
import Logo from "./Logo";
import { services } from "@/lib/services";
import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="rainbow-bar h-1.5" aria-hidden="true" />
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Link href="/" className="flex items-center gap-2.5" aria-label="The Education Junction — home">
              <Logo />
              <span className="font-display text-lg font-semibold">
                The Education <span className="text-coral">Junction</span>
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
              Live online classes in handwriting, cursive, calligraphy, abacus
              mental math and phonics — for kids and adults across the UK and USA.
            </p>
            <div className="mt-5 flex gap-3">
              <a href={site.social.instagram} aria-label="Instagram" className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition hover:bg-coral" rel="noopener noreferrer" target="_blank">
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.8.2 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.4 1 .4 2.2.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.2 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1 .4-2.2.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.8-.2-2.2-.4-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.2-.4-.4-1-.4-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.2-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1-.4 2.2-.4C8.4 2.2 8.8 2.2 12 2.2m0 1.8c-3.1 0-3.5 0-4.8.1-1.1.1-1.5.2-1.8.3-.5.2-.8.4-1.1.7-.3.3-.5.6-.7 1.1-.1.3-.3.7-.3 1.8-.1 1.3-.1 1.7-.1 4.8s0 3.5.1 4.8c.1 1.1.2 1.5.3 1.8.2.5.4.8.7 1.1.3.3.6.5 1.1.7.3.1.7.3 1.8.3 1.3.1 1.7.1 4.8.1s3.5 0 4.8-.1c1.1-.1 1.5-.2 1.8-.3.5-.2.8-.4 1.1-.7.3-.3.5-.6.7-1.1.1-.3.3-.7.3-1.8.1-1.3.1-1.7.1-4.8s0-3.5-.1-4.8c-.1-1.1-.2-1.5-.3-1.8-.2-.5-.4-.8-.7-1.1-.3-.3-.6-.5-1.1-.7-.3-.1-.7-.3-1.8-.3-1.3-.1-1.7-.1-4.8-.1zm0 3.1a5 5 0 110 9.9 5 5 0 010-9.9zm0 8.1a3.2 3.2 0 100-6.3 3.2 3.2 0 000 6.3zm6.3-8.3a1.2 1.2 0 11-2.3 0 1.2 1.2 0 012.3 0z"/></svg>
              </a>
              <a href={site.social.facebook} aria-label="Facebook" className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition hover:bg-coral" rel="noopener noreferrer" target="_blank">
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M24 12a12 12 0 10-13.9 11.9v-8.4h-3V12h3V9.4c0-3 1.8-4.7 4.6-4.7 1.3 0 2.7.2 2.7.2v3h-1.5c-1.5 0-2 .9-2 1.9V12h3.3l-.5 3.5h-2.8v8.4A12 12 0 0024 12z"/></svg>
              </a>
              <a href={site.social.youtube} aria-label="YouTube" className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition hover:bg-coral" rel="noopener noreferrer" target="_blank">
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M23.5 6.2a3 3 0 00-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 00.5 6.2 31.3 31.3 0 000 12a31.3 31.3 0 00.5 5.8 3 3 0 002.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 002.1-2.1A31.3 31.3 0 0024 12a31.3 31.3 0 00-.5-5.8zM9.5 15.6V8.4l6.3 3.6-6.3 3.6z"/></svg>
              </a>
            </div>
          </div>

          <nav aria-label="Classes">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white/40">Classes</h3>
            <ul className="mt-4 space-y-2.5">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link href={`/${s.slug}`} className="text-sm text-white/70 transition hover:text-coral">
                    {s.menuLabel}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Company">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white/40">Explore</h3>
            <ul className="mt-4 space-y-2.5">
              <li><Link href="/about" className="text-sm text-white/70 transition hover:text-coral">About Us</Link></li>
              <li><Link href="/blog" className="text-sm text-white/70 transition hover:text-coral">Blog</Link></li>
              <li><Link href="/contact" className="text-sm text-white/70 transition hover:text-coral">Contact</Link></li>
              <li><Link href="/contact" className="text-sm text-white/70 transition hover:text-coral">Free Trial Class</Link></li>
            </ul>
          </nav>

          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white/40">Get in touch</h3>
            <ul className="mt-4 space-y-2.5 text-sm text-white/70">
              <li>
                <a href={`mailto:${site.email}`} className="transition hover:text-coral">{site.email}</a>
              </li>
              <li>Teaching online across the</li>
              <li className="flex items-center gap-2 font-semibold text-white">
                <span aria-hidden="true">🇬🇧</span> United Kingdom
              </li>
              <li className="flex items-center gap-2 font-semibold text-white">
                <span aria-hidden="true">🇺🇸</span> United States
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/40 sm:flex-row">
          <p>© {new Date().getFullYear()} The Education Junction. All rights reserved.</p>
          <p>Beautiful handwriting. Brilliant minds.</p>
        </div>
      </div>
    </footer>
  );
}
