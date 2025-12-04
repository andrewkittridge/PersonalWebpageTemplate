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
            "radial-gradient(1100px at 78% 48%, rgba(255,255,255,0.16), transparent 52%)",
        }}
        aria-hidden
      />

      <div className="page-shell relative z-10 space-y-12">
        <div className="section-heading">
          <p className="section-label">Impact</p>
          <h2 className="section-title">Understand the mission. Deliver the release.</h2>
          <p className="section-description">
            Federal-grade reliability with teams that stay calm under pressure. Here&apos;s how I operate.
          </p>
        </div>

        <div className="grid gap-6">
          {EXPERIENCE.map((exp, index) => (
            <motion.article
              key={exp.title}
              className="relative overflow-hidden rounded-[30px] border border-white/10 bg-gradient-to-br from-white/5 via-white/5 to-white/0 p-6 lg:p-7 backdrop-blur"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.08, ease: "easeOut" }}
            >
              <div className="absolute inset-0 pointer-events-none opacity-60" style={{ background: "radial-gradient(700px at 90% 40%, rgba(224,180,120,0.18), transparent 55%)" }} />

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

              <div className="divider my-5" />

              <ul className="space-y-3 text-muted-foreground leading-relaxed">
                {exp.achievements.map((achievement) => (
                  <li key={achievement} className="flex gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-primary/60" />
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
