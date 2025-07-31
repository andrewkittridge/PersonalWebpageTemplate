import { motion } from "framer-motion";
import { Code, Globe, Database, Wrench, User } from "lucide-react";
import { SKILLS_CATEGORIES } from "@/lib/constants";
import { useSectionAnalytics } from "@/hooks/use-section-analytics";

const categoryIcons: { [key: string]: JSX.Element } = {
  languages: <Code className="w-5 h-5 text-muted-foreground" />,
  webTechnologies: <Globe className="w-5 h-5 text-muted-foreground" />,
  database: <Database className="w-5 h-5 text-muted-foreground" />,
  tools: <Wrench className="w-5 h-5 text-muted-foreground" />,
  personal: <User className="w-5 h-5 text-muted-foreground" />,
};

const categoryTitles: { [key: string]: string } = {
  languages: "Languages",
  webTechnologies: "Web Technologies",
  database: "Database",
  tools: "Tools & Methodologies",
  personal: "Personal & Emerging Tech"
};

export default function Skills() {
  const sectionRef = useSectionAnalytics<HTMLDivElement>('Skills');
  
  return (
    <section ref={sectionRef}>
      {/* Typography-focused header */}
      <div className="text-center content-spacing">
        <h2 className="text-4xl md:text-5xl font-light tracking-tight text-foreground">
          Skills
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Comprehensive expertise in Java, Spring Boot, enterprise applications, and modern web development technologies.
        </p>
      </div>

      {/* Simplified skills grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Object.entries(SKILLS_CATEGORIES).map(([category, skills], index) => (
          <motion.article
            key={category}
            className="minimal-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
          >
            <div className="space-y-4">
              {/* Category header */}
              <div className="flex items-center gap-3">
                {categoryIcons[category]}
                <h3 className="text-lg font-medium text-foreground">
                  {categoryTitles[category] || category}
                </h3>
              </div>

              {/* Skills list */}
              <div className="space-y-2">
                {skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="text-sm text-muted-foreground">
                    {skill.replace(" (expert-level)", "").replace(" (advanced)", "")}
                  </div>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
