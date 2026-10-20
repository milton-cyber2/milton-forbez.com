import { useEffect, useState } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import SiteLayout from "@/components/feature/SiteLayout";
import { blogPosts, getPostBySlug, getCategoryLabel } from "@/mocks/blog";
import { brand, martinPhotos } from "@/mocks/site";
import Reveal from "@/components/feature/Reveal";

export default function BlogDetail() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : undefined;
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const total = el.scrollHeight - el.clientHeight;
      setProgress(total > 0 ? Math.min(100, (el.scrollTop / total) * 100) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const related = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);
  const categoryLabel = getCategoryLabel(post.category);

  return (
    <SiteLayout>
      {/* Reading progress bar */}
      <div className="fixed top-0 left-0 right-0 z-[60] h-1 bg-background-100">
        <div
          className="h-full bg-primary-500 transition-[width] duration-150 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Article header */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={post.image}
            alt={`${post.title} - Martin Sei blog`}
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background-50 via-background-50/85 to-background-50/40" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent" />
        </div>
        <div className="relative container-x pt-32 pb-16 md:pt-44 md:pb-24 max-w-4xl mx-auto">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-primary-500 hover:text-primary-400 cursor-pointer mb-6"
          >
            <i className="ri-arrow-left-line" />
            All Articles
          </Link>
          <span className="inline-block px-3 py-1 rounded-full text-[10px] uppercase tracking-[0.3em] bg-primary-500 text-background-50 dark:text-foreground-950 font-semibold">
            {categoryLabel}
          </span>
          <h1 className="mt-5 font-heading uppercase text-foreground-950 text-4xl md:text-6xl leading-[0.95] tracking-tight text-balance">
            {post.title}
          </h1>
          <div className="mt-7 flex flex-wrap items-center gap-4 text-sm text-foreground-600">
            <div className="flex items-center gap-2">
              <img
                src={martinPhotos.portrait}
                alt="Martin Sei"
                className="w-9 h-9 rounded-full object-cover object-top border border-primary-500/40"
              />
              <span className="font-medium text-foreground-900">Martin Sei</span>
            </div>
            <span className="w-1 h-1 rounded-full bg-background-300" />
            <span>{post.date}</span>
            <span className="w-1 h-1 rounded-full bg-background-300" />
            <span>{post.read}</span>
            <span className="w-1 h-1 rounded-full bg-background-300" />
            <span>{post.reads} reads</span>
          </div>
        </div>
      </section>

      {/* Article body */}
      <article className="bg-background-50">
        <div className="container-x py-12 md:py-16 max-w-3xl mx-auto">
          {/* Intro / lead paragraph */}
          <Reveal>
            <p className="text-xl md:text-2xl text-foreground-800 leading-relaxed font-medium">
              {post.excerpt}
            </p>
          </Reveal>

          <div className="mt-10 space-y-12">
            {post.content.map((block, i) => (
              <Reveal key={i}>
                <div>
                  <h2 className="font-heading uppercase text-foreground-950 text-2xl md:text-3xl leading-tight tracking-tight flex items-baseline gap-4">
                    <span className="text-primary-500 font-bold text-sm md:text-base shrink-0">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {block.heading}
                  </h2>
                  <p className="mt-4 text-foreground-700 leading-relaxed">{block.body}</p>
                </div>

                {/* Pull quote after second block */}
                {i === 1 && post.pullQuote && (
                  <blockquote className="relative mt-12 pl-6 md:pl-10 border-l-2 border-accent-500">
                    <span className="absolute -top-5 -left-1 text-accent-500/20 font-heading text-7xl">
                      &ldquo;
                    </span>
                    <p className="font-heading uppercase text-foreground-950 text-2xl md:text-3xl leading-tight tracking-tight">
                      {post.pullQuote}
                    </p>
                    <footer className="mt-4 text-[11px] uppercase tracking-[0.3em] text-foreground-500">
                      — Martin Sei
                    </footer>
                  </blockquote>
                )}

                {/* Coach tip after third block */}
                {i === 2 && post.coachTip && (
                  <div className="mt-12 rounded-lg bg-primary-500/10 border border-primary-500/30 p-6 md:p-7 flex gap-5">
                    <span className="w-11 h-11 flex items-center justify-center rounded-md bg-primary-500 text-background-50 dark:text-foreground-950 shrink-0">
                      <i className="ri-lightbulb-flash-line text-xl" />
                    </span>
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.3em] text-primary-500 font-semibold">
                        Coach's Tip
                      </p>
                      <p className="mt-2 text-foreground-700 leading-relaxed">{post.coachTip}</p>
                    </div>
                  </div>
                )}
              </Reveal>
            ))}
          </div>

          {/* Mid-article image */}
          <Reveal>
            <div className="mt-12 relative rounded-lg overflow-hidden border border-background-200/70">
              <img
                src={post.image}
                alt={`${post.title} - Martin Sei journal`}
                className="w-full aspect-[21/9] object-cover object-top"
              />
              <span className="absolute bottom-4 left-4 text-[10px] uppercase tracking-[0.25em] text-foreground-300 bg-background-950/50 backdrop-blur px-3 py-1 rounded-full">
                Martin Sei Journal
              </span>
            </div>
          </Reveal>

          {/* Author box */}
          <Reveal>
            <div className="mt-14 rounded-lg bg-background-100 border border-background-200/70 p-8 flex flex-col sm:flex-row gap-6 items-start">
              <img
                src={martinPhotos.portrait}
                alt="Martin Sei, personal trainer Dubai and HYROX coach"
                className="w-20 h-20 rounded-lg object-cover object-top shrink-0"
              />
              <div>
                <h3 className="font-heading uppercase text-foreground-950 text-lg tracking-wide">
                  About the author
                </h3>
                <p className="mt-2 text-sm text-foreground-600 leading-relaxed">
                  Martin Sei is a Dubai Police Obstacle World Champion and elite hybrid, strength,
                  functional training, and HYROX coach based in Dubai Silicon Oasis. He helps
                  clients build strength, improve performance, and prepare for HYROX races through
                  evidence-based coaching.
                </p>
                <Link
                  to="/about"
                  className="mt-4 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-primary-500 hover:text-primary-400 cursor-pointer"
                >
                  Meet Martin <i className="ri-arrow-right-line" />
                </Link>
              </div>
            </div>
          </Reveal>

          {/* Tags + share */}
          <Reveal>
            <div className="mt-10 pt-8 border-t border-background-200/70 flex flex-col lg:flex-row items-start lg:items-center gap-4 justify-between">
              <div className="flex flex-wrap gap-2">
                {post.keywords.map((k) => (
                  <span
                    key={k}
                    className="px-3 py-1 rounded-full bg-secondary-100 text-secondary-900 text-xs whitespace-nowrap"
                  >
                    #{k.replace(/\s+/g, "")}
                  </span>
                ))}
              </div>
              <a
                href={`https://wa.me/${brand.whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(`Hi Martin, I just read "${post.title}" — I'd like to know more.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-primary-500 hover:bg-primary-600 text-background-50 dark:text-foreground-950 text-sm font-semibold whitespace-nowrap cursor-pointer transition-colors"
              >
                <i className="ri-whatsapp-line" />
                Ask Martin
              </a>
            </div>
          </Reveal>
        </div>
      </article>

      {/* Related */}
      <section className="bg-background-100 border-t border-background-200/60">
        <div className="container-x py-16 md:py-20">
          <Reveal>
            <div className="flex items-center gap-3 mb-10">
              <span className="h-px w-10 bg-primary-500" />
              <h2 className="font-heading uppercase text-foreground-950 text-3xl md:text-4xl leading-tight">
                Keep reading
              </h2>
            </div>
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p, i) => (
              <Reveal key={p.slug} delay={i * 80}>
                <RelatedCard post={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

import type { BlogPost } from "@/mocks/blog";

function RelatedCard({ post }: { post: BlogPost }) {
  return (
    <Link
      to={`/blog/${post.slug}`}
      className="group block rounded-lg overflow-hidden bg-background-50 border border-background-200/70 hover:border-primary-500 transition-colors cursor-pointer h-full"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={post.image}
          alt={`${post.title} - Martin Sei blog`}
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
        />
        <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-[10px] uppercase tracking-[0.25em] bg-background-50/90 text-foreground-900 backdrop-blur">
          {getCategoryLabel(post.category)}
        </span>
      </div>
      <div className="p-6">
        <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] text-foreground-500">
          <span>{post.read}</span>
          <span className="w-1 h-1 rounded-full bg-background-300" />
          <span>{post.reads} reads</span>
        </div>
        <h3 className="mt-2 font-heading uppercase text-foreground-950 text-lg leading-tight group-hover:text-primary-500 transition-colors">
          {post.title}
        </h3>
        <span className="mt-4 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-primary-500">
          Read <i className="ri-arrow-right-line group-hover:translate-x-1 transition-transform" />
        </span>
      </div>
    </Link>
  );
}