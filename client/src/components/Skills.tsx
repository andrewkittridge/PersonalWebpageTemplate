import { motion } from "framer-motion";
import { Code, Server, Layout, Database, Wrench, Shield, Cpu } from "lucide-react";
import { SKILLS_CATEGORIES } from "@/lib/constants";
import { useSectionAnalytics } from "@/hooks/use-section-analytics";

const categoryConfig: Record<string, { icon: JSX.Element; title: string }> = {
  languages: { icon: <Code className="w-5 h-5" />, title: "Programming Languages" },
  backend: { icon: <Server className="w-5 h-5" />, title: "Backend Frameworks & Technologies" },
  frontend: { icon: <Layout className="w-5 h-5" />, title: "Frontend Technologies" },
  database: { icon: <Database className="w-5 h-5" />, title: "Database & Data Management" },
  devops: { icon: <Wrench className="w-5 h-5" />, title: "DevOps & Tools" },
  security: { icon: <Shield className="w-5 h-5" />, title: "Security & Compliance" },
  emerging: { icon: <Cpu className="w-5 h-5" />, title: "Emerging Technologies" },
};

export default function Skills() {
  const sectionRef = useSectionAnalytics<HTMLDivElement>("Skills");

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="section-shell scroll-mt-24"
    >
      <div className="page-shell relative z-10 space-y-16">
        <div className="section-heading">
          <p className="section-label">Skills</p>
          <h2 className="section-title">Technical Skills</h2>
          <p className="section-description">
            Core competencies across the full stack, from backend services to database optimization
            and security compliance.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {Object.entries(SKILLS_CATEGORIES).map(([category, skills], index) => {
            const config = categoryConfig[category] || {
              icon: <Code className="w-5 h-5" />,
              title: category
            };

            return (
              <motion.article
                key={category}
                className="surface-card"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05, ease: "easeOut" }}
              >
                <div className="flex items-center gap-3 mb-5">
                  <span className="icon-badge">
                    {config.icon}
                  </span>
                  <h3 className="text-base font-semibold text-foreground">
                    {config.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span key={skill} className="chip-ghost">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
