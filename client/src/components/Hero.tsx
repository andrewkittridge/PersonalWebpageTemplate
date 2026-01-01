import { motion } from "framer-motion";
import { ArrowRight, MapPin, Shield, Clock } from "lucide-react";
import { SOCIAL_LINKS } from "@/lib/constants";

export default function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative isolate min-h-[90vh] pt-32 pb-20 lg:pb-28 flex items-center"
    >
      {/* Subtle gradient accent */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(0, 82, 136, 0.15), transparent)",
        }}
        aria-hidden
      />

      <div className="page-shell relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
          {/* Name and Title */}
          <header className="space-y-6">
            <h1 id="hero-heading" className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-foreground">
              Andrew Kittridge
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl text-primary font-medium">
              Full-Stack Java Developer
            </p>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed">
              Specializing in Enterprise Application Modernization, Secure Systems, and AI Integrations
            </p>
          </header>

          {/* Key Stats */}
          <div className="mt-12 flex flex-wrap gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-primary" />
              <span>8+ Years Experience</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="h-4 w-4 text-primary" />
              <span>Active Secret Clearance</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary" />
              <span>Greenwood, IN</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="mt-12 flex flex-wrap items-center gap-4">
            <a href="#experience" className="pill-solid">
              View Experience
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden />
            </a>
            <a href="#contact" className="pill-ghost">
              Contact
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
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noreferrer"
              className="pill-ghost"
            >
              GitHub
            </a>
          </div>
        </motion.div>
      </div>

      {/* Watermark */}
      <p className="hero-watermark absolute bottom-8 right-8 hidden lg:block">AK</p>
    </section>
  );
}
