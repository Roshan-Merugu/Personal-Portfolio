import { profile } from "@/data/portfolio";

export const Footer = () => {
  return (
    <footer className="border-t border-wire bg-panel">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 py-10 grid grid-cols-1 md:grid-cols-3 gap-6 mono text-[10px] uppercase tracking-widest text-text-dim">
        <div className="flex items-center gap-3">
          <span className="size-1.5 bg-volt rounded-full animate-pulse" />
          <span>{profile.handle} / SYS.ONLINE</span>
        </div>
        <div className="text-center">
          <span>© {new Date().getFullYear()} {profile.name}. All systems nominal.</span>
        </div>
        <div className="md:text-right">
          <a href="#top" className="hover:text-volt transition-colors">Return to top ↑</a>
        </div>
      </div>
    </footer>
  );
};
