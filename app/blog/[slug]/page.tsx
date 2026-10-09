import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import JsonLd from "@/components/JsonLd";
import CTASection from "@/components/CTASection";
import { accentStyles } from "@/components/accents";
import { posts, getPost } from "@/lib/blog";
import { site, absoluteUrl } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  const path = `/blog/${post.slug}`;
  return {
    title: post.seoTitle,
    description: post.description,
    alternates: {
      canonical: path,
      languages: { "en-GB": path, "en-US": path, "x-default": path },
    },
    openGraph: {
      type: "article",
      title: post.seoTitle,
      description: post.description,
      url: path,
      publishedTime: post.date,
      modifiedTime: post.updated ?? post.date,
      authors: [site.name],
      section: post.category,
    },
  };
}

function formatDate(iso: string) {
  return new Date(iso + "T00:00:00Z").toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const a = accentStyles[post.accent];
  const related = posts.filter((p) => p.slug !== post.slug).slice(0, 3);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": absoluteUrl(`/blog/${post.slug}#article`),
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.updated ?? post.date,
    inLanguage: "en",
    author: {
      "@type": "Organization",
      name: site.name,
      url: site.url,
    },
    publisher: { "@id": absoluteUrl("/#organization") },
    mainEntityOfPage: absoluteUrl(`/blog/${post.slug}`),
    articleSection: post.category,
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: site.url },
      { "@type": "ListItem", position: 2, name: "Blog", item: absoluteUrl("/blog") },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: absoluteUrl(`/blog/${post.slug}`),
      },
    ],
  };

  return (
    <>
      <JsonLd data={articleJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />

      <article className="px-4 pb-20 pt-12 sm:px-6 sm:pt-16">
        <div className="mx-auto max-w-3xl">
          <nav aria-label="Breadcrumb" className="text-sm font-semibold text-ink-soft">
            <Link href="/blog" className="transition hover:text-coral">
              ← All guides
            </Link>
          </nav>

          <header className="mt-6">
            <div className="flex flex-wrap items-center gap-3 text-xs font-bold">
              <span className={`rounded-full ${a.soft} ${a.text} px-3 py-1`}>{post.category}</span>
              <time dateTime={post.date} className="text-ink-soft">
                {formatDate(post.date)}
              </time>
              <span className="text-ink-soft" aria-hidden="true">·</span>
              <span className="text-ink-soft">{post.readMinutes} min read</span>
            </div>
            <h1 className="mt-5 font-display text-3xl font-semibold leading-[1.15] tracking-tight sm:text-4xl">
              {post.title}
            </h1>
            <p className="mt-4 text-lg leading-relaxed text-ink-soft">{post.description}</p>
          </header>

          {/* Key takeaways — snippet-friendly for search engines and AI assistants */}
          <aside className="mt-8 rounded-3xl border border-ink/5 bg-cream p-7" aria-label="Key takeaways">
            <h2 className="flex items-center gap-2 font-display text-lg font-semibold">
              <span aria-hidden="true">⚡</span> Key takeaways
            </h2>
            <ul className="mt-4 space-y-2.5">
              {post.keyTakeaways.map((t) => (
                <li key={t} className="flex gap-3 text-sm leading-relaxed text-ink-soft">
                  <svg className={`mt-0.5 h-5 w-5 shrink-0 ${a.text}`} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.7-9.3a1 1 0 00-1.4-1.4L9 10.6 7.7 9.3a1 1 0 00-1.4 1.4l2 2a1 1 0 001.4 0l4-4z" clipRule="evenodd" />
                  </svg>
                  {t}
                </li>
              ))}
            </ul>
          </aside>

          <div
            className="article-prose mt-10"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />

          {/* Author box */}
          <footer className="mt-12 flex items-center gap-4 rounded-3xl border border-ink/5 bg-white p-6 shadow-lift">
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-navy text-2xl" aria-hidden="true">
              🎓
            </span>
            <div>
              <p className="font-bold text-ink">Written by the tutors at {site.name}</p>
              <p className="text-sm text-ink-soft">
                Specialists in handwriting, cursive, calligraphy, abacus and
                phonics — teaching live online across the UK &amp; USA.
              </p>
            </div>
          </footer>
        </div>

        {/* Related */}
        <div className="mx-auto mt-16 max-w-5xl">
          <h2 className="text-center font-display text-2xl font-semibold">Keep reading</h2>
          <div className="mt-8 grid gap-6 sm:grid-cols-3">
            {related.map((p) => {
              const ra = accentStyles[p.accent];
              return (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="group rounded-3xl border border-ink/5 bg-white p-6 shadow-lift transition hover:-translate-y-1 hover:shadow-lift-lg"
                >
                  <span className={`flex h-10 w-10 items-center justify-center rounded-xl ${ra.soft} text-xl`} aria-hidden="true">
                    {p.emoji}
                  </span>
                  <h3 className="mt-4 font-display text-base font-semibold leading-snug">{p.title}</h3>
                  <p className="mt-2 text-xs font-semibold text-ink-soft">{p.readMinutes} min read</p>
                </Link>
              );
            })}
          </div>
        </div>
      </article>

      <CTASection />
    </>
  );
}
