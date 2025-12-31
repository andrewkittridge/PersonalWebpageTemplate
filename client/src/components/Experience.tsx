import { motion } from "framer-motion";
import { ArrowUpRight, Briefcase } from "lucide-react";
import { EXPERIENCE } from "@/lib/constants";
import { useSectionAnalytics } from "@/hooks/use-section-analytics";

export default function Experience() {
  const sectionRef = useSectionAnalytics<HTMLDivElement>("Experience");

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="section-shell scroll-mt-24"
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(1100px at 72% 42%, rgba(124,249,255,0.16), transparent 52%)",
        }}
        aria-hidden
      />

      <div className="page-shell relative z-10 space-y-12">
        <div className="section-heading">
          <p className="section-label">Mission log</p>
          <h2 className="section-title">Shipping with an enterprise delivery mindset.</h2>
          <p className="section-description">Modernization, secure delivery, and data-rich interfaces—stories from building systems that have to work on day one.</p>
        </div>

        <div className="grid gap-8">
          {EXPERIENCE.map((exp, index) => {
            const midpoint = Math.ceil(exp.achievements.length / 2);
            const highlights = exp.achievements.slice(0, midpoint);
            const impact = exp.achievements.slice(midpoint);

            return (
            <motion.article
              key={exp.title}
              className="relative overflow-hidden rounded-[30px] border border-white/10 bg-white/5 p-7 lg:p-8 shadow-[0_30px_120px_-90px_rgba(0,0,0,0.9)]"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: index * 0.06, ease: "easeOut" }}
            >
              <div className="flex flex-wrap items-center gap-3">
                <span className="icon-badge">
                  <Briefcase className="w-4 h-4" />
                </span>
                <h3 className="text-xl font-semibold text-foreground">{exp.title}</h3>
                {exp.url && (
                  <a
                    href={exp.url}
                    target="_blank"
                    rel="noreferrer"
                    className="pill-ghost px-3 py-2 text-xs md:text-sm inline-flex items-center gap-1"
                  >
                    App Store
                    <ArrowUpRight className="w-3.5 h-3.5" aria-hidden />
                  </a>
                )}
              </div>

              <div className="mt-3 flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.26em] text-muted-foreground/80">
                <span className="chip-ghost">{exp.company}</span>
                <span className="text-muted-foreground/70">{exp.location}</span>
                <span className="text-muted-foreground/60">•</span>
                <span className="text-muted-foreground/70">{exp.period}</span>
              </div>

              <div className="h-px w-full bg-white/10 my-6" />

              <div className="grid gap-4 md:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-black/30 px-4 py-4">
                  <p className="text-xs uppercase tracking-[0.28em] text-muted-foreground">Highlights</p>
                  <ul className="mt-3 space-y-3 text-muted-foreground leading-relaxed">
                    {(highlights.length ? highlights : exp.achievements).map((achievement) => (
                      <li key={achievement} className="flex gap-3">
                        <span className="mt-2 h-px w-8 rounded-full bg-primary/60" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/30 px-4 py-4">
                  <p className="text-xs uppercase tracking-[0.28em] text-muted-foreground">Impact</p>
                  <ul className="mt-3 space-y-3 text-muted-foreground leading-relaxed">
                    {(impact.length ? impact : highlights).map((achievement) => (
                      <li key={achievement} className="flex gap-3">
                        <span className="mt-2 h-px w-8 rounded-full bg-accent/70" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/30 px-4 py-4 space-y-3">
                  <p className="text-xs uppercase tracking-[0.28em] text-muted-foreground">Toolkit</p>
                  <p className="text-muted-foreground leading-relaxed">
                    Java · Spring · Oracle SQL · React · DevOps · Accessibility
                  </p>
                </div>
              </div>
            </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
