import Logo from "./Logo";

const rows = [
  { subject: "Students taught", result: "2,000+", comment: "A full classroom, and growing every term." },
  { subject: "Parent rating", result: "4.9/5", comment: "Consistently outstanding." },
  { subject: "First visible change", result: "4 wks", comment: "Remarkable progress from week one." },
  { subject: "Class size", result: "Max 4", comment: "Every student seen and heard." },
];

export default function ReportCard() {
  return (
    <div className="relative mx-auto max-w-3xl">
      <div className="relative rounded-md border-2 border-ink bg-white shadow-[8px_8px_0_#16205c]">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b-2 border-ink px-5 py-4 sm:px-7">
          <div className="flex items-center gap-3">
            <Logo className="h-9 w-9" />
            <div>
              <p className="font-display text-lg font-extrabold leading-tight">School report</p>
              <p className="label-caps text-ink-soft">The Education Junction</p>
            </div>
          </div>
          <p className="label-caps text-ink-soft">Year 2026 · All classes</p>
        </div>

        <dl>
          <div className="hidden grid-cols-[1.1fr_0.7fr_1.6fr] gap-4 border-b border-rule px-7 py-2 sm:grid" aria-hidden="true">
            <span className="label-caps text-ink-soft">Subject</span>
            <span className="label-caps text-ink-soft">Result</span>
            <span className="label-caps text-ink-soft">Teacher&apos;s comment</span>
          </div>
          {rows.map((r) => (
            <div
              key={r.subject}
              className="grid grid-cols-[1fr_auto] items-center gap-x-4 gap-y-1 border-b border-rule px-5 py-4 last:border-b-0 sm:grid-cols-[1.1fr_0.7fr_1.6fr] sm:px-7"
            >
              <dt className="font-bold text-ink">{r.subject}</dt>
              <dd className="font-display text-2xl font-extrabold tabular-nums text-redpen sm:text-3xl">{r.result}</dd>
              <dd className="col-span-2 font-hand text-[15px] text-blue-deep sm:col-span-1">{r.comment}</dd>
            </div>
          ))}
        </dl>
      </div>

      {/* rubber stamp */}
      <div
        className="absolute -bottom-10 right-3 flex h-24 w-24 rotate-[14deg] bg-white/70 flex-col items-center justify-center rounded-full border-[3px] border-pink text-center text-pink-deep sm:-right-8 sm:h-28 sm:w-28"
        aria-hidden="true"
      >
        <span className="label-caps !text-[9px] leading-tight">Top of</span>
        <span className="font-display text-lg font-extrabold leading-none">the class</span>
        <span className="mt-1 text-xs">★★★★★</span>
      </div>
    </div>
  );
}
