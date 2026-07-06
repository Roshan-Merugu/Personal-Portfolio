import { ArrowDownToLine, ArrowRight, Github, Linkedin, Instagram } from "lucide-react";
import { profile } from "@/data/portfolio";
import portrait from "@/assets/edited1.png";

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
            <span>{new Date().getFullYear()}</span>
          </div>
        </aside>

        {/* Center content */}
        <div className="col-span-1 md:col-span-6 px-6 py-24 md:py-36flex flex-col justify-center items-center md:items-start text-center md:text-left order-1        md:order-none">
         <div className="mono text-volt text-xs uppercase tracking-widest mb-8 flex items-center justify-center md:justify-start gap-3 animate-fade-up">
            <span className="inline-block w-8 h-px bg-volt" />
            {profile.role}
          </div>

          <h1 className="display text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-text-main font-medium tracking-tight leading-[0.95] mb-8 text-balance animate-fade-up"
            style={{ animationDelay: "80ms" }}>
            {profile.name}
          </h1>
                          {/* Profile Image - Mobile */}
                <div className="my-8 md:hidden w-full px-4 flex justify-center">
                  <div className="w-full max-w-lg relative">
                    <img
                      src={portrait}
                      alt={`${profile.name} — ${profile.role}`}
                      className="w-full h-auto object-contain"
                    />
                  </div>
                </div>

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
              href={profile.myresumeUrl}
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
                {/* Profile Image - Desktop */}
                {/* Profile Image - Desktop */}
            <aside className="hidden md:flex justify-end items-center p-8 col-span-3 border-l border-wire animate-fade-in">
              <div className="relative w-full flex justify-end!important">
                <img
                  src={portrait}
                  alt={`${profile.name} — ${profile.role}`}
                  className="w-[500px] max-w-none h-auto object-contain -translate-x-6"
                />
              </div>
            </aside>
      </div>
    </section>
  );
};
