import { Link } from "react-router-dom";

const values = [
  {
    icon: "ri-focus-3-line",
    title: "Discipline",
    body: "Results come from showing up when motivation fades. I hold the standard, and I hold you to it — with respect, not pressure.",
  },
  {
    icon: "ri-bar-chart-2-line",
    title: "Evidence-Based",
    body: "No fad programs, no gimmicks. Every plan is built on proven training and nutrition science, tailored to your reality.",
  },
  {
    icon: "ri-shield-check-line",
    title: "Accountability",
    body: "You'll never train alone. Weekly check-ins, clear targets, and honest feedback keep you moving forward every single week.",
  },
  {
    icon: "ri-mental-health-line",
    title: "Mindset First",
    body: "The body follows the mind. I coach the habits, resilience, and belief that make physical transformation sustainable.",
  },
];

export default function Values() {
  return (
    <section className="bg-background-50">
      <div className="container-x py-20 md:py-28">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 items-center">
          <div>
            <span className="text-[11px] uppercase tracking-[0.35em] text-primary-500 font-semibold">
              The Standard
            </span>
            <h2 className="mt-5 font-heading uppercase text-foreground-950 text-4xl md:text-6xl leading-[0.95] tracking-tight text-balance">
              The principles behind every program.
            </h2>
            <p className="mt-6 max-w-md text-foreground-700 leading-relaxed">
              These aren't buzzwords — they're the non-negotiables I apply to every single
              client, from first session to first-class athlete.
            </p>
            <Link
              to="/book"
              className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-md bg-primary-500 hover:bg-primary-600 text-background-50 dark:text-foreground-950 font-semibold whitespace-nowrap cursor-pointer transition-colors"
            >
              Start With a Free Consultation
              <i className="ri-arrow-right-line" />
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {values.map((v) => (
              <div
                key={v.title}
                className="rounded-lg bg-background-100 border border-background-200/70 p-7 hover:border-primary-500 transition-colors"
              >
                <div className="w-11 h-11 flex items-center justify-center rounded-md bg-primary-500/10 text-primary-500 mb-5">
                  <i className={`${v.icon} text-xl`} />
                </div>
                <h3 className="font-heading uppercase text-foreground-950 text-lg tracking-wide">
                  {v.title}
                </h3>
                <p className="mt-3 text-sm text-foreground-600 leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}