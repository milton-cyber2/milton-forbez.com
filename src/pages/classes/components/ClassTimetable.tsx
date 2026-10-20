import { Link } from "react-router-dom";
import Reveal from "@/components/feature/Reveal";
import { classTimetable } from "@/mocks/classes";

export default function ClassTimetable() {
  return (
    <section className="bg-background-100 border-y border-background-200/60">
      <div className="container-x py-20 md:py-28">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <span className="text-[11px] uppercase tracking-[0.35em] text-primary-500 font-semibold">
                Weekly Timetable
              </span>
              <h2 className="mt-4 font-heading uppercase text-foreground-950 text-4xl md:text-5xl leading-[1] tracking-tight text-balance">
                Train live with a community.
              </h2>
            </div>
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-foreground-500">
              <span className="inline-flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-accent-500" /> New class
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary-500 animate-pulse" /> Booking open
              </span>
            </div>
          </div>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {classTimetable.map((day, i) => (
            <Reveal key={day.day} delay={i * 70}>
              <div className="rounded-lg bg-background-50 border border-background-200/70 p-6 h-full">
                <div className="flex items-center gap-3 mb-5">
                  <span className="w-12 h-12 flex items-center justify-center rounded-md bg-primary-100 text-primary-700 font-heading font-bold tracking-widest">
                    {day.short}
                  </span>
                  <div>
                    <p className="font-heading uppercase text-foreground-950 text-lg tracking-wide">
                      {day.day}
                    </p>
                    <p className="text-[11px] uppercase tracking-[0.25em] text-foreground-500">
                      Dubai Time (GST)
                    </p>
                  </div>
                </div>

                <ul className="flex flex-col gap-3">
                  {day.sessions.map((s) => (
                    <li
                      key={`${day.day}-${s.time}-${s.name}`}
                      className="flex items-center gap-4 rounded-md bg-background-100 border border-background-200/60 px-4 py-3"
                    >
                      <span className="font-heading text-primary-500 text-base w-14 shrink-0">
                        {s.time}
                      </span>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-foreground-950 flex items-center gap-2">
                          <span className="truncate">{s.name}</span>
                          {s.isNew && (
                            <span className="px-2 py-0.5 rounded-full text-[9px] uppercase tracking-[0.15em] bg-accent-500 text-background-50 dark:text-foreground-950 shrink-0">
                              New
                            </span>
                          )}
                        </p>
                        <p className="text-[11px] uppercase tracking-[0.2em] text-foreground-500 mt-0.5">
                          {s.level}
                        </p>
                      </div>
                      <Link
                        to="/book"
                        className="w-8 h-8 flex items-center justify-center rounded-full border border-background-300/70 text-foreground-800 hover:border-primary-500 hover:text-primary-500 transition-colors cursor-pointer shrink-0"
                        aria-label={`Book ${s.name}`}
                      >
                        <i className="ri-arrow-right-line" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="mt-8 text-xs text-foreground-500 max-w-2xl">
            Classes are coached live in person and over Zoom, Google Meet or Microsoft Teams. Times
            are indicative and confirmed when you enquire — sessions are scaled to your level.
          </p>
        </Reveal>
      </div>
    </section>
  );
}