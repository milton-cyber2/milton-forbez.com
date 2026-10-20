import { blogCategories } from "@/mocks/blog";
import { martinPhotos } from "@/mocks/site";

interface BlogHeroProps {
  active: string;
  onActive: (slug: string) => void;
  query: string;
  onQuery: (q: string) => void;
}

export default function BlogHero({ active, onActive, query, onQuery }: BlogHeroProps) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={martinPhotos.blogHero}
          alt="Martin Sei training in the gym"
          className="w-full h-full object-cover object-[50%_28%] anim-kenburns"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background-50 via-background-50/85 to-background-50/30" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-transparent" />
      </div>

      <div className="relative container-x pt-40 pb-20 md:pt-56 md:pb-28 text-center">
        <RevealInner>
          <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.4em] text-primary-500 font-semibold bg-background-50/70 backdrop-blur px-4 py-2 rounded-full border border-background-200/60">
            <span className="w-1.5 h-1.5 rounded-full bg-primary-500 animate-pulse" />
            The Martin Sei Journal
          </span>
        </RevealInner>
        <RevealInner delay={120}>
          <h1 className="mt-7 font-heading uppercase text-foreground-950 text-5xl md:text-8xl leading-[0.9] tracking-tight text-balance">
            Train <span className="text-primary-500">smarter.</span>
            <br />
            Live <span className="text-accent-500">stronger.</span>
          </h1>
        </RevealInner>
        <RevealInner delay={240}>
          <p className="mt-6 max-w-xl mx-auto text-foreground-700 leading-relaxed">
            Evidence-based training, nutrition, mindset, and recovery from Dubai's elite coach. Real science, real experience, zero noise.
          </p>
        </RevealInner>

        {/* Filters + search */}
        <RevealInner delay={360}>
          <div className="mt-10 flex flex-col items-center gap-6">
            <div className="flex flex-wrap items-center justify-center gap-2">
              {blogCategories.map((c) => (
                <button
                  key={c.slug}
                  type="button"
                  onClick={() => onActive(c.slug)}
                  className={[
                    "px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap cursor-pointer transition-all duration-300",
                    active === c.slug
                      ? "bg-primary-500 text-background-50 dark:text-foreground-950 shadow-none"
                      : "bg-background-50/70 backdrop-blur border border-background-300/60 text-foreground-700 hover:border-primary-500 hover:text-primary-500",
                  ].join(" ")}
                >
                  {c.label}
                </button>
              ))}
            </div>
            <div className="relative w-full max-w-md">
              <span className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 flex items-center justify-center text-foreground-500">
                <i className="ri-search-line" />
              </span>
              <input
                type="text"
                value={query}
                onChange={(e) => onQuery(e.target.value)}
                placeholder="Search articles..."
                className="w-full pl-12 pr-5 py-3.5 rounded-full bg-background-50/80 backdrop-blur border border-background-300/60 text-foreground-950 text-sm focus:border-primary-500 focus:ring-1 focus:ring-primary-500 outline-none transition-colors"
              />
            </div>
          </div>
        </RevealInner>
      </div>
    </section>
  );
}

function RevealInner({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <div
      className="anim-fade-up"
      style={{ animationDelay: `${delay}ms`, opacity: 0 }}
      onAnimationEnd={(e) => {
        (e.currentTarget as HTMLDivElement).style.opacity = "1";
      }}
    >
      {children}
    </div>
  );
}