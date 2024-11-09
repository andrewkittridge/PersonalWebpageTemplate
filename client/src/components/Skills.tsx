import { motion } from "framer-motion";
import { Progress } from "@/components/ui/progress";

const skills = [
  { name: "React/Next.js", level: 90 },
  { name: "TypeScript", level: 85 },
  { name: "Node.js", level: 85 },
  { name: "AWS/Cloud Services", level: 80 },
  { name: "Docker/Kubernetes", level: 75 },
  { name: "CI/CD", level: 80 },
  { name: "MongoDB/PostgreSQL", level: 85 },
  { name: "REST/GraphQL APIs", level: 90 },
  { name: "TailwindCSS", level: 85 },
  { name: "Git/Version Control", level: 90 }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="container mx-auto"
      >
        <h2 className="text-4xl font-bold text-center mb-12">Skills</h2>
        <div className="max-w-3xl mx-auto space-y-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="space-y-2"
            >
              <div className="flex justify-between">
                <span className="font-medium">{skill.name}</span>
                <span className="text-muted-foreground">{skill.level}%</span>
              </div>
              <Progress value={skill.level} className="h-2" />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
