import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { brandCollabVideos } from "@/mocks/site";
import Reveal from "@/components/feature/Reveal";

type Tone = "accent" | "primary";

interface CollabVideo {
  id: string;
  brand: string;
  tagline: string;
  description: string;
  video: string;
  tone: Tone;
}

// Order fixed by the client:
// 01 SUNWARRIOR · 02 NIKEPRO · 03 MARTIN POWER (each brand is written in its own film)
const collaborations: CollabVideo[] = [
  {
    id: "sunwarrior",
    brand: "SUNWARRIOR",
    tagline: "Fuel for Warriors. Built for Performance.",
    description:
      "Performance energy, movement, and the strength that powers champions — built for wellness and high-performance audiences.",
    video: brandCollabVideos.nikePro1,
    tone: "accent",
  },
  {
    id: "nike-pro",
    brand: "NIKEPRO",
    tagline: "Elite Performance. Relentless Discipline.",
    description:
      "Raw strength, explosive conditioning, and the uncompromising standard behind world-class athletic training.",
    video: brandCollabVideos.nikePro2,
    tone: "primary",
  },
  {
    id: "martin-power",
    brand: "MARTIN POWER",
    tagline: "Power. Presence. Performance.",
    description:
      "The MARTIN POWER signature film — raw power, discipline, and the athlete's unmistakable presence.",
    video: brandCollabVideos.martinPower,
    tone: "accent",
  },
];

const marqueeBrands = ["SUNWARRIOR", "NIKEPRO", "MARTIN POWER"];
const marqueeLoop = [...marqueeBrands, ...marqueeBrands, ...marqueeBrands, ...marqueeBrands];

interface VideoPlayerProps {
  item: CollabVideo;
  index: number;
  isActive: boolean;
  soundOn: boolean;
  onActivate: (id: string) => void;
}

