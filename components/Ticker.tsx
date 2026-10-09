const items = [
  "✍️ Neat handwriting in weeks",
  "🧮 Mental math superpowers",
  "🎨 Calligraphy that wows",
  "📖 Confident little readers",
  "➰ Beautiful cursive",
  "🎁 Free trial class",
  "🇬🇧 UK & USA time zones",
  "⭐ Rated 4.9 by parents",
];

export default function Ticker() {
  const row = (hidden: boolean) => (
    <div className="marquee-track" aria-hidden={hidden || undefined}>
      {items.map((t) => (
        <span key={t} className="flex items-center gap-2.5 text-sm font-extrabold tracking-wide text-white">
          {t}
          <svg className="h-3.5 w-3.5 text-white/60" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path d="M10 1l2.4 6.6L19 10l-6.6 2.4L10 19l-2.4-6.6L1 10l6.6-2.4z" />
          </svg>
        </span>
      ))}
    </div>
  );

  return (
    <div className="overflow-hidden py-3">
      <div className="btn-grad-candy marquee -ml-[2%] w-[104%] -rotate-1 py-3.5 shadow-lift">
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}
