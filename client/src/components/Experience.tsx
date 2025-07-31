import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { EXPERIENCE } from "@/lib/constants";
import { useSectionAnalytics } from "@/hooks/use-section-analytics";

export default function Experience() {
  const sectionRef = useSectionAnalytics<HTMLDivElement>('Experience');

  return (
    <section ref={sectionRef}>
      {/* Typography-focused header */}
      <div className="text-center content-spacing">
        <h2 className="text-4xl md:text-5xl font-light tracking-tight text-foreground">
          Experience
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Professional career highlights and impactful contributions in Java development and enterprise applications.
        </p>
      </div>

      {/* Simplified timeline layout */}
      <div className="space-y-12">
        {EXPERIENCE.map((exp, index) => (
          <motion.article
            key={index}
            className="minimal-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
          >
            <div className="space-y-4">
              {/* Header with minimal styling */}
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <Briefcase className="w-5 h-5 text-muted-foreground" />
                  <h3 className="text-xl font-medium text-foreground">{exp.title}</h3>
                </div>
                <p className="text-muted-foreground">
                  {exp.company} | {exp.location}
                </p>
                <p className="text-sm text-muted-foreground/70">{exp.period}</p>
              </div>

              {/* Content with generous spacing */}
              <div className="space-y-3">
                <ul className="space-y-2 text-muted-foreground leading-relaxed">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-muted-foreground/50 mt-2">•</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
