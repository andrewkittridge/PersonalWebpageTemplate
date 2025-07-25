import { Suspense, lazy, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Navigation from "@/components/Navigation";
import LoadingSpinner from "@/components/LoadingSpinner";
import SkeletonCard from "@/components/SkeletonCard";
import { trackPageView } from "@/lib/analytics";

// Lazy load components
const Hero = lazy(() => import("@/components/Hero"));
const About = lazy(() => import("@/components/About"));
const Experience = lazy(() => import("@/components/Experience"));
const Skills = lazy(() => import("@/components/Skills"));
const Education = lazy(() => import("@/components/Education"));
const Contact = lazy(() => import("@/components/Contact"));
const Footer = lazy(() => import("@/components/Footer"));

export default function Home() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.97]);

  // Track page view when component mounts
  useEffect(() => {
    trackPageView('Home');
  }, []);

  return (
    <div id="main-content" className="min-h-screen bg-background text-foreground" role="main">
      {/* Animated gradient background */}
      <div className="animated-gradient-bg" />
      
      {/* Floating particles */}
      <div className="particles">
        <div className="particle" />
        <div className="particle" />
        <div className="particle" />
        <div className="particle" />
        <div className="particle" />
        <div className="particle" />
        <div className="particle" />
        <div className="particle" />
        <div className="particle" />
        <div className="particle" />
      </div>

      <Navigation />
      <main className="relative">
        <motion.div style={{ opacity, scale }}>
          <Suspense fallback={<LoadingSpinner />}>
            <Hero />
          </Suspense>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="container mx-auto px-4"
        >
          <section id="about" className="py-20">
            <Suspense fallback={<SkeletonCard />}>
              <About />
            </Suspense>
          </section>
          <section id="experience" className="py-20">
            <Suspense fallback={<SkeletonCard />}>
              <Experience />
            </Suspense>
          </section>
          <section id="skills" className="py-20">
            <Suspense fallback={<SkeletonCard />}>
              <Skills />
            </Suspense>
          </section>
          <section id="education" className="py-20">
            <Suspense fallback={<SkeletonCard />}>
              <Education />
            </Suspense>
          </section>
          <section id="contact" className="py-20">
            <Suspense fallback={<SkeletonCard />}>
              <Contact />
            </Suspense>
          </section>
        </motion.div>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
}
