import { Link } from "react-router-dom";
import SiteLayout from "@/components/feature/SiteLayout";
import StoryHero from "./components/StoryHero";
import StoryNarrative from "./components/StoryNarrative";
import Roles from "./components/Roles";
import QuoteSection from "./components/QuoteSection";
import Values from "./components/Values";

export default function About() {
  return (
    <SiteLayout>
      <StoryHero />
      <StoryNarrative />
      <Roles />
      <QuoteSection />
      <Values />

      {/* CTA */}
      <section className="bg-background-100 border-y border-background-200/60">
        <div className="container-x py-20 md:py-28 text-center">
          <span className="text-[11px] uppercase tracking-[0.35em] text-primary-500 font-semibold">
            Your Turn
          </span>
          <h2 className="mt-5 font-heading uppercase text-foreground-950 text-4xl md:text-6xl leading-[0.95] tracking-tight text-balance max-w-3xl mx-auto">
            I built my life on a decision. Now it's yours.
          </h2>
          <p className="mt-5 max-w-xl mx-auto text-foreground-700 leading-relaxed">
            Whether you want to get stronger, race faster, or completely rebuild your body —
            the first step is the same. Reach out, and let's start.
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <Link
              to="/book"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-md bg-primary-500 hover:bg-primary-600 text-background-50 dark:text-foreground-950 font-semibold whitespace-nowrap cursor-pointer transition-colors"
            >
              Book a Free Consultation
              <i className="ri-arrow-right-line" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 py-3 rounded-md border border-background-300/70 text-foreground-950 hover:text-primary-500 hover:border-primary-500 font-semibold whitespace-nowrap cursor-pointer transition-colors"
            >
              Contact Martin
            </Link>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}