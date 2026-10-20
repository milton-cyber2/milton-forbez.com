import { Link } from "react-router-dom";
import type { BlogPost } from "@/mocks/blog";

export default function BlogCard({ post }: { post: BlogPost }) {
  const categoryLabel = post.category.charAt(0).toUpperCase() + post.category.slice(1);
  return (
    <article className="group rounded-lg overflow-hidden bg-background-50 border border-background-200/70 hover:border-primary-500 transition-colors flex flex-col">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={post.image}
          alt={`${post.title} - Martin Sei blog`}
          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
        />
        <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-[10px] uppercase tracking-[0.25em] bg-background-50/90 text-foreground-900">
          {categoryLabel}
        </span>
      </div>
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] text-foreground-500">
          <span>{post.date}</span>
          <span className="w-1 h-1 rounded-full bg-background-300" />
          <span>{post.read}</span>
        </div>
        <h3 className="mt-3 font-heading uppercase text-foreground-950 text-xl leading-tight">
          <Link to={`/blog/${post.slug}`} className="hover:text-primary-500 transition-colors cursor-pointer">
            {post.title}
          </Link>
        </h3>
        <p className="mt-3 text-sm text-foreground-600 leading-relaxed flex-1">{post.excerpt}</p>
        <div className="mt-6 pt-6 border-t border-background-200/70">
          <Link
            to={`/blog/${post.slug}`}
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-primary-500 hover:text-primary-400 cursor-pointer"
          >
            Read Article <i className="ri-arrow-right-line" />
          </Link>
        </div>
      </div>
    </article>
  );
}