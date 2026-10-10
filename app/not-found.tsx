import Link from "next/link";

export default function NotFound() {
  return (
    <section className="paper-ruled paper-margin px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <p className="font-hand text-xl font-bold text-redpen">Oops, see me after class.</p>
        <h1 className="mt-4 font-display text-[clamp(3rem,9vw,6rem)] font-extrabold leading-none tracking-tight [font-stretch:86%]">
          This page has been torn out.
        </h1>
        <p className="mt-6 max-w-md text-lg text-ink-soft">
          The page you were looking for isn&apos;t in this exercise book.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Link href="/" className="btn btn-primary">
            Back to the front page
          </Link>
          <Link href="/blog" className="btn btn-secondary">
            Read our guides
          </Link>
        </div>
      </div>
    </section>
  );
}
