import { motion } from "framer-motion";
import { useSectionAnalytics } from "@/hooks/use-section-analytics";

const principles = [
  {
    title: "Design for systems",
    description:
      "Component libraries, design tokens, and motion guidelines keep every screen consistent across the product surface.",
  },
  {
    title: "Optimize for performance",
    description:
      "Query tuning, caching, and budget-driven UI decisions deliver fast responses and smooth experiences.",
  },
  {
    title: "Deliver securely",
    description:
      "STIG-compliant pipelines, least-privilege defaults, and observability guardrails ensure trust at every release.",
  },
  {
    title: "Elevate teams",
    description:
      "Mentorship, documentation, and analytics wiring help teams launch confidently and measure what matters.",
  },
];

export default function Principles() {
  const sectionRef = useSectionAnalytics<HTMLDivElement>("Principles");

  return (
    <section
      ref={sectionRef}
      id="principles"
      className="section-shell scroll-mt-24"
    >
      <div className="page-shell relative z-10 space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.05, ease: "easeOut" }}
          className="section-heading"
        >
          <p className="section-label">Focus</p>
          <h2 className="section-title">Principles shaped for modern product teams.</h2>
          <p className="section-description max-w-4xl">
            Methods drawn directly from resume projects: systems-level UX, measurable performance, secure delivery, and collaborative documentation.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {principles.map((principle, index) => (
            <motion.article
              key={principle.title}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: index * 0.04, ease: "easeOut" }}
              className="rounded-[30px] border border-white/10 bg-white/5 px-8 py-9 md:px-10 md:py-11 shadow-[0_32px_120px_-90px_rgba(0,0,0,0.9)]"
            >
              <div className="flex items-start gap-4">
                <span className="h-10 w-1.5 rounded-full bg-gradient-to-b from-primary via-accent to-primary/80 mt-1" aria-hidden />
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-foreground">{principle.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{principle.description}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
