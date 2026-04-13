import { motion } from "motion/react";
import { ArrowRight, Download, MapPin } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand-500/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 text-slate-300 text-xs font-semibold mb-6 border border-white/10">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
              </span>
              Available for Internships
            </span>
            
            <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight text-white mb-6 leading-tight">
              Mamillapally Abhishek
            </h1>
            
            <p className="text-xl text-slate-400 mb-8 leading-relaxed">
              B.Tech Computer Science student at <span className="text-white font-medium">SR University</span> (2023-2027) with a <span className="text-brand-400 font-bold">9.1 CGPA</span>. 
              Passionate about <span className="text-white font-medium">AI/ML</span>, 
              <span className="text-white font-medium"> Data Science</span>, and 
              <span className="text-white font-medium"> Full Stack Development</span>.
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-12">
              <div className="flex items-center gap-2 text-slate-500 text-sm">
                <MapPin size={16} />
                Hanamkonda, Telangana
              </div>
              <div className="w-1 h-1 rounded-full bg-white/10" />
              <div className="text-slate-500 text-sm font-mono">
                mamillapallyabhishek@gmail.com
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="#projects"
                className="px-8 py-4 bg-white text-black rounded-2xl font-semibold flex items-center gap-2 hover:bg-slate-100 transition-colors shadow-xl shadow-white/5"
              >
                View Projects
                <ArrowRight size={18} />
              </motion.a>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-8 py-4 bg-black text-white border border-white/10 rounded-2xl font-semibold flex items-center gap-2 hover:bg-white/5 transition-colors"
              >
                Download Resume
                <Download size={18} />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
