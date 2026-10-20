import { Link } from "react-router-dom";
import SiteLayout from "@/components/feature/SiteLayout";
import ConsultationBand from "@/components/feature/ConsultationBand";
import { martinPhotos } from "@/mocks/site";
import Reveal from "@/components/feature/Reveal";

export default function Memberships() {
  return (
    <SiteLayout>
      {/* Cinematic full-height membership hero */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={martinPhotos.dumbbellCurl}
            alt="Martin Sei — personal trainer Dubai"
            className="w-full h-full object-cover object-top anim-kenburns"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background-50 via-background-50/70 to-background-50/40" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-background-50" />
        </div>

        <div className="relative container-x w-full py-32">
          <div className="max-w-xl mx-auto text-center">
            <Reveal>
              <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.4em] text-primary-500 font-semibold bg-background-50/70 backdrop-blur px-4 py-2 rounded-full border border-background-200/60">
                <span className="w-1.5 h-1.5 rounded-full bg-primary-500 animate-pulse" />
                One Session · One Focus
              </span>
            </Reveal>

            <Reveal delay={120}>
              <h1 className="mt-10 font-heading uppercase text-foreground-950 text-6xl md:text-8xl leading-[0.9] tracking-tight">
                <span className="text-primary-500">300</span> AED
              </h1>
              <p className="mt-3 text-[12px] uppercase tracking-[0.5em] text-foreground-500">
                Per Session
              </p>
            </Reveal>

            <Reveal delay={240}>
              <p className="mt-10 text-foreground-700 leading-relaxed text-lg max-w-md mx-auto">
                Personal training tailored to your goals, fitness level and lifestyle.
              </p>
            </Reveal>

            <Reveal delay={360}>
              <Link
                to="/book"
                className="mt-12 inline-flex items-center justify-center gap-2 px-10 py-4 rounded-md bg-primary-500 hover:bg-primary-600 text-background-50 dark:text-foreground-950 text-sm font-semibold tracking-wide whitespace-nowrap transition-colors cursor-pointer"
              >
                BOOK A CONSULTATION
                <i className="ri-arrow-right-line group-hover:translate-x-1 transition-transform" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <ConsultationBand />
    </SiteLayout>
  );
}