import { Link } from "react-router-dom";
import Reveal from "@/components/feature/Reveal";
import { signatureClasses, newClasses, type GymClass } from "@/mocks/classes";

function ClassCard({ c }: { c: GymClass }) {
  return (
    <article className="group rounded-lg overflow-hidden bg-background-50 border border-background-200/70 hover:border-primary-500 transition-all duration-300 flex flex-col">
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={c.image}
          alt={`${c.name} class with Martin Sei in Dubai`}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background-50 via-background-50/20 to-transparent" />
        {c.isNew && (
          <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-[10px] uppercase tracking-[0.2em] bg-accent-500 text-background-50 dark:text-foreground-950 font-semibold whitespace-nowrap">
            New
          </span>
        )}
        <span className="absolute top-4 right-4 px-3 py-1 rounded-full text-[10px] uppercase tracking-[0.2em] glass text-foreground-900 whitespace-nowrap">
          {c.level}
        </span>
      </div>

      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center gap-3">
          <span className="w-11 h-11 flex items-center justify-center rounded-md bg-primary-100 text-primary-700 shrink-0">
            <i className={`${c.icon} text-xl`} />
          </span>
          <h3 className="font-heading uppercase text-foreground-950 text-lg md:text-xl tracking-wide leading-tight">
            {c.name}
          </h3>
        </div>
        <p className="mt-3 text-sm text-foreground-600 leading-relaxed flex-1">{c.desc}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {c.focus.map((f) => (
            <span
              key={f}
              className="px-2.5 py-1 rounded-full text-[11px] bg-secondary-100 text-secondary-900"
            >
              {f}
            </span>
          ))}
        </div>

        <div className="mt-5 pt-5 border-t border-background-200/70 flex items-center justify-between gap-3">
          <span className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.2em] text-foreground-500 whitespace-nowrap">
            <i className="ri-time-line" /> {c.duration}
          </span>
          <Link
            to="/book"
            className="inline-flex items-center gap-1 text-xs uppercase tracking-[0.2em] text-primary-500 hover:text-primary-400 cursor-pointer whitespace-nowrap"
          >
            Enquire Now <i className="ri-arrow-right-line" />
          </Link>
        </div>
      </div>
    </article>
  );
}

export default function ClassGrid() {
  return (
    <>
      {/* New classes */}
      <section className="bg-background-100 border-y border-background-200/60">
        <div className="container-x py-20 md:py-28">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
              <div>
                <span className="text-[11px] uppercase tracking-[0.35em] text-accent-500 font-semibold">
                  New For This Season
                </span>
                <h2 className="mt-4 font-heading uppercase text-foreground-950 text-4xl md:text-5xl leading-[1] tracking-tight text-balance">
                  The expanded lineup.
                </h2>
              </div>
              <p className="max-w-md text-foreground-600 leading-relaxed">
                Four powerful new classes added to the timetable — each engineered to develop real
                performance across strength, conditioning and athletic ability.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {newClasses.map((c, i) => (
              <Reveal key={c.id} delay={i * 90}>
                <ClassCard c={c} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Signature classes */}
      <section className="bg-background-50">
        <div className="container-x py-20 md:py-28">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
              <div>
                <span className="text-[11px] uppercase tracking-[0.35em] text-primary-500 font-semibold">
                  Signature Classes
                </span>
                <h2 className="mt-4 font-heading uppercase text-foreground-950 text-4xl md:text-5xl leading-[1] tracking-tight text-balance">
                  The weekly lineup.
                </h2>
              </div>
              <p className="max-w-md text-foreground-600 leading-relaxed">
                The classic formats Martin has coached for years — scalable, structured and led in
                person or online.
              </p>
            </div>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {signatureClasses.map((c, i) => (
              <Reveal key={c.id} delay={i * 80}>
                <ClassCard c={c} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}