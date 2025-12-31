import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { SOCIAL_LINKS } from "@/lib/constants";
import { useSectionAnalytics } from "@/hooks/use-section-analytics";

const aboutData = {
  description: [
    "We are a small, senior marketing crew that thinks like strategists and ships like operators. You get positioning, campaigns, content, and RevOps alignment under one roof.",
    "Our process starts with clarity—ICP, offer, message—then moves into the plays: website rewrites, lifecycle systems, sales enablement, and dashboards sales trusts.",
    "We work well with security-conscious, regulated, or mission-driven teams that need their story sharpened without slowing compliance or procurement.",
    "Indianapolis based with remote reach. Recent work spans public sector platforms, premium consumer launches, and enterprise SaaS rollouts.",
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
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.1, ease: "easeOut" }}
          className="space-y-10"
        >
          <div className="section-heading">
            <p className="section-label">Collective</p>
            <h2 id="about-heading" className="section-title">
              The growth studio that runs on evidence.
            </h2>
            <p className="section-description">
              Strategy, creative, and operations move together so leaders stop guessing and start scaling the right signals.
            </p>
          </div>

          <div className="rounded-[32px] border border-white/10 bg-transparent px-7 py-8 md:px-10 md:py-10 space-y-6">
            {aboutData.description.map((paragraph, index) => (
              <p
                key={paragraph}
                className={`text-muted-foreground leading-relaxed ${index > 0 ? "border-t border-white/10 pt-6" : ""}`}
              >
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
