import { Link } from "react-router-dom";
import { brand, martinPhotos } from "@/mocks/site";

export default function ClassesHero() {
  const phone = brand.whatsapp.replace(/\D/g, "");
  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={martinPhotos.hyroxRun}
          alt="Martin Sei coaching a training class in Dubai"
          className="w-full h-full object-cover object-top anim-kenburns"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background-50 via-background-50/80 to-background-50/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-background-50/80 via-background-50/30 to-background-50/10" />
      </div>

      <div className="relative container-x pt-32 pb-20 md:pt-40 md:pb-28 w-full">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.35em] text-primary-500 font-semibold glass px-4 py-2 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-primary-500 animate-pulse" />
            Classes · Coached by Martin Sei
          </span>
          <h1 className="mt-6 font-heading uppercase text-foreground-950 text-5xl md:text-7xl leading-[0.95] tracking-tight text-balance">
            Classes engineered to make you <span className="text-primary-500">better.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-foreground-700 text-lg leading-relaxed">
            From functional strength and hybrid conditioning to HYROX-specific work — every class is
            programmed by Martin to build real performance, and open to every level.
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
              href={`https://wa.me/${phone}?text=${encodeURIComponent("Hi Martin, I'd like to join a class.")}`}
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