import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // Everyone welcome — including AI assistants and LLM crawlers
      // (GPTBot, OAI-SearchBot, ClaudeBot, Claude-SearchBot, Google-Extended,
      // PerplexityBot, etc.), so the site can be cited in AI answers.
      { userAgent: "*", allow: "/" },
    ],
    sitemap: absoluteUrl("/sitemap.xml"),
  };
}
