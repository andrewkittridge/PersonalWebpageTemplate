import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail, Phone } from "lucide-react";
import { SOCIAL_LINKS } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="relative flex h-screen items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-background" />
        <div className="absolute inset-0 bg-grid-slate-700/[0.04] bg-[length:20px_20px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_10%,transparent_100%)]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center space-y-8"
      >
        <div className="flex justify-center items-center mb-4">
          <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center glow-effect">
            <span className="text-4xl font-bold text-primary">AK</span>
          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
          Andrew Kittridge
        </h1>
        <p className="max-w-3xl mx-auto text-xl text-muted-foreground">
          Full-Stack Web Developer | Java, Spring & Enterprise Modernization
        </p>

        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
          <a href={`mailto:${SOCIAL_LINKS.email}`} className="flex items-center gap-2 hover:text-primary transition-colors glow-effect">
            <Mail className="w-4 h-4" aria-hidden="true" />
            {SOCIAL_LINKS.email}
          </a>
          <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors glow-effect">
            <Linkedin className="w-4 h-4" aria-hidden="true" />
            LinkedIn
          </a>
          <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors glow-effect">
            <Github className="w-4 h-4" aria-hidden="true" />
            GitHub
          </a>
          <a href={`tel:${SOCIAL_LINKS.phone}`} className="flex items-center gap-2 hover:text-primary transition-colors glow-effect">
            <Phone className="w-4 h-4" aria-hidden="true" />
            {SOCIAL_LINKS.phone}
          </a>
        </div>

        <div className="flex gap-4 justify-center pt-4">
          <Button size="lg" asChild className="tesla-button glow-effect">
            <a href="#contact">Get in Touch</a>
          </Button>
          <Button size="lg" variant="outline" asChild className="glass-effect glow-effect">
            <a href="#experience">View My Work</a>
          </Button>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-10"
      >
        <a href="#about" aria-label="Scroll to about section" className="glow-effect">
          <ArrowDown className="w-6 h-6 text-muted-foreground hover:text-primary transition-colors" aria-hidden="true" />
        </a>
      </motion.div>
    </section>
  );
}
