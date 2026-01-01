import { motion } from "framer-motion";
import { GraduationCap, ExternalLink } from "lucide-react";
import { EDUCATION, PERSONAL_PROJECTS } from "@/lib/constants";
import { useSectionAnalytics } from "@/hooks/use-section-analytics";

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

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Education Card */}
          <motion.article
            className="surface-card"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="icon-badge">
                <GraduationCap className="w-5 h-5" />
              </span>
              <h3 className="text-lg font-semibold text-foreground">Education</h3>
            </div>

            <div className="space-y-2">
              <p className="text-xl font-semibold text-foreground">
                {EDUCATION.degree}
              </p>
              <p className="text-muted-foreground">
                {EDUCATION.institution}
              </p>
              <p className="text-sm text-muted-foreground/70">
                {EDUCATION.location} · {EDUCATION.graduationDate}
              </p>
            </div>
          </motion.article>

          {/* Personal Projects */}
          {PERSONAL_PROJECTS.map((project, index) => (
            <motion.article
              key={project.title}
              className="surface-card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-foreground">
                    {project.title}
                  </h3>
                  <p className="text-sm text-primary mt-1">
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

              <p className="text-muted-foreground leading-relaxed mb-6">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.highlights.slice(0, 4).map((highlight) => (
                  <span key={highlight} className="chip-ghost text-xs">
                    {highlight.length > 50 ? highlight.substring(0, 47) + "..." : highlight}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
