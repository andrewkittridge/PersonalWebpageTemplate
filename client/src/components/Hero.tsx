import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, MapPin, Shield, Clock } from "lucide-react";
import { SOCIAL_LINKS } from "@/lib/constants";
import { TextReveal } from "@/components/ui/text-reveal";
import { useMouseParallax } from "@/hooks/use-mouse-parallax";
import { heroTextVariants } from "@/lib/motion-variants";

export default function Hero() {
  const { x: parallaxX, y: parallaxY } = useMouseParallax(0.5);
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <section
      aria-labelledby="hero-heading"
      className="relative isolate min-h-[90vh] pt-32 pb-20 lg:pb-28 flex items-center"
      style={{ perspective: "1200px" }}
    >
      <div className="page-shell relative z-10">
        <motion.div
          className="max-w-4xl"
          style={{ x: parallaxX, y: parallaxY }}
        >
          {/* Name — animated gradient text reveal with 3D depth */}
          <header className="space-y-6">
            <TextReveal
              as="h1"
              className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight gradient-text-animated font-body"
              delay={0.2}
            >
              Andrew Kittridge
            </TextReveal>

            {/* Subtitle — staggered fade */}
            <motion.p
              className="text-xl md:text-2xl lg:text-3xl font-medium gradient-text font-display"
              variants={heroTextVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.6 }}
              id="hero-heading"
              role="heading"
              aria-level={2}
            >
              Web Developer
            </motion.p>

            <motion.p
              className="text-lg md:text-xl max-w-2xl leading-relaxed"
              style={{ color: "hsl(var(--muted-foreground))" }}
              variants={heroTextVariants}
              initial="hidden"
              animate="visible"
              transition={{ delay: 0.8 }}
            >
              Enterprise Application Modernization &bull; USMC / DoD
            </motion.p>
          </header>

          {/* Floating stat pills with 3D bob */}
          <motion.div
            className="mt-12 flex flex-wrap gap-4 text-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            {[
              { icon: <Clock className="h-4 w-4 text-amber-400" />, text: "8+ Years Experience" },
              { icon: <Shield className="h-4 w-4 text-amber-400" />, text: "Active Secret Clearance" },
              { icon: <MapPin className="h-4 w-4 text-teal-400" />, text: "Greenwood, IN" },
            ].map((stat, i) => (
              <motion.div
                key={stat.text}
                className="bob-animation flex items-center gap-2 rounded-full border px-4 py-2 backdrop-blur-sm"
                style={{
                  animationDelay: `${i * 0.4}s`,
                  borderColor: "rgba(255,255,255,0.1)",
                  background: "rgba(255,255,255,0.03)",
                  color: "hsl(var(--muted-foreground))",
                }}
              >
                {stat.icon}
                <span>{stat.text}</span>
              </motion.div>
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
        </motion.div>
      </div>

      {/* Watermark at negative z */}
      <motion.p
        className="hero-watermark absolute bottom-8 right-8 hidden lg:block"
        style={{ opacity: heroOpacity }}
      >
        AK
      </motion.p>
    </section>
  );
}
