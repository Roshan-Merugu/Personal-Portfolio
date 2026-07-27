import { ArrowUpRight, Github } from "lucide-react";
import { Section } from "./Section";
import { projects, type Project } from "@/data/portfolio";

const StatusPill = ({ status }: { status: Project["status"] }) => {
  const styles =
    status === "LIVE"
      ? "text-volt border-volt/40 bg-volt/5"
      : status === "WIP"
      ? "text-text-main border-text-dim/30 bg-panel"
      : "text-text-dim border-wire";
  return (
    <span className={`mono text-[10px] uppercase tracking-widest border px-2 py-0.5 ${styles}`}>
      {status === "LIVE" && <span className="inline-block size-1 bg-volt rounded-full mr-1.5 align-middle animate-pulse" />}
      {status}
    </span>
  );
};

const ProjectRow = ({ p, i }: { p: Project; i: number }) => {
  return (
    <article
      className="group grid grid-cols-1 sm:grid-cols-12 gap-4 sm:gap-6 py-6 sm:py-8 border-t border-wire hover:bg-panel/40 transition-colors px-2 -mx-2"
      style={{ animationDelay: `${i * 60}ms` }}
    >
      <div className="sm:col-span-1 mono text-[10px] uppercase tracking-widest text-text-mute pt-1.5">
        {p.index}
      </div>
      <div className="sm:col-span-5">
        <div className="flex items-start sm:items-center gap-3 mb-2 flex-wrap">
          <h3 className="display text-2xl sm:text-3xl lg:text-4xl text-text-main font-medium tracking-tight">
            {p.title}
          </h3>
          <StatusPill status={p.status} />
        </div>
        <div className="mono text-[10px] uppercase tracking-widest text-text-dim">
          {p.year} — {p.stack.slice(0, 2).join(" / ")}
        </div>
      </div>
      <div className="sm:col-span-4">
        <p className="text-text-main/80 text-sm md:text-base leading-relaxed text-pretty mb-3">{p.description}</p>
        <div className="flex flex-wrap gap-1.5">
          {p.stack.map((s) => (
            <span key={s} className="mono text-[10px] uppercase tracking-widest text-text-dim border border-wire px-2 py-0.5">
              {s}
            </span>
          ))}
        </div>
      </div>
      <div className="sm:col-span-2 flex flex-row sm:flex-col gap-2 sm:items-end mono text-[10px] uppercase tracking-widest">
        {p.demo && (
          <a
            href={p.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-text-dim hover:text-volt transition-colors"
          >
            Live <ArrowUpRight className="size-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        )}
        {p.github && (
          <a
            href={p.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-text-dim hover:text-volt transition-colors"
          >
            <Github className="size-3" /> Source
          </a>
        )}
      </div>
    </article>
  );
};

export const Projects = () => {
  return (
    <Section id="work" index="SEC_01" label="Selected Work" title="Systems shipped at the edge of useful and beautiful.">
      <div className="border-b border-wire">
        {projects.map((p, i) => (
          <ProjectRow key={p.id} p={p} i={i} />
        ))}
      </div>
      <div className="pt-6 mono text-[10px] uppercase tracking-widest text-text-mute flex justify-between">
        <span>{projects.length} of {projects.length} entries</span>
        <span>SCROLL ↓</span>
      </div>
    </Section>
  );
};
