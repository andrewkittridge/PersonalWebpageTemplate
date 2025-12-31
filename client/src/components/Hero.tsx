import { motion } from "framer-motion";
import { useMemo } from "react";
import { Activity, ArrowDownRight, ArrowUpRight, Database, Layers, ShieldCheck, Sparkles, Zap, Globe2, Rocket, Shield } from "lucide-react";
import { SOCIAL_LINKS } from "@/lib/constants";

const impactStack = [
  {
    title: "Design systems",
    status: "UI platform",
    metric: "Consistency up 25%",
    load: 25,
    detail: "Rolled out component tokens and accessibility-first patterns across apps.",
  },
  {
    title: "Performance tuning",
    status: "Back end",
    metric: "P99 ↓ 38%",
    load: 38,
    detail: "Refined Spring pipelines and Oracle indexes for responsive dashboards.",
  },
  {
    title: "Modern web UX",
    status: "Product",
    metric: "CSAT +18",
    load: 18,
    detail: "Rebuilt enterprise journeys with React, animations, and zero-friction flows.",
  },
  {
    title: "Secure delivery",
    status: "Compliance",
    metric: "Incidents 0",
    load: 19,
    detail: "Hardened STIG-compliant services with audit-ready observability.",
  },
];

export default function Hero() {
  const totalLoad = useMemo(
    () => Math.round(impactStack.reduce((acc, item) => acc + item.load, 0) / impactStack.length),
    [],
  );

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative isolate overflow-hidden min-h-[90vh] pt-28 pb-12 lg:pb-20 flex items-center"
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(1200px at 78% 30%, rgba(41,189,255,0.22), transparent 55%), radial-gradient(980px at 18% 68%, rgba(143,96,255,0.18), transparent 50%)",
        }}
        aria-hidden
      />
      <div className="beam beam--tight" aria-hidden />
      <div className="grid-line" aria-hidden />
      <div className="mission-grid" aria-hidden />

      <div className="page-shell relative z-10 grid gap-14 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] items-center">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.05, ease: "easeOut" }}
          className="space-y-8 console-pane"
        >
          <div className="flex flex-wrap items-center gap-3">
            <div className="module-chrome">
              <Shield className="h-4 w-4 text-primary" />
              Modern Web Platform · Enterprise ready
            </div>
            <div className="chip-ghost text-xs">
              <Zap className="h-4 w-4 text-primary" aria-hidden />
              Real-time UI
            </div>
          </div>

          <header className="space-y-5">
            <p className="section-label">Andrew Kittridge</p>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-primary/80">
                <Activity className="h-4 w-4" aria-hidden />
                Java · Spring · Modern Web Apps
              </div>
              <h1 id="hero-heading" className="section-title">
                Building modern web app experiences with secure, scalable engineering.
              </h1>
              <p className="section-description">
                I craft responsive, analytics-friendly platforms with Java, Spring, React, and rich UI systems. Each release blends motion,
                accessibility, and observability so enterprise teams can ship confidently.
              </p>
            </div>
          </header>

          <div className="flex flex-wrap items-center gap-3">
            <a href="#contact" className="pill-solid">
              Contact
              <ArrowDownRight className="ml-2 h-4 w-4" aria-hidden />
            </a>
            <a
              href="#experience"
              className="pill-ghost"
            >
              View experience
              <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
            </a>
            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noreferrer"
              className="pill-ghost"
            >
              LinkedIn
            </a>
            <a
              href="#skills"
              className="pill-ghost"
            >
              Skills overview
              <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
            </a>
          </div>

          <div className="mission-rail relative overflow-hidden">
            {["Design systems & tokens", "API performance & reliability", "Secure delivery with clearance", "LLM-infused product flows", "Observability baked in"].map(
              (item) => (
                <div key={item} className="mission-rail__item">
                  <span className="text-sm font-semibold text-foreground">{item}</span>
                  <Sparkles className="h-4 w-4 text-primary" aria-hidden />
                </div>
              ),
            )}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-background via-transparent to-background opacity-50" />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.1, ease: "easeOut" }}
          className="ops-stack relative"
        >
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="icon-badge">
                  <Layers className="h-5 w-5 text-accent" aria-hidden />
                </div>
                <div>
                  <p className="section-label">Product snapshots</p>
                  <p className="text-lg font-semibold text-foreground">Modern web app outcomes</p>
                </div>
              </div>
              <div className="chip-ghost text-xs">
                <Globe2 className="h-4 w-4 text-primary" aria-hidden />
                Multi-platform
              </div>
            </div>

            <div className="grid gap-3">
              {impactStack.map((item, index) => (
                <motion.div
                  key={item.title}
                  className="ops-card"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 * index, duration: 0.5 }}
                >
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="text-sm uppercase tracking-[0.28em] text-muted-foreground">{item.status}</p>
                      <p className="text-lg font-semibold text-foreground">{item.title}</p>
                    </div>
                    <Database className="h-5 w-5 text-primary" aria-hidden />
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">{item.detail}</p>
                  <div className="mt-3 flex items-center gap-3">
                    <div className="ops-bar" aria-hidden>
                      <div className="ops-bar-fill" style={{ width: `${item.load}%` }} />
                    </div>
                    <span className="text-xs font-semibold text-muted-foreground">{item.metric}</span>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="telemetry-grid">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <div className="icon-badge">
                    <ShieldCheck className="h-4 w-4 text-primary" aria-hidden />
                  </div>
                  <p className="text-sm font-semibold text-foreground">Secure delivery</p>
                </div>
                <div className="telemetry-chip">
                  <ShieldCheck className="h-4 w-4 text-primary" aria-hidden />
                  Secret clearance
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-muted-foreground">
                <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                  <p className="text-xs uppercase tracking-[0.28em] text-muted-foreground">Core stack</p>
                  <p className="text-lg font-semibold text-foreground">Java · Spring · React</p>
                  <p>Event-driven APIs, real-time dashboards, and resilient services.</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                  <p className="text-xs uppercase tracking-[0.28em] text-muted-foreground">Data focus</p>
                  <p className="text-lg font-semibold text-foreground">Oracle SQL · Analytics</p>
                  <p>Optimized queries, indexed search, and instrumentation baked in.</p>
                </div>
              </div>
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <span>Mission load</span>
                <div className="flex items-center gap-2 text-foreground font-semibold">
                  {totalLoad}% <Sparkles className="h-4 w-4 text-accent" aria-hidden />
                </div>
              </div>
            </div>
          </div>

          <div className="absolute -top-10 -right-8 hidden lg:block">
            <div className="rounded-full border border-white/10 bg-white/5 px-5 py-3 flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-muted-foreground shadow-[0_30px_120px_-70px_rgba(0,0,0,0.9)]">
              <Rocket className="h-4 w-4 text-primary" aria-hidden />
              Modern web release ready
            </div>
          </div>
        </motion.div>
      </div>

      <p className="hero-watermark absolute bottom-6 left-4">Modern Web</p>
    </section>
  );
}
