import { Link } from "react-router-dom";
import { martinPhotos } from "@/mocks/site";

export default function AboutIntro() {
  const pillars = [
    { icon: "ri-boxing-line", label: "Strength Training" },
    { icon: "ri-run-line", label: "Functional Fitness" },
    { icon: "ri-heart-pulse-line", label: "Conditioning" },
    { icon: "ri-body-scan-line", label: "Mobility" },
    { icon: "ri-trophy-line", label: "HYROX Prep" },
    { icon: "ri-focus-3-line", label: "Athletic Performance" },
  ];

  return (
    <section className="relative bg-background-50">
      <div className="container-x py-24 md:py-32 grid gap-14 lg:grid-cols-2 lg:gap-20 items-center">
        {/* Portrait collage */}
        <div className="relative">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-lg">
            <img
              src={martinPhotos.dumbbellCurl}
              alt="Martin Sei training with dumbbell in Dubai gym"
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div className="hidden md:block absolute -bottom-8 -right-8 w-56 h-72 rounded-lg overflow-hidden border-4 border-background-50">
            <img
              src={martinPhotos.hyroxWall}
              alt="Martin Sei at HYROX event"
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div className="hidden md:flex absolute -top-6 -left-6 items-center gap-3 glass rounded-lg px-4 py-3">
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

        {/* Copy */}
        <div>
          <span className="text-[11px] uppercase tracking-[0.35em] text-primary-500 font-semibold">
            Meet Your Coach
          </span>
          <h2 className="mt-4 font-heading uppercase text-foreground-950 text-4xl md:text-5xl lg:text-6xl leading-[1] tracking-tight text-balance">
            Coaching that turns effort into results.
          </h2>
          <p className="mt-6 text-foreground-700 leading-relaxed">
            Martin Sei is a Dubai Police Obstacle World Champion and elite performance coach who helps individuals build strength, improve fitness, and achieve peak performance through personalized, evidence-based programming. Whether you want to lose weight, build muscle, sharpen athletic performance, or prepare for a HYROX race — Martin delivers structured coaching and unwavering accountability that produces sustainable, life-changing results.
          </p>

          <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-3">
            {pillars.map((p) => (
              <div
                key={p.label}
                className="flex items-center gap-3 rounded-md border border-background-200/70 bg-background-100/60 px-4 py-3 hover:border-primary-500 transition-colors"
              >
                <span className="w-8 h-8 flex items-center justify-center rounded-md bg-primary-500/10 text-primary-500">
                  <i className={`${p.icon} text-lg`} />
                </span>
                <span className="text-sm text-foreground-800">{p.label}</span>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              to="/about"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-primary-500 hover:bg-primary-600 text-background-50 dark:text-foreground-950 font-semibold whitespace-nowrap cursor-pointer transition-colors"
            >
              Read Martin's Story
              <i className="ri-arrow-right-line" />
            </Link>
            <Link
              to="/services/personal-training"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md border border-background-300/70 text-foreground-950 hover:text-primary-500 hover:border-primary-500 font-semibold whitespace-nowrap cursor-pointer transition-colors"
            >
              View Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}