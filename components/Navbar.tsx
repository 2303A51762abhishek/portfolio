import { motion } from "motion/react";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4"
    >
      <div className="glass px-6 py-3 rounded-full flex items-center gap-8 shadow-2xl shadow-black">
        <a href="#home" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Home</a>
        <a href="#experience" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Experience</a>
        <a href="#skills" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Skills</a>
        <a href="#projects" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">Projects</a>
        <div className="w-px h-4 bg-white/10" />
        <div className="flex items-center gap-4">
          <a href="https://github.com" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">
            <Github size={18} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">
            <Linkedin size={18} />
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
