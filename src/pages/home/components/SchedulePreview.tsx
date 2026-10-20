import { Link } from "react-router-dom";
import { scheduleHighlights, martinPhotos } from "@/mocks/site";

export default function SchedulePreview() {
  return (
    <section className="relative bg-background-100 border-y border-background-200/60">
      <div className="container-x py-24 md:py-32 grid gap-14 lg:grid-cols-2 items-center">
        <div>
          <span className="text-[11px] uppercase tracking-[0.35em] text-primary-500 font-semibold">
            Online Group Classes
          </span>
          <h2 className="mt-4 font-heading uppercase text-foreground-950 text-4xl md:text-5xl lg:text-6xl leading-[1] tracking-tight text-balance">
            Train live with a global community.
          </h2>
          <p className="mt-6 max-w-xl text-foreground-700 leading-relaxed">
            HIIT, Strength, HYROX, Core, Mobility, Full Body, and Recovery — coached live over Zoom, Google Meet, or Microsoft Teams. Instantly added to your calendar.
          </p>

          <ul className="mt-8 grid grid-cols-2 gap-3 text-sm text-foreground-800">
            {["Beginner → Advanced", "All time zones", "Waitlist & reminders", "Session replays"].map(
              (item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="w-5 h-5 flex items-center justify-center rounded-full bg-primary-500/15 text-primary-500">
                    <i className="ri-check-line text-xs" />
                  </span>
                  {item}
                </li>
              ),
            )}
          </ul>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              to="/classes"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-primary-500 hover:bg-primary-600 text-background-50 dark:text-foreground-950 font-semibold whitespace-nowrap cursor-pointer transition-colors"
            >
              See Weekly Timetable
              <i className="ri-arrow-right-line" />
            </Link>
          </div>
        </div>

        {/* Schedule card */}
        <div className="relative">
          <div className="glass rounded-lg overflow-hidden">
            <div className="flex items-center justify-between px-6 py-4 border-b border-background-200/60">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 flex items-center justify-center rounded-md bg-primary-500 text-background-50 dark:text-foreground-950">
                  <i className="ri-calendar-2-line" />
                </div>
                <div>
                  <p className="font-heading text-foreground-950 uppercase tracking-widest text-sm">
                    This Week
                  </p>
                  <p className="text-[10px] uppercase tracking-[0.25em] text-foreground-500">
                    Live · Dubai Time (GST)
                  </p>
                </div>
              </div>
              <span className="text-[10px] uppercase tracking-[0.25em] text-primary-500 flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-primary-500 animate-pulse-soft" />
                Booking open
              </span>
            </div>
            <ul className="divide-y divide-background-200/60">
              {scheduleHighlights.map((c) => (
                <li
                  key={`${c.day}-${c.title}`}
                  className="flex items-center gap-4 px-6 py-4 hover:bg-background-200/40 transition-colors"
                >
                  <div className="w-14 text-center">
                    <div className="font-heading text-primary-500 text-xs tracking-widest">
                      {c.day}
                    </div>
                    <div className="text-lg font-semibold text-foreground-950 mt-0.5">
                      {c.time}
                    </div>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-foreground-950">{c.title}</p>
                    <p className="text-[11px] uppercase tracking-[0.25em] text-foreground-500 mt-1">
                      {c.level} · 45 min
                    </p>
                  </div>
                  <Link
                    to="/classes"
                    className="w-9 h-9 flex items-center justify-center rounded-full border border-background-300/70 text-foreground-800 hover:border-primary-500 hover:text-primary-500 transition-colors cursor-pointer"
                    aria-label={`Book ${c.title}`}
                  >
                    <i className="ri-arrow-right-line" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="hidden lg:block absolute -bottom-6 -left-6 w-40 h-40 rounded-lg overflow-hidden border-4 border-background-100">
            <img
              src={martinPhotos.battleRopes}
              alt="Martin Sei with battle ropes"
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>
      </div>
    </section>
  );
}