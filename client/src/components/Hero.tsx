import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { SOCIAL_LINKS } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="h-screen flex items-center justify-center relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center space-y-6"
      >
        <h1 className="text-6xl md:text-8xl font-bold">
          Andrew Kittridge
        </h1>
        <h2 className="text-xl md:text-2xl text-muted-foreground">
          Full-Stack Web Developer
        </h2>
        <p className="max-w-2xl mx-auto text-muted-foreground">
          Specializing in Java, Spring, and Enterprise Solutions
        </p>
        <div className="flex flex-wrap gap-2 justify-center text-sm text-muted-foreground">
          <a href={`mailto:${SOCIAL_LINKS.email}`} className="inline-flex items-center hover:text-primary">
            {SOCIAL_LINKS.email}
          </a>
          <span className="mx-1">|</span>
          <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center hover:text-primary">
            LinkedIn
          </a>
          <span className="mx-1">|</span>
          <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center hover:text-primary">
            GitHub
          </a>
          <span className="mx-1">|</span>
          <span>{SOCIAL_LINKS.phone}</span>
        </div>
        <div className="flex gap-4 justify-center">
          <Button size="lg" asChild>
            <a href="#contact">Get in Touch</a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href="#experience">View Work</a>
          </Button>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: [0, 1, 0],
          y: [0, 5, 0]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <ChevronDown className="w-8 h-8 text-primary" />
      </motion.div>
    </section>
  );
}
