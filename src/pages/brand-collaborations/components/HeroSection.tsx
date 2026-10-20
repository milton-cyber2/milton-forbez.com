import { brandCollabVideos } from "@/mocks/site";

export default function HeroSection() {
  return (
    <section className="relative min-h-[80vh] md:min-h-screen flex items-end overflow-hidden bg-foreground-950">
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-50"
        >
          <source src={brandCollabVideos.nikePro1} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-background-50 via-background-50/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-background-50/70 via-transparent to-background-50/70" />
      </div>

      <div className="relative container-x pb-20 md:pb-28 pt-32">
        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2.5 rounded-full border border-primary-500/30 bg-primary-500/10 px-4 py-2 mb-6">
            <i className="ri-flashlight-fill text-primary-500" />
            <span className="text-[11px] uppercase tracking-[0.3em] text-primary-500 font-semibold">
              Brand Collaborations
            </span>
          </div>

          <h1 className="font-heading uppercase text-foreground-950 text-5xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tight text-balance">
            More Than
            <br />
            a Coach.
          </h1>

          <p className="mt-6 text-lg md:text-xl text-foreground-800 max-w-2xl leading-relaxed">
            A world champion athlete, performance personality, and commercial presence for brands that demand authenticity, discipline, and elite energy.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#inquiry"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-md bg-primary-500 hover:bg-primary-600 text-background-50 dark:text-foreground-950 font-semibold whitespace-nowrap cursor-pointer transition-colors"
            >
              Request Collaboration
              <i className="ri-arrow-right-line" />
            </a>
            <a
              href="#campaigns"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-md border border-background-300/70 text-foreground-950 hover:text-primary-500 hover:border-primary-500 font-semibold whitespace-nowrap cursor-pointer transition-colors"
            >
              View Campaign Work
            </a>
          </div>
        </div>

        <div className="absolute bottom-20 right-6 md:right-12 hidden md:flex items-center gap-3 glass rounded-lg px-5 py-3">
          <div className="font-heading text-foreground-950 text-sm tracking-wide uppercase">
            Nike Pro
          </div>
          <div className="w-px h-4 bg-background-300/60" />
          <div className="font-heading text-foreground-950 text-sm tracking-wide uppercase">
            SUNWARRIOR
          </div>
          <div className="w-px h-4 bg-background-300/60" />
          <span className="text-[10px] uppercase tracking-[0.25em] text-foreground-500">
            Brand Collaborations
          </span>
        </div>
      </div>
    </section>
  );
}