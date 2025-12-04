import { useState, useEffect, KeyboardEvent } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { Link } from "wouter";
import { ThemeToggle } from "./theme-toggle";
import { Menu, X } from "lucide-react";

const navItems = [
  { id: "about", label: "Profile" },
  { id: "experience", label: "Impact" },
  { id: "skills", label: "Capabilities" },
  { id: "education", label: "Growth" },
  { id: "contact", label: "Contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleKeyPress = (
    e: KeyboardEvent<HTMLAnchorElement>,
    targetId: string,
  ) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/40 via-primary to-primary/30 z-50 origin-left"
        style={{ scaleX }}
        aria-hidden="true"
      />

      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${
          scrolled
            ? "border-b border-white/5 bg-black/60 backdrop-blur-xl"
            : "bg-transparent"
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="page-shell flex items-center justify-between h-16 gap-4">
          <Link
            href="/"
            className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.5em]"
            aria-label="Navigate home"
          >
            ak.
          </Link>

          <div className="hidden md:flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2 py-1 backdrop-blur">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="nav-link"
                onKeyDown={(e) => handleKeyPress(e, item.id)}
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <a
              href="#contact"
              className="pill-ghost hidden md:inline-flex"
            >
              Engage
            </a>
            <a
              href="#experience"
              className="pill-solid hidden md:inline-flex"
            >
              Track record
            </a>
            <button
              className="pill-ghost md:hidden px-3 py-2"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-30 bg-black/90 backdrop-blur-xl md:hidden"
          >
            <nav className="flex flex-col items-center justify-center h-full space-y-6">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.id}
                  href={`#${item.id}`}
                  className="text-2xl font-semibold text-foreground/80 hover:text-foreground transition-colors"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => setMobileMenuOpen(false)}
                  onKeyDown={(e) => handleKeyPress(e, item.id)}
                >
                  {item.label}
                </motion.a>
              ))}
              <a
                href="#contact"
                className="pill-solid px-6 py-3"
                onClick={() => setMobileMenuOpen(false)}
              >
                Start a project
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
