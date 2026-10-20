import { Link } from "react-router-dom";
import type { BlogPost } from "@/mocks/blog";
import { getCategoryLabel } from "@/mocks/blog";
import Reveal from "@/components/feature/Reveal";

interface EditorialGridProps {
  posts: BlogPost[];
}

// Varied editorial layouts — large lead card, then alternating vertical / horizontal / wide cards
export default function EditorialGrid({ posts }: EditorialGridProps) {
  if (posts.length === 0) {
    return (
      <div className="text-center py-20">
        <div className="w-16 h-16 flex items-center justify-center mx-auto rounded-full bg-background-50 border border-background-300/60 text-foreground-500 text-2xl">
          <i className="ri-search-line" />
        </div>
        <p className="mt-5 font-heading uppercase text-foreground-950 text-xl">No articles found</p>
        <p className="mt-2 text-sm text-foreground-600">Try a different category or search term.</p>
      </div>
    );
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-12">
      {posts.map((post, i) => {
        // First card leads large (7 cols), second is tall (5 cols)
        if (i === 0) return <LeadCard key={post.slug} post={post} />;
        if (i === 1) return <TallCard key={post.slug} post={post} />;
        // Alternating wide and standard
        const wide = i % 3 === 2;
        return wide ? (
          <WideCard key={post.slug} post={post} />
        ) : (
          <StandardCard key={post.slug} post={post} />
        );
      })}
    </div>
  );
}

function LeadCard({ post }: { post: BlogPost }) {
  return (
    <div className="lg:col-span-7">
      <Reveal>
        <Link
          to={`/blog/${post.slug}`}
          className="group block rounded-lg overflow-hidden bg-background-100 border border-background-200/70 hover:border-primary-500 transition-colors cursor-pointer h-full"
        >
          <div className="relative aspect-[16/10] overflow-hidden">
            <img
              src={post.image}
              alt={`${post.title} - Martin Sei blog`}
              className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
            />
            <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-[10px] uppercase tracking-[0.25em] bg-background-50/90 text-foreground-900 backdrop-blur">
              {getCategoryLabel(post.category)}
            </span>
          </div>
          <div className="p-7">
            <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] text-foreground-500">
              <span>{post.date}</span>
              <span className="w-1 h-1 rounded-full bg-background-300" />
              <span>{post.read}</span>
            </div>
            <h3 className="mt-3 font-heading uppercase text-foreground-950 text-2xl leading-tight group-hover:text-primary-500 transition-colors">
              {post.title}
            </h3>
            <p className="mt-3 text-sm text-foreground-600 leading-relaxed">{post.excerpt}</p>
            <span className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-primary-500">
              Read Article <i className="ri-arrow-right-line group-hover:translate-x-1 transition-transform" />
            </span>
          </div>
        </Link>
      </Reveal>
    </div>
  );
}

function TallCard({ post }: { post: BlogPost }) {
  return (
    <div className="lg:col-span-5 lg:row-span-1">
      <Reveal delay={80}>
        <Link
          to={`/blog/${post.slug}`}
          className="group block rounded-lg overflow-hidden bg-background-100 border border-background-200/70 hover:border-primary-500 transition-colors cursor-pointer h-full"
        >
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              src={post.image}
              alt={`${post.title} - Martin Sei blog`}
              className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background-100 via-background-100/20 to-transparent" />
            <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-[10px] uppercase tracking-[0.25em] bg-background-50/90 text-foreground-900 backdrop-blur">
              {getCategoryLabel(post.category)}
            </span>
            <div className="absolute bottom-0 inset-x-0 p-6">
              <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] text-foreground-400">
                <span>{post.date}</span>
                <span className="w-1 h-1 rounded-full bg-background-300" />
                <span>{post.read}</span>
              </div>
              <h3 className="mt-2 font-heading uppercase text-foreground-950 text-2xl leading-tight group-hover:text-primary-500 transition-colors">
                {post.title}
              </h3>
              <span className="mt-4 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-primary-500">
                Read <i className="ri-arrow-right-line group-hover:translate-x-1 transition-transform" />
              </span>
            </div>
          </div>
        </Link>
      </Reveal>
    </div>
  );
}

function WideCard({ post }: { post: BlogPost }) {
  return (
    <div className="lg:col-span-7">
      <Reveal delay={60}>
        <Link
          to={`/blog/${post.slug}`}
          className="group grid sm:grid-cols-2 rounded-lg overflow-hidden bg-background-100 border border-background-200/70 hover:border-primary-500 transition-colors cursor-pointer h-full"
        >
          <div className="relative aspect-[4/3] sm:aspect-auto overflow-hidden">
            <img
              src={post.image}
              alt={`${post.title} - Martin Sei blog`}
              className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
            />
            <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-[10px] uppercase tracking-[0.25em] bg-background-50/90 text-foreground-900 backdrop-blur">
              {getCategoryLabel(post.category)}
            </span>
          </div>
          <div className="p-6 flex flex-col justify-center">
            <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] text-foreground-500">
              <span>{post.date}</span>
              <span className="w-1 h-1 rounded-full bg-background-300" />
              <span>{post.read}</span>
            </div>
            <h3 className="mt-3 font-heading uppercase text-foreground-950 text-xl leading-tight group-hover:text-primary-500 transition-colors">
              {post.title}
            </h3>
            <p className="mt-3 text-sm text-foreground-600 leading-relaxed line-clamp-2">{post.excerpt}</p>
            <span className="mt-5 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-primary-500">
              Read <i className="ri-arrow-right-line group-hover:translate-x-1 transition-transform" />
            </span>
          </div>
        </Link>
      </Reveal>
    </div>
  );
}

function StandardCard({ post }: { post: BlogPost }) {
  return (
    <div className="lg:col-span-5">
      <Reveal delay={40}>
        <Link
          to={`/blog/${post.slug}`}
          className="group block rounded-lg overflow-hidden bg-background-100 border border-background-200/70 hover:border-primary-500 transition-colors cursor-pointer h-full"
        >
          <div className="relative aspect-[4/3] overflow-hidden">
            <img
              src={post.image}
              alt={`${post.title} - Martin Sei blog`}
              className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
            />
            <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-[10px] uppercase tracking-[0.25em] bg-background-50/90 text-foreground-900 backdrop-blur">
              {getCategoryLabel(post.category)}
            </span>
          </div>
          <div className="p-6">
            <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] text-foreground-500">
              <span>{post.date}</span>
              <span className="w-1 h-1 rounded-full bg-background-300" />
              <span>{post.read}</span>
            </div>
            <h3 className="mt-3 font-heading uppercase text-foreground-950 text-xl leading-tight group-hover:text-primary-500 transition-colors">
              {post.title}
            </h3>
            <p className="mt-3 text-sm text-foreground-600 leading-relaxed line-clamp-2">{post.excerpt}</p>
            <span className="mt-5 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-primary-500">
              Read <i className="ri-arrow-right-line group-hover:translate-x-1 transition-transform" />
            </span>
          </div>
        </Link>
      </Reveal>
    </div>
  );
}