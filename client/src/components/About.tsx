import { motion } from "framer-motion";
import { MapPin, Shield } from "lucide-react";
import { GlowCard } from "@/components/ui/glow-card";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { useSectionAnalytics } from "@/hooks/use-section-analytics";

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

        {/* Bento grid — 4 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Large summary tile — 2-col span */}
          <motion.div
            className="md:col-span-2"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <GlowCard className="p-6 md:p-8 h-full">
              <div className="h-1 w-12 rounded-full bg-gradient-to-r from-violet-500 to-cyan-400 mb-6" />
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                Web Developer with 8+ years of experience building and modernizing mission-critical
                enterprise systems for the U.S. Marine Corps. Currently supporting USMC Technology
                Services Organization (TSO) platforms that serve 205,000+ Marines and process $590M+
                in annual PCS spending.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Proven track record of leading complex system integrations and legacy modernization
                efforts. Active Secret Security Clearance. Pursuing AWS Certified Developer &ndash; Associate
                certification.
              </p>
            </GlowCard>
          </motion.div>

          {/* Stat tile — Years */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          >
            <GlowCard className="p-6 h-full flex flex-col justify-center">
              <p className="text-xs uppercase tracking-wider text-muted-foreground/70 mb-2">
                Experience
              </p>
              <p className="text-4xl font-bold text-foreground">
                <AnimatedCounter target={8} suffix="+" className="gradient-text" />
              </p>
              <p className="text-sm text-muted-foreground mt-1">Years USMC/DoD</p>
            </GlowCard>
          </motion.div>

          {/* Stat tile — Systems */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
          >
            <GlowCard className="p-6 h-full flex flex-col justify-center">
              <p className="text-xs uppercase tracking-wider text-muted-foreground/70 mb-2">
                Enterprise Systems
              </p>
              <p className="text-4xl font-bold text-foreground">
                <AnimatedCounter target={3} className="gradient-text" />
              </p>
              <p className="text-sm text-muted-foreground mt-1">Mission-Critical Platforms</p>
            </GlowCard>
          </motion.div>

          {/* Clearance tile */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
          >
            <GlowCard className="p-6 h-full flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-2">
                <Shield className="h-5 w-5 text-violet-400" />
                <p className="text-xs uppercase tracking-wider text-muted-foreground/70">
                  Clearance
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                <span className="text-sm font-medium text-foreground">Active</span>
              </div>
              <p className="text-sm text-muted-foreground mt-1">Secret Security Clearance</p>
            </GlowCard>
          </motion.div>

          {/* Location tile */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25, ease: "easeOut" }}
          >
            <GlowCard className="p-6 h-full flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-2">
                <MapPin className="h-5 w-5 text-cyan-400" />
                <p className="text-xs uppercase tracking-wider text-muted-foreground/70">
                  Location
                </p>
              </div>
              <p className="text-sm font-medium text-foreground">Greenwood, IN</p>
              <p className="text-sm text-muted-foreground mt-1">Remote Available</p>
            </GlowCard>
          </motion.div>

          {/* Initiatives tile — 2-col span */}
          <motion.div
            className="md:col-span-2"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
          >
            <GlowCard className="p-6 h-full">
              <p className="text-xs uppercase tracking-wider text-muted-foreground/70 mb-3">
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
        </div>
      </div>
    </section>
  );
}
