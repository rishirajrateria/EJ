import Link from "next/link";
import { Tick } from "./Marks";
import { services } from "@/lib/services";
import { site } from "@/lib/site";

function Scissors() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6 shrink-0 -rotate-90" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <circle cx="6" cy="6" r="3" />
      <circle cx="6" cy="18" r="3" />
      <path d="M20 4 8.1 15.9M14.5 14.5 20 20M8.1 8.1 12 12" />
    </svg>
  );
}

function PrintedFields() {
  return (
    <div className="mt-7 space-y-5" aria-hidden="true">
      <div className="flex flex-wrap items-end gap-x-6 gap-y-4">
        <p className="flex min-w-[14rem] flex-1 items-end gap-3">
          <span className="label-caps shrink-0 text-ink-soft">Student&apos;s name</span>
          <span className="h-6 flex-1 border-b-2 border-dotted border-ink/40" />
        </p>
        <p className="flex w-28 items-end gap-3">
          <span className="label-caps shrink-0 text-ink-soft">Age</span>
          <span className="h-6 flex-1 border-b-2 border-dotted border-ink/40" />
        </p>
      </div>
      <div>
        <p className="label-caps text-ink-soft">I&apos;d like to try</p>
        <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-3">
          {services.map((s, i) => (
            <li key={s.slug} className="flex items-center gap-2 font-semibold text-ink">
              <span className="relative h-5 w-5 rounded-[3px] border-2 border-ink">
                {i === 0 && <Tick className="absolute -left-1 -top-3 h-8 w-8" />}
              </span>
              {s.shortName}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

const fieldClass =
  "mt-1 block w-full border-0 border-b-2 border-dotted border-ink/40 bg-transparent px-0 py-1.5 font-hand text-lg text-blue-deep placeholder:text-ink-soft/50 focus:border-solid focus:border-blue focus:outline-none";

function TrialForm() {
  return (
    <form
      data-trial-form
      data-email={site.email}
      action={`mailto:${site.email}`}
      method="post"
      encType="text/plain"
      className="mt-7 space-y-6"
    >
      <div className="grid gap-6 sm:grid-cols-[1fr_7rem]">
        <label htmlFor="trial-student" className="block">
          <span className="label-caps text-ink-soft">Student&apos;s name</span>
          <input id="trial-student" name="student" type="text" required autoComplete="off" className={fieldClass} />
        </label>
        <label htmlFor="trial-age" className="block">
          <span className="label-caps text-ink-soft">Age</span>
          <input id="trial-age" name="age" type="text" inputMode="numeric" className={fieldClass} />
        </label>
      </div>

      <fieldset>
        <legend className="label-caps text-ink-soft">I&apos;d like to try</legend>
        <div className="mt-3 flex flex-wrap gap-x-5 gap-y-3">
          {services.map((s) => (
            <label key={s.slug} htmlFor={`trial-${s.slug}`} className="flex cursor-pointer items-center gap-2 font-semibold text-ink">
              <input id={`trial-${s.slug}`} type="checkbox" name="classes" value={s.menuLabel} className="h-5 w-5 accent-blue" />
              {s.shortName}
            </label>
          ))}
        </div>
      </fieldset>

      <div className="grid gap-6 sm:grid-cols-2">
        <label htmlFor="trial-parent" className="block">
          <span className="label-caps text-ink-soft">Your name (parent / guardian or adult learner)</span>
          <input id="trial-parent" name="parent" type="text" autoComplete="name" className={fieldClass} />
        </label>
        <label htmlFor="trial-email" className="block">
          <span className="label-caps text-ink-soft">Your email</span>
          <input id="trial-email" name="email" type="email" required autoComplete="email" className={fieldClass} />
        </label>
        <label htmlFor="trial-timezone" className="block">
          <span className="label-caps text-ink-soft">Where are you?</span>
          <select id="trial-timezone" name="timezone" className={`${fieldClass} cursor-pointer`} defaultValue="United Kingdom">
            <option>United Kingdom</option>
            <option>USA, Eastern time</option>
            <option>USA, Central time</option>
            <option>USA, Mountain time</option>
            <option>USA, Pacific time</option>
            <option>Somewhere else</option>
          </select>
        </label>
        <label htmlFor="trial-times" className="block">
          <span className="label-caps text-ink-soft">Best days and times</span>
          <input id="trial-times" name="times" type="text" placeholder="e.g. weekday evenings" className={fieldClass} />
        </label>
      </div>

      <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center sm:gap-5">
        <button type="submit" className="btn btn-primary">
          Send my reply slip →
        </button>
        <p className="text-sm text-ink-soft">This opens your email app with everything filled in.</p>
      </div>
      <p data-trial-note hidden className="rounded-md bg-yellow-soft px-4 py-3 text-sm text-ink">
        Your email app should now open with your reply ready to send. If nothing opened, email us at{" "}
        <strong className="select-all">{site.email}</strong>.
      </p>
    </form>
  );
}

export default function TrialSlip({
  title = "Book a free trial lesson",
  text = "Meet the tutor, try a real live lesson and get an honest plan. Free, with no card details and no obligation.",
  form = false,
  headingLevel = "h2",
}: {
  title?: string;
  text?: string;
  form?: boolean;
  headingLevel?: "h1" | "h2";
}) {
  const Heading = headingLevel;
  return (
    <section className="cover-linen bg-blue px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-3xl">
        <div className="flex items-center gap-3 text-white/85" aria-hidden="true">
          <Scissors />
          <span className="h-0 flex-1 border-t-2 border-dashed border-white/60" />
          <span className="label-caps text-white/70">Cut here</span>
        </div>
        <div className="relative mt-3 rounded-[3px] bg-white p-6 shadow-page sm:p-10">
          <div className="flex flex-wrap items-baseline justify-between gap-2 border-b-2 border-ink pb-3">
            <p className="label-caps text-ink">Reply slip · Free trial class</p>
            <p className="font-script text-[13px] text-ink-soft">Hand it in any time</p>
          </div>
          <Heading className="mt-6 font-display text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
            {title}
          </Heading>
          <p className="mt-3 max-w-xl leading-relaxed text-ink-soft">{text}</p>

          {form ? (
            <TrialForm />
          ) : (
            <>
              <PrintedFields />
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-5">
                <Link href="/contact" className="btn btn-primary">
                  Book my free trial →
                </Link>
                <p className="text-sm font-semibold text-ink-soft">Free · No card · UK &amp; US time zones</p>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
