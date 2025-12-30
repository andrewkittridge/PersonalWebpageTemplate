import { motion } from "framer-motion";
import { Code, Globe, Database, Wrench, User } from "lucide-react";
import { SKILLS_CATEGORIES } from "@/lib/constants";
import { useSectionAnalytics } from "@/hooks/use-section-analytics";

const categoryIcons: Record<string, JSX.Element> = {
  languages: <Code className="w-5 h-5" />,
  webTechnologies: <Globe className="w-5 h-5" />,
  database: <Database className="w-5 h-5" />,
  tools: <Wrench className="w-5 h-5" />,
  personal: <User className="w-5 h-5" />,
};

const categoryTitles: Record<string, string> = {
  languages: "Languages",
  webTechnologies: "Web Technologies",
  database: "Data & Storage",
  tools: "Tooling & Delivery",
  personal: "Emerging Tech",
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
            "radial-gradient(900px at 50% 8%, rgba(224,180,120,0.24), transparent 55%)",
        }}
        aria-hidden
      />

      <div className="page-shell relative z-10 space-y-12">
        <div className="section-heading">
          <p className="section-label">Capabilities</p>
          <h2 className="section-title">Build systems that stay online.</h2>
          <p className="section-description">
            JVM performance tuning, secure Spring services, and resilient front-ends combine
            with pragmatic delivery so teams keep shipping without drama.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {Object.entries(SKILLS_CATEGORIES).map(([category, skills], index) => (
            <motion.article
              key={category}
              className="rounded-[26px] border border-white/10 bg-transparent px-6 py-7 md:px-7 md:py-8"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: index * 0.06, ease: "easeOut" }}
            >
              <div className="flex items-center justify-between gap-3 mb-5">
                <div className="flex items-center gap-3">
                  <span className="icon-badge">
                    {categoryIcons[category] ?? <Code className="w-5 h-5" />}
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
      </div>
    </section>
  );
}
