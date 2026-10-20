import { Link } from "react-router-dom";
import Reveal from "@/components/feature/Reveal";

const offerings = [
  {
    icon: "ri-football-line",
    title: "Football Performance Coaching",
    desc: "High-level performance coaching for footballers — strength, speed, agility, power, endurance and physical preparation for the demands of the game.",
    to: "/services/football-performance",
    cta: "Football Performance Enquiry",
  },
  {
    icon: "ri-home-heart-line",
    title: "Family Coaching",
    desc: "Train together. Get stronger together. Structured, enjoyable and purposeful coaching for families who want to become more active and healthier together.",
    to: "/services/family-coaching",
    cta: "Family Coaching Enquiry",
  },
  {
    icon: "ri-parent-line",
    title: "Children's Coaching",
    desc: "Helping young people build confidence, coordination, fitness and strong movement foundations through engaging, age-appropriate coaching.",
    to: "/services/childrens-coaching",
    cta: "Children's Coaching Enquiry",
  },
];

export default function SpecialistTeaser() {
  return (
    <section className="bg-background-50">
      <div className="container-x py-20 md:py-28">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <span className="text-[11px] uppercase tracking-[0.35em] text-accent-500 font-semibold">
                More Ways To Train
              </span>
              <h2 className="mt-4 font-heading uppercase text-foreground-950 text-4xl md:text-5xl leading-[1] tracking-tight text-balance">
                Specialist coaching, beyond the classes.
              </h2>
            </div>
            <p className="max-w-md text-foreground-600 leading-relaxed">
              Martin also coaches athletes, families and young people one-to-one and in groups —
              tailored to their goals, age and level.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-3">
          {offerings.map((o, i) => (
            <Reveal key={o.title} delay={i * 90}>
              <Link
                to={o.to}
                className="group rounded-lg bg-background-100 border border-background-200/70 hover:border-accent-500 transition-colors p-7 flex flex-col h-full cursor-pointer"
              >
                <div className="w-[52px] h-[52px] flex items-center justify-center rounded-md bg-accent-100 text-accent-700 mb-5">
                  <i className={`${o.icon} text-2xl`} />
                </div>
                <h3 className="font-heading uppercase text-foreground-950 text-xl tracking-wide leading-tight">
                  {o.title}
                </h3>
                <p className="mt-3 text-sm text-foreground-600 leading-relaxed flex-1">{o.desc}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-accent-700 group-hover:text-accent-500 transition-colors">
                  {o.cta}
                  <i className="ri-arrow-right-line" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}