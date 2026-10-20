import { useState } from "react";
import { Link } from "react-router-dom";
import type { ServiceContent } from "@/mocks/services";

export default function ServiceFaq({ service }: { service: ServiceContent }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="bg-background-50">
      <div className="container-x py-20 md:py-28 grid gap-12 lg:grid-cols-[1fr_1.5fr]">
        <div>
          <span className="text-[11px] uppercase tracking-[0.35em] text-primary-500 font-semibold">
            FAQ
          </span>
          <h2 className="mt-4 font-heading uppercase text-foreground-950 text-4xl md:text-5xl leading-[1] tracking-tight">
            Common questions
          </h2>
          <p className="mt-5 text-foreground-600 leading-relaxed max-w-sm">
            Still have a question? Reach out on WhatsApp or book a free consultation and Martin will answer it directly.
          </p>
          <Link
            to="/book"
            className="mt-7 inline-flex items-center gap-2 text-sm uppercase tracking-[0.25em] text-primary-500 hover:text-primary-400 cursor-pointer whitespace-nowrap"
          >
            Book a Consultation
            <i className="ri-arrow-right-line" />
          </Link>
        </div>

        <div className="flex flex-col gap-4">
          {service.faqs.map((f, i) => (
            <div
              key={f.q}
              className="rounded-lg bg-background-100 border border-background-200/70 overflow-hidden"
            >
              <button
                type="button"
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left cursor-pointer"
              >
                <span className="font-medium text-foreground-900 text-base">{f.q}</span>
                <span
                  className={[
                    "w-8 h-8 flex items-center justify-center rounded-full border border-background-300/60 text-foreground-800 transition-transform shrink-0",
                    open === i ? "rotate-45 border-primary-500 text-primary-500" : "",
                  ].join(" ")}
                >
                  <i className="ri-add-line" />
                </span>
              </button>
              <div
                className={[
                  "grid transition-all duration-300",
                  open === i ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                ].join(" ")}
              >
                <div className="overflow-hidden">
                  <p className="px-6 pb-6 text-sm text-foreground-600 leading-relaxed">{f.a}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}