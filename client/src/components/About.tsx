import { motion } from "framer-motion";
import { Briefcase, Code, Database, Users } from "lucide-react";
import { useSectionAnalytics } from "@/hooks/use-section-analytics";

const aboutData = {
  description: [
    "Andrew Kittridge is a seasoned Full-Stack Engineer with 8 years of expertise building scalable, secure enterprise solutions for the U.S. Marine Corps and government clients.",
    "With deep proficiency in Java, Spring Boot, JavaScript, and Oracle PL/SQL, I excel at modernizing legacy systems, optimizing database performance, and delivering STIG-compliant applications.",
    "Holding an active Secret Security Clearance, I thrive in Agile/DevOps environments, leveraging AI-driven integrations to solve mission-critical challenges with precision and efficiency.",
    "Currently working at MetroStar in Reston, Virginia, I specialize in U.S. Marine Corps platforms including MROWS (Marine Resource Orders Writing Service) and MCPDT (Marine Corps Permanent Duty Travel) systems.",
  ],
  stats: [
    { icon: <Briefcase className="w-6 h-6 text-muted-foreground" aria-hidden="true" />, value: "8", label: "Years of Full-Stack Innovation" },
    { icon: <Code className="w-6 h-6 text-muted-foreground" aria-hidden="true" />, value: "12", label: "Core Technologies Mastered" },
    { icon: <Database className="w-6 h-6 text-muted-foreground" aria-hidden="true" />, value: "35%", label: "Boost in Database Performance" },
    { icon: <Users className="w-6 h-6 text-muted-foreground" aria-hidden="true" />, value: "20%", label: "Increase in Team Productivity" },
  ],
};

export default function About() {
  // Track when the About section becomes visible
  const sectionRef = useSectionAnalytics<HTMLDivElement>('About');

  return (
    <section
      ref={sectionRef}
      id="about"
      aria-labelledby="about-heading"
      className="scroll-mt-16"
    >
      {/* Enhanced typography-focused header */}
      <header className="text-center space-y-fluid">
        <h2
          id="about-heading"
          className="text-heading-1 text-foreground"
        >
          About
        </h2>
        <p className="text-body-large text-muted-foreground max-w-3xl mx-auto">
          Full-Stack Web Developer specializing in Java, Spring Boot, and Enterprise Applications
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 items-start">
        {/* Enhanced main content */}
        <motion.article
          className="lg:col-span-2 space-y-fluid text-body text-muted-foreground"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {aboutData.description.map((paragraph, index) => (
            <p key={index} className="leading-relaxed">{paragraph}</p>
          ))}
        </motion.article>

        {/* Enhanced stats section */}
        <motion.aside
          className="space-y-fluid"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          aria-label="Key achievements and statistics"
        >
          <div className="grid grid-cols-2 gap-4 md:gap-6">
            {aboutData.stats.map((stat, index) => (
              <div
                key={index}
                className="elevated-card text-center p-6 group"
                role="region"
                aria-labelledby={`stat-${index}-value`}
              >
                <div className="flex justify-center mb-4" aria-hidden="true">
                  {stat.icon}
                </div>
                <p
                  id={`stat-${index}-value`}
                  className="text-heading-3 font-light text-foreground mb-2"
                >
                  {stat.value}
                </p>
                <p className="text-body-small text-muted-foreground leading-snug">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </motion.aside>
      </div>
    </section>
  );
}
