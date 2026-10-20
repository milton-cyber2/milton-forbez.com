import { testimonials } from "@/mocks/site";

export default function Testimonials() {
  return (
    <section className="bg-background-50">
      <div className="container-x py-24 md:py-32">
        <div className="max-w-3xl">
          <span className="text-[11px] uppercase tracking-[0.35em] text-primary-500 font-semibold">
            What Clients Say
          </span>
          <h2 className="mt-4 font-heading uppercase text-foreground-950 text-4xl md:text-5xl lg:text-6xl leading-[1] tracking-tight text-balance">
            Real people. Real momentum.
          </h2>
          <p className="mt-6 text-foreground-700 leading-relaxed">
            Sample reviews shown until real client testimonials are collected. Placeholders are clearly labeled and easy to replace.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="relative rounded-lg bg-background-100 border border-background-200/70 p-8 hover:border-primary-500 transition-colors"
            >
              <i className="ri-double-quotes-l text-primary-500 text-4xl absolute -top-3 left-6 bg-background-50 px-2" />
              <div className="flex items-center gap-1 text-accent-500 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <i key={i} className="ri-star-fill" />
                ))}
              </div>
              <blockquote className="text-foreground-800 leading-relaxed">
                "{t.quote}"
              </blockquote>
              <figcaption className="mt-6 flex items-center justify-between gap-4">
                <div>
                  <p className="font-semibold text-foreground-950">{t.name}</p>
                  <p className="text-[11px] uppercase tracking-[0.25em] text-foreground-500 mt-1">
                    {t.role}
                  </p>
                </div>
                <span className="px-3 py-1 rounded-full text-xs bg-primary-500/10 text-primary-500">
                  {t.goal}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>

        <p className="mt-8 text-xs text-foreground-500 text-center">
          Sample testimonial content — replace with genuine client reviews before launch.
        </p>
      </div>
    </section>
  );
}