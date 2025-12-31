import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { ArrowDownRight, ArrowUpRight, Gauge, Layers, Orbit, Rocket, ShieldCheck, Sparkles } from "lucide-react";
import { SOCIAL_LINKS } from "@/lib/constants";

type MissionStat = {
  label: string;
  value: string;
  detail: string;
  icon: LucideIcon;
};

const missionStats: MissionStat[] = [
  { label: "Launch cadence", value: "12+ missions / yr", detail: "Continuous delivery with observability wired in.", icon: Rocket },
  { label: "Latency budget", value: "< 180ms UI", detail: "Motion-first React, tuned with performance budgets.", icon: Gauge },
  { label: "Security posture", value: "STIG-ready", detail: "Secret-cleared, least-privilege, zero-trust defaults.", icon: ShieldCheck },
  { label: "Systems shipped", value: "30+ modules", detail: "Design systems, Spring services, analytics surfaces.", icon: Layers },
];

const missionSignals = [
  "First-principles thinking",
  "Autonomy with humans-in-loop",
  "Data over opinions",
  "Hardcore engineering",
  "Human-friendly motion",
];

export default function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative isolate overflow-hidden min-h-[95vh] pt-28 pb-16 flex items-center"
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(1200px at 82% 18%, rgba(71,161,255,0.24), transparent 55%), radial-gradient(880px at 12% 74%, rgba(140,120,255,0.18), transparent 52%)",
        }}
        aria-hidden
      />
      <div className="halo" aria-hidden />
      <div className="orbital-grid" aria-hidden />

      <div className="page-shell relative z-10 grid gap-14 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] items-center">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.05, ease: "easeOut" }}
          className="space-y-8 panel"
        >
          <div className="flex flex-wrap items-center gap-3">
            <div className="tag">
              <Rocket className="h-4 w-4 text-primary" />
              Mission portfolio · Built for orbit
            </div>
            <div className="tag-ghost text-xs">Telemetry-first</div>
            <div className="tag-ghost text-xs">Human-centered motion</div>
          </div>

          <header className="space-y-6">
            <p className="section-label">Andrew Kittridge</p>
            <div className="flex flex-col gap-3">
              <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.34em] text-primary/80">
                <Sparkles className="h-4 w-4" aria-hidden />
                Java · Spring Boot · React · Systems thinking
              </div>
              <h1 id="hero-heading" className="section-title">
                SpaceX-inspired mission software with cockpit-grade calm.
              </h1>
              <p className="section-description">
                I design launch systems for the web—high-contrast interfaces, Spring services with telemetry baked in, and motion that feels like mission control. Every release ships with performance budgets, security guardrails, and human-friendly documentation.
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

          <div className="glass-grid">
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.32em] text-muted-foreground">
                <Orbit className="h-4 w-4 text-primary" aria-hidden />
                Mission signals
              </div>
              <div className="tag-ghost">Built for velocity</div>
            </div>
            <div className="grid gap-3 md:grid-cols-3">
              {missionSignals.map((item) => (
                <div key={item} className="signal-card flex items-center justify-between gap-3">
                  <span className="text-sm font-semibold text-foreground">{item}</span>
                  <Sparkles className="h-4 w-4 text-primary" aria-hidden />
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, delay: 0.1, ease: "easeOut" }}
          className="glass-grid relative"
        >
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
            <div className="tag-ghost text-xs">Launch console</div>
          </div>

          <div className="grid gap-3">
            {missionStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="signal-card"
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
                <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/10" aria-hidden>
                  <div className="h-full rounded-full bg-gradient-to-r from-primary via-white to-accent" style={{ width: "92%" }} />
                </div>
              </motion.div>
            ))}
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            <div className="stat-tile">
              <p className="text-xs uppercase tracking-[0.26em] text-muted-foreground">Core stack</p>
              <p className="text-lg font-semibold text-foreground mt-2">Java · Spring Boot · React</p>
              <p className="text-muted-foreground mt-2">Event-driven APIs, telemetry dashboards, and design systems built to scale.</p>
            </div>
            <div className="stat-tile">
              <p className="text-xs uppercase tracking-[0.26em] text-muted-foreground">Ops & data</p>
              <p className="text-lg font-semibold text-foreground mt-2">Oracle SQL · Observability</p>
              <p className="text-muted-foreground mt-2">Indexed queries, metrics pipelines, and runbooks that keep missions green.</p>
            </div>
          </div>
        </motion.div>
      </div>

      <p className="hero-watermark absolute bottom-6 left-4">Launch</p>
    </section>
  );
}
