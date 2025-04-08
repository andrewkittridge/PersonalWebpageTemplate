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

export default function Home() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.97]);

  // Track page view when component mounts
  useEffect(() => {
    trackPageView('Home');
  }, []);

  return (
    <div id="main-content" className="min-h-screen bg-background text-foreground overflow-hidden" role="main">
      <Navigation />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative"
      >
        <motion.div style={{ opacity, scale }}>
          <Suspense fallback={<LoadingSpinner />}>
            <Hero />
          </Suspense>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="container mx-auto px-4 space-y-20"
        >
          <Suspense fallback={<SkeletonCard />}>
            <About />
          </Suspense>
          <Suspense fallback={<SkeletonCard />}>
            <Experience />
          </Suspense>
          <Suspense fallback={<SkeletonCard />}>
            <Skills />
          </Suspense>
          <Suspense fallback={<SkeletonCard />}>
            <Education />
          </Suspense>
          <Suspense fallback={<SkeletonCard />}>
            <Contact />
          </Suspense>
        </motion.div>
      </motion.main>
    </div>
  );
}
