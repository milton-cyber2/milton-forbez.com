import { clientVoices } from "@/mocks/transformations";
import Reveal from "@/components/feature/Reveal";

export default function Testimonials() {
  return (
    <section className="bg-background-100 py-20 md:py-32">
      <div className="container-x">
        <Reveal>
          <div className="text-center mb-16">
            <span className="text-[11px] uppercase tracking-[0.35em] text-accent-500 font-semibold">
              Client Voices
            </span>
            <h2 className="mt-4 font-heading uppercase text-foreground-950 text-4xl md:text-6xl leading-[0.95] tracking-tight">
              In their own words.
            </h2>
          </div>
        </Reveal>

        <div className="grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {clientVoices.map((voice, i) => (
            <Reveal key={voice.name} delay={i * 90}>
              <figure className="group h-full flex flex-col rounded-lg bg-background-50 border border-background-200/60 p-8 hover:border-accent-500/60 transition-colors">
                <div className="flex items-center gap-1 text-primary-500 mb-6">
                  <i className="ri-star-fill text-sm" />
                  <i className="ri-star-fill text-sm" />
                  <i className="ri-star-fill text-sm" />
                  <i className="ri-star-fill text-sm" />
                  <i className="ri-star-fill text-sm" />
                </div>
                <blockquote className="flex-1 text-foreground-200 text-lg leading-relaxed">
                  “{voice.quote}”
                </blockquote>
                <figcaption className="mt-8 flex items-center gap-4">
                  <img
                    src={voice.image}
                    alt={`${voice.name} — client of Martin Sei`}
                    className="w-12 h-12 rounded-full object-cover object-top border border-background-200"
                  />
                  <div>
                    <p className="font-semibold text-foreground-950">{voice.name}</p>
                    <p className="text-[11px] uppercase tracking-[0.2em] text-foreground-500">
                      {voice.role}
                    </p>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}