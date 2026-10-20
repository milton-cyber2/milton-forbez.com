import { Link } from "react-router-dom";
import type { ServiceContent } from "@/mocks/services";

export default function ServicePricing({ service }: { service: ServiceContent }) {
  return (
    <section className="bg-background-100 border-y border-background-200/60">
      <div className="container-x py-20 md:py-28">
        <div className="max-w-2xl mb-12">
          <span className="text-[11px] uppercase tracking-[0.35em] text-primary-500 font-semibold">
            Investment
          </span>
          <h2 className="mt-4 font-heading uppercase text-foreground-950 text-4xl md:text-5xl leading-[1] tracking-tight">
            Simple, honest pricing
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {service.pricing.map((p) => (
            <div
              key={p.name}
              className={[
                "relative rounded-lg border p-7 flex flex-col",
                p.featured
                  ? "bg-background-50 border-primary-500"
                  : "bg-background-50 border-background-200/70",
              ].join(" ")}
            >
              {p.featured && (
                <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-1 rounded-full text-[10px] uppercase tracking-[0.2em] bg-primary-500 text-background-50 dark:text-foreground-950 font-semibold whitespace-nowrap">
                  Most Popular
                </span>
              )}
              <h3 className="font-heading uppercase text-foreground-950 text-lg tracking-widest">
                {p.name}
              </h3>
              <p className="mt-4 font-heading text-foreground-950 text-3xl">{p.price}</p>
              <p className="mt-2 text-sm text-foreground-500">{p.note}</p>
              <ul className="mt-6 flex flex-col gap-3 flex-1">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm text-foreground-700">
                    <span className="w-5 h-5 flex items-center justify-center mt-0.5 text-primary-500 shrink-0">
                      <i className="ri-check-line" />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              <Link
                to="/book"
                className={[
                  "mt-8 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md font-semibold text-sm whitespace-nowrap cursor-pointer transition-colors",
                  p.featured
                    ? "bg-primary-500 hover:bg-primary-600 text-background-50 dark:text-foreground-950"
                    : "border border-background-300/60 text-foreground-900 hover:border-primary-500 hover:text-primary-500",
                ].join(" ")}
              >
                Book a Consultation
                <i className="ri-arrow-right-line" />
              </Link>
            </div>
          ))}
        </div>

        <p className="mt-8 text-xs text-foreground-500 max-w-xl">
          Prices are indicative starting points and may vary by plan length and customization. Final pricing is confirmed during your free consultation.
        </p>
      </div>
    </section>
  );
}