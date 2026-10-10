// Exercise-book cover colours. Static class strings so Tailwind can see them.
export type Accent = "blue" | "violet" | "pink" | "green" | "yellow";

export const palette: Record<
  Accent,
  {
    cover: string; // cover / solid fill
    spine: string; // darker spine strip
    onCover: string; // readable text on the cover
    soft: string; // pale tint
    text: string; // accent-coloured text on paper
    border: string;
    hex: string; // for inline SVG fills
  }
> = {
  blue: {
    cover: "bg-blue",
    spine: "bg-blue-deep",
    onCover: "text-white",
    soft: "bg-blue-soft",
    text: "text-blue",
    border: "border-blue",
    hex: "#2f5bff",
  },
  violet: {
    cover: "bg-violet",
    spine: "bg-violet-deep",
    onCover: "text-white",
    soft: "bg-violet-soft",
    text: "text-violet",
    border: "border-violet",
    hex: "#7b4dff",
  },
  pink: {
    cover: "bg-pink",
    spine: "bg-pink-deep",
    onCover: "text-white",
    soft: "bg-pink-soft",
    text: "text-pink-deep",
    border: "border-pink",
    hex: "#ff4f8b",
  },
  green: {
    cover: "bg-green",
    spine: "bg-green-deep",
    onCover: "text-white",
    soft: "bg-green-soft",
    text: "text-green-deep",
    border: "border-green",
    hex: "#12b886",
  },
  // Yellow is too light for lettering, so it always carries ink text.
  yellow: {
    cover: "bg-yellow",
    spine: "bg-yellow-deep",
    onCover: "text-ink",
    soft: "bg-yellow-soft",
    text: "text-ink",
    border: "border-yellow-deep",
    hex: "#ffd43b",
  },
};
