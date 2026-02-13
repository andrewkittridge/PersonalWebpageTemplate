import { useState, useEffect, KeyboardEvent } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { Link } from "wouter";
import { ThemeToggle } from "./theme-toggle";
import { Menu, X } from "lucide-react";

const navItems = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
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

  // IntersectionObserver for active section tracking
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );

    navItems.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
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
      {/* Amber gradient progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-0.5 z-50 origin-left"
        style={{
          scaleX,
          background: "linear-gradient(90deg, #f0a830, #38bdd2)",
        }}
        aria-hidden="true"
      />

      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 inset-x-0 z-40 transition-all duration-300 ${scrolled
            ? "border-b backdrop-blur-2xl"
            : "bg-transparent"
          }`}
        style={scrolled ? {
          borderColor: "rgba(255,255,255,0.05)",
          background: "rgba(10, 14, 26, 0.85)",
        } : undefined}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="page-shell flex items-center justify-between h-16 gap-4">
          {/* Logo */}
          <Link
            href="/"
            className="group text-lg font-bold tracking-tight text-foreground font-display"
            aria-label="Navigate home"
          >
            <span className="transition-all duration-300 group-hover:gradient-text-animated">AK</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1 relative">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="nav-link relative"
                onKeyDown={(e) => handleKeyPress(e, item.id)}
              >
                {item.label}
                {activeSection === item.id && (
                  <motion.div
                    layoutId="active-nav"
                    className="absolute -bottom-1 left-3 right-3 h-0.5 rounded-full"
                    style={{ background: "linear-gradient(90deg, #f0a830, #38bdd2)" }}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <a
              href="#contact"
              className="pill-solid hidden md:inline-flex"
            >
              Contact
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

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-30 backdrop-blur-xl md:hidden"
            style={{ background: "rgba(10, 14, 26, 0.95)" }}
          >
            <nav className="flex flex-col items-center justify-center h-full space-y-8">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.id}
                  href={`#${item.id}`}
                  className="text-2xl font-medium transition-colors font-display"
                  style={{ color: "hsl(var(--foreground) / 0.8)" }}
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
                className="pill-solid px-8 py-3 mt-4"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
