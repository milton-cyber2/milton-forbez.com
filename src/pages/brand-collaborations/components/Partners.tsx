export default function Partners() {
  return (
    <section className="bg-background-50">
      <div className="container-x py-24 md:py-32">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[11px] uppercase tracking-[0.35em] text-primary-500 font-semibold">
            Current & Past Collaborations
          </span>
          <h2 className="mt-4 font-heading uppercase text-foreground-950 text-4xl md:text-5xl tracking-tight">
            Trusted By Leading Brands
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 relative rounded-lg overflow-hidden bg-foreground-950 min-h-[360px] flex items-end p-8 md:p-10">
            <img
              src="https://readdy.ai/api/search-image?query=Dark%20cinematic%20athletic%20training%20scene%20with%20dramatic%20spotlight%20on%20black%20rubber%20gym%20floor%2C%20moody%20premium%20sports%20brand%20campaign%20aesthetic%2C%20abstract%20motion%20blur%2C%20high%20contrast%20charcoal%20tones%2C%20editorial%20fitness%20photography&width=1200&height=800&seq=brand-nike-pro-bg&orientation=landscape"
              alt="Nike Pro and SUNWARRIOR brand campaign backdrop"
              className="absolute inset-0 w-full h-full object-cover opacity-40"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="relative">
              <span className="text-[10px] uppercase tracking-[0.3em] text-primary-400 font-semibold">
                Featured Collaborations
              </span>
              <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1">
                <h3 className="font-heading text-white text-3xl md:text-4xl uppercase tracking-wide">
                  Nike Pro
                </h3>
                <span className="text-white/40">+</span>
                <h3 className="font-heading text-accent-400 text-3xl md:text-4xl uppercase tracking-wide">
                  SUNWARRIOR
                </h3>
              </div>
              <p className="mt-3 text-white/70 max-w-lg leading-relaxed">
                Two dedicated brand campaigns showcasing elite performance, strength, and the
                relentless discipline behind world-class athletic training — created for digital,
                social, and commercial distribution.
              </p>
            </div>
          </div>

          <div className="rounded-lg bg-background-100 border border-background-200/60 p-8 flex flex-col justify-between min-h-[360px]">
            <div>
              <span className="text-[10px] uppercase tracking-[0.3em] text-foreground-500 font-semibold">
                Open for Partnership
              </span>
              <h3 className="mt-3 font-heading text-foreground-950 text-xl uppercase tracking-wide">
                Sportswear & Lifestyle
              </h3>
              <p className="mt-3 text-foreground-600 text-sm leading-relaxed">
                Premium athletic apparel, footwear, and lifestyle brands seeking authentic performance-driven representation.
              </p>
            </div>
            <div className="mt-6">
              <a
                href="#inquiry"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary-500 hover:text-primary-600 transition-colors cursor-pointer"
              >
                Inquire Now
                <i className="ri-arrow-right-line" />
              </a>
            </div>
          </div>

          <div className="rounded-lg bg-background-100 border border-background-200/60 p-8 flex flex-col justify-between">
            <div>
              <span className="text-[10px] uppercase tracking-[0.3em] text-foreground-500 font-semibold">
                Open for Partnership
              </span>
              <h3 className="mt-3 font-heading text-foreground-950 text-xl uppercase tracking-wide">
                Sports Nutrition
              </h3>
              <p className="mt-3 text-foreground-600 text-sm leading-relaxed">
                Protein, supplements, and performance nutrition brands looking for credible, science-backed advocacy from a world champion coach.
              </p>
            </div>
            <div className="mt-6">
              <a
                href="#inquiry"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary-500 hover:text-primary-600 transition-colors cursor-pointer"
              >
                Inquire Now
                <i className="ri-arrow-right-line" />
              </a>
            </div>
          </div>

          <div className="rounded-lg bg-background-100 border border-background-200/60 p-8 flex flex-col justify-between">
            <div>
              <span className="text-[10px] uppercase tracking-[0.3em] text-foreground-500 font-semibold">
                Open for Partnership
              </span>
              <h3 className="mt-3 font-heading text-foreground-950 text-xl uppercase tracking-wide">
                Wellness & Recovery
              </h3>
              <p className="mt-3 text-foreground-600 text-sm leading-relaxed">
                Recovery tech, wellness retreats, spa brands, and health platforms aligned with high-performance living.
              </p>
            </div>
            <div className="mt-6">
              <a
                href="#inquiry"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary-500 hover:text-primary-600 transition-colors cursor-pointer"
              >
                Inquire Now
                <i className="ri-arrow-right-line" />
              </a>
            </div>
          </div>

          <div className="rounded-lg bg-background-100 border border-background-200/60 p-8 flex flex-col justify-between">
            <div>
              <span className="text-[10px] uppercase tracking-[0.3em] text-foreground-500 font-semibold">
                Open for Partnership
              </span>
              <h3 className="mt-3 font-heading text-foreground-950 text-xl uppercase tracking-wide">
                Fitness Tech & Events
              </h3>
              <p className="mt-3 text-foreground-600 text-sm leading-relaxed">
                Wearables, fitness apps, gym chains, and sports events seeking elite ambassador presence and content partnerships.
              </p>
            </div>
            <div className="mt-6">
              <a
                href="#inquiry"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary-500 hover:text-primary-600 transition-colors cursor-pointer"
              >
                Inquire Now
                <i className="ri-arrow-right-line" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}