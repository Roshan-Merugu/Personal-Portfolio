import { profile } from "@/data/portfolio";

export const Footer = () => {
  return (
    <footer className="border-t border-wire bg-panel">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 md:px-12 lg:px-16 py-8 sm:py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mono text-[10px] uppercase tracking-widest text-text-dim">
        <div className="flex items-center gap-3">
          <span className="size-1.5 bg-volt rounded-full animate-pulse flex-shrink-0" />
          <span className="truncate">{profile.handle} / SYS.ONLINE</span>
        </div>
        <div className="text-center sm:col-span-2 md:col-span-1">
          <span>© {new Date().getFullYear()} {profile.name}. All systems nominal.</span>
        </div>
        <div className="sm:text-right md:col-span-1">
          <a href="#top" className="hover:text-volt transition-colors">Return to top ↑</a>
        </div>
      </div>
    </footer>
  );
};
