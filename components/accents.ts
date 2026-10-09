// Static class maps so Tailwind can see every class name at build time.
export const accentStyles = {
  coral: {
    bg: "bg-coral",
    soft: "bg-coral-soft",
    text: "text-coral",
    border: "border-coral/20",
    ring: "group-hover:ring-coral/30",
  },
  teal: {
    bg: "bg-teal",
    soft: "bg-teal-soft",
    text: "text-teal",
    border: "border-teal/20",
    ring: "group-hover:ring-teal/30",
  },
  violet: {
    bg: "bg-violet",
    soft: "bg-violet-soft",
    text: "text-violet",
    border: "border-violet/20",
    ring: "group-hover:ring-violet/30",
  },
  amber: {
    bg: "bg-amber",
    soft: "bg-amber-soft",
    text: "text-amber",
    border: "border-amber/20",
    ring: "group-hover:ring-amber/30",
  },
  sky: {
    bg: "bg-sky",
    soft: "bg-sky-soft",
    text: "text-sky",
    border: "border-sky/20",
    ring: "group-hover:ring-sky/30",
  },
} as const;

export type Accent = keyof typeof accentStyles;
