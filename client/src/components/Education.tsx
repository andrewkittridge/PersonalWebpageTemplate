import { motion } from "framer-motion";
import { GraduationCap, ExternalLink } from "lucide-react";
import { EDUCATION, PERSONAL_PROJECTS } from "@/lib/constants";
import { GlowCard } from "@/components/ui/glow-card";
import { useSectionAnalytics } from "@/hooks/use-section-analytics";
import { depthCardVariants, staggerContainer } from "@/lib/motion-variants";

export default function Education() {
  const sectionRef = useSectionAnalytics<HTMLDivElement>("Education");

  return (
    <section
      ref={sectionRef}
      id="education"
      className="section-shell scroll-mt-24"
    >
      <div className="page-shell relative z-10 space-y-16">
        <div className="section-heading">
          <p className="section-label">Background</p>
          <h2 className="section-title">Education & Projects</h2>
        </div>

        <motion.div
          className="grid gap-8 lg:grid-cols-2"
          style={{ perspective: "1000px" }}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Education Card */}
          <motion.div variants={depthCardVariants}>
            <GlowCard className="p-6 md:p-8 h-full">
              <div className="flex items-center gap-3 mb-6">
                <span className="icon-badge">
                  <GraduationCap className="w-5 h-5" />
                </span>
                <h3 className="text-lg font-semibold text-foreground font-display">Education</h3>
              </div>

              <div className="space-y-2">
                <p className="text-xl font-semibold text-foreground font-display">
                  {EDUCATION.degree}
                </p>
                <p style={{ color: "hsl(var(--muted-foreground))" }}>
                  {EDUCATION.institution}
                </p>
                <p className="text-sm" style={{ color: "hsl(var(--muted-foreground) / 0.7)" }}>
                  {EDUCATION.location} &middot; {EDUCATION.graduationDate}
                </p>
              </div>
            </GlowCard>
          </motion.div>

          {/* Personal Projects — featured at higher z */}
          {PERSONAL_PROJECTS.map((project) => (
            <motion.div
              key={project.title}
              variants={depthCardVariants}
            >
              <GlowCard alwaysGlow className="p-6 md:p-8 h-full">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground font-display">
                      {project.title}
                    </h3>
                    <p className="text-sm gradient-text font-medium mt-1">
                      {project.status}
                    </p>
                  </div>
                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="pill-ghost px-3 py-2 text-xs flex items-center gap-1.5"
                    >
                      View
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>

                <p className="leading-relaxed mb-6" style={{ color: "hsl(var(--muted-foreground))" }}>
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.highlights.slice(0, 4).map((highlight) => (
                    <span key={highlight} className="chip-ghost text-xs">
                      {highlight.length > 50 ? highlight.substring(0, 47) + "..." : highlight}
                    </span>
                  ))}
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
