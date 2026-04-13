import { motion } from "motion/react";
import { Award, Trophy, CheckCircle2 } from "lucide-react";

const certifications = [
  {
    title: "Oracle Certified Data Science Professional",
    date: "Sep 2025",
    issuer: "Oracle"
  },
  {
    title: "Oracle Certification on AI Foundation",
    date: "Feb 2025",
    issuer: "Oracle"
  },
  {
    title: "AWS Academy Graduate",
    date: "Oct 2025",
    issuer: "AWS"
  },
  {
    title: "Introduction to Deep Learning",
    date: "Oct 2024",
    issuer: "Coursera/DeepLearning.AI"
  }
];

export default function Certifications() {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Accomplishments */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Trophy className="text-orange-500" size={28} />
              <h2 className="text-3xl font-bold text-white">Accomplishments</h2>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white/5 p-8 rounded-3xl border border-white/5 shadow-sm"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="p-3 bg-orange-500/10 rounded-2xl">
                  <Award className="text-orange-500" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">2nd Place & Best Project Award</h3>
                  <p className="text-brand-400 font-medium">Hardware Hackathon 2023, SR University</p>
                </div>
              </div>
              
              <p className="text-slate-400 leading-relaxed mb-6">
                Developed an <span className="text-white font-semibold">AI-powered Smart Footwear Stand</span> integrating embedded systems, intelligent sensing, and software-controlled automation.
              </p>
              
              <div className="flex flex-wrap gap-2">
                {["Embedded Systems", "Intelligent Sensing", "AI Concepts", "Rapid Prototyping"].map((tag, i) => (
                  <span key={i} className="px-3 py-1 bg-white/5 text-slate-500 text-xs font-medium rounded-full border border-white/5">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Certifications */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <CheckCircle2 className="text-brand-500" size={28} />
              <h2 className="text-3xl font-bold text-white">Certifications</h2>
            </div>

            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center justify-between p-4 bg-white/5 rounded-2xl border border-white/5 hover:border-white/10 transition-colors group"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-brand-500/20 transition-colors">
                      <Award size={20} className="text-slate-500 group-hover:text-brand-400" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-sm md:text-base">{cert.title}</h4>
                      <p className="text-slate-500 text-xs">{cert.issuer}</p>
                    </div>
                  </div>
                  <div className="text-slate-500 text-xs font-medium font-mono">
                    {cert.date}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
