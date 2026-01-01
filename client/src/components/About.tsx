import { motion } from "framer-motion";
import { useSectionAnalytics } from "@/hooks/use-section-analytics";

export default function About() {
  const sectionRef = useSectionAnalytics<HTMLDivElement>("About");

  return (
    <section
      ref={sectionRef}
      id="about"
      aria-labelledby="about-heading"
      className="section-shell scroll-mt-24"
    >
      <div className="page-shell relative z-10">
        <motion.article
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="section-heading">
            <p className="section-label">About</p>
            <h2 id="about-heading" className="section-title">
              Professional Summary
            </h2>
          </div>

          <div className="glass-panel max-w-4xl space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Accomplished Full-Stack Java Developer with over 8 years of experience designing,
              developing, and deploying mission-critical enterprise applications for the U.S. Marine
              Corps and federal agencies.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Expertise in Java/Spring Boot ecosystems for backend services, coupled with frontend
              proficiency in JavaScript frameworks and Oracle PL/SQL for database-driven solutions.
              Skilled in modernizing legacy systems to microservices architectures, ensuring STIG
              compliance, and integrating AI capabilities in Agile/DevOps pipelines.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Active Secret Security Clearance holder, focused on delivering scalable, secure, and
              performant systems that support operational excellence in high-stakes environments.
            </p>
          </div>

          {/* Key Highlights */}
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 max-w-4xl">
            {[
              { label: "Enterprise Systems", value: "MROWS, MCPDT, DTMS" },
              { label: "Primary Stack", value: "Java / Spring Boot" },
              { label: "Database", value: "Oracle SQL / PL/SQL" },
              { label: "Clearance", value: "Active Secret" },
            ].map((item) => (
              <div key={item.label} className="stat-card">
                <p className="text-xs uppercase tracking-wider text-muted-foreground/70">
                  {item.label}
                </p>
                <p className="text-base font-medium text-foreground mt-1">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
        </motion.article>
      </div>
    </section>
  );
}
