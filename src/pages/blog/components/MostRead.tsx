import { Link } from "react-router-dom";
import type { BlogPost } from "@/mocks/blog";
import Reveal from "@/components/feature/Reveal";

interface MostReadProps {
  posts: BlogPost[];
}

export default function MostRead({ posts }: MostReadProps) {
  const top = posts
    .filter((p) => p.mostRead)
    .concat(posts.filter((p) => !p.mostRead))
    .slice(0, 4);

  return (
    <section className="bg-background-100 border-y border-background-200/60">
      <div className="container-x py-16 md:py-20">
        <Reveal>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="h-px w-10 bg-accent-500" />
                <span className="text-[11px] uppercase tracking-[0.4em] text-accent-500 font-semibold">
                  Most Read
                </span>
              </div>
              <h2 className="font-heading uppercase text-foreground-950 text-3xl md:text-4xl leading-tight tracking-tight">
                What everyone's reading
              </h2>
            </div>
            <span className="text-sm text-foreground-500">{top.length} essentials, ranked</span>
          </div>
        </Reveal>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {top.map((post, i) => (
            <Reveal key={post.slug} delay={i * 80}>
              <Link
                to={`/blog/${post.slug}`}
                className="group flex gap-5 items-start rounded-lg bg-background-50 border border-background-200/70 hover:border-accent-500 p-5 transition-colors cursor-pointer h-full"
              >
                <span className="font-heading text-5xl font-bold text-background-300 group-hover:text-accent-500 transition-colors leading-none shrink-0">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="min-w-0">
                  <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-foreground-500">
                    <span>{post.reads} reads</span>
                    <span className="w-1 h-1 rounded-full bg-background-300" />
                    <span>{post.read}</span>
                  </div>
                  <h3 className="mt-2 font-heading uppercase text-foreground-950 text-lg leading-tight group-hover:text-accent-500 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <span className="mt-3 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-accent-500">
                    Read <i className="ri-arrow-right-line group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}