const capabilities = [
  {
    icon: "ri-user-star-line",
    title: "Brand Ambassador",
    desc: "Long-term representation aligned with your brand values and audience.",
  },
  {
    icon: "ri-smartphone-line",
    title: "Social Media Campaign",
    desc: "Strategic content creation across Instagram, TikTok, and YouTube.",
  },
  {
    icon: "ri-camera-line",
    title: "UGC",
    desc: "Authentic user-generated content that drives engagement and trust.",
  },
  {
    icon: "ri-shopping-bag-3-line",
    title: "Product Campaign",
    desc: "Product-focused storytelling with performance and lifestyle angles.",
  },
  {
    icon: "ri-tv-line",
    title: "Commercial",
    desc: "TV and digital commercials with professional on-camera presence.",
  },
  {
    icon: "ri-image-line",
    title: "Billboard",
    desc: "Large-format outdoor and print campaigns with visual impact.",
  },
  {
    icon: "ri-camera-3-line",
    title: "Photography",
    desc: "Editorial and campaign photography with athletic aesthetic direction.",
  },
  {
    icon: "ri-film-line",
    title: "Video",
    desc: "Cinematic fitness and lifestyle video content for brand channels.",
  },
  {
    icon: "ri-calendar-event-line",
    title: "Event",
    desc: "Live appearances, product launches, and fitness event hosting.",
  },
  {
    icon: "ri-link",
    title: "Long-Term Partnership",
    desc: "Multi-year strategic partnerships for sustained brand alignment.",
  },
];

export default function Capabilities() {
  return (
    <section className="bg-background-100">
      <div className="container-x py-24 md:py-32">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[11px] uppercase tracking-[0.35em] text-secondary-500 font-semibold">
            Collaboration Types
          </span>
          <h2 className="mt-4 font-heading uppercase text-foreground-950 text-4xl md:text-5xl tracking-tight">
            How We Work Together
          </h2>
          <p className="mt-5 text-foreground-700 leading-relaxed">
            Every collaboration is built on the same foundation: elite athletic credibility, professional delivery, and content that converts.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {capabilities.map((c) => (
            <div
              key={c.title}
              className="group p-6 rounded-lg bg-background-50 border border-background-200/60 hover:border-primary-300 transition-colors"
            >
              <div className="w-10 h-10 flex items-center justify-center rounded-md bg-secondary-500/10 text-secondary-500 mb-4">
                <i className={`${c.icon} text-lg`} />
              </div>
              <h3 className="font-heading text-foreground-950 text-sm uppercase tracking-wide">
                {c.title}
              </h3>
              <p className="mt-2 text-foreground-600 text-sm leading-relaxed">
                {c.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}