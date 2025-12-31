import { motion } from "framer-motion";
import { Rocket, ShieldCheck, Sparkles, Timer, Wrench } from "lucide-react";
import { useSectionAnalytics } from "@/hooks/use-section-analytics";

const principles = [
  {
    title: "Start with physics",
    description:
      "First-principles thinking for architecture choices—measure latency, map dependencies, and avoid cargo-cult patterns.",
    icon: <Rocket className="h-5 w-5 text-primary" aria-hidden />,
  },
  {
    title: "Build the factory",
    description:
      "Design systems, reusable motion, and automation that let teams ship features like an assembly line.",
    icon: <Wrench className="h-5 w-5 text-primary" aria-hidden />,
  },
  {
    title: "Move fast, instrument faster",
    description:
      "Telemetry-first delivery with dashboards, alerts, and logs so every release is observable and debuggable.",
    icon: <Timer className="h-5 w-5 text-primary" aria-hidden />,
  },
  {
    title: "Security is table stakes",
    description:
      "STIG-ready practices, least-privilege defaults, and clear runbooks to keep missions green.",
    icon: <ShieldCheck className="h-5 w-5 text-primary" aria-hidden />,
  },
  {
    title: "Humans stay in the loop",
    description:
      "Autonomy-ready flows that include off-ramps, accessibility, and documentation—no black boxes.",
    icon: <Sparkles className="h-5 w-5 text-primary" aria-hidden />,
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
          <p className="section-label">Operating system</p>
          <h2 className="section-title">Delivery principles for secure systems.</h2>
          <p className="section-description max-w-4xl">
            The constraints that keep delivery sharp: measurable impact, compliance-minded builds, and reliable user experiences.
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
                <span className="h-12 w-12 rounded-2xl border border-white/10 bg-white/5 flex items-center justify-center">
                  {principle.icon}
                </span>
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
