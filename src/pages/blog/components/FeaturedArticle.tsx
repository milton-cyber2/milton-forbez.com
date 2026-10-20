import { Link } from "react-router-dom";
import type { BlogPost } from "@/mocks/blog";
import { getCategoryLabel } from "@/mocks/blog";
import Reveal from "@/components/feature/Reveal";

export default function FeaturedArticle({ post }: { post: BlogPost }) {
  return (
    <section className="bg-background-50">
      <div className="container-x py-16 md:py-24">
        <Reveal>
          <div className="flex items-center gap-3 mb-8">
            <span className="h-px w-10 bg-primary-500" />
            <span className="text-[11px] uppercase tracking-[0.4em] text-primary-500 font-semibold">
              Featured Story
            </span>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <Link
            to={`/blog/${post.slug}`}
            className="group grid gap-0 lg:grid-cols-12 rounded-lg overflow-hidden bg-background-100 border border-background-200/70 hover:border-primary-500 transition-colors cursor-pointer"
          >
            {/* Image */}
            <div className="relative lg:col-span-7 aspect-[4/3] lg:aspect-auto overflow-hidden">
              <img
                src={post.image}
                alt={`${post.title} - Martin Sei blog`}
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-[1400ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background-100/60 to-transparent" />
              <span className="absolute top-6 left-6 px-4 py-1.5 rounded-full text-[10px] uppercase tracking-[0.3em] bg-primary-500 text-background-50 dark:text-foreground-950 font-semibold">
                {getCategoryLabel(post.category)}
              </span>
            </div>

            {/* Content */}
            <div className="lg:col-span-5 p-8 md:p-12 flex flex-col justify-center">
              <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.25em] text-foreground-500">
                <span>{post.date}</span>
                <span className="w-1 h-1 rounded-full bg-background-300" />
                <span>{post.read}</span>
                <span className="w-1 h-1 rounded-full bg-background-300" />
                <span>{post.reads} reads</span>
              </div>
              <h2 className="mt-5 font-heading uppercase text-foreground-950 text-3xl md:text-4xl leading-[1.02] tracking-tight">
                {post.title}
              </h2>
              <p className="mt-5 text-foreground-700 leading-relaxed">{post.excerpt}</p>
              <div className="mt-8 flex items-center gap-4">
                <img
                  src="https://storage.helloreaddy.io/project_files/8bbff0a6-c1c7-4973-a59c-258b9bcc5dce/2a6b5a6a-eaa7-466d-8af8-6d4a6d36c1d6_compressed_WhatsApp-Image-2026-06-25-at-20.49.53-4.webp"
                  alt="Martin Sei"
                  className="w-11 h-11 rounded-full object-cover object-top border border-primary-500/40"
                />
                <div className="leading-tight">
                  <p className="font-medium text-foreground-950 text-sm">Martin Sei</p>
                  <p className="text-xs text-foreground-500">Elite Coach · Dubai</p>
                </div>
                <span className="ml-auto inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-primary-500 group-hover:text-primary-400 group-hover:gap-4 transition-all">
                  Read
                  <i className="ri-arrow-right-line" />
                </span>
              </div>
            </div>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}