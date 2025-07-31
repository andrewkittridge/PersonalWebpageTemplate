import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail, Phone } from "lucide-react";
import { SOCIAL_LINKS } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="content-spacing"
        >
          {/* Typography-focused header */}
          <header className="text-spacing">
            <h1 className="text-5xl md:text-7xl font-light tracking-tight text-foreground">
              Andrew Kittridge
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground font-normal max-w-3xl mx-auto">
              Full-Stack Web Developer
            </p>
            <p className="text-lg text-muted-foreground/80 max-w-2xl mx-auto">
              Specializing in Java, Spring & Enterprise Modernization
            </p>
          </header>

          {/* Contact information with minimal styling */}
          <address className="not-italic">
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
              <a 
                href={`mailto:${SOCIAL_LINKS.email}`} 
                className="flex items-center gap-2 hover:text-foreground transition-colors duration-200"
              >
                <Mail className="w-4 h-4" aria-hidden="true" />
                {SOCIAL_LINKS.email}
              </a>
              <a 
                href={SOCIAL_LINKS.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 hover:text-foreground transition-colors duration-200"
              >
                <Linkedin className="w-4 h-4" aria-hidden="true" />
                LinkedIn
              </a>
              <a 
                href={SOCIAL_LINKS.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 hover:text-foreground transition-colors duration-200"
              >
                <Github className="w-4 h-4" aria-hidden="true" />
                GitHub
              </a>
              <a 
                href={`tel:${SOCIAL_LINKS.phone}`} 
                className="flex items-center gap-2 hover:text-foreground transition-colors duration-200"
              >
                <Phone className="w-4 h-4" aria-hidden="true" />
                {SOCIAL_LINKS.phone}
              </a>
            </div>
          </address>

          {/* Minimal action buttons */}
          <nav className="flex gap-4 justify-center pt-8">
            <Button size="lg" asChild className="minimal-button minimal-button-primary">
              <a href="#contact">Get in Touch</a>
            </Button>
            <Button size="lg" variant="outline" asChild className="minimal-button minimal-button-ghost">
              <a href="#experience">View My Work</a>
            </Button>
          </nav>
        </motion.div>

        {/* Subtle scroll indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <a 
            href="#about" 
            aria-label="Scroll to about section" 
            className="text-muted-foreground hover:text-foreground transition-colors duration-200"
          >
            <ArrowDown className="w-5 h-5" aria-hidden="true" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
