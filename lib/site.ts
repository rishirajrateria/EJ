export const site = {
  name: "The Education Junction",
  shortName: "Education Junction",
  url: "https://www.theeducationjunction.com",
  tagline: "Beautiful handwriting. Brilliant minds.",
  description:
    "Live online handwriting improvement, cursive, calligraphy and abacus mental-math classes for kids and adults across the UK and USA. Small groups, expert tutors, visible results in weeks.",
  email: "hello@theeducationjunction.com",
  locale: "en",
  regions: ["GB", "US"],
  social: {
    instagram: "https://www.instagram.com/theeducationjunction",
    facebook: "https://www.facebook.com/theeducationjunction",
    youtube: "https://www.youtube.com/@theeducationjunction",
  },
} as const;

export function absoluteUrl(path: string = "/"): string {
  return new URL(path, site.url).toString();
}
