import { transformationStories, type TransformationStory } from "@/mocks/transformations";
import BeforeAfterSlider from "./BeforeAfterSlider";
import Reveal from "@/components/feature/Reveal";

function StoryCard({ story }: { story: TransformationStory }) {
  return (
    <article className="group relative rounded-lg overflow-hidden bg-background-100 border border-background-200/70 hover:border-primary-500 transition-colors">
      <BeforeAfterSlider before={story.before} after={story.after} name={story.name} />

      {/* Hover-reveal overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background-950/90 via-background-950/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Bottom info — reveals on hover */}
      <div className="absolute inset-x-0 bottom-0 p-6 translate-y-3 group-hover:translate-y-0 opacity-90 group-hover:opacity-100 transition-all duration-500">
        <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.25em] text-foreground-400 mb-3">
          <span>{story.duration}</span>
          <span className="w-1 h-1 rounded-full bg-primary-500" />
          <span>{story.goal}</span>
        </div>
        <div className="flex items-center justify-between gap-4">
          <h3 className="font-heading uppercase text-foreground-50 text-2xl leading-none">
            {story.name}
          </h3>
          <span className="flex items-center justify-center w-10 h-10 rounded-full bg-primary-500 text-background-50 dark:text-foreground-950 -translate-x-2 group-hover:translate-x-0 transition-transform duration-500">
            <i className="ri-arrow-right-up-line" />
          </span>
        </div>
        <p className="mt-3 text-sm text-foreground-200 leading-relaxed">
          {story.achievement}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {story.loss && (
            <span className="px-3 py-1 rounded-full text-xs bg-primary-500/20 text-primary-400 border border-primary-500/30">
              {story.loss}
            </span>
          )}
          {story.gain && (
            <span className="px-3 py-1 rounded-full text-xs bg-accent-500/20 text-accent-400 border border-accent-500/30">
              {story.gain}
            </span>
          )}
        </div>
      </div>

      {/* Static header outside hover for clarity */}
      <div className="relative z-10 p-6 bg-background-100">
        <p className="text-sm text-foreground-200 leading-relaxed italic">
          “{story.testimonial}”
        </p>
        <p className="mt-3 text-[11px] uppercase tracking-[0.25em] text-foreground-500">
          {story.meta}
        </p>
      </div>
    </article>
  );
}

export default function StoryGrid() {
  return (
    <section className="bg-background-50 py-20 md:py-28">
      <div className="container-x">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <div>
              <span className="text-[11px] uppercase tracking-[0.35em] text-primary-500 font-semibold">
                Transformation Stories
              </span>
              <h2 className="mt-4 font-heading uppercase text-foreground-950 text-4xl md:text-5xl lg:text-6xl leading-[0.95] tracking-tight text-balance">
                Drag the line. See the work.
              </h2>
            </div>
            <p className="max-w-sm text-foreground-600 leading-relaxed">
              Every client below committed to the process. Slide the divider to see exactly
              what that decision produced.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-6 md:gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {transformationStories.map((story, i) => (
            <Reveal key={story.id} delay={i * 90}>
              <StoryCard story={story} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}