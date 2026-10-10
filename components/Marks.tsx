// Teacher's red-pen marks and stickers, drawn as inline SVG.

export function Underline({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 18"
      preserveAspectRatio="none"
      className={`pointer-events-none absolute -bottom-[0.18em] left-0 h-[0.32em] w-full ${className}`}
      aria-hidden="true"
    >
      <path d="M3 6 C 50 2, 120 3, 196 5" fill="none" stroke="#e8174d" strokeWidth="3.5" strokeLinecap="round" />
      <path d="M10 14 C 70 10, 140 11, 190 12" fill="none" stroke="#e8174d" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

export function Tick({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true">
      <path
        d="M6 22 C 9 24, 12 28, 15 33 C 20 22, 27 12, 36 5"
        fill="none"
        stroke="#e8174d"
        strokeWidth="4.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Circled({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 60"
      preserveAspectRatio="none"
      className={`pointer-events-none absolute -inset-x-3 -inset-y-2 h-[calc(100%+1rem)] w-[calc(100%+1.5rem)] ${className}`}
      aria-hidden="true"
    >
      <path
        d="M70 6 C 30 2, 4 14, 6 32 C 8 52, 60 58, 96 50 C 120 44, 118 18, 92 9 C 80 5, 64 6, 52 8"
        fill="none"
        stroke="#e8174d"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function StarSticker({
  label = "Well done!",
  className = "h-20 w-20",
}: {
  label?: string;
  className?: string;
}) {
  return (
    <svg viewBox="0 0 100 100" className={className} role="img" aria-label={`Gold star sticker: ${label}`}>
      <path
        d="M50 4 L61 16 L77 12 L80 28 L95 35 L88 50 L95 65 L80 72 L77 88 L61 84 L50 96 L39 84 L23 88 L20 72 L5 65 L12 50 L5 35 L20 28 L23 12 L39 16 Z"
        fill="#ffd43b"
        stroke="#f2c200"
        strokeWidth="2"
      />
      <circle cx="50" cy="50" r="30" fill="#fff6cc" />
      <path
        d="M50 28 l6.2 12.6 13.9 2 -10 9.8 2.4 13.8 -12.5 -6.6 -12.5 6.6 2.4 -13.8 -10 -9.8 13.9 -2 z"
        fill="#ffd43b"
        stroke="#f2c200"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <text x="50" y="76" textAnchor="middle" fontSize="9" fontWeight="800" fill="#16205c" fontFamily="sans-serif">
        {label}
      </text>
    </svg>
  );
}

// Small hand-drawn arrow for margin notes
export function NoteArrow({ className = "h-8 w-12" }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 40" className={className} aria-hidden="true">
      <path d="M4 6 C 20 6, 40 14, 50 32" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M40 30 L51 34 L53 22" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
