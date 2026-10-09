import type { ServiceFAQ } from "@/lib/services";

export default function FAQ({ faqs }: { faqs: ServiceFAQ[] }) {
  return (
    <div className="mx-auto max-w-3xl space-y-3">
      {faqs.map((f) => (
        <details
          key={f.q}
          className="group rounded-2xl border border-ink/5 bg-white p-1 shadow-lift open:shadow-lift-lg"
        >
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-xl px-5 py-4 font-semibold text-ink [&::-webkit-details-marker]:hidden">
            {f.q}
            <span
              className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-cream text-coral transition group-open:rotate-45"
              aria-hidden="true"
            >
              <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none">
                <path d="M8 3v10M3 8h10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </span>
          </summary>
          <p className="px-5 pb-5 leading-relaxed text-ink-soft">{f.a}</p>
        </details>
      ))}
    </div>
  );
}
