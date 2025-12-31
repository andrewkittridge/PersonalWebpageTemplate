import { motion } from "framer-motion";
import { ArrowUpRight, Rocket, Sparkles, Wifi, Zap } from "lucide-react";
import { SOCIAL_LINKS } from "@/lib/constants";
import { useSectionAnalytics } from "@/hooks/use-section-analytics";

const signalGrid = [
  { title: "Systems over pages", description: "Design tokens, motion libraries, and reusable flows—built once, scaled everywhere.", icon: <Sparkles className="h-4 w-4 text-primary" /> },
  { title: "Speed as a feature", description: "Performance budgets, async pipelines, and careful data loading keep UIs below the 180ms line.", icon: <Zap className="h-4 w-4 text-primary" /> },
  { title: "Secure by default", description: "STIG-ready delivery, observability, and least-privilege access across services.", icon: <Rocket className="h-4 w-4 text-primary" /> },
];

export default function About() {
  const sectionRef = useSectionAnalytics<HTMLDivElement>("About");

  return (
    <section
      ref={sectionRef}
      id="about"
      aria-labelledby="about-heading"
      className="section-shell scroll-mt-24"
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(1100px at 86% 16%, rgba(124,249,255,0.2), transparent 60%), radial-gradient(820px at 16% 60%, rgba(255,111,207,0.14), transparent 52%)",
        }}
        aria-hidden
      />

      <div className="page-shell relative z-10 grid gap-12 items-start">
        <motion.article
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, ease: "easeOut" }}
          className="space-y-10"
        >
          <div className="section-heading">
            <p className="section-label">Profile</p>
            <h2 id="about-heading" className="section-title">
              SpaceX-inspired rigor, applied to modern web apps.
            </h2>
            <p className="section-description">
              Full-stack engineer building reactive interfaces and resilient Spring services that feel like a control room. I mix first-principles thinking with practical delivery so teams can ship fast, securely, and with confidence.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-[1.05fr_0.95fr]">
            <div className="rounded-[32px] border border-white/10 bg-white/5 px-7 py-8 md:px-10 md:py-10 space-y-6 shadow-[0_35px_120px_-80px_rgba(0,0,0,0.85)]">
              {[
                "I architect component systems, motion libraries, and analytics-ready flows that keep experiences cohesive across platforms.",
                "On the back end, I tune Spring Boot and Oracle SQL for latency, traceability, and scale—pairing APIs with the telemetry needed to prove they perform.",
                "Secret-cleared and comfortable in regulated spaces, I document, mentor, and automate so teams can deliver like a launch crew.",
              ].map((paragraph, index) => (
                <p
                  key={paragraph}
                  className={`text-muted-foreground leading-relaxed ${index > 0 ? "border-t border-white/10 pt-6" : ""}`}
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="grid gap-4">
              <div className="glass-panel space-y-2">
                <p className="text-xs uppercase tracking-[0.26em] text-muted-foreground">Operating mode</p>
                <p className="text-lg font-semibold text-foreground">Build fast, measure everything, and keep humans in the loop.</p>
              </div>
              <div className="surface-card space-y-3">
                <p className="text-xs uppercase tracking-[0.26em] text-muted-foreground">Delivery style</p>
                <p className="text-muted-foreground leading-relaxed">
                  Collaborative by default with flight checklists, observability hooks, and calm motion. If a feature isn&apos;t measurable, it doesn&apos;t ship.
                </p>
              </div>
              <div className="stat-card flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">Years in orbit</p>
                  <p className="text-2xl font-semibold text-foreground">7+</p>
                </div>
                <div className="space-y-1 text-right">
                  <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">Environments</p>
                  <p className="text-sm text-muted-foreground">Enterprise · Gov · Product</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <a href="#experience" className="pill-solid">
              Mission log <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
            </a>
            <a
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noreferrer"
              className="pill-ghost"
            >
              GitHub
            </a>
            <a
              href="#skills"
              className="pill-ghost"
            >
              Systems stack
              <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
            </a>
          </div>
        </motion.article>

        <motion.article
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.05, delay: 0.05, ease: "easeOut" }}
          className="glass-panel grid gap-4 md:grid-cols-3"
        >
          {signalGrid.map((item) => (
            <div key={item.title} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4">
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-muted-foreground">
                {item.icon}
                Signal
              </div>
              <p className="mt-3 text-lg font-semibold text-foreground">{item.title}</p>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{item.description}</p>
            </div>
          ))}
          <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4">
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-muted-foreground">
              <Wifi className="h-4 w-4 text-primary" />
              Now playing
            </div>
            <p className="mt-3 text-lg font-semibold text-foreground">Autonomy-ready UIs</p>
            <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
              Rapid prototyping with LLM-driven flows, fallback paths, and observability to know what&apos;s working.
            </p>
          </div>
        </motion.article>
      </div>
    </section>
  );
}
