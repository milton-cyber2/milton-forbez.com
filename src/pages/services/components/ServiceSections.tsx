import type { ServiceContent } from "@/mocks/services";

export default function ServiceSections({ service }: { service: ServiceContent }) {
  return (
    <>
      {/* Overview */}
      <section className="bg-background-50">
        <div className="container-x py-20 md:py-24">
          <div className="grid gap-10 lg:grid-cols-[1fr_380px]">
            <div className="space-y-5">
              <span className="text-[11px] uppercase tracking-[0.35em] text-primary-500 font-semibold">
                Overview
              </span>
              {service.overview.map((p, i) => (
                <p key={i} className="text-foreground-700 leading-relaxed">
                  {p}
                </p>
              ))}
            </div>
            <aside className="glass rounded-lg p-7 h-fit">
              <h3 className="font-heading uppercase text-foreground-950 text-lg tracking-widest mb-5">
                Who It's For
              </h3>
              <ul className="flex flex-col gap-3">
                {service.whoFor.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-foreground-700">
                    <span className="w-5 h-5 flex items-center justify-center mt-0.5 text-primary-500 shrink-0">
                      <i className="ri-check-line" />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </aside>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-background-100 border-y border-background-200/60">
        <div className="container-x py-20 md:py-28">
          <div className="max-w-2xl mb-12">
            <span className="text-[11px] uppercase tracking-[0.35em] text-primary-500 font-semibold">
              What You Get
            </span>
            <h2 className="mt-4 font-heading uppercase text-foreground-950 text-4xl md:text-5xl leading-[1] tracking-tight">
              Why clients train with Martin
            </h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {service.benefits.map((b) => (
              <div
                key={b.title}
                className="rounded-lg bg-background-50 border border-background-200/70 p-7 hover:border-primary-500 transition-colors"
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-md bg-primary-100 text-primary-700 mb-5">
                  <i className={`${b.icon} text-2xl`} />
                </div>
                <h3 className="font-heading uppercase text-foreground-950 text-lg tracking-wide">
                  {b.title}
                </h3>
                <p className="mt-3 text-sm text-foreground-600 leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program */}
      <section className="bg-background-50">
        <div className="container-x py-20 md:py-28">
          <div className="max-w-2xl mb-12">
            <span className="text-[11px] uppercase tracking-[0.35em] text-accent-500 font-semibold">
              The Program
            </span>
            <h2 className="mt-4 font-heading uppercase text-foreground-950 text-4xl md:text-5xl leading-[1] tracking-tight">
              How it works
            </h2>
          </div>
          <div className="grid gap-6 lg:grid-cols-4">
            {service.program.map((phase, i) => (
              <div
                key={phase.phase}
                className="relative rounded-lg bg-background-100 border border-background-200/70 p-7"
              >
                <span className="absolute top-6 right-6 font-heading text-5xl text-background-300 font-bold">
                  0{i + 1}
                </span>
                <h3 className="relative font-heading uppercase text-foreground-950 text-xl tracking-wide">
                  {phase.phase}
                </h3>
                <p className="relative mt-3 text-sm text-foreground-600 leading-relaxed">
                  {phase.desc}
                </p>
                <ul className="relative mt-5 flex flex-col gap-2">
                  {phase.focus.map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-2 text-xs text-foreground-700"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-accent-500 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}