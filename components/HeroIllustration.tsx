export default function HeroIllustration() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[460px]" aria-hidden="true">
      {/* soft background blob */}
      <svg viewBox="0 0 460 460" className="absolute inset-0 h-full w-full">
        <path
          d="M230 18c70 0 150 28 185 92s18 150-22 205-93 95-163 95S99 370 60 315 10 180 48 118 160 18 230 18z"
          fill="#fdf6ea"
        />
        <path
          d="M230 48c58 0 124 23 153 76s15 124-18 169-77 79-135 79-124-33-156-78-41-112-10-163S172 48 230 48z"
          fill="#ffe8e5"
          opacity="0.7"
        />
      </svg>

      {/* writing hand / pencil card */}
      <div className="absolute left-1/2 top-1/2 w-[72%] -translate-x-1/2 -translate-y-1/2 rounded-3xl bg-white p-6 shadow-lift-lg">
        <svg viewBox="0 0 300 190" className="w-full">
          {/* notebook lines */}
          <line x1="20" y1="50" x2="280" y2="50" stroke="#e8e4f3" strokeWidth="2" />
          <line x1="20" y1="90" x2="280" y2="90" stroke="#e8e4f3" strokeWidth="2" />
          <line x1="20" y1="130" x2="280" y2="130" stroke="#e8e4f3" strokeWidth="2" />
          {/* messy scrawl fading into beautiful script */}
          <path
            d="M25 85 q8 -18 14 0 q5 14 12 -4 q6 -16 13 2 q5 12 11 -6"
            fill="none" stroke="#c9c4da" strokeWidth="3" strokeLinecap="round"
          />
          <path
            d="M95 88 q14 -40 26 -4 q4 12 10 2 q10 -46 24 -6 q5 16 14 -2 q12 -30 26 -2 q8 18 20 -6 q10 -22 22 0 q7 14 16 -4"
            fill="none" stroke="#1e1b4b" strokeWidth="4" strokeLinecap="round"
          />
          {/* pencil */}
          <g transform="translate(236 30) rotate(40)">
            <rect x="0" y="0" width="16" height="52" rx="2" fill="#f59e0b" />
            <rect x="0" y="0" width="16" height="10" rx="2" fill="#ff6b5e" />
            <path d="M0 52 L8 70 L16 52 Z" fill="#fbd9a0" />
            <path d="M5 62 L8 70 L11 62 Z" fill="#1e1b4b" />
          </g>
          {/* sparkles near the neat writing */}
          <g fill="#f59e0b">
            <path d="M270 55 l2.5 6 6 2.5 -6 2.5 -2.5 6 -2.5 -6 -6 -2.5 6 -2.5z" />
            <circle cx="248" cy="105" r="3" fill="#0d9488" />
            <circle cx="70" cy="40" r="3" fill="#7c5cff" />
          </g>
        </svg>
        <p className="mt-2 text-center font-display text-sm font-semibold text-ink-soft">
          Week 1 → Week 8
        </p>
      </div>

      {/* floating abacus card */}
      <div className="animate-float absolute -left-2 top-10 rounded-2xl bg-white p-4 shadow-lift-lg" style={{ "--float-rotate": "-6deg" } as React.CSSProperties}>
        <svg viewBox="0 0 90 70" className="h-16 w-20">
          <rect x="4" y="4" width="82" height="62" rx="8" fill="#1e1b4b" />
          <line x1="22" y1="10" x2="22" y2="60" stroke="#4a4a68" strokeWidth="3" />
          <line x1="45" y1="10" x2="45" y2="60" stroke="#4a4a68" strokeWidth="3" />
          <line x1="68" y1="10" x2="68" y2="60" stroke="#4a4a68" strokeWidth="3" />
          <circle cx="22" cy="18" r="6" fill="#ff6b5e" />
          <circle cx="22" cy="50" r="6" fill="#f59e0b" />
          <circle cx="45" cy="30" r="6" fill="#0d9488" />
          <circle cx="45" cy="54" r="6" fill="#ff6b5e" />
          <circle cx="68" cy="16" r="6" fill="#7c5cff" />
          <circle cx="68" cy="42" r="6" fill="#0d9488" />
        </svg>
        <p className="mt-1 text-center text-[11px] font-bold text-ink-soft">7 × 48 = 336 ⚡</p>
      </div>

      {/* floating grade card */}
      <div className="animate-float-slow absolute -right-2 bottom-16 rounded-2xl bg-white px-5 py-4 shadow-lift-lg" style={{ "--float-rotate": "5deg" } as React.CSSProperties}>
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-soft text-xl">🏆</span>
          <div>
            <p className="text-sm font-bold text-ink">Neatest in class</p>
            <p className="text-[11px] font-semibold text-teal">★★★★★ parent review</p>
          </div>
        </div>
      </div>

      {/* floating A+ badge */}
      <div className="animate-float absolute bottom-4 left-8 flex h-14 w-14 items-center justify-center rounded-full bg-coral font-display text-xl font-bold text-white shadow-lift-lg" style={{ "--float-rotate": "-8deg", animationDelay: "1.2s" } as React.CSSProperties}>
        A+
      </div>
    </div>
  );
}
