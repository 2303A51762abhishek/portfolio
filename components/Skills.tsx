import { motion } from "motion/react";
import { Code2, Database, Layout, Terminal, BrainCircuit, BookOpen } from "lucide-react";

const skillCategories = [
  {
    title: "Languages",
    icon: <Code2 className="text-blue-500" />,
    skills: ["Java", "Python", "SQL"]
  },
  {
    title: "Frameworks",
    icon: <Layout className="text-purple-500" />,
    skills: ["React", "Spring", "Spring Boot", "Flask"]
  },
  {
    title: "Specialized",
    icon: <BrainCircuit className="text-orange-500" />,
    skills: ["Data Science", "Machine Learning", "AI/ML Workflows"]
  },
  {
    title: "Tools & DB",
    icon: <Database className="text-emerald-500" />,
    skills: ["MySQL", "PostgreSQL", "Docker", "Kubernetes", "Git", "GitHub"]
  },
  {
    title: "Platforms",
    icon: <Terminal className="text-slate-700" />,
    skills: ["Jupyter Notebook", "VS Code", "IntelliJ IDEA"]
  },
  {
    title: "Coursework",
    icon: <BookOpen className="text-rose-500" />,
    skills: ["DSA", "OOP", "Operating Systems"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">Technical Skills</h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            A comprehensive overview of my technical expertise and academic foundation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-white/5 p-6 rounded-2xl border border-white/5 shadow-sm hover:bg-white/[0.08] transition-all"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-white/5 rounded-lg">
                  {category.icon}
                </div>
                <h3 className="font-bold text-white">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span 
                    key={i}
                    className="px-3 py-1.5 bg-white/5 text-slate-300 text-sm font-medium rounded-lg border border-white/5 hover:border-brand-500/50 hover:text-white transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
