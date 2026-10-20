import { Link } from "react-router-dom";
import { martinPhotos } from "@/mocks/site";
import Reveal from "@/components/feature/Reveal";

export default function FinalCta() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={martinPhotos.battleRopes}
          alt="Martin Sei training with battle ropes"
          className="w-full h-full object-cover object-top anim-kenburns"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background-50 via-background-50/70 to-background-50/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-background-50 via-transparent to-background-50" />
      </div>

      <div className="relative container-x w-full py-32 md:py-44">
        <Reveal>
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.4em] text-primary-500 font-semibold bg-background-50/70 backdrop-blur px-4 py-2 rounded-full border border-background-200/60">
              <span className="w-1.5 h-1.5 rounded-full bg-primary-500 animate-pulse" />
              The Next Chapter
            </span>

            <h2 className="mt-10 font-heading uppercase text-foreground-950 text-5xl md:text-7xl leading-[0.9] tracking-tight text-shadow-lg">
              Your transformation
              <br />
              <span className="text-primary-500">could be next.</span>
            </h2>

            <p className="mt-8 text-foreground-700 text-xl leading-relaxed">
              Ready to start your own journey?
            </p>

            <Link
              to="/book"
              className="mt-12 inline-flex items-center justify-center gap-2 px-10 py-4 rounded-md bg-primary-500 hover:bg-primary-600 text-background-50 dark:text-foreground-950 text-sm font-semibold tracking-wide whitespace-nowrap transition-colors cursor-pointer"
            >
              BOOK A CONSULTATION
              <i className="ri-arrow-right-line" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}