import { heroBackground } from "@/mocks/transformations";

/**
 * Cinematic full-screen hero with parallax background and staggered text reveal.
 */
export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Parallax background */}
      <div className="absolute inset-0 scale-110 will-change-transform anim-kenburns">
        <img
          src={heroBackground}
          alt="Martin Sei performing a heavy farmer's carry at a Dubai fitness competition"
          className="w-full h-full object-cover object-[50%_28%]"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-background-50 via-background-50/60 to-background-50/30" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/40" />

      <div className="relative container-x w-full py-32 md:py-40">
        <div className="max-w-4xl">
          <div className="anim-fade-up" style={{ animationDelay: "0.1s" }}>
            <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.4em] text-primary-500 font-semibold bg-background-50/70 backdrop-blur px-4 py-2 rounded-full border border-background-200/60">
              <span className="w-1.5 h-1.5 rounded-full bg-primary-500 animate-pulse" />
              Client Transformations · Dubai
            </span>
          </div>

          <h1
            className="mt-8 font-heading uppercase text-foreground-950 text-5xl md:text-7xl lg:text-8xl leading-[0.92] tracking-tight anim-fade-up"
            style={{ animationDelay: "0.25s" }}
          >
            <span className="block overflow-hidden">
              <span className="block anim-fade-up text-shadow-lg">Real People.</span>
            </span>
            <span className="block overflow-hidden">
              <span className="block anim-fade-up text-primary-500 text-shadow-lg" style={{ animationDelay: "0.4s" }}>
                Real Transformations.
              </span>
            </span>
          </h1>

          <p
            className="mt-8 max-w-xl text-foreground-700 text-lg md:text-xl leading-relaxed anim-fade-up"
            style={{ animationDelay: "0.55s" }}
          >
            Every transformation starts with a decision. These are the stories of clients
            who committed to becoming stronger, healthier and more confident.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 anim-fade-up" style={{ animationDelay: "0.7s" }}>
            <a
              href="#featured"
              className="inline-flex items-center justify-center gap-2 px-9 py-4 rounded-md bg-primary-500 hover:bg-primary-600 text-background-50 dark:text-foreground-950 text-sm font-semibold tracking-wide whitespace-nowrap transition-colors cursor-pointer"
            >
              SEE THE STORIES
              <i className="ri-arrow-right-line" />
            </a>
            <a
              href="#stats"
              className="inline-flex items-center justify-center gap-2 px-9 py-4 rounded-md bg-background-50/60 backdrop-blur border border-background-200/70 hover:border-primary-500 text-foreground-950 text-sm font-semibold tracking-wide whitespace-nowrap transition-colors cursor-pointer"
            >
              EXPLORE THE RESULTS
            </a>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 anim-fade-in" style={{ animationDelay: "1s" }}>
        <span className="text-[10px] uppercase tracking-[0.4em] text-foreground-500">
          Scroll
        </span>
        <div className="w-6 h-10 rounded-full border border-background-400 flex items-start justify-center pt-2">
          <div className="w-1 h-2 rounded-full bg-primary-500" style={{ animation: "scrollHint 1.8s ease-in-out infinite" }} />
        </div>
      </div>
    </section>
  );
}