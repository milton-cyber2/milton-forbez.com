import { Link } from "react-router-dom";
import { brand } from "@/mocks/site";
import Reveal from "@/components/feature/Reveal";

export default function ConsultationBand() {
  const phone = brand.whatsapp.replace(/\D/g, "");
  return (
    <section className="relative overflow-hidden bg-foreground-950">
      <div className="absolute -top-24 right-1/4 w-72 h-72 rounded-full bg-accent-500/15 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-28 left-1/4 w-72 h-72 rounded-full bg-primary-500/15 blur-3xl pointer-events-none" />

      <div className="relative container-x py-12 md:py-16">
        <Reveal>
          <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-12">
            <div className="flex-1">
              <span className="text-[11px] uppercase tracking-[0.35em] text-accent-400 font-semibold">
                Let's Talk
              </span>
              <h2 className="mt-3 font-heading uppercase text-background-50 text-2xl md:text-3xl leading-tight tracking-tight">
                Book a free consultation
              </h2>
              <p className="mt-3 text-sm text-foreground-300 leading-relaxed max-w-xl">
                A quick 20-minute call to talk through your goals and get an honest starting plan — no pressure, no sales pitch.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 lg:shrink-0">
              <Link
                to="/book"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-md bg-primary-500 hover:bg-primary-600 text-background-50 dark:text-foreground-950 font-semibold whitespace-nowrap transition-colors cursor-pointer"
              >
                Book Free Consultation
                <i className="ri-arrow-right-line" />
              </Link>
              <a
                href={`https://wa.me/${phone}?text=${encodeURIComponent("Hi Martin, I'd like to book a free consultation.")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-md border border-background-50/25 text-background-50 hover:bg-background-50/10 font-semibold whitespace-nowrap transition-colors cursor-pointer"
              >
                <i className="ri-whatsapp-line" />
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}