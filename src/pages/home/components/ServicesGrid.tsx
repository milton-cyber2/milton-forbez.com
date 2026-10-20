import { Link } from "react-router-dom";
import { services } from "@/mocks/site";

export default function ServicesGrid() {
  return (
    <section className="bg-background-100 border-y border-background-200/60">
      <div className="container-x py-24 md:py-32">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <span className="text-[11px] uppercase tracking-[0.35em] text-primary-500 font-semibold">
              What I Do
            </span>
            <h2 className="mt-4 font-heading uppercase text-foreground-950 text-4xl md:text-5xl lg:text-6xl leading-[1] tracking-tight text-balance">
              Programs engineered for real results.
            </h2>
          </div>
          <p className="max-w-md text-foreground-600 text-sm md:text-base leading-relaxed">
            Six focused coaching tracks — pick the one that fits your goal, or combine them into a bespoke program.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, idx) => (
            <Link
              to={s.to}
              key={s.id}
              className="group relative rounded-lg overflow-hidden bg-background-50 border border-background-200/70 hover:border-primary-500 transition-all duration-300 cursor-pointer p-8 flex flex-col"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="w-14 h-14 flex items-center justify-center rounded-md bg-primary-500/10 text-primary-500 group-hover:bg-primary-500 group-hover:text-background-50 transition-colors">
                  <i className={`${s.icon} text-2xl`} />
                </div>
                <span className="font-heading text-foreground-300 text-2xl">
                  {String(idx + 1).padStart(2, "0")}
                </span>
              </div>
              <h3 className="font-heading uppercase text-foreground-950 text-xl md:text-2xl tracking-wide leading-tight">
                {s.title}
              </h3>
              <p className="mt-3 text-sm text-foreground-600 leading-relaxed flex-1">
                {s.excerpt}
              </p>
              <div className="mt-6 pt-6 border-t border-background-200/70 flex items-center justify-between">
                <span className="text-xs uppercase tracking-[0.25em] text-foreground-500 group-hover:text-primary-500 transition-colors">
                  Learn More
                </span>
                <span className="w-8 h-8 flex items-center justify-center rounded-full border border-background-300/70 group-hover:border-primary-500 group-hover:text-primary-500 transition-colors">
                  <i className="ri-arrow-right-line" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}