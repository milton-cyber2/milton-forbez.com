import { Link } from "react-router-dom";
import { featuredBlogPosts } from "@/mocks/site";

export default function BlogPreview() {
  return (
    <section className="bg-background-100 border-y border-background-200/60">
      <div className="container-x py-24 md:py-32">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <span className="text-[11px] uppercase tracking-[0.35em] text-primary-500 font-semibold">
              From The Blog
            </span>
            <h2 className="mt-4 font-heading uppercase text-foreground-950 text-4xl md:text-5xl lg:text-6xl leading-[1] tracking-tight text-balance">
              Insights to train smarter.
            </h2>
          </div>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.25em] text-foreground-800 hover:text-primary-500 cursor-pointer whitespace-nowrap"
          >
            All Articles
            <i className="ri-arrow-right-line" />
          </Link>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {featuredBlogPosts.map((p) => (
            <article
              key={p.slug}
              className="group rounded-lg overflow-hidden bg-background-50 border border-background-200/70 hover:border-primary-500 transition-colors flex flex-col"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                />
                <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-[10px] uppercase tracking-[0.25em] bg-background-50/90 text-foreground-900">
                  {p.category}
                </span>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h4 className="font-heading uppercase text-foreground-950 text-xl leading-tight">
                  <Link to="/blog" className="hover:text-primary-500 transition-colors cursor-pointer">
                    {p.title}
                  </Link>
                </h4>
                <p className="mt-3 text-sm text-foreground-600 leading-relaxed flex-1">
                  {p.excerpt}
                </p>
                <div className="mt-6 pt-6 border-t border-background-200/70 flex items-center justify-between text-[11px] uppercase tracking-[0.25em] text-foreground-500">
                  <span>{p.read}</span>
                  <Link to="/blog" className="hover:text-primary-500 flex items-center gap-1 cursor-pointer">
                    Read <i className="ri-arrow-right-line" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}