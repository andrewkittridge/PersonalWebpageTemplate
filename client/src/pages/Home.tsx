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
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.9]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.96]);

  useEffect(() => {
    trackPageView("Home");
  }, []);

  return (
    <div
      id="main-content"
      className="relative min-h-screen bg-background text-foreground"
      role="main"
    >
      <div className="grid-line" aria-hidden />
      <div className="beam beam--cool" aria-hidden />

      <Navigation />

      <main className="relative isolate overflow-hidden pb-20">
        <motion.div style={{ opacity: heroOpacity, scale: heroScale }}>
          <Suspense fallback={<LoadingSpinner />}>
            <Hero />
          </Suspense>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col"
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
      </main>

      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
}
