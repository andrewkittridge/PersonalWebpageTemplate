import { motion } from "framer-motion";
import { useMemo } from "react";
import {
  Activity,
  ArrowDownRight,
  ArrowUpRight,
  Cpu,
  Radar,
  Send,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { SOCIAL_LINKS } from "@/lib/constants";

const opsStack = [
  {
    title: "Repositioning sprint",
    status: "Complete",
    metric: "38% lift in SQLs",
    load: 86,
    detail: "ICP clarity, offer packaging, conversion copy",
  },
  {
    title: "Lifecycle system",
    status: "In-flight",
    metric: "19% retention gain",
    load: 74,
    detail: "Welcome + ritual nudges, churn save plays",
  },
  {
    title: "Demand engine QA",
    status: "Steady",
    metric: "98% UTM clean",
    load: 62,
    detail: "Attribution guardrails, routing, SLA alerts",
  },
];

export default function Hero() {
  const totalLoad = useMemo(
    () => Math.round(opsStack.reduce((acc, item) => acc + item.load, 0) / opsStack.length),
    [],
  );

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative isolate overflow-hidden min-h-[92vh] pt-24 pb-16 lg:pb-24 flex items-center"
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(1100px at 80% 30%, rgba(224,180,120,0.28), transparent 55%), radial-gradient(900px at 18% 60%, rgba(68,200,255,0.22), transparent 50%)",
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
          <div className="module-chrome">
            <ShieldCheck className="h-4 w-4 text-primary" />
            Fractional CMOs + builders · Conversion ops
          </div>

          <header className="space-y-5">
            <p className="section-label">Revenue marketing collective</p>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-primary/80">
                <Activity className="h-4 w-4" aria-hidden />
                Conversion Control Room
              </div>
              <h1 id="hero-heading" className="section-title">
                We design the story, wire the funnel, and run the plays.
              </h1>
              <p className="section-description">
                A small team of expert marketers who blend positioning, lifecycle, content,
                and RevOps discipline. We help leadership teams ship launches, reach the right buyers,
                and prove impact every week.
              </p>
            </div>
          </header>

          <div className="flex flex-wrap items-center gap-3">
            <a href="#contact" className="pill-solid">
              Book a discovery call
              <ArrowDownRight className="ml-2 h-4 w-4" aria-hidden />
            </a>
            <a
              href="#experience"
              className="pill-ghost"
            >
              View playbooks
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
          </div>

          <div className="mission-rail relative overflow-hidden">
            {["Story-led growth", "Full-funnel campaigns", "RevOps and analytics", "Founder-friendly", "Security-aware"].map(
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
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="icon-badge">
                <Radar className="h-5 w-5 text-accent" aria-hidden />
              </div>
              <div>
                <p className="section-label">Operations stack</p>
                <p className="text-lg font-semibold text-foreground">Live mission telemetry</p>
              </div>
            </div>
            <div className="flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-3 py-2 text-xs font-semibold tracking-[0.2em] text-muted-foreground">
              <Sparkles className="h-4 w-4 text-primary" aria-hidden />
              Adaptive grid
            </div>
          </div>

          <div className="grid gap-3">
            {opsStack.map((item, index) => (
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
                  <Cpu className="h-5 w-5 text-primary" aria-hidden />
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
                  <Send className="h-4 w-4 text-primary" aria-hidden />
                </div>
                <p className="text-sm font-semibold text-foreground">Campaign control</p>
              </div>
              <div className="telemetry-chip">
                <ShieldCheck className="h-4 w-4 text-primary" aria-hidden />
                Quality gates
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-muted-foreground">
              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                <p className="text-xs uppercase tracking-[0.28em] text-muted-foreground">Pipeline health</p>
                <p className="text-lg font-semibold text-foreground">SQLs ↑</p>
                <p>Audience + offer clarity, better follow-up</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                <p className="text-xs uppercase tracking-[0.28em] text-muted-foreground">Activation</p>
                <p className="text-lg font-semibold text-foreground">Time-to-value ↓</p>
                <p>Lifecycle automation + product messaging</p>
              </div>
            </div>
            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <span>Mission load</span>
              <div className="flex items-center gap-2 text-foreground font-semibold">
                {totalLoad}% <Sparkles className="h-4 w-4 text-accent" aria-hidden />
              </div>
            </div>
          </div>
        </motion.div>

      </div>

      <p className="hero-watermark absolute bottom-6 left-4">Growth Ops</p>
    </section>
  );
}
