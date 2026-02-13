import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { EXPERIENCE } from "@/lib/constants";
import { GlowCard } from "@/components/ui/glow-card";
import { useSectionAnalytics } from "@/hooks/use-section-analytics";

export default function Experience() {
  const sectionRef = useSectionAnalytics<HTMLDivElement>("Experience");

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="section-shell scroll-mt-24"
    >
      <div className="page-shell relative z-10 space-y-16">
        <div className="section-heading">
          <p className="section-label">Experience</p>
          <h2 className="section-title">Professional Experience</h2>
          <p className="section-description">
            Over 8 years of full-stack development experience delivering enterprise applications
            for the U.S. Marine Corps and federal agencies.
          </p>
        </div>

        <div className="space-y-8">
          {EXPERIENCE.map((exp, index) => (
            <motion.div
              key={exp.title + exp.company}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
            >
              <GlowCard className="p-6 md:p-8 border-l-2 border-l-transparent" style={{ borderImage: "linear-gradient(to bottom, #8B5CF6, #22D3EE) 1" }}>
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <span className="icon-badge flex-shrink-0 mt-1">
                      <Briefcase className="w-5 h-5" />
                    </span>
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">
                        {exp.title}
                      </h3>
                      <p className="gradient-text font-medium mt-1">
                        {exp.company}
                      </p>
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground sm:text-right">
                    <p>{exp.location}</p>
                    <p className="text-muted-foreground/70">{exp.period}</p>
                  </div>
                </div>

                <div className="divider my-6" />

                {/* Achievements */}
                <ul className="space-y-4">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex gap-4 text-muted-foreground leading-relaxed">
                      <span className="gradient-dot mt-2" />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </GlowCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
