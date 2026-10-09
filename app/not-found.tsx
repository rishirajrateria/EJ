import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center px-4 py-20 text-center">
      <p className="text-7xl" aria-hidden="true">
        🔎
      </p>
      <h1 className="mt-6 font-display text-4xl font-semibold">Page not found</h1>
      <p className="mt-3 max-w-md text-ink-soft">
        That page has wandered off the line. Let&apos;s get you back to the
        good stuff.
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link
          href="/"
          className="rounded-full bg-coral px-7 py-3.5 font-bold text-white shadow-lift transition hover:-translate-y-0.5"
        >
          Back to home
        </Link>
        <Link
          href="/blog"
          className="rounded-full border-2 border-ink/10 bg-white px-7 py-3.5 font-bold text-ink transition hover:border-ink/25"
        >
          Read our guides
        </Link>
      </div>
    </section>
  );
}
