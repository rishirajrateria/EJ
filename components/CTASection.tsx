import Link from "next/link";

export default function CTASection({
  title = "Ready to see the difference?",
  text = "Book a free trial class — meet the tutor, try the method, and get a personal improvement plan. No card, no commitment.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="px-4 pb-20 pt-4 sm:px-6">
      <div className="bg-night relative mx-auto max-w-5xl overflow-hidden rounded-[2.5rem] px-6 py-16 text-center text-white sm:px-12">
        {/* decorative orbs */}
        <div className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-coral/40 blur-3xl" aria-hidden="true" />
        <div className="pointer-events-none absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-sky/30 blur-3xl" aria-hidden="true" />
        <div className="pointer-events-none absolute right-24 top-10 h-24 w-24 rounded-full bg-sun/50 blur-2xl" aria-hidden="true" />
        {/* floating doodles */}
        <span className="animate-float pointer-events-none absolute left-8 top-8 text-3xl" style={{ "--float-rotate": "-10deg" } as React.CSSProperties} aria-hidden="true">✨</span>
        <span className="animate-float-slow pointer-events-none absolute bottom-8 right-10 text-3xl" style={{ "--float-rotate": "12deg" } as React.CSSProperties} aria-hidden="true">🎈</span>

        <div className="relative">
          <h2 className="font-display text-3xl font-semibold sm:text-4xl">{title}</h2>
          <p className="mx-auto mt-4 max-w-xl text-white/75">{text}</p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="btn-grad rounded-full px-8 py-4 text-base font-bold text-white shadow-lift-lg transition hover:-translate-y-0.5"
            >
              Book a Free Trial Class 🎉
            </Link>
            <Link
              href="/#classes"
              className="rounded-full border-2 border-white/30 px-8 py-4 text-base font-bold text-white transition hover:bg-white/10"
            >
              Explore Classes
            </Link>
          </div>
          <p className="mt-6 text-sm text-white/55">
            Classes scheduled for UK &amp; USA time zones · 100% live, never recorded videos
          </p>
        </div>
      </div>
    </section>
  );
}
