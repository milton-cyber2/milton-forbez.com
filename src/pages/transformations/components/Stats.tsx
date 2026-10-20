import { useEffect, useState } from "react";
import { resultStats } from "@/mocks/transformations";
import useInView from "@/hooks/useInView";

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const { ref, inView } = useInView<HTMLSpanElement>(0.5);
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1800;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(target * eased));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, target]);

  return (
    <span ref={ref} className="tabular-nums">
      {value.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section id="stats" className="bg-background-50 py-20 md:py-28">
      <div className="container-x">
        <div className="rounded-lg overflow-hidden border border-background-200/60 bg-background-100">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-background-200/60">
            {resultStats.map((stat, i) => (
              <div
                key={stat.label}
                className="group relative px-8 py-12 text-center hover:bg-background-200/40 transition-colors"
              >
                <span className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-primary-500/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="font-heading text-5xl md:text-6xl text-primary-500">
                  <Counter target={stat.value} suffix={stat.suffix} />
                </div>
                <p className="mt-4 text-[12px] uppercase tracking-[0.35em] text-foreground-500 font-semibold">
                  {stat.label}
                </p>
                <p className="mt-1 text-xs text-foreground-700">{stat.note}</p>
              </div>
            ))}
          </div>
        </div>
        <p className="mt-6 text-xs text-foreground-600 text-center">
          Real numbers from real sessions — consistency compounds.
        </p>
      </div>
    </section>
  );
}