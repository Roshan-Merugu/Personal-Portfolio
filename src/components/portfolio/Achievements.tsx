import { Section } from "./Section";
import { achievements } from "@/data/portfolio";
import { Award } from "lucide-react";

export const Achievements = () => {
  return (
    <Section id="log" index="SEC_03" label="Logbook" title="Milestones, recognitions, signals received.">
      <ol className="relative border-l border-wire ml-2">
        {achievements.map((a, i) => (
          <li key={i} className="pl-8 pb-10 last:pb-0 relative group">
            <span className="absolute -left-[7px] top-1.5 size-3 border border-wire bg-void grid place-items-center group-hover:border-volt transition-colors">
              <span className="size-1 bg-text-dim group-hover:bg-volt transition-colors" />
            </span>
            <div className="flex items-baseline justify-between gap-4 mb-2 flex-wrap">
              <div className="flex items-center gap-3">
                <Award className="size-4 text-volt" />
                <h3 className="display text-xl md:text-2xl text-text-main font-medium tracking-tight">
                  {a.title}
                </h3>
              </div>
              <span className="mono text-[10px] uppercase tracking-widest text-text-dim tabular-nums">
                {a.year}
              </span>
            </div>
            <div className="mono text-[10px] uppercase tracking-widest text-volt/80 mb-2">
              {a.org}
            </div>
            <p className="text-text-main/75 leading-relaxed text-pretty">{a.detail}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
};
