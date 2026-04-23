import { Section } from "./Section";
import { skills } from "@/data/portfolio";

export const Skills = () => {
  return (
    <Section id="stack" index="SEC_04" label="Stack" title="The toolchain. Sharpened daily.">
      <p className="text-text-main/75 leading-relaxed text-pretty mb-8 max-w-[62ch]">
        Toolchain sharpened daily with modern technologies like{" "}
        <span className="text-volt">Supabase</span>,{" "}
        <span className="text-volt">React.js</span>,{" "}
        <span className="text-volt">Vite</span>, and{" "}
        <span className="text-volt">Tailwind CSS</span> — to build fast, scalable, and clean user experiences.
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-px bg-wire border border-wire">
        {skills.map((group) => (
          <div key={group.category} className="bg-void p-6">
            <div className="flex items-center justify-between mb-6 pb-3 border-b border-wire">
              <h3 className="mono text-xs uppercase tracking-widest text-volt">
                <span className="text-text-mute mr-2">//</span>
                {group.category}
              </h3>
              <span className="mono text-[10px] text-text-mute tabular-nums">
                {String(group.items.length).padStart(2, "0")}
              </span>
            </div>
            <ul className="flex flex-wrap gap-2">
              {group.items.map((s) => (
                <li
                  key={s}
                  className="mono text-xs text-text-main border border-wire px-3 py-1.5 hover:border-volt hover:text-volt hover:bg-volt/5 transition-colors cursor-default"
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
};
