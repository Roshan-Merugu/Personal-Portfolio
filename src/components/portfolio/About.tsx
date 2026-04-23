import { Section } from "./Section";
import { about } from "@/data/portfolio";

export const About = () => {
  return (
    <Section id="about" index="SEC_02" label="About" title="Operator profile and field notes.">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-7 space-y-6">
          {about.body.map((p, i) => (
            <p key={i} className="text-text-main/85 text-base md:text-lg leading-relaxed text-pretty">
              {p}
            </p>
          ))}
        </div>
        <div className="lg:col-span-5">
          <div className="border border-wire bg-panel">
            <div className="border-b border-wire px-4 py-3 flex justify-between items-center mono text-[10px] uppercase tracking-widest text-text-dim">
              <span>// system.identity</span>
              <span className="text-volt">ACTIVE</span>
            </div>
            <dl className="grid grid-cols-2">
              {about.facts.map((f, i) => (
                <div
                  key={f.k}
                  className={`p-5 border-wire ${i % 2 === 0 ? "border-r" : ""} ${i < 2 ? "border-b" : ""}`}
                >
                  <dt className="mono text-[10px] uppercase tracking-widest text-text-mute mb-2">{f.k}</dt>
                  <dd className="display text-2xl text-text-main tabular-nums">{f.v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </Section>
  );
};
