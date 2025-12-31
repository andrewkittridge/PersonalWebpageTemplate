import { motion } from "framer-motion";
import { BarChart3, Cpu, Layers, ShieldCheck, Workflow } from "lucide-react";
import { SKILLS_CATEGORIES } from "@/lib/constants";
import { useSectionAnalytics } from "@/hooks/use-section-analytics";

const categoryIcons: Record<string, JSX.Element> = {
  programming: <Cpu className="w-5 h-5" />,
  webTech: <Layers className="w-5 h-5" />,
  database: <BarChart3 className="w-5 h-5" />,
  tools: <ShieldCheck className="w-5 h-5" />,
  personalProjects: <Workflow className="w-5 h-5" />,
};

const categoryTitles: Record<string, string> = {
  programming: "Programming Languages",
  webTech: "Web Technologies",
  database: "Database Technologies",
  tools: "Tools & Methodologies",
  personalProjects: "Personal Project Technologies",
};

export default function Skills() {
  const sectionRef = useSectionAnalytics<HTMLDivElement>("Skills");

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="section-shell scroll-mt-24"
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(980px at 50% 10%, rgba(41,189,255,0.22), transparent 55%)",
        }}
        aria-hidden
      />

      <div className="page-shell relative z-10 space-y-12">
        <div className="section-heading">
          <p className="section-label">Technical Skills</p>
          <h2 className="section-title">Skills tuned for modern product delivery.</h2>
          <p className="section-description">Systems thinking, UI craft, and performance-minded engineering for secure, data-heavy web apps.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {Object.entries(SKILLS_CATEGORIES).map(([category, skills], index) => (
            <motion.article
              key={category}
              className="rounded-[26px] border border-white/10 bg-white/5 px-6 py-7 md:px-7 md:py-8 shadow-[0_32px_110px_-90px_rgba(0,0,0,0.9)]"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: index * 0.06, ease: "easeOut" }}
            >
              <div className="flex items-center justify-between gap-3 mb-5">
                <div className="flex items-center gap-3">
                  <span className="icon-badge">
                    {categoryIcons[category] ?? <Cpu className="w-5 h-5" />}
                  </span>
                  <h3 className="text-lg font-semibold text-foreground">
                    {categoryTitles[category] || category}
                  </h3>
                </div>
                <span className="chip-ghost">{skills.length} items</span>
              </div>

              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span key={skill} className="pill-ghost px-3 py-2">
                    {skill.replace(" (expert-level)", "").replace(" (advanced)", "")}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>

        <div className="glass-panel grid gap-4 md:grid-cols-3">
          {[
            { title: "Front-end", items: ["Design tokens", "Animation systems", "Accessibility", "Performance budgets"] },
            { title: "Back-end", items: ["Spring Boot", "REST & SOAP", "Oracle SQL tuning", "Observability"] },
            { title: "Collaboration", items: ["Mentorship", "Agile delivery", "Docs & runbooks", "Analytics wiring"] },
          ].map((group) => (
            <div key={group.title} className="rounded-2xl border border-white/10 bg-black/30 px-4 py-4 space-y-3">
              <p className="text-sm uppercase tracking-[0.26em] text-muted-foreground">{group.title}</p>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span key={item} className="pill-ghost px-3 py-2 text-xs md:text-sm">
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
