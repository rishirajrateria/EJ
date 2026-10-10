export type Testimonial = { quote: string; name: string; detail: string };

const tilts = ["md:-rotate-2", "md:rotate-1 md:translate-y-4", "md:-rotate-1"];
const tapes = ["left-8 -rotate-6", "left-1/2 -translate-x-1/2 rotate-3", "right-8 rotate-6"];

// Testimonials written on ruled index cards, taped to the page.
export default function IndexCards({ items }: { items: Testimonial[] }) {
  return (
    <div className="grid gap-10 md:grid-cols-3 md:gap-7">
      {items.map((t, i) => (
        <figure key={t.name} className={`index-card relative rounded-[3px] px-6 pb-[28px] shadow-page ${tilts[i % 3]}`}>
          <span className={`tape -top-3 ${tapes[i % 3]}`} aria-hidden="true" />
          <figcaption className="flex h-[55px] items-center justify-between gap-3">
            <span className="text-sm font-extrabold text-ink">
              {t.name} <span className="font-semibold text-ink-soft">· {t.detail}</span>
            </span>
            <span className="shrink-0 text-sm text-yellow-deep" aria-label="5 out of 5 stars">★★★★★</span>
          </figcaption>
          <blockquote className="pt-[8px] font-hand text-[16px] leading-[28px] text-blue-deep">
            “{t.quote}”
          </blockquote>
        </figure>
      ))}
    </div>
  );
}
