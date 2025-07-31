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
    <section ref={sectionRef}>
      {/* Typography-focused header */}
      <div className="text-center content-spacing">
        <h2 className="text-4xl md:text-5xl font-light tracking-tight text-foreground">
          About
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Full-Stack Web Developer specializing in Java, Spring Boot, and Enterprise Applications
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
        {/* Main content with generous spacing */}
        <motion.article
          className="lg:col-span-2 space-y-6 text-lg text-muted-foreground leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {aboutData.description.map((paragraph, index) => (
            <p key={index} className="text-spacing">{paragraph}</p>
          ))}
        </motion.article>

        {/* Minimal stats section */}
        <motion.aside
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          <div className="grid grid-cols-2 gap-6">
            {aboutData.stats.map((stat, index) => (
              <div key={index} className="text-center p-4 minimal-card">
                {stat.icon}
                <p className="mt-3 text-2xl font-light text-foreground">{stat.value}</p>
                <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.aside>
      </div>
    </section>
  );
}
