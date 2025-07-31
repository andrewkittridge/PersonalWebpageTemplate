import { useState, useEffect, KeyboardEvent } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { Link } from "wouter";
import { ThemeToggle } from "./theme-toggle";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleKeyPress = (e: KeyboardEvent<HTMLAnchorElement>, targetId: string) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Minimal progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-0.5 bg-muted-foreground/20 z-50 origin-left"
        style={{ scaleX }}
        role="progressbar"
        aria-label="Page scroll progress"
      />
      
      {/* Clean navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed w-full z-40 transition-all duration-300 ${
          scrolled
            ? "bg-background/80 backdrop-blur-sm border-b border-border/30"
            : "bg-transparent"
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex items-center justify-between h-16">
            {/* Minimal logo */}
            <Link href="/" className="text-xl font-light tracking-wide" role="banner">
              Andrew Kittridge
            </Link>

            <div className="flex items-center space-x-6">
              {/* Desktop navigation */}
              <div className="hidden md:flex items-center space-x-8">
                {["about", "experience", "skills", "contact"].map((item) => (
                  <a
                    key={item}
                    href={`#${item}`}
                    className="text-sm font-normal text-muted-foreground hover:text-foreground transition-colors duration-200"
                    role="menuitem"
                    tabIndex={0}
                    onKeyDown={(e) => handleKeyPress(e, item)}
                    aria-label={`Navigate to ${item} section`}
                  >
                    {item}
                  </a>
                ))}
              </div>

              <ThemeToggle />

              {/* Mobile menu button */}
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-expanded={mobileMenuOpen}
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              >
                {mobileMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Minimal mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-30 bg-background/95 backdrop-blur-sm md:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation menu"
          >
            <nav className="flex flex-col items-center justify-center h-full space-y-6 pt-16" role="menu">
              {["about", "experience", "skills", "contact"].map((item, index) => (
                <motion.a
                  key={item}
                  href={`#${item}`}
                  className="text-lg font-normal text-muted-foreground hover:text-foreground transition-colors duration-200"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => setMobileMenuOpen(false)}
                  role="menuitem"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    handleKeyPress(e, item);
                    if (e.key === 'Enter' || e.key === ' ') {
                      setMobileMenuOpen(false);
                    }
                  }}
                  aria-label={`Navigate to ${item} section`}
                >
                  {item}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
