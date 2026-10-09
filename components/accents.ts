// Static class maps so Tailwind can see every class name at build time.
// `fg` is the text color that stays readable on top of `bg`.
export const accentStyles = {
  coral: {
    bg: "bg-coral",
    fg: "text-white",
    soft: "bg-coral-soft",
    text: "text-coral",
    border: "border-coral/20",
    ring: "group-hover:ring-coral/30",
  },
  teal: {
    bg: "bg-teal",
    fg: "text-white",
    soft: "bg-teal-soft",
    text: "text-teal",
    border: "border-teal/20",
    ring: "group-hover:ring-teal/30",
  },
  violet: {
    bg: "bg-violet",
    fg: "text-white",
    soft: "bg-violet-soft",
    text: "text-violet",
    border: "border-violet/20",
    ring: "group-hover:ring-violet/30",
  },
  // Yellow is too light for lettering, so sun pairs yellow fills with ink text.
  sun: {
    bg: "bg-sun",
    fg: "text-ink",
    soft: "bg-sun-soft",
    text: "text-ink",
    border: "border-sun/50",
    ring: "group-hover:ring-sun/50",
  },
  sky: {
    bg: "bg-sky",
    fg: "text-white",
    soft: "bg-sky-soft",
    text: "text-sky",
    border: "border-sky/20",
    ring: "group-hover:ring-sky/30",
  },
} as const;

export type Accent = keyof typeof accentStyles;
