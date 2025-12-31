import { motion } from "framer-motion";
import { useSectionAnalytics } from "@/hooks/use-section-analytics";

const principles = [
  {
    title: "Story before spend",
    description:
      "We nail the narrative, ICP, and offer before pouring budget into channels. The clearest story wins attention and trust.",
  },
  {
    title: "Full-funnel ownership",
    description:
      "From website to lifecycle to sales enablement, one team owns the connective tissue so handoffs don&apos;t stall momentum.",
  },
  {
    title: "Proof fast, then scale",
    description:
      "We ship small, measure quickly, and only scale what works. Leaders see signal every week, not once a quarter.",
  },
  {
    title: "Calm, secure delivery",
    description:
      "Many clients are regulated or mission-driven. We respect that with compliant workflows, crisp comms, and predictable release cadence.",
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
          <p className="section-label">Approach</p>
          <h2 className="section-title">How we keep growth honest.</h2>
          <p className="section-description max-w-4xl">
            The framework we use to keep campaigns strategic, measurable, and respectful of the operators, stakeholders, and customers who rely on them.
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
