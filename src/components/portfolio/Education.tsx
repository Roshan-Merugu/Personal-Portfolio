import { Section } from "./Section";
import { education } from "@/data/portfolio";
import { GraduationCap } from "lucide-react";

export const Education = () => {
  return (
    <Section
      id="archive"
      index="SEC_04"
      label="Trace Archive"
      title="Academic signal — calibrated over the years."
    >
      <ol className="relative border-l border-wire ml-2">
        {education.map((e, i) => (
          <li key={i} className="pl-8 pb-10 last:pb-0 relative group">
            <span className="absolute -left-[7px] top-1.5 size-3 border border-wire bg-void grid place-items-center group-hover:border-volt transition-colors">
              <span className="size-1 bg-text-dim group-hover:bg-volt transition-colors" />
            </span>
            <div className="flex items-baseline justify-between gap-4 mb-2 flex-wrap">
              <div className="flex items-center gap-3">
                <GraduationCap className="size-4 text-volt" />
                <h3 className="display text-xl md:text-2xl text-text-main font-medium tracking-tight">
                  {e.degree}
                </h3>
              </div>
              <span className="mono text-[10px] uppercase tracking-widest text-text-dim tabular-nums">
                {e.period}
              </span>
            </div>
            <div className="mono text-[10px] uppercase tracking-widest text-volt/80 mb-2 flex flex-wrap items-center gap-3">
              <span>{e.institution}</span>
              {e.score && (
                <>
                  <span className="text-text-mute">//</span>
                  <span className="text-text-dim tabular-nums">{e.score}</span>
                </>
              )}
            </div>
            <p className="text-text-main/75 leading-relaxed text-pretty">{e.detail}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
};
