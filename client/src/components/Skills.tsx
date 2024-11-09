import { motion } from "framer-motion";
import { Progress } from "@/components/ui/progress";

const skills = [
  { name: "Java & Spring Framework", level: 95 },
  { name: "Enterprise Java (JSP, Spring MVC)", level: 90 },
  { name: "Web Application Development", level: 90 },
  { name: "Oracle Database & PL/SQL", level: 85 },
  { name: "RESTful & SOAP Web Services", level: 85 },
  { name: "XML & JSON Integration", level: 85 },
  { name: "JavaScript & jQuery", level: 80 },
  { name: "Maven & Build Tools", level: 80 },
  { name: "Agile & Project Leadership", level: 85 },
  { name: "Security (STIG Compliance)", level: 80 }
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
