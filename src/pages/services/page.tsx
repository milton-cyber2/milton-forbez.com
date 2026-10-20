import { Link, Navigate, useParams } from "react-router-dom";
import SiteLayout from "@/components/feature/SiteLayout";
import ServiceHero from "./components/ServiceHero";
import ServiceSections from "./components/ServiceSections";
import ServicePricing from "./components/ServicePricing";
import ServiceFaq from "./components/ServiceFaq";
import { getServiceBySlug, servicesContent } from "@/mocks/services";
import { brand } from "@/mocks/site";

export default function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>();
  const service = slug ? getServiceBySlug(slug) : undefined;

  if (!service) {
    return <Navigate to="/services/personal-training" replace />;
  }

  const others = servicesContent.filter((s) => s.slug !== service.slug);
  const phone = brand.whatsapp.replace(/\D/g, "");

  return (
    <SiteLayout>
      <ServiceHero service={service} />
      <ServiceSections service={service} />
      <ServicePricing service={service} />

      {/* Cross-link to other services */}
      <section className="bg-background-100">
        <div className="container-x py-16 md:py-20">
          <div className="flex items-center justify-between mb-8">
            <h3 className="font-heading uppercase text-foreground-950 text-2xl tracking-wide">
              Explore more services
            </h3>
            <Link
              to="/book"
              className="text-sm uppercase tracking-[0.2em] text-primary-500 hover:text-primary-400 cursor-pointer whitespace-nowrap"
            >
              Book a consultation
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {others.map((s) => (
              <Link
                key={s.slug}
                to={`/services/${s.slug}`}
                className="group rounded-lg bg-background-50 border border-background-200/70 p-5 hover:border-primary-500 transition-colors cursor-pointer"
              >
                <h4 className="font-heading uppercase text-foreground-950 text-sm tracking-wide group-hover:text-primary-500 transition-colors">
                  {s.title}
                </h4>
                <p className="mt-2 text-xs text-foreground-500 line-clamp-2">{s.intro}</p>
                <span className="mt-3 inline-flex items-center gap-1 text-xs text-primary-500">
                  Explore <i className="ri-arrow-right-line" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ServiceFaq service={service} />

      {/* CTA */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={service.heroImage}
            alt=""
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background-50 via-background-50/80 to-background-50/50" />
        </div>
        <div className="relative container-x py-24 md:py-32 text-center">
          <h2 className="font-heading uppercase text-foreground-950 text-4xl md:text-6xl leading-[1] tracking-tight text-balance max-w-3xl mx-auto">
            {service.cta}
          </h2>
          <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/book"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-md bg-primary-500 hover:bg-primary-600 text-background-50 dark:text-foreground-950 font-semibold whitespace-nowrap cursor-pointer transition-colors"
            >
              Book Free Consultation
              <i className="ri-arrow-right-line" />
            </Link>
            <a
              href={`https://wa.me/${phone}?text=${encodeURIComponent(`Hi Martin, I'd like to book ${service.title}.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-md glass text-foreground-950 hover:text-primary-500 font-semibold whitespace-nowrap cursor-pointer transition-colors"
            >
              <i className="ri-whatsapp-line" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}