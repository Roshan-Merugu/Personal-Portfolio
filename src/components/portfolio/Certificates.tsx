// Certificate list only — Section wrapper moved to Achievements for combined archive
import { certifications } from "@/data/portfolio";
import { ArrowUpRight } from "lucide-react";

export const Certificates = () => {
  return (
    <div>
      <ol className="relative border-l border-wire ml-2 md:ml-4">
        {certifications.map((c, i) => (
          <li key={`cert-${i}`} className="pl-6 md:pl-8 pb-8 md:pb-10 last:pb-0 relative group">
            <span className="absolute -left-[7px] top-1.5 size-3 border border-wire bg-void grid place-items-center group-hover:border-volt transition-colors">
              <span className="size-1 bg-text-dim group-hover:bg-volt transition-colors" />
            </span>
            <div className="flex items-baseline justify-between gap-3 md:gap-4 mb-2 flex-wrap">
              <div className="flex items-center gap-2 md:gap-3 min-w-0">
                <h3 className="display text-lg md:text-xl lg:text-2xl text-text-main font-medium tracking-tight">
                  {c.title}
                </h3>
              </div>
              <span className="mono text-[10px] uppercase tracking-widest text-text-dim tabular-nums flex-shrink-0">
                {c.year}
              </span>
            </div>
            <div className="mono text-[10px] uppercase tracking-widest text-volt/80 mb-2">
              {c.org}
            </div>
            <p className="text-text-main/75 text-sm md:text-base leading-relaxed text-pretty">{c.detail}</p>
            {c.credentials && (
              <a
                href={c.credentials}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 mt-3 mono text-[10px] uppercase tracking-widest text-text-dim hover:text-volt transition-colors"
              >
                Open Credential <ArrowUpRight className="size-3" />
              </a>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
};
