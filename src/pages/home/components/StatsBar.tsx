import { stats } from "@/mocks/site";

export default function StatsBar() {
  return (
    <section className="bg-background-100 border-y border-background-200/60">
      <div className="container-x py-14 md:py-16 grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((s) => (
          <div key={s.label} className="text-center md:text-left">
            <div className="font-heading text-4xl md:text-5xl text-foreground-950 tracking-tight">
              {s.value}
            </div>
            <div className="mt-2 text-[11px] uppercase tracking-[0.3em] text-foreground-500">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}