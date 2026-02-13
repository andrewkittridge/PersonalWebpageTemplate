import { motion } from "framer-motion";
import { ArrowRight, MapPin, Shield, Clock } from "lucide-react";
import { SOCIAL_LINKS } from "@/lib/constants";
import { TextReveal } from "@/components/ui/text-reveal";

export default function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative isolate min-h-[90vh] pt-32 pb-20 lg:pb-28 flex items-center"
    >
      {/* Background glow — violet/cyan */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(139, 92, 246, 0.12), transparent), radial-gradient(ellipse 60% 40% at 70% -10%, rgba(34, 211, 238, 0.06), transparent)",
        }}
        aria-hidden
      />

      <div className="page-shell relative z-10">
        <div className="max-w-4xl">
          {/* Name — animated gradient text reveal */}
          <header className="space-y-6">
            <TextReveal
              as="h1"
              className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight gradient-text-animated"
              delay={0.2}
            >
              Andrew Kittridge
            </TextReveal>

            {/* Subtitle — staggered fade */}
            <motion.p
              className="text-xl md:text-2xl lg:text-3xl font-medium gradient-text"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
              id="hero-heading"
              role="heading"
              aria-level={2}
            >
              Web Developer
            </motion.p>

            <motion.p
              className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
            >
              Enterprise Application Modernization &bull; USMC / DoD
            </motion.p>
          </header>

          {/* Floating stat pills */}
          <motion.div
            className="mt-12 flex flex-wrap gap-4 text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            {[
              { icon: <Clock className="h-4 w-4 text-violet-400" />, text: "8+ Years Experience" },
              { icon: <Shield className="h-4 w-4 text-violet-400" />, text: "Active Secret Clearance" },
              { icon: <MapPin className="h-4 w-4 text-cyan-400" />, text: "Greenwood, IN" },
            ].map((stat, i) => (
              <div
                key={stat.text}
                className="bob-animation flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-muted-foreground backdrop-blur-sm"
                style={{ animationDelay: `${i * 0.4}s` }}
              >
                {stat.icon}
                <span>{stat.text}</span>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="mt-12 flex flex-wrap items-center gap-4"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2, ease: "easeOut" }}
          >
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
          </motion.div>
        </div>
      </div>

      {/* Watermark */}
      <p className="hero-watermark absolute bottom-8 right-8 hidden lg:block">AK</p>
    </section>
  );
}
