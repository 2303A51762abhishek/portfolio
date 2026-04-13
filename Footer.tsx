import { Mail, Github, Linkedin, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-12 bg-black border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <div className="text-2xl font-bold text-white mb-2">
              Abhishek<span className="text-brand-500">.</span>
            </div>
            <p className="text-slate-500 text-sm">
              Building the future with code and intelligence.
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a href="mailto:mamillapallyabhishek@gmail.com" className="text-slate-400 hover:text-white transition-colors">
              <Mail size={20} />
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">
              <Github size={20} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-slate-500 text-xs font-medium uppercase tracking-widest">
          <div>© 2026 Mamillapally Abhishek</div>
          <div className="flex items-center gap-1">
            Made with <Heart size={12} className="text-rose-500 fill-rose-500" /> in Telangana
          </div>
        </div>
      </div>
    </footer>
  );
}
