import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { ArrowDownRight, ArrowUpRight, Gauge, Layers, Rocket, ShieldCheck, Sparkles, Wifi } from "lucide-react";
import { SOCIAL_LINKS } from "@/lib/constants";

type MissionStat = {
  label: string;
  value: string;
  detail: string;
  icon: LucideIcon;
};

const missionStats: MissionStat[] = [
  { label: "Launch cadence", value: "12+ releases / yr", detail: "Continuous delivery with observability wired in.", icon: Rocket },
  { label: "Latency budget", value: "< 200ms UI", detail: "Motion-first React, tuned with performance budgets.", icon: Gauge },
  { label: "Security posture", value: "STIG-ready", detail: "Secret-cleared, least-privilege, zero-trust defaults.", icon: ShieldCheck },
  { label: "Systems shipped", value: "30+ modules", detail: "Design systems, Spring services, analytics surfaces.", icon: Layers },
];

const missionSignals = [
  "First-principles thinking",
  "Autonomy ready",
  "Data over opinions",
  "Hardcore engineering",
  "Human-friendly motion",
];

export default function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative isolate overflow-hidden min-h-[90vh] pt-28 pb-12 lg:pb-20 flex items-center"
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(1100px at 80% 18%, rgba(124,249,255,0.18), transparent 55%), radial-gradient(900px at 12% 74%, rgba(255,111,207,0.15), transparent 52%)",
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
              <Rocket className="h-4 w-4 text-primary" />
              Musk-mode portfolio · Built for lift-off
            </div>
            <div className="chip-ghost text-xs">
              <Wifi className="h-4 w-4 text-primary" aria-hidden />
              Real-time ready
            </div>
          </div>

          <header className="space-y-6">
            <p className="section-label">Andrew Kittridge</p>
            <div className="flex flex-col gap-3">
              <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.34em] text-primary/80">
                <Sparkles className="h-4 w-4" aria-hidden />
                Java · Spring · React · Systems thinking
              </div>
              <h1 id="hero-heading" className="section-title">
                Launch-ready software with a SpaceX-level control room vibe.
              </h1>
              <p className="section-description">
                I build human, high-contrast interfaces backed by resilient Spring services, tuned telemetry, and motion that feels like a cockpit display.
                Every release is measured, secure, and obsessively optimized for speed.
              </p>
            </div>
          </header>

          <div className="flex flex-wrap items-center gap-3">
            <a href="#contact" className="pill-solid">
              Book a launch
              <ArrowDownRight className="ml-2 h-4 w-4" aria-hidden />
            </a>
            <a
              href="#experience"
              className="pill-ghost"
            >
              Mission log
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
              Systems stack
              <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
            </a>
          </div>

          <div className="mission-rail relative overflow-hidden">
            {missionSignals.map((item) => (
              <div key={item} className="mission-rail__item">
                <span className="text-sm font-semibold text-foreground">{item}</span>
                <Sparkles className="h-4 w-4 text-primary" aria-hidden />
              </div>
            ))}
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
                  <ShieldCheck className="h-5 w-5 text-accent" aria-hidden />
                </div>
                <div>
                  <p className="section-label">Mission telemetry</p>
                  <p className="text-lg font-semibold text-foreground">Engineering signals</p>
                </div>
              </div>
              <div className="chip-ghost text-xs">
                Launch console
              </div>
            </div>

            <div className="grid gap-3">
              {missionStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="ops-card"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 * index, duration: 0.5 }}
                >
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="icon-badge">
                        <stat.icon className="h-5 w-5 text-primary" aria-hidden />
                      </div>
                      <div>
                        <p className="text-sm uppercase tracking-[0.28em] text-muted-foreground">{stat.label}</p>
                        <p className="text-lg font-semibold text-foreground">{stat.value}</p>
                      </div>
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-primary" aria-hidden />
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground">{stat.detail}</p>
                  <div className="ops-bar mt-3" aria-hidden>
                    <div className="ops-bar-fill" style={{ width: "92%" }} />
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="telemetry-grid">
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <div className="icon-badge">
                    <Rocket className="h-4 w-4 text-primary" aria-hidden />
                  </div>
                  <p className="text-sm font-semibold text-foreground">Launch approvals</p>
                </div>
                <div className="telemetry-chip">
                  <ShieldCheck className="h-4 w-4 text-primary" aria-hidden />
                  Clearance active
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-muted-foreground">
                <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                  <p className="text-xs uppercase tracking-[0.28em] text-muted-foreground">Core stack</p>
                  <p className="text-lg font-semibold text-foreground">Java · Spring · React</p>
                  <p>Event-driven APIs, telemetry-first dashboards, and design systems built to scale.</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                  <p className="text-xs uppercase tracking-[0.28em] text-muted-foreground">Data & ops</p>
                  <p className="text-lg font-semibold text-foreground">Oracle SQL · Observability</p>
                  <p>Indexed queries, metrics pipelines, and runbooks that keep missions green.</p>
                </div>
              </div>
              <div className="flex items-center justify-between text-sm text-muted-foreground">
                <span>Control room status</span>
                <div className="flex items-center gap-2 text-foreground font-semibold">
                  Nominal <Sparkles className="h-4 w-4 text-accent" aria-hidden />
                </div>
              </div>
            </div>
          </div>

          <div className="absolute -top-10 -right-8 hidden lg:block">
            <div className="rounded-full border border-white/10 bg-white/5 px-5 py-3 flex items-center gap-2 text-xs uppercase tracking-[0.22em] text-muted-foreground shadow-[0_30px_120px_-70px_rgba(0,0,0,0.9)]">
              <Rocket className="h-4 w-4 text-primary" aria-hidden />
              Ready for orbital launch
            </div>
          </div>
        </motion.div>
      </div>

      <p className="hero-watermark absolute bottom-6 left-4">Launch</p>
    </section>
  );
}
