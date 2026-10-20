import { Link } from "react-router-dom";
import { brand, martinPhotos } from "@/mocks/site";

const quickStats = [
  { value: "World Champion", label: "Dubai Police Obstacle" },
  { value: "480+", label: "Clients Coached" },
  { value: "12,000+", label: "Sessions Delivered" },
  { value: "1,600+", label: "Group Classes Led" },
];

export default function StoryHero() {
  return (
    <section className="relative overflow-hidden bg-background-50">
      <div className="relative container-x pt-36 md:pt-48 pb-14 md:pb-20 grid gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-16 items-center">
        {/* Copy */}
        <div>
          <span className="text-[11px] uppercase tracking-[0.35em] text-primary-500 font-semibold">
            About Martin Sei
          </span>
          <h1 className="mt-5 font-heading uppercase text-foreground-950 text-5xl md:text-7xl lg:text-8xl leading-[0.9] tracking-tight text-balance">
            Built by discipline.
            <br />
            <span className="text-primary-500">Driven by purpose.</span>
          </h1>
          <p className="mt-7 max-w-xl text-foreground-700 leading-relaxed">
            Elite performance coach, World Champion athlete, and fitness model based in
            Dubai. Martin helps driven individuals transform their bodies, mindset, and
            lives through structured coaching and unwavering accountability.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              to="/book"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-primary-500 hover:bg-primary-600 text-background-50 dark:text-foreground-950 font-semibold whitespace-nowrap cursor-pointer transition-colors"
            >
              Book a Free Consultation
              <i className="ri-arrow-right-line" />
            </Link>
            <Link
              to="/services/personal-training"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md border border-background-300/70 text-foreground-950 hover:text-primary-500 hover:border-primary-500 font-semibold whitespace-nowrap cursor-pointer transition-colors"
            >
              Explore Services
            </Link>
          </div>
          <p className="mt-6 text-xs text-foreground-500 flex items-center gap-2">
            <i className="ri-map-pin-2-line text-primary-500" />
            {brand.location} · Training in person & worldwide online
          </p>
        </div>

        {/* Portrait */}
        <div className="relative">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-lg">
            <img
              src={martinPhotos.portrait}
              alt="Martin Sei — fitness coach and athlete in Dubai"
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 glass rounded-lg px-5 py-4">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 flex items-center justify-center rounded-full bg-accent-500 text-background-50 dark:text-foreground-950">
                  <i className="ri-trophy-fill text-xl" />
                </div>
                <div>
                  <div className="font-heading uppercase text-foreground-950 text-lg tracking-wide">
                    World Champion
                  </div>
                  <div className="text-[10px] uppercase tracking-[0.25em] text-foreground-500">
                    Dubai Police Obstacle
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats strip */}
      <div className="border-t border-background-200/60 bg-background-100/40">
        <div className="container-x py-10 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {quickStats.map((s) => (
            <div key={s.value}>
              <div className="font-heading uppercase text-foreground-950 text-3xl md:text-4xl leading-none">
                {s.value}
              </div>
              <div className="mt-2 text-[11px] uppercase tracking-[0.2em] text-foreground-500">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}