// Certificate list only — Section wrapper moved to Achievements for combined archive
import { certifications } from "@/data/portfolio";

export const Certificates = () => {
  return (
    <div>
      <h3 className="display text-xl md:text-2xl text-text-main font-medium tracking-tight mb-6">Certifications</h3>
      <ol className="relative border-l border-wire ml-2">
        {certifications.map((c, i) => (
          <li key={`cert-${i}`} className="pl-8 pb-10 last:pb-0 relative group">
            <span className="absolute -left-[7px] top-1.5 size-3 border border-wire bg-void grid place-items-center group-hover:border-volt transition-colors">
              <span className="size-1 bg-text-dim group-hover:bg-volt transition-colors" />
            </span>
            <div className="flex items-baseline justify-between gap-4 mb-2 flex-wrap">
              <div className="flex items-center gap-3">
                <h3 className="display text-xl md:text-2xl text-text-main font-medium tracking-tight">
                  {c.title}
                </h3>
              </div>
              <span className="mono text-[10px] uppercase tracking-widest text-text-dim tabular-nums">
                {c.year}
              </span>
            </div>
            <div className="mono text-[10px] uppercase tracking-widest text-volt/80 mb-2">
              {c.org}
            </div>
            <p className="text-text-main/75 leading-relaxed text-pretty">{c.detail}</p>
          </li>
        ))}
      </ol>
    </div>
  );
};
