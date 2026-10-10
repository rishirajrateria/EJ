import { NoteArrow } from "./Marks";

export default function SectionHead({
  title,
  note,
  id,
  className = "",
}: {
  title: React.ReactNode;
  note?: string;
  id?: string;
  className?: string;
}) {
  return (
    <div className={`flex flex-wrap items-end gap-x-6 gap-y-2 ${className}`}>
      <h2
        id={id}
        className="max-w-2xl font-display text-[clamp(2rem,4.6vw,3.2rem)] font-extrabold leading-[1.04] tracking-tight [font-stretch:92%]"
      >
        {title}
      </h2>
      {note && (
        <p className="flex items-end gap-1 pb-1 font-hand text-[17px] font-semibold text-blue-deep">
          <span className="-rotate-2">{note}</span>
          <NoteArrow className="h-7 w-10 rotate-[20deg]" />
        </p>
      )}
    </div>
  );
}
