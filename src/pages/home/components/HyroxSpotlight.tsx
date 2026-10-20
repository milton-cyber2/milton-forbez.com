import { Link } from "react-router-dom";
import { martinPhotos } from "@/mocks/site";

export default function HyroxSpotlight() {
  const stages = [
    { label: "1 KM Run", icon: "ri-run-line" },
    { label: "Ski Erg", icon: "ri-arrow-up-down-line" },
    { label: "Sled Push", icon: "ri-arrow-right-double-line" },
    { label: "Sled Pull", icon: "ri-arrow-left-double-line" },
    { label: "Burpee Broad Jump", icon: "ri-arrow-up-line" },
    { label: "Rowing", icon: "ri-loop-right-line" },
    { label: "Farmer Carry", icon: "ri-boxing-line" },
    { label: "Sandbag Lunges", icon: "ri-footprint-line" },
    { label: "Wall Balls", icon: "ri-basketball-line" },
  ];

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={martinPhotos.tireFlip}
          alt="Martin Sei flipping tire during HYROX training"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background-50 via-background-50/85 to-background-50/50" />
      </div>

      <div className="relative container-x py-28 md:py-36 grid gap-14 lg:grid-cols-2 items-center">
        <div>
          <span className="text-[11px] uppercase tracking-[0.35em] text-accent-500 font-semibold">
            Race Day Programming
          </span>
          <h2 className="mt-4 font-heading uppercase text-foreground-950 text-4xl md:text-5xl lg:text-6xl leading-[1] tracking-tight text-balance">
            Train for
            <br />
            <span className="text-accent-500">HYROX</span> like an athlete.
          </h2>
          <p className="mt-6 max-w-xl text-foreground-700 leading-relaxed">
            Structured 8, 12, and 16-week race blocks covering every station — from ski erg intervals to sandbag lunges. Pacing strategy, transitions, running economy, and full race simulations included.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-3">
            <Link
              to="/services/hyrox"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-md bg-accent-500 hover:bg-accent-600 text-background-50 dark:text-foreground-950 font-semibold whitespace-nowrap cursor-pointer transition-colors"
            >
              Explore HYROX Coaching
              <i className="ri-arrow-right-line" />
            </Link>
            <Link
              to="/book"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-md border border-background-300/70 text-foreground-950 hover:text-accent-500 hover:border-accent-500 font-semibold whitespace-nowrap cursor-pointer transition-colors"
            >
              Book Assessment
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3">
          {stages.map((s) => (
            <div
              key={s.label}
              className="glass rounded-lg p-4 flex flex-col items-center text-center gap-2 aspect-square justify-center"
            >
              <span className="w-9 h-9 flex items-center justify-center rounded-full bg-accent-500/15 text-accent-500">
                <i className={s.icon} />
              </span>
              <span className="text-[11px] uppercase tracking-widest text-foreground-800">
                {s.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}