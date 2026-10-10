// Custom line icons for each class, used instead of emoji.
export type GlyphName = "pencil" | "loop" | "nib" | "abacus" | "book";

export const serviceGlyph: Record<string, GlyphName> = {
  "handwriting-classes": "pencil",
  "cursive-writing-classes": "loop",
  "calligraphy-classes": "nib",
  "abacus-classes": "abacus",
  "phonics-classes": "book",
};

export const categoryGlyph: Record<string, GlyphName> = {
  Handwriting: "pencil",
  Abacus: "abacus",
  Cursive: "loop",
  Parenting: "book",
};

export default function Glyph({
  name,
  className = "h-6 w-6",
}: {
  name: GlyphName;
  className?: string;
}) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  return (
    <svg viewBox="0 0 32 32" className={className} aria-hidden="true">
      {name === "pencil" && (
        <g {...common}>
          <path d="M6 26 L8 19 L21 6 L26 11 L13 24 Z" />
          <path d="M18 9 L23 14" />
          <path d="M6 26 L13 24" />
          <path d="M3 29 h8" />
        </g>
      )}
      {name === "loop" && (
        <g {...common}>
          <path d="M3 22 C 8 22, 10 8, 14 8 C 18 8, 16 20, 12 20 C 9 20, 12 12, 18 14 C 22 15, 22 22, 26 22 C 28 22, 29 20, 29 18" />
          <path d="M3 26 h26" strokeDasharray="2 3" />
        </g>
      )}
      {name === "nib" && (
        <g {...common}>
          <path d="M16 3 L24 13 L19 27 H13 L8 13 Z" />
          <path d="M16 3 V16" />
          <circle cx="16" cy="18" r="2" />
          <path d="M13 27 v2 h6 v-2" />
        </g>
      )}
      {name === "abacus" && (
        <g {...common}>
          <rect x="4" y="4" width="24" height="24" rx="3" />
          <path d="M4 12 h24" />
          <path d="M11 4 v24 M16 4 v24 M21 4 v24" strokeWidth="1.5" />
          <rect x="8.5" y="8" width="5" height="3" rx="1" fill="currentColor" stroke="none" />
          <rect x="18.5" y="13" width="5" height="3" rx="1" fill="currentColor" stroke="none" />
          <rect x="13.5" y="13" width="5" height="3" rx="1" fill="currentColor" stroke="none" />
          <rect x="13.5" y="17" width="5" height="3" rx="1" fill="currentColor" stroke="none" />
        </g>
      )}
      {name === "book" && (
        <g {...common}>
          <path d="M16 8 C 12 5, 7 5, 3 6 V25 C 7 24, 12 24, 16 27 C 20 24, 25 24, 29 25 V6 C 25 5, 20 5, 16 8 Z" />
          <path d="M16 8 V27" />
          <path d="M7 11 h5 M7 15 h5 M20 11 h5 M20 15 h5" strokeWidth="1.5" />
        </g>
      )}
    </svg>
  );
}
