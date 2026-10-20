import { Link } from "react-router-dom";
import { martinPhotos } from "@/mocks/site";

export default function AwardsCredentials() {
  return (
    <section className="relative bg-background-100 overflow-hidden">
      <div className="container-x py-24 md:py-32 grid gap-14 lg:grid-cols-2 lg:gap-20 items-center">
        {/* Copy — Left */}
        <div className="order-2 lg:order-1">
          <div className="inline-flex items-center gap-2.5 rounded-full border border-accent-500/30 bg-accent-500/10 px-4 py-2 mb-6">
            <i className="ri-medal-fill text-accent-500" />
            <span className="text-[11px] uppercase tracking-[0.3em] text-accent-500 font-semibold">
              Dubai Police Obstacle World Championship
            </span>
          </div>

          <h2 className="font-heading uppercase text-foreground-950 text-4xl md:text-5xl lg:text-6xl leading-[1] tracking-tight text-balance">
            World Champion.
            <br />
            World-Class Coach.
          </h2>

          <p className="mt-6 text-foreground-700 leading-relaxed">
            Martin led his team to victory on one of the most demanding obstacle courses in the world — competing under pressure against elite athletes from across the globe. What separates a champion from the rest isn't raw talent alone. It is discipline under fatigue, strategy under stress, and the ability to execute when everything burns.
          </p>

          <p className="mt-4 text-foreground-700 leading-relaxed">
            That same championship rigor is baked into every program he builds. When you train with someone who has stood on a world podium, you are not guessing what works. You are following a system that has already been proven at the absolute highest level.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/about"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-primary-500 hover:bg-primary-600 text-background-50 dark:text-foreground-950 font-semibold whitespace-nowrap cursor-pointer transition-colors"
            >
              Discover Martin's Approach
              <i className="ri-arrow-right-line" />
            </Link>
            <Link
              to="/services/personal-training"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md border border-background-300/70 text-foreground-950 hover:text-primary-500 hover:border-primary-500 font-semibold whitespace-nowrap cursor-pointer transition-colors"
            >
              Start Training
            </Link>
          </div>
        </div>

        {/* Images — Right */}
        <div className="order-1 lg:order-2 relative">
          {/* Main trophy image */}
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-lg">
            <img
              src={martinPhotos.worldChampTrophy}
              alt="Martin Sei and team holding the Dubai Police Obstacle World Championship trophy at Dubai Officer's Club"
              className="w-full h-full object-cover object-top"
            />
            {/* Subtle gradient overlay at bottom for text legibility if needed */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
          </div>

          {/* Floating team medal photo */}
          <div className="hidden md:block absolute -bottom-8 -left-8 w-56 h-72 rounded-lg overflow-hidden border-4 border-background-100">
            <img
              src={martinPhotos.worldChampTeam}
              alt="Martin Sei and championship team celebrating with medals at Dubai Police Obstacle World Championship"
              className="w-full h-full object-cover object-top"
            />
          </div>

          {/* Floating stat badge */}
          <div className="hidden md:flex absolute -top-6 -right-6 items-center gap-3 glass rounded-lg px-4 py-3">
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-accent-500 text-background-50 dark:text-foreground-950">
              <i className="ri-trophy-fill text-lg" />
            </div>
            <div>
              <div className="font-heading text-foreground-950 text-lg">World Champion</div>
              <div className="text-[10px] uppercase tracking-[0.25em] text-foreground-500">
                Dubai Police Obstacle
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}