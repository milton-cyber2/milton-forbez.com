import { Link } from "react-router-dom";
import { transformations } from "@/mocks/site";

export default function TransformationsPreview() {
  return (
    <section className="bg-background-50">
      <div className="container-x py-24 md:py-32">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <span className="text-[11px] uppercase tracking-[0.35em] text-primary-500 font-semibold">
              Client Results
            </span>
            <h2 className="mt-4 font-heading uppercase text-foreground-950 text-4xl md:text-5xl lg:text-6xl leading-[1] tracking-tight text-balance">
              Transformations that speak for themselves.
            </h2>
          </div>
          <Link
            to="/transformations"
            className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.25em] text-foreground-800 hover:text-primary-500 cursor-pointer whitespace-nowrap"
          >
            View All
            <i className="ri-arrow-right-line" />
          </Link>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {transformations.map((t) => (
            <div
              key={t.name}
              className="rounded-lg overflow-hidden bg-background-100 border border-background-200/70 hover:border-primary-500 transition-colors group"
            >
              <div className="relative grid grid-cols-2 aspect-[4/3]">
                <div className="relative overflow-hidden">
                  <img
                    src={t.before}
                    alt={`${t.name} before transformation`}
                    className="w-full h-full object-cover object-top"
                  />
                  <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md text-[10px] uppercase tracking-[0.25em] bg-background-50/85 text-foreground-800">
                    Before
                  </span>
                </div>
                <div className="relative overflow-hidden">
                  <img
                    src={t.after}
                    alt={`${t.name} after transformation`}
                    className="w-full h-full object-cover object-top"
                  />
                  <span className="absolute top-3 right-3 px-2.5 py-1 rounded-md text-[10px] uppercase tracking-[0.25em] bg-primary-500 text-background-50 dark:text-foreground-950">
                    After
                  </span>
                </div>
                <div className="absolute top-0 bottom-0 left-1/2 w-px bg-background-50" />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.25em] text-foreground-500 mb-3">
                  <span>{t.weeks} Weeks</span>
                  <span className="text-primary-500">Sample Result</span>
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-3 py-1 rounded-full text-xs bg-accent-100 text-accent-900">
                    {t.loss}
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs bg-secondary-100 text-secondary-900">
                    {t.gain}
                  </span>
                </div>
                <p className="text-sm text-foreground-600 leading-relaxed">{t.note}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-6 text-xs text-foreground-500 text-center">
          Placeholder demo transformations — replace with real client photos and results before launch.
        </p>
      </div>
    </section>
  );
}