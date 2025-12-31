import { motion } from "framer-motion";
import { useSectionAnalytics } from "@/hooks/use-section-analytics";

const principles = [
  {
    title: "Modernize legacy systems",
    description:
      "Transition Struts-based applications to Spring to strengthen scalability and maintainability for enterprise environments.",
  },
  {
    title: "Optimize for performance",
    description:
      "Refactor Oracle SQL and indexing strategies to reduce execution times and keep mission-critical applications responsive.",
  },
  {
    title: "Deliver securely",
    description:
      "Build STIG-compliant solutions with an active Secret Security Clearance to safeguard operations and reduce vulnerabilities.",
  },
  {
    title: "Elevate teams",
    description:
      "Mentor developers in Spring and Agile practices to accelerate onboarding and sustain collaborative, high-performing teams.",
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
          <h2 className="section-title">Principles shaped by enterprise delivery.</h2>
          <p className="section-description max-w-4xl">
            Methods drawn directly from resume projects: modernization, performance tuning, security, and mentorship.
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
