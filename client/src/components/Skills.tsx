import { motion } from "framer-motion";
import { Code, Server, Layout, Database, Wrench, Shield } from "lucide-react";
import { SKILLS_CATEGORIES } from "@/lib/constants";
import { GlowCard } from "@/components/ui/glow-card";
import { useSectionAnalytics } from "@/hooks/use-section-analytics";
import { depthCardVariants, staggerContainer } from "@/lib/motion-variants";

const categoryConfig: Record<string, { icon: JSX.Element; title: string; wide?: boolean }> = {
  languages: { icon: <Code className="w-5 h-5" />, title: "Programming Languages" },
  backend: { icon: <Server className="w-5 h-5" />, title: "Backend Frameworks & Technologies", wide: true },
  frontend: { icon: <Layout className="w-5 h-5" />, title: "Frontend Technologies" },
  database: { icon: <Database className="w-5 h-5" />, title: "Database & Data Management", wide: true },
  devops: { icon: <Wrench className="w-5 h-5" />, title: "DevOps & Tools" },
  security: { icon: <Shield className="w-5 h-5" />, title: "Security & Compliance" },
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

        {/* Floating skill planes with mouse parallax per card */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
          style={{ perspective: "1000px" }}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {Object.entries(SKILLS_CATEGORIES).map(([category, skills]) => {
            const config = categoryConfig[category] || {
              icon: <Code className="w-5 h-5" />,
              title: category,
            };

            return (
              <motion.div
                key={category}
                className={config.wide ? "md:col-span-2" : ""}
                variants={depthCardVariants}
                style={{ transformStyle: "preserve-3d" }}
              >
                <GlowCard className="p-6 h-full">
                  <div className="flex items-center gap-3 mb-5">
                    <span className="icon-badge">
                      {config.icon}
                    </span>
                    <h3 className="text-base font-semibold text-foreground font-display">
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
                </GlowCard>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
