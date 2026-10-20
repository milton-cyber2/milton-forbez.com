import { Link } from "react-router-dom";
import { brand, heroImage } from "@/mocks/site";

export default function Hero() {
  const phone = brand.whatsapp.replace(/\D/g, "");
  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Martin Sei running during HYROX competition in Dubai"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background-50/50 via-background-50/30 to-background-50" />
        <div className="absolute inset-0 bg-gradient-to-r from-background-50/70 via-background-50/30 to-transparent" />
      </div>

      <div className="relative container-x pt-40 pb-24 min-h-[100svh] flex flex-col justify-center">
        <div className="max-w-3xl w-full animate-fade-up">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-[11px] uppercase tracking-[0.3em] text-foreground-800 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-primary-500 animate-pulse-soft" />
            Now accepting new clients · Dubai Silicon Oasis
          </div>
          <h1 className="font-heading uppercase text-foreground-950 text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight text-balance">
            Build Strength.
            <br />
            Improve Performance.
            <br />
            <span className="text-primary-500">Become Unstoppable.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-base md:text-lg text-foreground-700 leading-relaxed">
            Personalized coaching, live online group classes, functional training, nutrition guidance, and HYROX preparation designed to help you achieve lasting results.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-3">
            <Link
              to="/book"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-md bg-primary-500 hover:bg-primary-600 text-background-50 dark:text-foreground-950 font-semibold tracking-wide whitespace-nowrap cursor-pointer transition-colors"
            >
              Book Your Free Consultation
              <i className="ri-arrow-right-line" />
            </Link>
            <Link
              to="/classes"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-md glass text-foreground-950 hover:text-primary-500 font-semibold tracking-wide whitespace-nowrap cursor-pointer transition-colors"
            >
              <i className="ri-calendar-line" />
              Join an Online Group Class
            </Link>
            <a
              href={`https://wa.me/${phone}?text=${encodeURIComponent("Hi Martin, I'd like to know more about your coaching.")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-md border border-background-300/70 text-foreground-950 hover:text-primary-500 hover:border-primary-500 font-semibold tracking-wide whitespace-nowrap cursor-pointer transition-colors"
            >
              <i className="ri-whatsapp-line" />
              WhatsApp Martin
            </a>
          </div>

          <div className="mt-14 flex flex-wrap items-center gap-6 text-xs uppercase tracking-[0.28em] text-foreground-600">
            <div className="flex items-center gap-2">
              <i className="ri-shield-star-line text-primary-500 text-base" /> Certified Coach
            </div>
            <div className="flex items-center gap-2">
              <i className="ri-flashlight-line text-primary-500 text-base" /> Evidence-Based
            </div>
            <div className="flex items-center gap-2">
              <i className="ri-medal-2-line text-primary-500 text-base" /> HYROX Athlete
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-foreground-600">
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-primary-500 to-transparent" />
      </div>
    </section>
  );
}