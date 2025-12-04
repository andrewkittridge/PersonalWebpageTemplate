import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SOCIAL_LINKS } from "@/lib/constants";
import { useSectionAnalytics } from "@/hooks/use-section-analytics";

const aboutData = {
  description: [
    "I modernize mission-critical USMC tools like MROWS and MCPDT with Spring Boot, React, and Oracle tuning—removing friction instead of adding ceremony.",
    "Security is built in: releases stay STIG compliant, test-covered, and stable for distributed teams. No trendy add-ons, just reliable delivery.",
    "Based in Indianapolis, Indiana with active clearance, I partner with leads to ship on time: fewer tickets, faster pages, steady operators.",
    "I also built and shipped Lumin Faith solo—designed, engineered, and released to the App Store as a guided study companion.",
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
            "radial-gradient(1100px at 80% 10%, rgba(224,180,120,0.24), transparent 60%), radial-gradient(760px at 18% 60%, rgba(90,121,255,0.2), transparent 52%)",
        }}
        aria-hidden
      />

      <div className="page-shell relative z-10 grid gap-12 items-start">
        <motion.article
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="space-y-8"
        >
          <div className="section-heading">
            <p className="section-label">Profile</p>
            <h2 id="about-heading" className="section-title">
              Reliable enterprise delivery, without the drama.
            </h2>
            <p className="section-description">
              I ship secure, pragmatic software, keep operators unblocked, and modernize
              legacy stacks without adding hype.
            </p>
          </div>

          <div className="glass-panel space-y-5 max-w-3xl">
            {aboutData.description.map((paragraph, index) => (
              <p key={index} className="text-muted-foreground leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            <a href="#experience" className="pill-solid">
              Mission history <ArrowUpRight className="ml-2 h-4 w-4" aria-hidden />
            </a>
            <a
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noreferrer"
              className="pill-ghost"
            >
              GitHub
            </a>
          </div>
        </motion.article>
      </div>
    </section>
  );
}
