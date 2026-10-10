import { Tick } from "./Marks";

// Learning outcomes, marked off in red pen.
export default function Checklist({ items }: { items: { title: string; text: string }[] }) {
  return (
    <ul className="grid gap-x-12 gap-y-8 sm:grid-cols-2">
      {items.map((o) => (
        <li key={o.title} className="flex gap-4">
          <Tick className="h-10 w-10 shrink-0 -translate-y-1" />
          <div className="min-w-0 border-b-2 border-dashed border-rule pb-6">
            <h3 className="font-display text-xl font-extrabold tracking-tight">{o.title}</h3>
            <p className="mt-1 leading-relaxed text-ink-soft">{o.text}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
