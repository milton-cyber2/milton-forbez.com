import { Link } from "react-router-dom";
import { martinPhotos } from "@/mocks/site";
import Reveal from "@/components/feature/Reveal";

export default function CoachNote() {
  return (
    <section className="bg-background-100 border-t border-background-200/60">
      <div className="container-x py-16 md:py-24 grid gap-10 lg:grid-cols-12 items-center">
        {/* Photo */}
        <Reveal className="lg:col-span-5">
          <div className="relative rounded-lg overflow-hidden border border-background-200/70">
            <img
              src={martinPhotos.hyroxWall}
              alt="Martin Sei — personal trainer Dubai and HYROX coach"
              className="w-full aspect-[4/5] object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background-100/80 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5 right-5 glass rounded-lg p-4">
              <p className="text-[11px] uppercase tracking-[0.3em] text-primary-500 font-semibold">
                Martin Sei
              </p>
              <p className="mt-1 text-sm text-foreground-700">
                Dubai Police Obstacle World Champion · Elite Coach
              </p>
            </div>
          </div>
        </Reveal>

        {/* Note */}
        <div className="lg:col-span-7 lg:pl-6">
          <Reveal delay={100}>
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-accent-500" />
              <span className="text-[11px] uppercase tracking-[0.4em] text-accent-500 font-semibold">
                A Note From Your Coach
              </span>
            </div>
            <h2 className="font-heading uppercase text-foreground-950 text-3xl md:text-5xl leading-[1.02] tracking-tight text-balance">
              I write for the athlete who's still deciding.
            </h2>
            <p className="mt-6 text-foreground-700 leading-relaxed text-lg">
              Every article here is born from a real question a client has asked me on the training
              floor in Dubai — about strength, nutrition, mindset, or recovery. I don't write to
              impress you. I write to save you months of trial and error.
            </p>
            <p className="mt-4 text-foreground-700 leading-relaxed">
              My favourite quote is simple: <em className="text-primary-500 font-medium">"You can be a Hero
              if you keep the Goal."</em> If one article here moves you a step closer to that goal,
              it has done its job. And if you'd rather not do it alone — the door's always open.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                to="/book"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-md bg-primary-500 hover:bg-primary-600 text-background-50 dark:text-foreground-950 text-sm font-semibold whitespace-nowrap transition-colors cursor-pointer"
              >
                Book a Consultation <i className="ri-arrow-right-line" />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-md border border-background-300/60 text-foreground-800 hover:border-primary-500 hover:text-primary-500 text-sm font-semibold whitespace-nowrap transition-colors cursor-pointer"
              >
                Meet Martin
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}