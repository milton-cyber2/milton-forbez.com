import { useCallback, useRef, useState } from "react";

interface BeforeAfterSliderProps {
  before: string;
  after: string;
  name: string;
  className?: string;
}

/**
 * Draggable before/after comparison slider.
 * "After" sits underneath; "before" is clipped with clip-path so the two
 * photos stay pixel-aligned. Drag the handle (pointer / touch) to compare.
 */
export default function BeforeAfterSlider({
  before,
  after,
  name,
  className = "",
}: BeforeAfterSliderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(50);
  const [dragging, setDragging] = useState(false);

  const updateFromClientX = useCallback((clientX: number) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect || rect.width === 0) return;
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(96, Math.max(4, pct)));
  }, []);

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    setDragging(true);
    (e.currentTarget as HTMLDivElement).setPointerCapture?.(e.pointerId);
    updateFromClientX(e.clientX);
  };

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!dragging) return;
    updateFromClientX(e.clientX);
  };

  const endDrag = () => setDragging(false);

  return (
    <div
      ref={containerRef}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={endDrag}
      onPointerLeave={endDrag}
      className={`group relative w-full aspect-[4/5] sm:aspect-[4/4.6] overflow-hidden rounded-lg select-none touch-none cursor-ew-resize ${className}`}
      role="slider"
      aria-label={`${name} before and after comparison`}
      aria-valuenow={Math.round(position)}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      {/* AFTER (base layer) */}
      <img
        src={after}
        alt={`${name} after transformation`}
        className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
        draggable={false}
      />

      {/* BEFORE (clipped layer) */}
      <img
        src={before}
        alt={`${name} before transformation`}
        draggable={false}
        className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      />

      {/* Divider line */}
      <div
        className="absolute top-0 bottom-0 w-0.5 bg-background-50/90 shadow-[0_0_20px_rgba(0,0,0,0.5)]"
        style={{ left: `${position}%`, transform: "translateX(-50%)" }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-background-50/90 backdrop-blur flex items-center justify-center gap-1 text-primary-600 cursor-ew-resize">
          <i className="ri-arrow-left-right-line text-base" />
        </div>
      </div>

      {/* Before / After labels */}
      <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md text-[10px] uppercase tracking-[0.25em] bg-background-950/60 backdrop-blur text-foreground-50 pointer-events-none">
        Before
      </span>
      <span className="absolute top-3 right-3 px-2.5 py-1 rounded-md text-[10px] uppercase tracking-[0.25em] bg-primary-500/90 text-background-50 dark:text-foreground-950 pointer-events-none">
        After
      </span>
    </div>
  );
}