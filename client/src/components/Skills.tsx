import { motion } from "framer-motion";
import { Code, Globe, Database, Wrench, User, Star } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SKILLS_CATEGORIES } from "@/lib/constants";
import { useSectionAnalytics } from "@/hooks/use-section-analytics";

const categoryIcons: { [key: string]: JSX.Element } = {
  languages: <Code className="w-6 h-6" />,
  webTechnologies: <Globe className="w-6 h-6" />,
  database: <Database className="w-6 h-6" />,
  tools: <Wrench className="w-6 h-6" />,
  personal: <User className="w-6 h-6" />,
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
    <div ref={sectionRef}>
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Technical Skills
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          A collection of technologies and tools I am proficient with.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Object.entries(SKILLS_CATEGORIES).map(([category, skills], index) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="h-full transform transition-transform duration-300 hover:scale-105">
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="p-2 rounded-full bg-primary/10 text-primary">
                  {categoryIcons[category]}
                </div>
                <CardTitle>{categoryTitles[category] || category}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} variant="secondary">
                      {skill.includes("(expert-level)") ? <Star className="w-3 h-3 mr-1 text-amber-400" /> : null}
                      {skill.replace(" (expert-level)", "").replace(" (advanced)", "")}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
