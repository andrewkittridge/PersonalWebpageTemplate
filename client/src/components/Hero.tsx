import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail, Phone } from "lucide-react";
import { SOCIAL_LINKS } from "@/lib/constants";

export default function Hero() {
  return (
    <section
      className="min-h-screen flex items-center justify-center px-4 relative"
      aria-labelledby="hero-heading"
    >
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="content-spacing"
        >
          {/* Enhanced typography-focused header */}
          <header className="space-y-fluid">
            <h1
              id="hero-heading"
              className="text-display text-foreground"
            >
              Andrew Kittridge
            </h1>
            <p className="text-heading-2 text-muted-foreground font-normal max-w-4xl mx-auto">
              Full-Stack Web Developer
            </p>
            <p className="text-body-large text-muted-foreground/80 max-w-3xl mx-auto">
              Specializing in Java, Spring & Enterprise Modernization
            </p>
          </header>

          {/* Enhanced contact information */}
          <address className="not-italic">
            <nav aria-label="Contact information">
              <ul className="flex flex-wrap items-center justify-center gap-6 text-body-small text-muted-foreground">
                <li>
                  <a
                    href={`mailto:${SOCIAL_LINKS.email}`}
                    className="flex items-center gap-2 hover:text-foreground transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-md px-2 py-1"
                    aria-label={`Send email to ${SOCIAL_LINKS.email}`}
                  >
                    <Mail className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
                    <span className="hidden sm:inline">{SOCIAL_LINKS.email}</span>
                    <span className="sm:hidden">Email</span>
                  </a>
                </li>
                <li>
                  <a
                    href={SOCIAL_LINKS.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-foreground transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-md px-2 py-1"
                    aria-label="Visit LinkedIn profile (opens in new tab)"
                  >
                    <Linkedin className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href={SOCIAL_LINKS.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-foreground transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-md px-2 py-1"
                    aria-label="Visit GitHub profile (opens in new tab)"
                  >
                    <Github className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href={`tel:${SOCIAL_LINKS.phone}`}
                    className="flex items-center gap-2 hover:text-foreground transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-md px-2 py-1"
                    aria-label={`Call ${SOCIAL_LINKS.phone}`}
                  >
                    <Phone className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
                    <span className="hidden sm:inline">{SOCIAL_LINKS.phone}</span>
                    <span className="sm:hidden">Call</span>
                  </a>
                </li>
              </ul>
            </nav>
          </address>

          {/* Enhanced action buttons */}
          <nav
            className="flex flex-col sm:flex-row gap-4 justify-center pt-8"
            aria-label="Primary actions"
          >
            <Button
              size="lg"
              asChild
              className="minimal-button-primary text-base px-8 py-3 h-auto"
            >
              <a
                href="#contact"
                aria-describedby="contact-description"
              >
                Get in Touch
                <span id="contact-description" className="sr-only">
                  Navigate to contact section
                </span>
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="minimal-button-ghost text-base px-8 py-3 h-auto border-2"
            >
              <a
                href="#experience"
                aria-describedby="work-description"
              >
                View My Work
                <span id="work-description" className="sr-only">
                  Navigate to experience section
                </span>
              </a>
            </Button>
          </nav>
        </motion.div>

        {/* Enhanced scroll indicator */}
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
            className="group flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-md p-2"
          >
            <span className="text-caption">Scroll</span>
            <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-200" aria-hidden="true" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
