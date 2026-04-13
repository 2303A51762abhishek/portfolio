import { motion } from "motion/react";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    title: "ServiceNow Virtual Intern",
    company: "ServiceNow Virtual Internship Program",
    period: "Feb 2026 – Present",
    location: "Remote",
    description: [
      "Gained knowledge of the ServiceNow platform, focusing on ITSM, workflow design, and enterprise service operations.",
      "Worked with ServiceNow tools for incident management, process automation, and workflow configuration."
    ]
  },
  {
    title: "AI Research Intern",
    company: "Knimbus AI Research",
    period: "May 2024 – Jul 2024",
    location: "Remote",
    description: [
      "Gained hands-on experience in AI/ML workflows, including data preprocessing, model training, and evaluation using Python, NumPy, Pandas, and scikit-learn.",
      "Worked on ML tasks involving dataset exploration, supervised learning algorithms, and model optimization through hyperparameter tuning."
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="text-3xl font-bold text-white mb-4">Experience</h2>
            <p className="text-slate-400 max-w-2xl text-lg">
              My professional journey and internships in the tech industry.
            </p>
          </div>
          <div className="text-brand-400 font-mono text-sm font-semibold">
            /work-history
          </div>
        </div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative pl-8 border-l-2 border-white/5 pb-4 last:pb-0"
            >
              <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-brand-500 ring-4 ring-brand-500/10" />
              
              <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                  <div className="flex items-center gap-2 text-brand-400 font-medium">
                    <Briefcase size={16} />
                    {exp.company}
                  </div>
                </div>
                <div className="flex items-center gap-4 text-slate-500 text-sm font-medium">
                  <div className="flex items-center gap-1.5">
                    <Calendar size={14} />
                    {exp.period}
                  </div>
                  <div className="px-2 py-1 rounded bg-white/5 text-slate-400 text-xs">
                    {exp.location}
                  </div>
                </div>
              </div>

              <ul className="space-y-3">
                {exp.description.map((item, i) => (
                  <li key={i} className="text-slate-400 leading-relaxed flex gap-3">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-brand-500/30 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
