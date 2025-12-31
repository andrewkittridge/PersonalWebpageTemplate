import { motion } from "framer-motion";
import { BarChart3, Compass, Handshake, PenTool, Rocket } from "lucide-react";
import { SKILLS_CATEGORIES } from "@/lib/constants";
import { useSectionAnalytics } from "@/hooks/use-section-analytics";

const categoryIcons: Record<string, JSX.Element> = {
  strategy: <Compass className="w-5 h-5" />,
  growth: <Rocket className="w-5 h-5" />,
  content: <PenTool className="w-5 h-5" />,
  analytics: <BarChart3 className="w-5 h-5" />,
  enablement: <Handshake className="w-5 h-5" />,
};

const categoryTitles: Record<string, string> = {
  strategy: "Positioning + Offer",
  growth: "Lifecycle + Demand",
  content: "Narrative + Creative",
  analytics: "Attribution + Insight",
  enablement: "Sales Enablement",
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
          <h2 className="section-title">Everything needed to win a market.</h2>
          <p className="section-description">
            Positioning, campaigns, creative, and RevOps hygiene—delivered by one crew so decisions get made faster and impact shows up in the numbers.
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
                    {categoryIcons[category] ?? <Compass className="w-5 h-5" />}
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
