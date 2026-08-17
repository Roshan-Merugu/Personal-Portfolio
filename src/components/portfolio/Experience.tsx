import { Section } from "./Section";
import { experience } from "@/data/portfolio";
import { BriefcaseBusiness, Tag } from "lucide-react";

export const Experience = () => {
  return (
    <Section
      id="experience"
      index="SEC_02"
      label="Field Experience"
      title="Where ideas meet execution."
    >
      <ol className="relative border-l border-wire ml-2 md:ml-4">
        {experience.map((e, i) => {
          const summary =
            "description" in e && typeof e.description === "string"
              ? e.description
              : "summary" in e && typeof e.summary === "string"
                ? e.summary
                : "";

          return (
            <li
              key={i}
              className="pl-6 md:pl-8 pb-8 md:pb-10 last:pb-0 relative group"
            >
              <span className="absolute -left-[7px] top-1.5 size-3 border border-wire bg-void grid place-items-center group-hover:border-volt transition-colors">
                <span className="size-1 bg-text-dim group-hover:bg-volt transition-colors" />
              </span>

              <div className="flex items-baseline justify-between gap-3 md:gap-4 mb-2 flex-wrap">
                <div className="flex items-center gap-2 md:gap-3 min-w-0">
                  <BriefcaseBusiness className="size-4 text-volt flex-shrink-0" />

                  <h3 className="display text-lg md:text-xl lg:text-2xl text-text-main font-medium tracking-tight">
                    {e.role}
                  </h3>
                </div>

                <span className="mono text-[10px] uppercase tracking-widest text-text-dim tabular-nums flex-shrink-0">
                  {e.period}
                </span>
              </div>

              <div className="mono text-[10px] uppercase tracking-widest text-volt/80 mb-2 flex flex-wrap items-center gap-2 md:gap-3">
                <span>{e.product}</span>

                {e.location && (
                  <>
                    <span className="text-text-mute hidden sm:inline">//</span>
                    <span className="text-text-dim">{e.location}</span>
                  </>
                )}
              </div>

              <p className="text-text-main/75 text-sm md:text-base leading-relaxed text-pretty mb-4">
                {summary}
              </p>

              {/* Highlights */}
              {e.highlights && e.highlights.length > 0 && (
                <ul className="space-y-2 ml-4 md:ml-6">
                  {e.highlights.map((highlight, hIndex) => (
                    <li key={hIndex} className="relative pl-4 text-text-main/75 text-sm md:text-base leading-relaxed">
                      <span className="absolute left-0 top-2 size-1.5 bg-volt/60 rounded-full" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              )}

              {/* Tags */}
              {e.tags && e.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {e.tags.map((tag, tIndex) => (
                    <span
                      key={tIndex}
                      className="flex items-center gap-1.5 px-3 py-1 text-[11px] md:text-xs uppercase tracking-wider text-text-dim border border-wire hover:border-volt/50 hover:text-text-main transition-colors"
                    >
                      <Tag className="size-3" />
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </li>
          );
        })}
      </ol>
    </Section>
  );
};