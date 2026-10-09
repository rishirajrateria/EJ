import { postsBatchOne } from "./blog-posts-1";
import { postsBatchTwo } from "./blog-posts-2";

export type Post = {
  slug: string;
  title: string;
  seoTitle: string;
  description: string;
  date: string; // ISO
  updated?: string; // ISO
  readMinutes: number;
  category: "Handwriting" | "Abacus" | "Cursive" | "Parenting";
  accent: "coral" | "teal" | "violet" | "sun" | "sky";
  emoji: string;
  keyTakeaways: string[];
  /** Trusted, hand-authored HTML written in this repo (no user input). */
  html: string;
};

export const posts: Post[] = [...postsBatchOne, ...postsBatchTwo].sort(
  (a, b) => (a.date < b.date ? 1 : -1)
);

export function getPost(slug: string): Post | undefined {
  return posts.find((p) => p.slug === slug);
}
