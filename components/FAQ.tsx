import type { ServiceFAQ } from "@/lib/services";

// Worksheet-style questions on ruled lines, numbered in the margin.
export default function FAQ({ faqs }: { faqs: ServiceFAQ[] }) {
  return (
    <div className="mx-auto max-w-3xl border-t-2 border-rule">
      {faqs.map((f, i) => (
        <details key={f.q} className="group border-b-2 border-rule">
          <summary className="flex cursor-pointer items-start gap-4 py-5">
            <span className="w-9 shrink-0 pt-0.5 font-hand text-lg font-bold text-redpen">Q{i + 1}</span>
            <span className="flex-1 text-lg font-bold leading-snug text-ink">{f.q}</span>
            <span
              className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full border-2 border-ink text-ink transition group-open:rotate-45 group-open:bg-yellow"
              aria-hidden="true"
            >
              <svg className="h-3.5 w-3.5" viewBox="0 0 16 16" fill="none">
                <path d="M8 3v10M3 8h10" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
              </svg>
            </span>
          </summary>
          <p className="pb-6 pl-[52px] pr-11 leading-relaxed text-ink-soft">{f.a}</p>
        </details>
      ))}
    </div>
  );
}
