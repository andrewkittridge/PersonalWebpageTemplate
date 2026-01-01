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
  const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0.95]);

  useEffect(() => {
    trackPageView("Home");
  }, []);

  return (
    <div
      id="main-content"
      className="relative min-h-screen bg-background text-foreground"
      role="main"
    >
      <Navigation />

      <main className="relative isolate overflow-hidden">
        <motion.div style={{ opacity: heroOpacity }}>
          <Suspense fallback={<LoadingSpinner />}>
            <Hero />
          </Suspense>
        </motion.div>

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
      </main>

      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
}
