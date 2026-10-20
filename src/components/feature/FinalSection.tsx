import { Link } from "react-router-dom";
import { brand } from "@/mocks/site";
import Reveal from "@/components/feature/Reveal";

const quickLinks = [
  {
    label: "1-on-1 Coaching",
    desc: "Bespoke personal coaching built entirely around your goals.",
    icon: "ri-user-star-line",
    to: "/services/personal-training",
  },
  {
    label: "HYROX Coaching",
    desc: "Race-ready strength, engine and pacing for your next HYROX.",
    icon: "ri-flag-line",
    to: "/services/hyrox",
  },
  {
    label: "Group Classes",
    desc: "Train alongside the club, week in and week out.",
    icon: "ri-group-line",
    to: "/classes",
  },
  {
    label: "Memberships",
    desc: "Coaching plans designed to fit real life and busy weeks.",
    icon: "ri-vip-crown-line",
    to: "/memberships",
  },
  {
    label: "Transformations",
    desc: "Honest results from real clients who did the work.",
    icon: "ri-trophy-line",
    to: "/transformations",
  },
  {
    label: "The Journal",
    desc: "Training insight and mindset, straight from the floor.",
    icon: "ri-article-line",
    to: "/blog",
  },
];

export default function FinalSection() {
  const phone = brand.whatsapp.replace(/\D/g, "");
  const waHref = `https://wa.me/${phone}?text=${encodeURIComponent(
    "Hi Martin, I'd like to join the HYROX Performance Training Club."
  )}`;

  return (
    <section className="relative overflow-hidden bg-background-50 border-t border-background-200/60">
      <div className="absolute inset-0 film-grain opacity-40 pointer-events-none" />
      <div className="absolute -top-32 left-1/4 w-[28rem] h-[28rem] rounded-full bg-primary-500/15 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-44 right-[15%] w-[26rem] h-[26rem] rounded-full bg-accent-500/15 blur-3xl pointer-events-none" />

      <span className="pointer-events-none absolute inset-x-0 top-4 hidden lg:block text-center font-heading uppercase text-[9rem] xl:text-[12rem] leading-none tracking-tight text-foreground-950/5 whitespace-nowrap select-none">
        HYROX
      </span>

      <div className="relative container-x py-20 md:py-28">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-16 lg:items-center">
          <Reveal>
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-accent-500" />
              <span className="text-[11px] uppercase tracking-[0.35em] text-accent-400 font-semibold">
                HYROX Performance Training Club
              </span>
            </div>

            <h2 className="mt-6 font-heading uppercase text-foreground-950 text-4xl md:text-5xl xl:text-6xl leading-[1.03] tracking-tight text-balance">
              Train hard. Stay consistent. Get to the top.
            </h2>

            <p className="mt-6 max-w-xl text-foreground-600 leading-relaxed">
              This is more than training — it&apos;s a community, a mindset, and a
              journey. Whatever your starting line, you&apos;ll be coached, pushed
              and supported all the way to your strongest self.
            </p>

            <div className="mt-9 flex flex-col sm:flex-row gap-3">
              <Link
                to="/book"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-md bg-primary-500 hover:bg-primary-600 text-background-50 dark:text-foreground-950 font-semibold whitespace-nowrap cursor-pointer transition-colors"
              >
                Book a Free Consultation
                <i className="ri-arrow-right-line" />
              </Link>
              <a
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-md border border-background-300/60 bg-background-100/60 hover:border-primary-500/50 hover:text-primary-400 text-foreground-950 font-semibold whitespace-nowrap cursor-pointer transition-colors"
              >
                <i className="ri-whatsapp-line" />
                Chat on WhatsApp
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-[11px] uppercase tracking-[0.2em] text-foreground-500">
              <span className="inline-flex items-center gap-2">
                <i className="ri-trophy-line text-accent-400 text-sm" />
                1x World Champion
              </span>
              <span className="inline-flex items-center gap-2">
                <i className="ri-map-pin-2-line text-primary-400 text-sm" />
                Dubai &amp; Online
              </span>
              <span className="inline-flex items-center gap-2">
                <i className="ri-group-line text-primary-400 text-sm" />
                All Levels Welcome
              </span>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="relative mx-auto w-full max-w-[26rem]">
              <div className="absolute -inset-4 rounded-2xl bg-primary-500/10 blur-2xl pointer-events-none" />
              <div className="relative w-full rounded-lg overflow-hidden border border-background-200/60 aspect-[2/3]">
                <img
                  src="https://storage.helloreaddy.io/project_files/8bbff0a6-c1c7-4973-a59c-258b9bcc5dce/4c9eb562-33eb-477c-a8c6-5068eb681973_compressed_WhatsApp-Image-2026-10-12-at-20.00.58.webp"
                  alt="HYROX Performance Training Club poster led by Coach Martin in Dubai Silicon Oasis"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <p className="mt-4 text-center text-[11px] uppercase tracking-[0.25em] text-foreground-500">
                The HYROX Training Club · Dubai Silicon Oasis
              </p>
            </div>
          </Reveal>
        </div>

        <div className="mt-16 md:mt-20 border-t border-background-200/60 pt-10">
          <div className="flex flex-wrap items-end justify-between gap-4 mb-7">
            <h3 className="font-heading uppercase text-foreground-950 text-lg tracking-widest">
              Start here
            </h3>
            <p className="text-sm text-foreground-500">
              Jump straight to what matters most to you.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {quickLinks.map((l, i) => (
              <Reveal key={l.to} delay={i * 60}>
                <Link
                  to={l.to}
                  className="group flex items-start gap-4 h-full rounded-lg border border-background-200/60 bg-background-100/50 p-5 hover:border-primary-500/40 hover:bg-background-100 transition-colors cursor-pointer"
                >
                  <span className="w-11 h-11 shrink-0 rounded-md bg-primary-500/12 text-primary-400 flex items-center justify-center text-xl">
                    <i className={l.icon} />
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <span className="font-semibold text-foreground-950 text-sm">
                        {l.label}
                      </span>
                      <i className="ri-arrow-right-up-line text-foreground-500 group-hover:text-primary-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    </div>
                    <p className="mt-1.5 text-xs text-foreground-600 leading-relaxed">
                      {l.desc}
                    </p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}