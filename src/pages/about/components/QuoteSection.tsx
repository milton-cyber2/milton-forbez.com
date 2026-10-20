import { martinPhotos } from "@/mocks/site";

export default function QuoteSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={martinPhotos.running}
          alt="Martin Sei running — fitness coach Dubai"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      </div>

      <div className="relative container-x py-28 md:py-40 text-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-black/40 backdrop-blur-sm border border-white/15 text-white/80 text-[11px] uppercase tracking-[0.3em] px-4 py-2">
          <i className="ri-double-quotes-l text-accent-500" />
          My Guiding Words
        </span>
        <blockquote className="mt-8 max-w-4xl mx-auto">
          <p className="font-heading uppercase text-white text-4xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight text-balance text-shadow-lg">
            You can be a Hero if you keep the Goal.
          </p>
        </blockquote>
        <p className="mt-6 text-white/70 text-sm md:text-base">
          — Martin Sei
        </p>
      </div>
    </section>
  );
}