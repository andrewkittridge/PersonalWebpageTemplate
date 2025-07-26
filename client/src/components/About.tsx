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
    { icon: <Briefcase className="w-8 h-8 text-primary" aria-hidden="true" />, value: "8", label: "Years of Full-Stack Innovation" },
    { icon: <Code className="w-8 h-8 text-primary" aria-hidden="true" />, value: "12", label: "Core Technologies Mastered" },
    { icon: <Database className="w-8 h-8 text-primary" aria-hidden="true" />, value: "35%", label: "Boost in Database Performance" },
    { icon: <Users className="w-8 h-8 text-primary" aria-hidden="true" />, value: "20%", label: "Increase in Team Productivity" },
  ],
};

export default function About() {
  // Track when the About section becomes visible
  const sectionRef = useSectionAnalytics<HTMLDivElement>('About');

  return (
    <section id="about" ref={sectionRef}>
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
          About Andrew Kittridge
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Full-Stack Web Developer specializing in Java, Spring Boot, and Enterprise Applications
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 items-start">
        <motion.article
          className="lg:col-span-2 space-y-6 text-lg text-muted-foreground tesla-card p-6"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {aboutData.description.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </motion.article>

        <motion.aside
          className="space-y-8"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="grid grid-cols-2 gap-8">
            {aboutData.stats.map((stat, index) => (
              <div key={index} className="text-center p-4 rounded-lg tesla-card glow-effect">
                {stat.icon}
                <p className="mt-2 text-3xl font-bold text-primary">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.aside>
      </div>
    </section>
  );
}
