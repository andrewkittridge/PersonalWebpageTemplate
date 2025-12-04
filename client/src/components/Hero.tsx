import { motion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight, Send, ShieldCheck, Sparkles } from "lucide-react";
import { SOCIAL_LINKS } from "@/lib/constants";

const promptSuggestions = [
  "Ship secure Spring Boot releases",
  "Modernize USMC workflows",
  "Simplify release pipelines",
  "Trim Oracle latency",
];

export default function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative isolate overflow-hidden min-h-[88vh] pt-28 pb-16 lg:pb-24 flex items-center"
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(1100px at 78% 32%, rgba(224,180,120,0.28), transparent 55%), radial-gradient(900px at 18% 60%, rgba(90,121,255,0.18), transparent 50%)",
        }}
        aria-hidden
      />
      <div className="beam beam--tight" aria-hidden />
      <div className="grid-line" aria-hidden />

      <div className="page-shell relative z-10 grid gap-14 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] items-center">
        <motion.div
          initial={{ opacity: 0, y: 36 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.28em] text-muted-foreground">
            <ShieldCheck className="h-4 w-4 text-primary" />
            Secret cleared · Mission-ready
          </div>

          <header className="space-y-6">
            <p className="section-label">Full-stack engineer</p>
            <h1 id="hero-heading" className="section-title">
              Build decisive systems for teams that can&apos;t miss.
            </h1>
            <p className="section-description">
              Andrew Kittridge architects secure software for the U.S. Marine Corps and
              enterprise leaders—pairing Java/Spring rigor with React fluency and Oracle
              performance tuning.
            </p>
          </header>

          <div className="flex flex-wrap items-center gap-3">
            <a href="#contact" className="pill-solid">
              Engage Andrew
              <ArrowDownRight className="ml-2 h-4 w-4" aria-hidden />
            </a>
            <a
              href="#experience"
              className="pill-ghost"
            >
              Track record
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

          <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
            {["8+ yrs enterprise delivery", "Active Secret clearance", "USMC platforms", "Operational modernization"].map(
              (item) => (
                <span key={item} className="chip-ghost">
                  {item}
                </span>
              ),
            )}
          </div>
        </motion.div>

      </div>

      <p className="hero-watermark absolute bottom-6 left-4">Kittridge</p>
    </section>
  );
}
