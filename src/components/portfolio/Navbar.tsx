// @ts-ignore: suppress missing React module/type declarations in this environment
import { useEffect, useState } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { profile } from "@/data/portfolio";

const NAV = [
  { id: "work", label: "Work" },
  { id: "about", label: "About" },
  { id: "archive", label: "Archive" },
  { id: "log", label: "Log" },
  { id: "stack", label: "Stack" },
  { id: "transmit", label: "Transmit" },
];

export const Navbar = () => {
  const [time, setTime] = useState("");
  const [active, setActive] = useState("work");

  useEffect(() => {
    const tick = () => {
      const d = new Date();
      const hh = String(d.getUTCHours()).padStart(2, "0");
      const mm = String(d.getUTCMinutes()).padStart(2, "0");
      const ss = String(d.getUTCSeconds()).padStart(2, "0");
      setTime(`${hh}:${mm}:${ss} UTC`);
    };
    tick();
    const i = setInterval(tick, 1000);
    return () => clearInterval(i);
  }, []);

  useEffect(() => {
    const sections = NAV.map((n) => document.getElementById(n.id)).filter(Boolean) as HTMLElement[];
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );
    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  return (
    <>
      {/* Status bar */}
      <div className="hidden md:flex bg-panel border-b border-wire px-6 lg:px-12 py-2 justify-between items-center mono text-[10px] text-text-mute uppercase tracking-widest tabular-nums overflow-x-auto">
        <div className="flex gap-4 md:gap-8">
          <span className="flex-shrink-0">SYS_TIME: {time}</span>
          <span className="flex-shrink-0">NET: STABLE</span>
          <span className="flex-shrink-0">{profile.coords.lat} / {profile.coords.lng}</span>
        </div>
        <div className="flex items-center gap-3 flex-shrink-0">
          <span className="size-1.5 bg-volt rounded-full animate-pulse" />
          <span className="text-volt">{profile.status}</span>
        </div>
      </div>

      {/* Sticky nav */}
      <nav className="sticky top-0 z-50 flex items-center justify-between px-4 sm:px-6 md:px-8 lg:px-12 py-3 sm:py-4 border-b border-wire bg-void/85 backdrop-blur-md">
        <a href="#top" className="flex items-center gap-3 mono text-xs uppercase tracking-widest flex-shrink-0">
          <span className="size-1.5 bg-volt rounded-full animate-pulse shadow-volt flex-shrink-0" />
          <span className="text-text-main font-bold">{profile.handle}</span>
          <span className="hidden md:inline text-text-mute">/ {profile.role}</span>
        </a>
        <div className="hidden md:flex gap-4 lg:gap-7 mono text-xs uppercase tracking-widest">
          {NAV.map((n) => (
            <a
              key={n.id}
              href={`#${n.id}`}
              className={`transition-colors hover:text-volt whitespace-nowrap ${active === n.id ? "text-text-main" : "text-text-dim"}`}
            >
              <span className="text-text-mute mr-1.5">{String(NAV.indexOf(n) + 1).padStart(2, "0")}</span>
              {n.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-3 flex-shrink-0">
          <ThemeToggle />
        </div>
      </nav>
    </>
  );
};
