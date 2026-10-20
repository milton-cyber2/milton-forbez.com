import { Link } from "react-router-dom";
import { brand } from "@/mocks/site";
import type { ServiceContent } from "@/mocks/services";

export default function ServiceHero({ service }: { service: ServiceContent }) {
  const phone = brand.whatsapp.replace(/\D/g, "");
  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={service.heroImage}
          alt={`${service.title} by Martin Sei in Dubai`}
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background-50 via-background-50/80 to-background-50/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-background-50/80 via-background-50/30 to-background-50/10" />
      </div>

      <div className="relative container-x pt-32 pb-20 md:pt-40 md:pb-28 w-full">
        <div className="max-w-3xl">
          <Link
            to="/services/personal-training"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-primary-500 hover:text-primary-400 cursor-pointer mb-6"
          >
            <i className="ri-arrow-left-line" />
            All Services
          </Link>
          <span className="block text-[11px] uppercase tracking-[0.35em] text-primary-500 font-semibold">
            {service.eyebrow}
          </span>
          <h1 className="mt-4 font-heading uppercase text-foreground-950 text-5xl md:text-7xl leading-[0.95] tracking-tight text-balance">
            {service.title}
          </h1>
          <p className="mt-6 max-w-2xl text-foreground-700 text-lg leading-relaxed">
            {service.intro}
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-3">
            <Link
              to="/book"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-md bg-primary-500 hover:bg-primary-600 text-background-50 dark:text-foreground-950 font-semibold whitespace-nowrap cursor-pointer transition-colors"
            >
              Book Free Consultation
              <i className="ri-arrow-right-line" />
            </Link>
            <a
              href={`https://wa.me/${phone}?text=${encodeURIComponent(`Hi Martin, I'd like to know more about ${service.title}.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-md glass text-foreground-950 hover:text-primary-500 font-semibold whitespace-nowrap cursor-pointer transition-colors"
            >
              <i className="ri-whatsapp-line" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}