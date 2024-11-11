import { motion, useScroll, useTransform } from "framer-motion";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Navigation from "@/components/Navigation";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.97]);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <Navigation />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative"
      >
        <motion.div style={{ opacity, scale }}>
          <Hero />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="container mx-auto px-4 space-y-20"
        >
          <About />
          <Experience />
          <Skills />
          <Contact />
        </motion.div>
      </motion.main>
    </div>
  );
}
