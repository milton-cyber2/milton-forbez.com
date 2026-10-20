import Reveal from "@/components/feature/Reveal";
import { modellingProfile, modellingGallery } from "@/mocks/modelling";

export default function ModellingSection() {
  const shots = modellingGallery;

  return (
    <section id="modelling" className="relative bg-foreground-950 overflow-hidden scroll-mt-24">
      <div className="absolute -top-40 -left-40 w-[32rem] h-[32rem] rounded-full bg-primary-500/10 blur-[120px] pointer-events-none anim-float" />
      <div className="absolute -bottom-40 -right-40 w-[30rem] h-[30rem] rounded-full bg-accent-500/10 blur-[120px] pointer-events-none anim-float" />

      <div className="relative container-x py-24 md:py-32">
        <div className="grid gap-12 lg:gap-16 lg:grid-cols-2 items-center">
          <Reveal>
            <span className="text-[11px] uppercase tracking-[0.35em] text-accent-400 font-semibold">
              Modelling
            </span>
            <h2 className="mt-4 font-heading uppercase text-background-50 text-4xl md:text-5xl lg:text-6xl leading-[0.95] tracking-tight text-balance">
              Also a model.
            </h2>
            <p className="mt-6 text-foreground-300 leading-relaxed max-w-xl">
              {modellingProfile.intro}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-3">
              <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-2">
                <i className="ri-instagram-line text-primary-500 text-lg" />
                <span className="font-heading uppercase tracking-widest text-background-50 text-xs">
                  {modellingProfile.handle}
                </span>
              </span>
              <span className="text-[10px] uppercase tracking-[0.25em] text-foreground-400">
                Editorial · Campaign · Commercial
              </span>
            </div>

            <div className="mt-9 flex flex-col sm:flex-row flex-wrap gap-3">
              <a
                href={modellingProfile.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-md bg-primary-500 hover:bg-primary-600 text-background-50 dark:text-foreground-950 font-semibold whitespace-nowrap cursor-pointer transition-colors"
              >
                <i className="ri-instagram-line text-lg" />
                View {modellingProfile.handle} on Instagram
              </a>
              <a
                href="#inquiry"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-md border border-background-300/40 text-background-50 hover:text-primary-400 hover:border-primary-500 font-semibold whitespace-nowrap cursor-pointer transition-colors"
              >
                Enquire About Modelling
                <i className="ri-arrow-right-line" />
              </a>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-primary-500/10 via-transparent to-accent-500/10 blur-2xl pointer-events-none" />
              <div className="relative grid grid-cols-2 gap-3 md:gap-4">
                {shots.map((shot, i) => (
                  <figure
                    key={shot.id}
                    className={`group relative aspect-[3/4] rounded-lg overflow-hidden bg-foreground-900 border border-background-200/20 ${
                      i === 1 ? "mt-6 md:mt-8" : ""
                    }`}
                  >
                    <img
                      src={shot.image}
                      alt={`${shot.title} — Martin Sei modelling ${shot.category} photo`}
                      title={`Martin Sei Modelling · ${shot.title}`}
                      className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
                    {shot.real && (
                      <span className="absolute top-3 right-3 inline-flex items-center gap-1 rounded-full bg-black/45 backdrop-blur-sm px-2.5 py-1">
                        <i className="ri-instagram-line text-primary-400 text-xs" />
                        <span className="text-[9px] uppercase tracking-[0.22em] text-white/90 font-semibold">
                          {modellingProfile.handle}
                        </span>
                      </span>
                    )}
                    <figcaption className="absolute bottom-3 left-3 right-3 flex items-end justify-between gap-2">
                      <span className="text-[9px] uppercase tracking-[0.25em] text-white/90 font-semibold">
                        {shot.category}
                      </span>
                      <i className="ri-arrow-right-up-line text-white/70 text-sm opacity-0 translate-y-1 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0" />
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-14 md:mt-16">
          <div className="rounded-xl bg-background-100/5 border border-background-200/15 p-6 md:p-8 flex flex-col sm:flex-row sm:items-center gap-5">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary-500/15 text-primary-400 shrink-0">
              <i className="ri-camera-3-line text-xl" />
            </div>
            <p className="text-foreground-300 text-sm leading-relaxed flex-1">
              Full editorial, campaign and commercial portfolio lives on Instagram. Brands and
              agencies can reach out directly through the handle or the collaboration form below.
            </p>
            <a
              href={modellingProfile.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md glass text-background-50 hover:text-primary-400 font-semibold whitespace-nowrap cursor-pointer transition-colors shrink-0"
            >
              <i className="ri-instagram-line text-lg" />
              Open Instagram
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}