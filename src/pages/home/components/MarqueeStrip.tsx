const items = [
  "STRENGTH",
  "HYROX",
  "PERFORMANCE",
  "FUNCTIONAL",
  "NUTRITION",
  "CONDITIONING",
  "MOBILITY",
  "MINDSET",
];

export default function MarqueeStrip() {
  const loop = [...items, ...items];
  return (
    <div className="bg-primary-500 text-background-50 dark:text-foreground-950 py-4 overflow-hidden border-y border-primary-600">
      <div className="flex animate-marquee whitespace-nowrap">
        {loop.map((word, i) => (
          <span
            key={`${word}-${i}`}
            className="flex items-center gap-6 px-6 font-heading uppercase tracking-[0.35em] text-sm md:text-base"
          >
            {word}
            <i className="ri-flashlight-fill text-xs opacity-70" />
          </span>
        ))}
      </div>
    </div>
  );
}