import { useMemo, useState } from "react";
import SiteLayout from "@/components/feature/SiteLayout";
import BlogHero from "./components/BlogHero";
import FeaturedArticle from "./components/FeaturedArticle";
import EditorialGrid from "./components/EditorialGrid";
import MostRead from "./components/MostRead";
import QuickReads from "./components/QuickReads";
import CoachNote from "./components/CoachNote";
import { blogPosts } from "@/mocks/blog";
import { Link } from "react-router-dom";
import Reveal from "@/components/feature/Reveal";

export default function Blog() {
  const [active, setActive] = useState("all");
  const [query, setQuery] = useState("");

  const featured = blogPosts.find((p) => p.featured) ?? blogPosts[0];
  const isFiltering = active !== "all" || query.trim() !== "";

  const filtered = useMemo(() => {
    let list = blogPosts;
    if (active !== "all") {
      list = list.filter((p) => p.category === active);
    }
    if (query.trim()) {
      const q = query.toLowerCase();
      list = list.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.excerpt.toLowerCase().includes(q) ||
          p.keywords.some((k) => k.toLowerCase().includes(q)),
      );
    }
    return list;
  }, [active, query]);

  // When not filtering, hide the featured article from the editorial grid
  const gridPosts = isFiltering
    ? filtered
    : filtered.filter((p) => p.slug !== featured.slug);

  return (
    <SiteLayout>
      <BlogHero active={active} onActive={setActive} query={query} onQuery={setQuery} />

      {/* Featured story (only on the unfiltered landing) */}
      {!isFiltering && <FeaturedArticle post={featured} />}

      {/* Editorial grid */}
      <section className={isFiltering ? "bg-background-100 border-t border-background-200/60" : "bg-background-100"}>
        <div className="container-x py-16 md:py-20">
          {!isFiltering && (
            <Reveal>
              <div className="flex items-center gap-3 mb-10">
                <span className="h-px w-10 bg-primary-500" />
                <span className="text-[11px] uppercase tracking-[0.4em] text-primary-500 font-semibold">
                  {active === "all" ? "Latest Stories" : active}
                </span>
                <span className="text-sm text-foreground-500 ml-auto">
                  {gridPosts.length} article{gridPosts.length !== 1 ? "s" : ""}
                </span>
              </div>
            </Reveal>
          )}
          <EditorialGrid posts={gridPosts} />
        </div>
      </section>

      {/* Most read */}
      <MostRead posts={blogPosts} />

      {/* Quick reads carousel */}
      <QuickReads posts={blogPosts} />

      {/* Note from coach */}
      <CoachNote />

      {/* Closing CTA */}
      <section className="bg-background-50">
        <div className="container-x py-20 md:py-24 text-center">
          <Reveal>
            <span className="text-[11px] uppercase tracking-[0.4em] text-primary-500 font-semibold">
              Stop reading. Start doing.
            </span>
            <h2 className="mt-4 font-heading uppercase text-foreground-950 text-4xl md:text-6xl leading-[0.95] tracking-tight text-balance">
              Let's build your <span className="text-primary-500">stronger self.</span>
            </h2>
            <p className="mt-5 max-w-xl mx-auto text-foreground-700">
              Turn what you've learned into a plan — with 1-on-1 coaching tailored to your goals,
              level, and lifestyle. 300 AED per session. No packages, no pressure.
            </p>
            <Link
              to="/book"
              className="mt-8 inline-flex items-center justify-center gap-2 px-8 py-4 rounded-md bg-primary-500 hover:bg-primary-600 text-background-50 dark:text-foreground-950 text-sm font-semibold whitespace-nowrap transition-colors cursor-pointer"
            >
              BOOK A CONSULTATION <i className="ri-arrow-right-line" />
            </Link>
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
}