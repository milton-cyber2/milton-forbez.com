import { Link } from "react-router-dom";
import SiteLayout from "@/components/feature/SiteLayout";
import BookingForm from "./components/BookingForm";
import { brand, martinPhotos } from "@/mocks/site";
import Reveal from "@/components/feature/Reveal";

const steps = [
  {
    n: "01",
    icon: "ri-message-3-line",
    title: "Share Your Story",
    desc: "A short, private form — your goals, your experience, your schedule. It takes about a minute.",
  },
  {
    n: "02",
    icon: "ri-phone-line",
    title: "A Personal Conversation",
    desc: "Within 24 hours, Martin reaches out directly. A genuine conversation about where you are and where you want to go.",
  },
  {
    n: "03",
    icon: "ri-map-pin-2-line",
    title: "Your First Session",
    desc: "An honest, tailored plan — and if we're the right fit, we build your stronger self from your very first session.",
  },
];

export default function Book() {
  const phone = brand.whatsapp.replace(/\D/g, "");
  return (
    <SiteLayout>
      {/* Cinematic hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={martinPhotos.hyroxWall}
            alt="Martin Sei preparing for training in Dubai"
            className="w-full h-full object-cover object-top anim-kenburns"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background-50 via-background-50/80 to-background-50/30" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-transparent to-transparent" />
        </div>
        <div className="relative container-x pt-36 pb-16 md:pt-52 md:pb-24 text-center">
          <RevealInner>
            <span className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.4em] text-primary-500 font-semibold bg-background-50/70 backdrop-blur px-4 py-2 rounded-full border border-background-200/60">
              <span className="w-1.5 h-1.5 rounded-full bg-primary-500 animate-pulse" />
              Private Coaching · Dubai
            </span>
          </RevealInner>
          <RevealInner delay={120}>
            <h1 className="mt-7 font-heading uppercase text-foreground-950 text-5xl md:text-8xl leading-[0.9] tracking-tight text-balance">
              Let's build your <span className="text-primary-500">stronger self.</span>
            </h1>
          </RevealInner>
          <RevealInner delay={240}>
            <p className="mt-6 max-w-xl mx-auto text-foreground-700 leading-relaxed">
              One conversation. One honest plan. Zero pressure. Start your journey with a private
              consultation — 300 AED per session, tailored entirely to you.
            </p>
          </RevealInner>
        </div>
      </section>

      {/* Form + side */}
      <section className="bg-background-100 border-t border-background-200/60">
        <div className="container-x py-16 md:py-24 grid gap-12 lg:grid-cols-2">
          {/* Form */}
          <Reveal>
            <div className="rounded-lg bg-background-50 border border-background-200/70 p-7 md:p-10">
              <div className="flex items-center gap-3 mb-2">
                <span className="h-px w-10 bg-primary-500" />
                <span className="text-[11px] uppercase tracking-[0.4em] text-primary-500 font-semibold">
                  Consultation Request
                </span>
              </div>
              <h2 className="font-heading uppercase text-foreground-950 text-2xl md:text-3xl leading-tight tracking-tight">
                Begin the conversation
              </h2>
              <p className="mt-2 text-sm text-foreground-600">
                Private, tailored, and confidential. Martin will reach out within 24 hours.
              </p>
              <div className="mt-8">
                <BookingForm />
              </div>
            </div>
          </Reveal>

          {/* Side column */}
          <div className="flex flex-col gap-8">
            {/* What happens next */}
            <Reveal delay={80}>
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="h-px w-10 bg-accent-500" />
                  <span className="text-[11px] uppercase tracking-[0.4em] text-accent-500 font-semibold">
                    What Happens Next?
                  </span>
                </div>
                <h2 className="font-heading uppercase text-foreground-950 text-3xl md:text-4xl leading-tight tracking-tight">
                  Three simple steps
                </h2>
                <div className="mt-8 flex flex-col gap-6">
                  {steps.map((s) => (
                    <div key={s.n} className="flex gap-5">
                      <div className="relative shrink-0">
                        <span className="w-12 h-12 flex items-center justify-center rounded-md bg-accent-500/10 border border-accent-500/30 text-accent-500">
                          <i className={`${s.icon} text-xl`} />
                        </span>
                      </div>
                      <div>
                        <div className="flex items-center gap-3">
                          <span className="font-heading text-sm text-accent-500 font-bold">
                            {s.n}
                          </span>
                          <h3 className="font-heading uppercase text-foreground-950 text-lg tracking-wide">
                            {s.title}
                          </h3>
                        </div>
                        <p className="mt-1 text-sm text-foreground-600 leading-relaxed">{s.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Trainer note */}
            <Reveal delay={160}>
              <div className="rounded-lg overflow-hidden bg-background-50 border border-background-200/70">
                <div className="relative aspect-[16/9]">
                  <img
                    src={martinPhotos.dumbbellCurl}
                    alt="Martin Sei training"
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background-50 via-transparent to-transparent" />
                </div>
                <div className="p-7 -mt-10 relative">
                  <p className="font-heading uppercase text-foreground-950 text-xl leading-tight tracking-tight">
                    "You can be a Hero if you keep the Goal."
                  </p>
                  <p className="mt-3 text-sm text-foreground-600 leading-relaxed">
                    I've coached more than 480 clients and delivered 12,000+ sessions in Dubai.
                    Every single one started the same way — with one honest conversation. Tell me
                    your goal, and I'll tell you the truth about reaching it.
                  </p>
                  <div className="mt-5 flex items-center gap-3">
                    <img
                      src={martinPhotos.portrait}
                      alt="Martin Sei"
                      className="w-11 h-11 rounded-full object-cover object-top border border-primary-500/40"
                    />
                    <div className="leading-tight">
                      <p className="font-medium text-foreground-950 text-sm">Martin Sei</p>
                      <p className="text-xs text-foreground-500">World Champion · Elite Coach</p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Pricing reassurance + WhatsApp */}
            <Reveal delay={240}>
              <div className="rounded-lg bg-primary-500 p-7 text-background-50 dark:text-foreground-950">
                <div className="flex items-center justify-between gap-4 flex-wrap">
                  <div>
                    <p className="text-[11px] uppercase tracking-[0.3em] opacity-80">Per Session</p>
                    <p className="font-heading text-4xl font-bold">300 AED</p>
                  </div>
                  <p className="text-sm max-w-[220px] leading-relaxed opacity-90">
                    Personal training tailored to your goals, fitness level and lifestyle.
                  </p>
                </div>
                <div className="mt-6 pt-6 border-t border-background-950/10 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
                  <div>
                    <p className="font-heading uppercase text-base tracking-wide mb-1">
                      Prefer to talk now?
                    </p>
                    <p className="text-sm opacity-80">Message Martin directly on WhatsApp.</p>
                  </div>
                  <a
                    href={`https://wa.me/${phone}?text=${encodeURIComponent("Hi Martin, I'd like to book a consultation.")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-background-50 text-foreground-950 font-semibold text-sm whitespace-nowrap cursor-pointer transition-colors hover:bg-background-100"
                  >
                    <i className="ri-whatsapp-line" />
                    Chat on WhatsApp
                  </a>
                </div>
              </div>
            </Reveal>

            <p className="text-xs text-foreground-500">
              Already have questions? Visit the{" "}
              <Link to="/contact" className="text-primary-500 hover:text-primary-400 cursor-pointer">
                contact page
              </Link>{" "}
              for more ways to reach Martin.
            </p>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

function RevealInner({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <div
      className="anim-fade-up"
      style={{ animationDelay: `${delay}ms`, opacity: 0 }}
      onAnimationEnd={(e) => {
        (e.currentTarget as HTMLDivElement).style.opacity = "1";
      }}
    >
      {children}
    </div>
  );
}