import { motion } from "framer-motion";
import { useMemo } from "react";
import { Activity, ArrowDownRight, ArrowUpRight, Database, Layers, ShieldCheck, Sparkles } from "lucide-react";
import { SOCIAL_LINKS } from "@/lib/constants";

const impactStack = [
  {
    title: "Struts to Spring",
    status: "Architecture",
    metric: "20% maintainability",
    load: 20,
    detail: "Migrated legacy Struts applications to Spring for scalable delivery.",
  },
  {
    title: "Oracle SQL tuning",
    status: "Performance",
    metric: "30% faster queries",
    load: 30,
    detail: "Refactored queries and indexing to improve responsiveness.",
  },
  {
    title: "UI/UX overhaul",
    status: "Experience",
    metric: "15% higher satisfaction",
    load: 15,
    detail: "Enhanced mission-critical interfaces with JavaScript and CSS3.",
  },
  {
    title: "Secure delivery",
    status: "Compliance",
    metric: "25% efficiency gain",
    load: 25,
    detail: "Built STIG-compliant Spring solutions that streamlined workflows.",
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
            Full-Stack Web Developer · Resume Snapshot
          </div>

          <header className="space-y-5">
            <p className="section-label">Andrew Kittridge</p>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-primary/80">
                <Activity className="h-4 w-4" aria-hidden />
                Java · Spring · Secure Enterprise Apps
              </div>
              <h1 id="hero-heading" className="section-title">
                Full-stack web developer specializing in Java, Spring, and enterprise solutions.
              </h1>
              <p className="section-description">
                Over seven years delivering secure, scalable applications with Java, Spring, JavaScript, and Oracle SQL.
                Experienced in modernizing legacy systems, optimizing database performance, and improving interfaces for mission-critical users.
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
          </div>

          <div className="mission-rail relative overflow-hidden">
            {["Java & Spring Framework", "Oracle SQL & PL/SQL", "STIG-compliant delivery", "Secret Security Clearance", "React + LLM API integration"].map(
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
                  <Layers className="h-5 w-5 text-accent" aria-hidden />
                </div>
                <div>
                  <p className="section-label">Career snapshot</p>
                  <p className="text-lg font-semibold text-foreground">Recent outcomes</p>
                </div>
              </div>
              <div className="flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-3 py-2 text-xs font-semibold tracking-[0.2em] text-muted-foreground">
                <Sparkles className="h-4 w-4 text-primary" aria-hidden />
                Measurable impact
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
                  <p className="text-lg font-semibold text-foreground">Java · Spring · REST</p>
                  <p>Spring Boot and Spring MVC with RESTful APIs and SOAP services.</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                  <p className="text-xs uppercase tracking-[0.28em] text-muted-foreground">Data focus</p>
                  <p className="text-lg font-semibold text-foreground">Oracle SQL · PL/SQL</p>
                  <p>Query optimization, stored procedures, triggers, and functions.</p>
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

      <p className="hero-watermark absolute bottom-6 left-4">Full-Stack Java</p>
    </section>
  );
}
