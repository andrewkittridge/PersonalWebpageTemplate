import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SOCIAL_LINKS } from "@/lib/constants";
import { useSectionAnalytics } from "@/hooks/use-section-analytics";

const aboutData = {
  description: [
    "Full-stack developer crafting modern web apps that pair smooth UI systems with secure, resilient services.",
    "I design component libraries, optimize Spring and Oracle pipelines, and ship experiences that blend motion, accessibility, and analytics.",
    "Secret-cleared and focused on collaboration—mentoring teams, refining delivery practices, and prototyping AI-powered flows.",
  ],
};

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
            "radial-gradient(1100px at 86% 16%, rgba(41,189,255,0.2), transparent 60%), radial-gradient(820px at 16% 60%, rgba(143,96,255,0.16), transparent 52%)",
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
              Modern web experiences, engineered end-to-end.
            </h2>
            <p className="section-description">
              Design-forward interfaces with reliable, instrumented back ends. Every project blends component systems, data-driven APIs, and a focus on performance.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-[1.05fr_0.95fr]">
            <div className="rounded-[32px] border border-white/10 bg-white/5 px-7 py-8 md:px-10 md:py-10 space-y-6 shadow-[0_35px_120px_-80px_rgba(0,0,0,0.85)]">
              {aboutData.description.map((paragraph, index) => (
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
                <p className="text-xs uppercase tracking-[0.26em] text-muted-foreground">What&apos;s in focus</p>
                <p className="text-lg font-semibold text-foreground">Design systems, real-time dashboards, and secure APIs that teams can extend quickly.</p>
              </div>
              <div className="surface-card space-y-3">
                <p className="text-xs uppercase tracking-[0.26em] text-muted-foreground">Delivery style</p>
                <p className="text-muted-foreground leading-relaxed">
                  Collaborative, instrumentation-first, and opinionated about accessibility. I map user journeys, wire up analytics, and keep pipelines fast.
                </p>
              </div>
              <div className="stat-card flex items-center justify-between">
                <div className="space-y-1">
                  <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">Years shipping</p>
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
              Experience <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
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
              Skills
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
          {[
            { title: "UI Platform", body: "Design tokens, theming, and motion patterns that keep screens consistent.", icon: "🎨" },
            { title: "APIs & Data", body: "REST and event-driven services with observability and traceability baked in.", icon: "🛰️" },
            { title: "Security", body: "STIG-compliant delivery with an active Secret clearance and zero-trust mindset.", icon: "🔒" },
          ].map((item) => (
            <div key={item.title} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4">
              <p className="text-xl">{item.icon}</p>
              <p className="mt-3 text-lg font-semibold text-foreground">{item.title}</p>
              <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{item.body}</p>
            </div>
          ))}
        </motion.article>
      </div>
    </section>
  );
}
