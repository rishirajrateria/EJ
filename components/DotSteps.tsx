// Steps drawn like a letter-formation worksheet: green start dots, joined by
// a dashed tracing line.
export default function DotSteps({
  steps,
  label,
}: {
  steps: { title: string; text: string }[];
  label?: (i: number) => string;
}) {
  const n = steps.length;
  const cols = n === 4 ? "md:grid-cols-4" : "md:grid-cols-3";
  return (
    <ol
      className={`relative grid gap-8 ${cols} md:gap-6`}
      // the tracing line ends at the last dot: one column (minus half a dot) from the right
      style={{ "--line-end": `calc((100% - ${(n - 1) * 24}px) / ${n} - 22px)` } as React.CSSProperties}
    >
      <span
        className="absolute bottom-6 left-[21px] top-6 border-l-[3px] border-dashed border-ink/25 md:bottom-auto md:left-6 md:right-[var(--line-end)] md:top-[21px] md:border-l-0 md:border-t-[3px]"
        aria-hidden="true"
      />
      {steps.map((s, i) => (
        <li key={s.title} className="relative flex gap-5 md:block">
          <span className="relative z-10 flex h-[45px] w-[45px] shrink-0 items-center justify-center rounded-full bg-green font-display text-lg font-extrabold text-white ring-[6px] ring-paper">
            {i + 1}
          </span>
          <div className="md:mt-5 md:pr-4">
            {label && <p className="label-caps text-green-deep">{label(i)}</p>}
            <h3 className="mt-1 font-display text-xl font-extrabold leading-snug tracking-tight">{s.title}</h3>
            <p className="mt-1.5 leading-relaxed text-ink-soft">{s.text}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
