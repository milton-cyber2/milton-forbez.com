import { martinPhotos } from "@/mocks/site";

const chapters = [
  {
    index: "01",
    eyebrow: "The Beginning",
    title: "A decision, not a circumstance.",
    body: [
      "Every serious journey starts with a decision. Mine began the day I arrived in the UAE — carrying ambition and a determination to build a future on my own terms. I came in search of purpose, and in that pursuit I found something that would reshape everything: fitness.",
      "It wasn't an escape. It was a foundation. A place to prove to myself that I could build something real, from nothing.",
    ],
  },
  {
    index: "02",
    eyebrow: "The Grind",
    title: "Discipline becomes identity.",
    body: [
      "What began as a personal passion quickly became a way of life — and soon, a profession. Through years of dedicated training, relentless consistency, and continuous education, I built myself from the ground up: not only as a coach, but as a high-level athlete and a fitness model.",
      "This was never luck. It was the quiet, unglamorous work of showing up every single day — long before anyone was watching.",
    ],
  },
  {
    index: "03",
    eyebrow: "The Purpose",
    title: "A mission larger than myself.",
    body: [
      "Becoming a coach gave my journey meaning. It turned my passion into a vehicle for helping others reach what they once thought was out of reach.",
      "As an athlete, I keep raising the bar — testing my limits and chasing new levels of performance. As a fitness model, I use my platform as living proof that the body we want is built on the mindset we keep. My work is my evidence.",
    ],
  },
  {
    index: "04",
    eyebrow: "The Mission",
    title: "My story is still being written.",
    body: [
      "The UAE gave me the environment to grow, but the person I've become is a choice I make every single day. And my story is far from finished — that's exactly the point.",
      "My mission is simple: to help you take ownership of your body, sharpen your mind, and transform your life through fitness. When you're ready to do the work, I'll be ready to coach you through it.",
    ],
  },
];

export default function StoryNarrative() {
  return (
    <section className="bg-background-50">
      <div className="container-x py-20 md:py-28">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          {/* Sticky heading */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <span className="text-[11px] uppercase tracking-[0.35em] text-primary-500 font-semibold">
              My Story
            </span>
            <h2 className="mt-5 font-heading uppercase text-foreground-950 text-4xl md:text-6xl leading-[0.95] tracking-tight text-balance">
              The journey behind the coach.
            </h2>
            <p className="mt-6 max-w-md text-foreground-700 leading-relaxed">
              Four chapters. One through-line: ambition, discipline, purpose, and the
              refusal to stay the same. This is how a passion became a career — and how a
              career became a way to change lives.
            </p>
            <div className="mt-8 relative hidden lg:block aspect-[4/3] overflow-hidden rounded-lg">
              <img
                src={martinPhotos.dumbbellCurl}
                alt="Martin Sei training in a Dubai gym"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>

          {/* Chapters */}
          <div className="flex flex-col gap-6">
            {chapters.map((c) => (
              <article
                key={c.index}
                className="group rounded-lg bg-background-100 border border-background-200/70 p-8 md:p-10 hover:border-primary-500 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <span className="font-heading text-primary-500 text-3xl leading-none">
                    {c.index}
                  </span>
                  <span className="h-px flex-1 bg-background-300/60" />
                  <span className="text-[11px] uppercase tracking-[0.3em] text-foreground-500">
                    {c.eyebrow}
                  </span>
                </div>
                <h3 className="mt-6 font-heading uppercase text-foreground-950 text-2xl md:text-3xl leading-tight tracking-tight">
                  {c.title}
                </h3>
                <div className="mt-4 flex flex-col gap-3 text-foreground-700 leading-relaxed">
                  {c.body.map((p) => (
                    <p key={p}>{p}</p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}