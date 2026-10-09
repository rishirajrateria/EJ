"use client";

import Link from "next/link";
import { useState } from "react";
import Logo from "./Logo";
import { services } from "@/lib/services";

const navLinks = [
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [classesOpen, setClassesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-ink/5 bg-paper/85 backdrop-blur-lg">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link
          href="/"
          className="flex items-center gap-2.5"
          aria-label="The Education Junction — home"
          onClick={() => setOpen(false)}
        >
          <Logo />
          <span className="font-display text-lg font-semibold leading-tight tracking-tight">
            The Education <span className="text-coral">Junction</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-7 md:flex" aria-label="Main">
          <div className="group relative">
            <button
              className="flex items-center gap-1 text-sm font-semibold text-ink-soft transition hover:text-ink"
              aria-haspopup="true"
            >
              Classes
              <svg className="h-3.5 w-3.5 transition group-hover:rotate-180" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <div className="invisible absolute left-1/2 top-full z-50 w-64 -translate-x-1/2 pt-3 opacity-0 transition-all duration-150 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
              <div className="overflow-hidden rounded-2xl border border-ink/5 bg-paper p-2 shadow-lift-lg">
                {services.map((s) => (
                  <Link
                    key={s.slug}
                    href={`/${s.slug}`}
                    className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-ink-soft transition hover:bg-cream hover:text-ink"
                  >
                    <span className="text-lg" aria-hidden="true">{s.emoji}</span>
                    {s.menuLabel}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-semibold text-ink-soft transition hover:text-ink"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="btn-grad rounded-full px-5 py-2.5 text-sm font-bold text-white shadow-lift transition hover:-translate-y-0.5 hover:shadow-lift-lg"
          >
            Book a Free Trial
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-ink/10 md:hidden"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          <svg className="h-5 w-5" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            {open ? (
              <path d="M5 5l10 10M15 5L5 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            ) : (
              <path d="M3 6h14M3 10h14M3 14h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="border-t border-ink/5 bg-paper px-4 pb-6 pt-3 md:hidden" aria-label="Mobile">
          <button
            className="flex w-full items-center justify-between rounded-xl px-3 py-3 text-base font-semibold"
            onClick={() => setClassesOpen(!classesOpen)}
            aria-expanded={classesOpen}
          >
            Classes
            <svg className={`h-4 w-4 transition ${classesOpen ? "rotate-180" : ""}`} viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M4 6l4 4 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          {classesOpen && (
            <div className="mb-2 ml-2 border-l-2 border-coral/30 pl-2">
              {services.map((s) => (
                <Link
                  key={s.slug}
                  href={`/${s.slug}`}
                  className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-ink-soft"
                  onClick={() => setOpen(false)}
                >
                  <span aria-hidden="true">{s.emoji}</span>
                  {s.menuLabel}
                </Link>
              ))}
            </div>
          )}
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="block rounded-xl px-3 py-3 text-base font-semibold"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="btn-grad mt-3 block rounded-full px-5 py-3 text-center text-base font-bold text-white shadow-lift"
            onClick={() => setOpen(false)}
          >
            Book a Free Trial
          </Link>
        </nav>
      )}
    </header>
  );
}
