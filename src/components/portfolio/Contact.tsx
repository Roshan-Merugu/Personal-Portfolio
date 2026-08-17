import { useState, FormEvent } from "react";
import { Section } from "./Section";
import { profile } from "@/data/portfolio";
import { ArrowRight, Github, Linkedin, Instagram, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const Contact = () => {
  const { toast } = useToast();
  const [sending, setSending] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSending(true);
    // Placeholder: integrate EmailJS by replacing this block.
    setTimeout(() => {
      setSending(false);
      setForm({ name: "", email: "", message: "" });
      toast({
        title: "TRANSMISSION_SENT",
        description: "Your message is queued. I'll respond within 24 hours.",
      });
    }, 700);
  };

  return (
    <Section id="transmit" index="SEC_07" label="Transmit" title="Open a channel. Let's build something durable.">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 md:gap-8 lg:gap-10">
        <div className="md:col-span-2 lg:col-span-5 flex flex-col gap-6 md:gap-8">
          <a
            href={`mailto:${profile.email}`}
            className="group block border border-wire bg-panel p-4 md:p-6 hover:border-volt transition-colors"
          >
            <div className="mono text-[10px] uppercase tracking-widest text-text-dim mb-3 flex items-center gap-2">
              <Mail className="size-3 flex-shrink-0" /> Direct
            </div>
            <div className="display text-lg md:text-xl lg:text-2xl text-text-main group-hover:text-volt transition-colors break-all">
              {profile.email}
            </div>
          </a>

          <div className="border border-wire">
            <div className="border-b border-wire px-4 py-3 mono text-[10px] uppercase tracking-widest text-text-dim flex justify-between items-center">
              <span>// channels</span>
              <span className="text-volt flex-shrink-0">3 OPEN</span>
            </div>
            {[
              { Icon: Github, label: "GitHub", href: profile.socials.github, handle: "@Roshan-Merugu" },
              { Icon: Linkedin, label: "LinkedIn", href: profile.socials.linkedin, handle: "in/roshanmerugu" },
              { Icon: Instagram, label: "Instagram", href: profile.socials.instagram, handle: "@_roshan__patel__07_" },
            ].map(({ Icon, label, href, handle }, i, arr) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center justify-between px-4 py-3 md:py-4 hover:bg-panel transition-colors group ${
                  i < arr.length - 1 ? "border-b border-wire" : ""
                }`}
              >
                <div className="flex items-center gap-3 md:gap-4 min-w-0">
                  <Icon className="size-4 text-text-dim group-hover:text-volt transition-colors flex-shrink-0" />
                  <span className="mono text-xs uppercase tracking-widest text-text-main truncate">{label}</span>
                </div>
                <span className="mono text-[10px] uppercase tracking-widest text-text-dim group-hover:text-volt transition-colors flex-shrink-0 ml-2">
                  {handle} →
                </span>
              </a>
            ))}
          </div>
        </div>

        <form onSubmit={onSubmit} className="md:col-span-2 lg:col-span-7 border border-wire bg-panel p-4 md:p-6 lg:p-8 flex flex-col gap-4 md:gap-6">
          <div className="mono text-[10px] uppercase tracking-widest text-text-dim flex items-center justify-between">
            <span>// new.transmission</span>
            <span className="text-volt flex items-center gap-2 flex-shrink-0">
              <span className="size-1.5 bg-volt rounded-full animate-pulse" />
              ENCRYPTED
            </span>
          </div>

          <Field label="Identifier" required>
            <input
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full bg-transparent border-b border-wire focus:border-volt outline-none py-2 text-text-main placeholder:text-text-mute mono text-sm transition-colors"
              placeholder="your.name"
            />
          </Field>

          <Field label="Return Address" required>
            <input
              required
              type="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full bg-transparent border-b border-wire focus:border-volt outline-none py-2 text-text-main placeholder:text-text-mute mono text-sm transition-colors"
              placeholder="you@domain.dev"
            />
          </Field>


          <Field label="Payload" required>
            <textarea
              required
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full bg-transparent border-b border-wire focus:border-volt outline-none py-2 text-text-main placeholder:text-text-mute mono text-sm resize-none transition-colors"
              placeholder="Describe the project, scope, and timeline..."
            />
          </Field>

          <button
            type="submit"
            disabled={sending}
            className="group relative self-start bg-volt text-void px-6 md:px-7 py-3 md:py-4 mono text-xs uppercase tracking-widest font-bold flex items-center gap-3 overflow-hidden hover:shadow-volt transition-shadow disabled:opacity-60"
          >
            <div className="absolute inset-0 bg-text-main translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            <span className="relative z-10 flex items-center gap-2 md:gap-3">
              {sending ? "Transmitting..." : "Send Transmission"}
              <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform flex-shrink-0" />
            </span>
          </button>
        </form>
      </div>
    </Section>
  );
};

const Field = ({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) => (
  <label className="block">
    <span className="mono text-[10px] uppercase tracking-widest text-text-dim flex items-center gap-2 mb-1">
      {label}
      {required && <span className="text-volt">*</span>}
    </span>
    {children}
  </label>
);
