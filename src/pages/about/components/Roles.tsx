import { Link } from "react-router-dom";

const roles = [
  {
    icon: "ri-user-star-line",
    title: "Coach",
    kicker: "I build people",
    body: "Structured, evidence-based programming that turns effort into measurable results. I don't just hand you workouts — I install the habits, discipline, and accountability that make progress stick for life.",
    to: "/services/personal-training",
    cta: "View coaching services",
  },
  {
    icon: "ri-trophy-line",
    title: "Athlete",
    kicker: "I lead by example",
    body: "A Dubai Police Obstacle World Champion who trains exactly the way I coach. I compete, I push my limits, and I use my own performance as the standard I hold every client to.",
    to: "/services/hyrox",
    cta: "Explore HYROX prep",
  },
  {
    icon: "ri-camera-line",
    title: "Fitness Model",
    kicker: "I inspire by proof",
    body: "I've partnered with major sportswear brands and fronted commercial campaigns. My platform exists to show that a disciplined body is the visible result of a disciplined mind — and that it's within reach for you too.",
    to: "/brand-collaborations",
    cta: "See brand collaborations",
  },
];

export default function Roles() {
  return (
    <section className="bg-background-100 border-y border-background-200/60">
      <div className="container-x py-20 md:py-28">
        <div className="max-w-2xl">
          <span className="text-[11px] uppercase tracking-[0.35em] text-primary-500 font-semibold">
            One Man · Three Roles
          </span>
          <h2 className="mt-5 font-heading uppercase text-foreground-950 text-4xl md:text-6xl leading-[0.95] tracking-tight text-balance">
            More than a coach. A complete fitness professional.
          </h2>
          <p className="mt-5 text-foreground-700 leading-relaxed">
            Each role sharpens the others. I coach with an athlete's discipline and present
            myself with a model's standard — so every client gets experience, proof, and
            presence in one.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {roles.map((r) => (
            <div
              key={r.title}
              className="flex flex-col rounded-lg bg-background-50 border border-background-200/70 p-8 hover:border-primary-500 transition-colors"
            >
              <div className="w-14 h-14 flex items-center justify-center rounded-md bg-primary-500/10 text-primary-500 mb-6">
                <i className={`${r.icon} text-2xl`} />
              </div>
              <div className="text-[11px] uppercase tracking-[0.25em] text-accent-500 font-semibold">
                {r.kicker}
              </div>
              <h3 className="mt-2 font-heading uppercase text-foreground-950 text-2xl tracking-wide">
                {r.title}
              </h3>
              <p className="mt-4 text-sm text-foreground-700 leading-relaxed flex-1">{r.body}</p>
              <Link
                to={r.to}
                className="mt-6 inline-flex items-center gap-2 text-sm text-primary-500 hover:text-primary-400 font-medium whitespace-nowrap cursor-pointer transition-colors"
              >
                {r.cta}
                <i className="ri-arrow-right-line" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}