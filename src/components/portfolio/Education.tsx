import { Section } from "./Section";
import { education } from "@/data/portfolio";
import { GraduationCap } from "lucide-react";

export const Education = () => {
  return (
    <Section
      id="log"
      index="SEC_05"
      label="Trace Archive"
      title="Academic signal — calibrated over the years."
    >
      <ol className="relative border-l border-wire ml-2 md:ml-4">
        {education.map((e, i) => (
          <li key={i} className="pl-6 md:pl-8 pb-8 md:pb-10 last:pb-0 relative group">
            <span className="absolute -left-[7px] top-1.5 size-3 border border-wire bg-void grid place-items-center group-hover:border-volt transition-colors">
              <span className="size-1 bg-text-dim group-hover:bg-volt transition-colors" />
            </span>
            <div className="flex items-baseline justify-between gap-3 md:gap-4 mb-2 flex-wrap">
              <div className="flex items-center gap-2 md:gap-3 min-w-0">
                <GraduationCap className="size-4 text-volt flex-shrink-0" />
                <h3 className="display text-lg md:text-xl lg:text-2xl text-text-main font-medium tracking-tight truncate md:truncate-none">
                  {e.degree}
                </h3>
              </div>
              <span className="mono text-[10px] uppercase tracking-widest text-text-dim tabular-nums flex-shrink-0">
                {e.period}
              </span>
            </div>
            <div className="mono text-[10px] uppercase tracking-widest text-volt/80 mb-2 flex flex-wrap items-center gap-2 md:gap-3">
              <span className="truncate">{e.institution}</span>
              {e.score && (
                <>
                  <span className="text-text-mute hidden sm:inline">//</span>
                  <span className="text-text-dim tabular-nums">{e.score}</span>
                </>
              )}
            </div>
            <p className="text-text-main/75 text-sm md:text-base leading-relaxed text-pretty">{e.detail}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
};
