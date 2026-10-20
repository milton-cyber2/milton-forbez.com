import { Link } from "react-router-dom";
import type { BlogPost } from "@/mocks/blog";
import { getCategoryLabel } from "@/mocks/blog";
import Reveal from "@/components/feature/Reveal";

interface QuickReadsProps {
  posts: BlogPost[];
}

export default function QuickReads({ posts }: QuickReadsProps) {
  const shorts = posts.filter((p) => p.read.startsWith("5") || p.read.startsWith("6"));

  return (
    <section className="bg-background-50">
      <div className="container-x py-16 md:py-20">
        <Reveal>
          <div className="flex items-center justify-between gap-4 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="h-px w-10 bg-primary-500" />
                <span className="text-[11px] uppercase tracking-[0.4em] text-primary-500 font-semibold">
                  Quick Reads
                </span>
              </div>
              <h2 className="font-heading uppercase text-foreground-950 text-3xl md:text-4xl leading-tight tracking-tight">
                Five minutes, big ideas
              </h2>
            </div>
            <span className="hidden sm:inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-foreground-500">
              Scroll <i className="ri-arrow-right-line animate-pulse" />
            </span>
          </div>
        </Reveal>

        <Reveal>
          <div className="flex gap-5 overflow-x-auto pb-4 -mx-1 px-1 snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {shorts.map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="group relative shrink-0 w-[300px] sm:w-[340px] snap-start rounded-lg overflow-hidden bg-background-100 border border-background-200/70 hover:border-primary-500 transition-colors cursor-pointer"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={post.image}
                    alt={`${post.title} - Martin Sei blog`}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background-100 via-transparent to-transparent" />
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-[10px] uppercase tracking-[0.25em] bg-background-50/90 text-foreground-900 backdrop-blur">
                    {getCategoryLabel(post.category)}
                  </span>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] text-foreground-500">
                    <span>{post.read}</span>
                    <span className="w-1 h-1 rounded-full bg-background-300" />
                    <span>{post.reads} reads</span>
                  </div>
                  <h3 className="mt-2 font-heading uppercase text-foreground-950 text-lg leading-tight group-hover:text-primary-500 transition-colors">
                    {post.title}
                  </h3>
                  <span className="mt-3 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-primary-500">
                    Read <i className="ri-arrow-right-line group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}