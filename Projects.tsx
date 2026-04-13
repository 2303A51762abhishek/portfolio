import { motion } from "motion/react";
import { Github, ExternalLink, Code2, Layers } from "lucide-react";

const projects = [
  {
    title: "Civic Issue Reporting System",
    date: "Nov 2025",
    description: "A mobile-first civic issue reporting platform for users to submit complaints like potholes, garbage, and streetlight failures with descriptions and location details.",
    tech: ["Flask", "Python", "MySQL", "SQLAlchemy"],
    features: [
      "Engineered backend using Flask and SQLAlchemy ORM",
      "Implemented Flask-Login authentication",
      "Real-time admin dashboard for issue tracking"
    ],
    links: {
      github: "#",
      demo: "#"
    }
  },
  {
    title: "Veloce Car Rental",
    date: "Aug 2025",
    description: "A full-stack car rental web application enabling users to browse vehicles, book rentals, and manage reservations with secure authentication.",
    tech: ["Spring Boot", "React", "PostgreSQL", "Docker"],
    features: [
      "Spring Boot (Java) for backend APIs",
      "React for modern user interface",
      "Role-based access control and database persistence",
      "Containerized using Docker for scalable deployment"
    ],
    links: {
      github: "#",
      demo: "#"
    }
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <h2 className="text-3xl font-bold text-white mb-4">Featured Projects</h2>
            <p className="text-slate-400 max-w-2xl text-lg">
              Building scalable applications and solving real-world problems.
            </p>
          </div>
          <div className="text-brand-400 font-mono text-sm font-semibold">
            /repositories
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white/5 rounded-3xl overflow-hidden border border-white/5 hover:border-white/10 transition-all"
            >
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-white/5 rounded-xl shadow-sm">
                      <Code2 size={20} className="text-brand-400" />
                    </div>
                    <span className="text-slate-500 text-sm font-medium">{project.date}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <a href={project.links.github} className="p-2 bg-white/5 rounded-full shadow-sm hover:text-white transition-colors">
                      <Github size={18} />
                    </a>
                    <a href={project.links.demo} className="p-2 bg-white/5 rounded-full shadow-sm hover:text-white transition-colors">
                      <ExternalLink size={18} />
                    </a>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-brand-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-slate-400 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="space-y-3 mb-8">
                  {project.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm text-slate-500">
                      <div className="w-1 h-1 rounded-full bg-brand-500/50" />
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, i) => (
                    <span key={i} className="px-3 py-1 bg-white/5 text-slate-400 text-xs font-semibold rounded-full border border-white/5">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