function VideoPlayer({ item, index, isActive, soundOn, onActivate }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [controlsVisible, setControlsVisible] = useState(false);

  const isPrimaryTone = item.tone === "primary";
  const accentText = isPrimaryTone ? "text-primary-400" : "text-accent-400";
  const accentDot = isPrimaryTone ? "bg-primary-500" : "bg-accent-500";
  const auraClass = isPrimaryTone ? "aura-conic-primary" : "aura-conic-accent";

  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const onTime = () => {
      if (v.duration) setProgress((v.currentTime / v.duration) * 100);
    };
    const onPlay = () => setPlaying(true);
    const onPause = () => setPlaying(false);
    v.addEventListener("timeupdate", onTime);
    v.addEventListener("play", onPlay);
    v.addEventListener("pause", onPause);
    return () => {
      v.removeEventListener("timeupdate", onTime);
      v.removeEventListener("play", onPlay);
      v.removeEventListener("pause", onPause);
    };
  }, []);

  // choreography: every film keeps moving, but sound only ever plays once the visitor
  // has scrolled the films into view — and only for the focused film
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;
    const ensurePlaying = () => {
      if (v.paused) v.play().catch(() => {});
    };
    if (isActive && soundOn) {
      v.muted = false;
      setMuted(false);
      const p = v.play();
      if (p) {
        p.then(() => setPlaying(true)).catch(() => {
          // browsers block audio until the user has interacted once — stay audible-ready, play muted
          v.muted = true;
          setMuted(true);
          ensurePlaying();
        });
      }
    } else {
      v.muted = true;
      setMuted(true);
      ensurePlaying();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isActive, soundOn]);

  const toggleSound = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = !v.muted;
    setMuted(v.muted);
    if (!v.muted) onActivate(item.id);
  };

  const togglePlay = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      onActivate(item.id);
      v.play().catch(() => {});
      setPlaying(true);
    } else {
      v.pause();
      setPlaying(false);
    }
  };

  const seek = (e: React.MouseEvent<HTMLDivElement>) => {
    const v = videoRef.current;
    if (!v || !v.duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const ratio = Math.min(Math.max((e.clientX - rect.left) / rect.width, 0), 1);
    v.currentTime = ratio * v.duration;
  };

  return (
    <div
      className="group relative flex flex-col items-center w-full"
      onMouseEnter={() => {
        onActivate(item.id);
        setControlsVisible(true);
      }}
      onMouseLeave={() => setControlsVisible(false)}
    >
      {/* the full-frame film */}
      <Reveal delay={index * 140} className="w-full">
        <div
          className={`relative transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
            isActive ? "scale-100" : "scale-[0.97]"
          }`}
        >
          {/* rotating cinematic light aura behind the frame */}
          <div
            className={`absolute -inset-4 rounded-[2.5rem] blur-2xl pointer-events-none transition-opacity duration-1000 anim-spin-aura ${auraClass} ${
              isActive ? "opacity-70" : "opacity-25"
            }`}
          />
          <div
            className={`absolute -inset-1 rounded-3xl blur-md pointer-events-none transition-opacity duration-1000 ${auraClass} ${
              isActive ? "opacity-40" : "opacity-15"
            }`}
            style={{ animation: "ringDash 22s linear infinite reverse" }}
          />

          {/* frame */}
          <div className="relative rounded-2xl overflow-hidden bg-foreground-950 border border-background-200/40">
            <div className="relative w-full aspect-[9/16]">
              <video
                ref={videoRef}
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-contain"
              >
                <source src={item.video} type="video/mp4" />
              </video>

              {/* cinematic gradient edges — elegant framing without cropping */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/35 pointer-events-none" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/25 via-transparent to-black/25 pointer-events-none" />
              <div className="absolute inset-0 ring-1 ring-inset ring-background-50/5 pointer-events-none" />
              {/* fine film grain + light scan */}
              <div className="absolute inset-0 film-grain opacity-60 pointer-events-none" />
              <div className="absolute left-0 right-0 h-16 bg-gradient-to-b from-transparent via-background-50/10 to-transparent anim-scan pointer-events-none" />

              {/* corner framing brackets */}
              <span className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-background-50/70 rounded-tl-md anim-corner pointer-events-none" />
              <span className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-background-50/70 rounded-tr-md anim-corner pointer-events-none" />
              <span className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-background-50/70 rounded-bl-md anim-corner pointer-events-none" />
              <span className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-background-50/70 rounded-br-md anim-corner pointer-events-none" />

              {/* editorial number badge */}
              <div className="absolute top-4 left-4 md:top-5 md:left-5 w-10 h-10 md:w-11 md:h-11 flex items-center justify-center">
                <span
                  className={`absolute inset-0 rounded-full border border-dashed anim-spin-aura ${
                    isPrimaryTone ? "border-primary-400/70" : "border-accent-400/70"
                  }`}
                />
                <span className={`absolute inset-1.5 rounded-full ${isPrimaryTone ? "bg-primary-500/15" : "bg-accent-500/15"}`} />
                <span className={`relative font-heading text-xs md:text-sm tracking-widest ${accentText}`}>
                  0{index + 1}
                </span>
              </div>

              {/* sound-on live chip while audible */}
              {!muted && isActive && (
                <div className="absolute top-4 right-4 md:top-5 md:right-5 inline-flex items-center gap-1.5 rounded-full bg-black/45 backdrop-blur-md border border-white/15 px-2.5 py-1.5">
                  <i className={`${accentText} ri-volume-up-line text-[11px]`} />
                  <span className="text-[8px] uppercase tracking-[0.2em] text-white/90 font-semibold whitespace-nowrap">
                    Sound
                  </span>
                </div>
              )}

              {/* center play overlay when paused */}
              {!playing && (
                <button
                  type="button"
                  onClick={togglePlay}
                  aria-label={`Play ${item.brand} film with sound`}
                  className="absolute inset-0 flex items-center justify-center cursor-pointer bg-transparent"
                >
                  <span className="relative w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-full bg-white/10 backdrop-blur-md border border-white/30 text-white transition-transform duration-500 group-hover:scale-110">
                    <span className={`absolute inset-0 rounded-full animate-ping ${isPrimaryTone ? "bg-primary-500/30" : "bg-accent-500/30"}`} />
                    <i className="ri-play-fill text-2xl md:text-3xl relative" />
                  </span>
                </button>
              )}

              {/* bottom controls */}
              <div
                className={`absolute bottom-0 left-0 right-0 p-3.5 md:p-4 bg-gradient-to-t from-black/85 to-transparent transition-opacity duration-500 ${
                  controlsVisible || !playing ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <button
                    type="button"
                    onClick={togglePlay}
                    aria-label={playing ? "Pause" : "Play"}
                    className="w-9 h-9 flex items-center justify-center rounded-full bg-white/15 backdrop-blur-md border border-white/30 text-white hover:bg-white/25 transition-colors cursor-pointer"
                  >
                    <i className={`${playing ? "ri-pause-line" : "ri-play-fill"} text-base`} />
                  </button>
                  <button
                    type="button"
                    onClick={toggleSound}
                    aria-label={muted ? "Enable original sound" : "Mute"}
                    className={`w-9 h-9 flex items-center justify-center rounded-full backdrop-blur-md border text-white transition-colors cursor-pointer ${
                      muted
                        ? "bg-white/15 border-white/30 hover:bg-white/25"
                        : isPrimaryTone
                        ? "bg-primary-500 border-primary-400"
                        : "bg-accent-500 border-accent-400"
                    }`}
                  >
                    <i className={`${muted ? "ri-volume-mute-line" : "ri-volume-up-line"} text-base`} />
                  </button>
                  <div
                    className="flex-1 h-1 rounded-full bg-white/25 overflow-hidden cursor-pointer"
                    onClick={seek}
                    role="progressbar"
                    aria-valuenow={Math.round(progress)}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    <div
                      className={`h-full rounded-full ${isPrimaryTone ? "bg-primary-400" : "bg-accent-400"}`}
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Reveal>

      {/* caption below the film */}
      <Reveal delay={index * 140 + 80} className="w-full mt-6 text-center">
        <h3 className="font-heading uppercase text-background-50 text-2xl md:text-3xl tracking-tight leading-none">
          {item.brand}
        </h3>
        <p className={`mt-2 font-heading uppercase text-sm md:text-base tracking-wide ${isPrimaryTone ? "text-primary-300" : "text-accent-300"}`}>
          {item.tagline}
        </p>
        <p className="mt-3 text-foreground-400 text-xs leading-relaxed max-w-xs mx-auto">
          {item.description}
        </p>
      </Reveal>
    </div>
  );
}

export default function BrandCollabTeaser() {
  const [activeId, setActiveId] = useState(collaborations[0].id);
  const filmsRef = useRef<HTMLDivElement>(null);
  const [filmsInView, setFilmsInView] = useState(false);

  // audio stays silent until the film wall is actually scrolled into view
  useEffect(() => {
    const el = filmsRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((entry) => setFilmsInView(entry.isIntersecting)),
      { threshold: 0.35 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section className="relative bg-foreground-950 overflow-hidden">
      {/* ambient glow accents */}
      <div className="absolute -top-40 -right-40 w-[36rem] h-[36rem] rounded-full bg-primary-500/10 blur-[120px] pointer-events-none anim-float" />
      <div className="absolute -bottom-40 -left-40 w-[32rem] h-[32rem] rounded-full bg-accent-500/10 blur-[120px] pointer-events-none anim-float" />

      <div className="relative container-x py-24 md:py-36">
        {/* Header */}
        <Reveal className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2.5 rounded-full border border-primary-500/30 bg-primary-500/10 px-4 py-2 mb-6">
            <i className="ri-flashlight-fill text-primary-500" />
            <span className="text-[11px] uppercase tracking-[0.3em] text-primary-500 font-semibold">
              Brand Collaborations
            </span>
          </div>
          <h2 className="font-heading uppercase text-background-50 text-4xl md:text-6xl lg:text-7xl leading-[0.95] tracking-tight text-balance">
            Athletic Presence.
            <br />
            <span className="anim-text-shimmer">Commercial Impact.</span>
          </h2>
          <p className="mt-6 text-foreground-300 leading-relaxed max-w-2xl mx-auto">
            Three world-class campaigns, screened side by side. Hover any film and its original
            sound comes to life — SUNWARRIOR, NIKEPRO, and MARTIN POWER, in full frame and full motion.
          </p>
        </Reveal>

        {/* moving brand ribbon */}
        <div className="relative mt-14 md:mt-16 w-full overflow-hidden border-y border-background-200/40 py-4">
          <div className="flex w-max anim-marquee">
            {marqueeLoop.map((b, i) => (
              <span
                key={i}
                className="mx-8 flex items-center gap-8 font-heading uppercase tracking-[0.35em] text-sm md:text-base text-foreground-400 whitespace-nowrap"
              >
                {b}
                <i className="ri-asterisk text-primary-500 text-xs" />
              </span>
            ))}
          </div>
        </div>

        {/* Cinematic side-by-side film wall */}
        <div ref={filmsRef} className="relative mt-16 md:mt-24">
          {/* reel line connecting the three films */}
          <div className="hidden md:block absolute top-[26rem] left-[8%] right-[8%] h-px bg-gradient-to-r from-transparent via-background-300/40 to-transparent pointer-events-none" />
          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-14 md:gap-8 lg:gap-10">
            {collaborations.map((item, index) => (
              <VideoPlayer
                key={item.id}
                item={item}
                index={index}
                isActive={activeId === item.id}
                soundOn={filmsInView}
                onActivate={setActiveId}
              />
            ))}
          </div>
        </div>

        {/* Billboard & commercial + CTA */}
        <Reveal className="mt-20 md:mt-32">
          <div className="p-6 md:p-10 rounded-xl bg-background-100 border border-background-200/60 flex flex-col md:flex-row md:items-center gap-6 anim-shine">
            <div className="w-14 h-14 flex items-center justify-center rounded-full bg-accent-500/10 text-accent-500 shrink-0">
              <i className="ri-advertisement-line text-2xl" />
            </div>
            <div>
              <h4 className="font-heading text-foreground-950 text-xl md:text-2xl uppercase tracking-wide">
                Billboard & Commercial Experience
              </h4>
              <p className="mt-2 text-foreground-700 text-sm leading-relaxed max-w-3xl">
                Beyond SUNWARRIOR, NIKEPRO, and MARTIN POWER, Martin has appeared in commercial
                advertising campaigns and large-format outdoor media. His athletic aesthetic and
                disciplined presence translate naturally into billboards, TV, digital, and print.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 md:ml-auto md:shrink-0">
              <Link
                to="/brand-collaborations"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-primary-500 hover:bg-primary-600 text-background-50 dark:text-foreground-950 font-semibold whitespace-nowrap cursor-pointer transition-colors"
              >
                Explore Collaborations
                <i className="ri-arrow-right-line" />
              </Link>
              <a
                href="/brand-collaborations#inquiry"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-md border border-foreground-700/40 text-foreground-300 hover:text-background-50 hover:border-background-50 font-semibold whitespace-nowrap cursor-pointer transition-colors"
              >
                Request Partnership
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}