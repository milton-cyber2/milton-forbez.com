import { featuredTransformation } from "@/mocks/transformations";
import BeforeAfterSlider from "./BeforeAfterSlider";
import Reveal from "@/components/feature/Reveal";

/**
 * One huge cinematic featured transformation — editorial layout.
 */
export default function FeaturedStory() {
  const f = featuredTransformation;
  return (
    <section id="featured" className="relative bg-background-100 py-20 md:py-32 overflow-hidden">
      {/* subtle texture accent */}
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-primary-500/10 blur-3xl" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-accent-500/10 blur-3xl" />

      <div className="container-x relative">
        <Reveal>
          <div className="text-center mb-14">
            <span className="text-[11px] uppercase tracking-[0.35em] text-accent-500 font-semibold">
              Featured Transformation
            </span>
            <h2 className="mt-4 font-heading uppercase text-foreground-950 text-5xl md:text-7xl lg:text-8xl leading-[0.9] tracking-tight">
              From <span className="text-foreground-500 line-through decoration-primary-500/70">“I can't”</span>
              <br />
              <span className="text-primary-500 text-shadow-lg">to “I did.”</span>
            </h2>
          </div>
        </Reveal>

        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <Reveal className="order-2 lg:order-1">
            <div className="rounded-lg overflow-hidden border border-background-200/60">
              <BeforeAfterSlider
                before={f.before}
                after={f.after}
                name={f.name}
                className="aspect-[4/5] sm:aspect-square"
              />
            </div>
          </Reveal>

          <Reveal className="order-1 lg:order-2" delay={120}>
            <div>
              <div className="flex items-center gap-4 text-[11px] uppercase tracking-[0.25em] text-foreground-500 mb-6">
                <span>{f.meta}</span>
                <span className="w-1 h-1 rounded-full bg-primary-500" />
                <span>{f.duration}</span>
              </div>

              <h3 className="font-heading uppercase text-foreground-950 text-3xl md:text-4xl leading-none">
                {f.name}
              </h3>

              <div className="mt-6 flex flex-wrap gap-3">
                {f.loss && (
                  <span className="px-4 py-1.5 rounded-full text-sm bg-primary-500 text-background-50 dark:text-foreground-950 font-semibold">
                    {f.loss}
                  </span>
                )}
                {f.gain && (
                  <span className="px-4 py-1.5 rounded-full text-sm bg-accent-500 text-background-50 dark:text-foreground-950 font-semibold">
                    {f.gain}
                  </span>
                )}
              </div>

              <div className="mt-8 space-y-4 text-foreground-600 leading-relaxed">
                <p className="text-lg text-foreground-700">{f.journey}</p>
              </div>

              <blockquote className="mt-8 border-l-2 border-primary-500 pl-5">
                <p className="text-foreground-200 italic text-lg leading-relaxed">
                  “{f.testimonial}”
                </p>
              </blockquote>

              <p className="mt-8 text-sm text-foreground-500 leading-relaxed">
                <span className="text-primary-500 font-semibold">Key achievement — </span>
                {f.achievement}
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}