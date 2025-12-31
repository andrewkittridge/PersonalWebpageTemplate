import { motion } from "framer-motion";
import { GraduationCap, FolderGit2, Link } from "lucide-react";
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
      <div className="page-shell relative z-10 space-y-12">
        <div className="section-heading">
          <p className="section-label">Foundations</p>
          <h2 className="section-title">Training the engineer and the experimenter.</h2>
          <p className="section-description">Academic rigor plus skunkworks projects that keep my approach sharp, curious, and production-ready.</p>
        </div>

        <div className="grid gap-10 lg:grid-cols-2">
          <motion.article
            className="rounded-[28px] border border-white/10 bg-white/5 px-7 py-8 md:px-9 md:py-9 shadow-[0_32px_120px_-90px_rgba(0,0,0,0.9)]"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.95, ease: "easeOut" }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="icon-badge">
                <GraduationCap className="w-5 h-5" />
              </span>
              <h3 className="text-lg font-semibold text-foreground">Education</h3>
            </div>

            <div className="space-y-4 text-muted-foreground">
              <div>
                <p className="text-xl font-semibold text-foreground">
                  {EDUCATION.degree}
                </p>
                <p>
                  {EDUCATION.institution} · {EDUCATION.location}
                </p>
                <p className="text-sm text-muted-foreground/80">
                  {EDUCATION.graduationDate}
                </p>
              </div>
              {EDUCATION.description && (
                <p className="leading-relaxed">{EDUCATION.description}</p>
              )}
            </div>
          </motion.article>

          <motion.article
            className="rounded-[28px] border border-white/10 bg-white/5 px-7 py-8 md:px-9 md:py-9 shadow-[0_32px_120px_-90px_rgba(0,0,0,0.9)]"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.95, delay: 0.1, ease: "easeOut" }}
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="icon-badge">
                <FolderGit2 className="w-5 h-5" />
              </span>
              <h3 className="text-lg font-semibold text-foreground">
                Personal projects
              </h3>
            </div>

            <div className="space-y-6">
              {PERSONAL_PROJECTS.map((project) => (
                <div key={project.title} className="space-y-4">
                  <div>
                    {project.url ? (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-lg font-medium text-foreground hover:text-primary transition-colors"
                      >
                        {project.title}
                        <Link className="w-4 h-4" />
                      </a>
                    ) : (
                      <p className="text-lg font-medium text-foreground">{project.title}</p>
                    )}
                  <p className="text-sm text-muted-foreground/80 mt-1">
                    {project.status}
                  </p>
                </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.highlights.map((highlight) => (
                      <span key={highlight} className="pill-ghost px-3 py-2">
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.article>
        </div>
        <div className="glass-panel grid gap-4 md:grid-cols-3">
          {[
            { title: "Recent learning", detail: "Advancing motion design and data visualization patterns for dashboards." },
            { title: "AI exploration", detail: "LLM-powered prompts and retrieval workflows embedded in React apps." },
            { title: "Ops hygiene", detail: "Documentation-first approach with runbooks, accessibility notes, and analytics events." },
          ].map((item) => (
            <div key={item.title} className="rounded-2xl border border-white/10 bg-black/30 px-4 py-4 space-y-2">
              <p className="text-sm uppercase tracking-[0.26em] text-muted-foreground">{item.title}</p>
              <p className="text-muted-foreground leading-relaxed">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
