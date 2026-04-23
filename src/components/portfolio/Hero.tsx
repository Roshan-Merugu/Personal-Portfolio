import { ArrowDownToLine, ArrowRight, Github, Linkedin, Instagram } from "lucide-react";
import { profile } from "@/data/portfolio";
import portrait from "@/assets/roshan.jpg";

export const Hero = () => {
  return (
    <section id="top" className="relative border-b border-wire overflow-hidden">
      {/* faint grid background */}
      <div className="absolute inset-0 grid-lines opacity-30 pointer-events-none" aria-hidden />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-void pointer-events-none" aria-hidden />

      <div className="relative max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-12">
        {/* Vertical guide lines */}
        <div className="hidden md:block absolute top-0 bottom-0 left-[25%] w-px bg-wire pointer-events-none" />
        <div className="hidden md:block absolute top-0 bottom-0 right-[25%] w-px bg-wire pointer-events-none" />

        {/* Left meta column */}
        <aside className="hidden md:flex flex-col justify-end p-8 col-span-3 border-r border-wire animate-fade-in">
          <div className="mono text-[10px] text-text-mute uppercase tracking-widest flex flex-col gap-2 pb-12">
            <span className="text-text-dim">Location</span>
            <span>{profile.coords.lat}</span>
            <span>{profile.coords.lng}</span>
            <div className="w-8 h-px bg-wire mt-6 mb-4" />
            <span className="text-text-dim">Protocol</span>
            <span>Zero-Latency</span>
            <div className="w-8 h-px bg-wire mt-6 mb-4" />
            <span className="text-text-dim">Year</span>
            <span>MMXXIV</span>
          </div>
        </aside>

        {/* Center content */}
        <div className="col-span-1 md:col-span-6 px-6 py-24 md:py-36 flex flex-col justify-center">
          <div className="mono text-volt text-xs uppercase tracking-widest mb-8 flex items-center gap-3 animate-fade-up">
            <span className="inline-block w-8 h-px bg-volt" />
            {profile.role}
          </div>

          <h1
            className="display text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-text-main font-medium tracking-tight leading-[0.95] mb-8 text-balance animate-fade-up"
            style={{ animationDelay: "80ms" }}
          >
            {profile.name}
          </h1>

          <p
            className="text-text-dim text-lg md:text-xl max-w-[48ch] mb-12 leading-relaxed text-pretty animate-fade-up"
            style={{ animationDelay: "160ms" }}
          >
            {profile.tagline} <span className="text-text-main/80">{profile.intro}</span>
          </p>

          <div
            className="flex flex-wrap items-center gap-3 mono text-xs md:text-sm uppercase tracking-widest animate-fade-up"
            style={{ animationDelay: "240ms" }}
          >
            <a
              href="#work"
              className="group relative bg-volt text-void px-7 py-4 font-bold flex items-center gap-3 overflow-hidden hover:shadow-volt transition-shadow"
            >
              <div className="absolute inset-0 bg-text-main translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
              <span className="relative z-10 flex items-center gap-3">
                View Projects
                <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </a>

            <a
              href={profile.resumeUrl}
              className="px-5 py-4 border border-wire text-text-dim hover:text-text-main hover:border-text-dim hover:bg-panel transition-all flex items-center gap-2"
            >
              <ArrowDownToLine className="size-4" />
              Resume
            </a>

            <div className="flex items-center gap-1 ml-1">
              <a href={profile.socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="size-12 grid place-items-center text-text-dim hover:text-volt transition-colors">
                <Github className="size-4" />
              </a>
              <a href={profile.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="size-12 grid place-items-center text-text-dim hover:text-volt transition-colors">
                <Linkedin className="size-4" />
              </a>
              <a href={profile.socials.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="size-12 grid place-items-center text-text-dim hover:text-volt transition-colors">
                <Instagram className="size-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Right telemetry column */}
        <aside className="hidden md:flex flex-col justify-center p-8 col-span-3 border-l border-wire animate-fade-in" style={{ animationDelay: "200ms" }}>
          <div className="mono text-[10px] text-text-dim uppercase tracking-widest mb-6 flex items-center gap-3">
            <div className="size-1.5 border border-volt" />
            Array Telemetry
          </div>
          <div className="bg-panel border border-wire p-1 group">
            <div className="w-full aspect-square bg-wire/40 relative overflow-hidden">
              <img
                src={portrait}
                alt={`${profile.name} — ${profile.role}`}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover grayscale contrast-110 group-hover:grayscale-0 transition-all duration-500"
              />
              {/* Scanline overlay */}
              <div
                className="absolute inset-0 pointer-events-none mix-blend-overlay opacity-40"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(0deg, hsl(var(--void) / 0.6) 0px, hsl(var(--void) / 0.6) 1px, transparent 1px, transparent 3px)",
                }}
                aria-hidden
              />
              {/* Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-void/80 via-transparent to-void/30 pointer-events-none" aria-hidden />
              {/* Corner brackets */}
              <div className="absolute top-2 left-2 w-3 h-3 border-t border-l border-volt" />
              <div className="absolute top-2 right-2 w-3 h-3 border-t border-r border-volt" />
              <div className="absolute bottom-2 left-2 w-3 h-3 border-b border-l border-volt" />
              <div className="absolute bottom-2 right-2 w-3 h-3 border-b border-r border-volt" />
              {/* Target tag */}
              <div className="absolute top-2 left-1/2 -translate-x-1/2 mono text-[9px] uppercase tracking-widest text-volt bg-void/70 px-2 py-0.5 border border-volt/40">
                Subject // {profile.handle}
              </div>
            </div>
            <div className="mt-4 px-1 grid grid-cols-2 gap-3 mono text-[10px] uppercase tracking-widest tabular-nums">
              <div>
                <div className="text-text-mute mb-1">Projects</div>
                <div className="text-text-main">12+ Built</div>
              </div>
              <div>
                <div className="text-text-mute mb-1">Stack</div>
                <div className="text-volt">Full-Front</div>
              </div>
              <div>
                <div className="text-text-mute mb-1">Focus</div>
                <div className="text-text-main">UI / Sec</div>
              </div>
              <div>
                <div className="text-text-mute mb-1">Streak</div>
                <div className="text-text-main">Daily</div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
};
