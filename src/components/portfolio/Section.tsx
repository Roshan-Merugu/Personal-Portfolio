import { ReactNode } from "react";

type Props = {
  id: string;
  index: string;
  label: string;
  title?: string;
  children: ReactNode;
};

export const Section = ({ id, index, label, title, children }: Props) => {
  return (
    <section id={id} className="border-b border-wire">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          <header className="md:col-span-3 flex flex-col gap-3">
            <div className="mono text-[10px] uppercase tracking-[0.2em] text-volt flex items-center gap-3">
              <span className="size-1 bg-volt rounded-full" />
              {index}
            </div>
            <div className="mono text-[10px] uppercase tracking-[0.2em] text-text-dim">
              {label}
            </div>
            {title && (
              <h2 className="display text-3xl md:text-4xl font-medium tracking-tight text-text-main mt-2 text-balance">
                {title}
              </h2>
            )}
          </header>
          <div className="md:col-span-9">{children}</div>
        </div>
      </div>
    </section>
  );
};
