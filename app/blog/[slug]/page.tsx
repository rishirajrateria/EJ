import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import JsonLd from "@/components/JsonLd";
import TrialSlip from "@/components/TrialSlip";
import Logo from "@/components/Logo";
import Glyph, { categoryGlyph } from "@/components/Glyph";
import { Tick } from "@/components/Marks";
import { posts, getPost } from "@/lib/blog";
import { palette } from "@/lib/palette";
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

  const c = palette[post.accent];
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

      <article className="paper-margin px-4 pb-20 pt-10 sm:px-6 sm:pt-14">
        <div className="mx-auto max-w-3xl">
          <nav aria-label="Breadcrumb" className="text-sm font-bold text-ink-soft">
            <Link href="/blog" className="hover:text-ink">
              ← All guides
            </Link>
          </nav>

          <header className="mt-7">
            <div className="flex flex-wrap items-center gap-3 text-sm font-bold text-ink-soft">
              <span className={`inline-flex items-center gap-1.5 rounded-md px-2.5 py-1 ${c.cover} ${c.onCover}`}>
                <Glyph name={categoryGlyph[post.category]} className="h-4 w-4" />
                <span className="label-caps">{post.category}</span>
              </span>
              <time dateTime={post.date}>{formatDate(post.date)}</time>
              <span aria-hidden="true">·</span>
              <span>{post.readMinutes} min read</span>
            </div>
            <h1 className="mt-5 font-display text-[clamp(2.1rem,5vw,3.25rem)] font-extrabold leading-[1.06] tracking-tight [font-stretch:92%]">
              {post.title}
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-ink-soft">{post.description}</p>
          </header>

          {/* Key takeaways, pinned like a teacher's note */}
          <aside className="relative mt-10 rounded-[3px] bg-white px-6 pb-6 pt-7 shadow-page sm:px-8" aria-label="Key takeaways">
            <span className="tape -top-3 left-8 -rotate-3" aria-hidden="true" />
            <h2 className="font-hand text-xl font-bold text-redpen">Key takeaways</h2>
            <ul className="mt-4 space-y-3">
              {post.keyTakeaways.map((t) => (
                <li key={t} className="flex gap-3 leading-relaxed text-ink">
                  <Tick className="h-6 w-6 shrink-0" />
                  {t}
                </li>
              ))}
            </ul>
          </aside>

          <div className="article-prose mt-12" dangerouslySetInnerHTML={{ __html: post.html }} />

          <footer className="mt-14 flex items-center gap-4 border-y-2 border-dashed border-rule py-6">
            <Logo className="h-12 w-12 shrink-0" />
            <div>
              <p className="font-bold text-ink">Written by the tutors at {site.name}</p>
              <p className="text-sm text-ink-soft">
                Specialists in handwriting, cursive, calligraphy, abacus and phonics,
                teaching live online across the UK and USA.
              </p>
            </div>
          </footer>
        </div>

        <div className="mx-auto mt-20 max-w-6xl">
          <h2 className="font-display text-3xl font-extrabold tracking-tight">Keep reading</h2>
          <div className="mt-8 grid gap-x-7 gap-y-10 sm:grid-cols-3">
            {related.map((p) => {
              const rc = palette[p.accent];
              return (
                <Link key={p.slug} href={`/blog/${p.slug}`} className="group relative block pt-7">
                  <span className={`absolute left-5 top-0 flex h-8 items-center gap-1.5 rounded-t-md px-3 ${rc.cover} ${rc.onCover}`}>
                    <Glyph name={categoryGlyph[p.category]} className="h-4 w-4" />
                    <span className="label-caps">{p.category}</span>
                  </span>
                  <div className="h-full rounded-md border-2 border-ink/10 bg-white p-6 shadow-page transition group-hover:-translate-y-1 group-hover:border-ink/25">
                    <h3 className="font-display text-lg font-extrabold leading-snug tracking-tight group-hover:text-blue">{p.title}</h3>
                    <p className="mt-3 text-xs font-bold text-ink-soft">{p.readMinutes} min read</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </article>

      <TrialSlip />
    </>
  );
}
