import { motion } from "framer-motion";
import { MapPin, Shield } from "lucide-react";
import { GlowCard } from "@/components/ui/glow-card";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { useSectionAnalytics } from "@/hooks/use-section-analytics";
import { depthCardVariants, staggerContainer } from "@/lib/motion-variants";

export default function About() {
  const sectionRef = useSectionAnalytics<HTMLDivElement>("About");

  return (
    <section
      ref={sectionRef}
      id="about"
      aria-labelledby="about-heading"
      className="section-shell scroll-mt-24"
    >
      <div className="page-shell relative z-10">
        <div className="section-heading">
          <p className="section-label">About</p>
          <h2 id="about-heading" className="section-title">
            Professional Summary
          </h2>
        </div>

        {/* Floating card cluster at different z-depths */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
          style={{ perspective: "1000px" }}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Large summary tile — 2-col span */}
          <motion.div className="md:col-span-2" variants={depthCardVariants}>
            <GlowCard className="p-6 md:p-8 h-full">
              <div className="h-1 w-12 rounded-full mb-6" style={{ background: "linear-gradient(90deg, #f0a830, #38bdd2)" }} />
              <p className="text-lg leading-relaxed mb-4" style={{ color: "hsl(var(--muted-foreground))" }}>
                Web Developer with 8+ years of experience building and modernizing mission-critical
                enterprise systems for the U.S. Marine Corps. Currently supporting USMC Technology
                Services Organization (TSO) platforms that serve 205,000+ Marines and process $590M+
                in annual PCS spending.
              </p>
              <p className="leading-relaxed" style={{ color: "hsl(var(--muted-foreground))" }}>
                Proven track record of leading complex system integrations and legacy modernization
                efforts. Active Secret Security Clearance. Pursuing AWS Certified Developer &ndash; Associate
                certification.
              </p>
            </GlowCard>
          </motion.div>

          {/* Stat tile — Years */}
          <motion.div variants={depthCardVariants}>
            <GlowCard className="p-6 h-full flex flex-col justify-center">
              <p className="text-xs uppercase tracking-wider mb-2" style={{ color: "hsl(var(--muted-foreground) / 0.7)" }}>
                Experience
              </p>
              <p className="text-4xl font-bold text-foreground">
                <AnimatedCounter target={8} suffix="+" className="gradient-text" />
              </p>
              <p className="text-sm mt-1" style={{ color: "hsl(var(--muted-foreground))" }}>Years USMC/DoD</p>
            </GlowCard>
          </motion.div>

          {/* Stat tile — Systems */}
          <motion.div variants={depthCardVariants}>
            <GlowCard className="p-6 h-full flex flex-col justify-center">
              <p className="text-xs uppercase tracking-wider mb-2" style={{ color: "hsl(var(--muted-foreground) / 0.7)" }}>
                Enterprise Systems
              </p>
              <p className="text-4xl font-bold text-foreground">
                <AnimatedCounter target={3} className="gradient-text" />
              </p>
              <p className="text-sm mt-1" style={{ color: "hsl(var(--muted-foreground))" }}>Mission-Critical Platforms</p>
            </GlowCard>
          </motion.div>

          {/* Clearance tile */}
          <motion.div variants={depthCardVariants}>
            <GlowCard className="p-6 h-full flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-2">
                <Shield className="h-5 w-5 text-amber-400" />
                <p className="text-xs uppercase tracking-wider" style={{ color: "hsl(var(--muted-foreground) / 0.7)" }}>
                  Clearance
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-sm font-medium text-foreground">Active</span>
              </div>
              <p className="text-sm mt-1" style={{ color: "hsl(var(--muted-foreground))" }}>Secret Security Clearance</p>
            </GlowCard>
          </motion.div>

          {/* Location tile */}
          <motion.div variants={depthCardVariants}>
            <GlowCard className="p-6 h-full flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-2">
                <MapPin className="h-5 w-5 text-teal-400" />
                <p className="text-xs uppercase tracking-wider" style={{ color: "hsl(var(--muted-foreground) / 0.7)" }}>
                  Location
                </p>
              </div>
              <p className="text-sm font-medium text-foreground">Greenwood, IN</p>
              <p className="text-sm mt-1" style={{ color: "hsl(var(--muted-foreground))" }}>Remote Available</p>
            </GlowCard>
          </motion.div>

          {/* Initiatives tile — 2-col span */}
          <motion.div className="md:col-span-2" variants={depthCardVariants}>
            <GlowCard className="p-6 h-full">
              <p className="text-xs uppercase tracking-wider mb-3" style={{ color: "hsl(var(--muted-foreground) / 0.7)" }}>
                Key Initiatives
              </p>
              <div className="flex flex-wrap gap-2">
                {["ICAM Integration", "Struts → Spring", "SLOA/MCTFS", "Solo SwiftUI App"].map((item) => (
                  <span key={item} className="chip-ghost">
                    {item}
                  </span>
                ))}
              </div>
            </GlowCard>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
