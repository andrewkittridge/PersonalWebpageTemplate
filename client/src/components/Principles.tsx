import { motion } from "framer-motion";
import { useSectionAnalytics } from "@/hooks/use-section-analytics";

const principles = [
  {
    title: "Calm execution",
    description:
      "Plan tightly, ship quietly. Releases move on cadence without noisy surprises, even when timelines compress.",
  },
  {
    title: "Security as posture",
    description:
      "Compliance is baked in early—STIG, access controls, and observability are part of the plan, not a late-phase add-on.",
  },
  {
    title: "Operator empathy",
    description:
      "Every change reduces friction for the Marines, analysts, and support teams who depend on the workflow daily.",
  },
  {
    title: "Measured modernity",
    description:
      "Use proven patterns, tune performance, and adopt tech only when it keeps the mission online and maintainable.",
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
          <p className="section-label">Story</p>
          <h2 className="section-title">Principles that keep delivery steady.</h2>
          <p className="section-description max-w-4xl">
            A few pillars guide how I lead projects from discovery through sustainment—quiet confidence, clear ownership, and respect for the operators depending on the software.
          </p>
        </motion.div>

        <div className="space-y-10">
          {principles.map((principle, index) => (
            <motion.article
              key={principle.title}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: index * 0.04, ease: "easeOut" }}
              className="rounded-[30px] border border-white/10 bg-transparent px-8 py-9 md:px-10 md:py-11"
            >
              <div className="flex items-baseline gap-4">
                <span className="h-px w-10 bg-primary/60" aria-hidden />
                <div className="space-y-3">
                  <h3 className="text-2xl font-semibold text-foreground">{principle.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {principle.description}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
