import { Link } from "react-router-dom";
import { brand, martinPhotos } from "@/mocks/site";

export default function CtaSection() {
  const phone = brand.whatsapp.replace(/\D/g, "");
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={martinPhotos.sandbags}
          alt="Martin Sei carrying sandbags at HYROX competition"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background-50 via-background-50/70 to-background-50/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-background-50/70 via-background-50/20 to-background-50/70" />
      </div>

      <div className="relative container-x py-28 md:py-40 text-center">
        <span className="text-[11px] uppercase tracking-[0.35em] text-primary-500 font-semibold">
          Ready When You Are
        </span>
        <h2 className="mt-5 font-heading uppercase text-foreground-950 text-5xl md:text-6xl lg:text-7xl leading-[1] tracking-tight text-balance max-w-4xl mx-auto">
          Your strongest self starts with one honest conversation.
        </h2>
        <p className="mt-6 max-w-2xl mx-auto text-foreground-700 leading-relaxed">
          Book a free 20-minute consultation with Martin. Talk through your goals, get an honest plan, and walk away with clarity — no pressure, no sales pitch.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            to="/book"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-md bg-primary-500 hover:bg-primary-600 text-background-50 dark:text-foreground-950 font-semibold whitespace-nowrap cursor-pointer transition-colors"
          >
            Book Free Consultation
            <i className="ri-arrow-right-line" />
          </Link>
          <a
            href={`https://wa.me/${phone}?text=${encodeURIComponent("Hi Martin, I'd like to book a free consultation.")}`}
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
  );
}