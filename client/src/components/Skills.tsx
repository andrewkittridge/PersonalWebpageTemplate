import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <CardContent className="p-6 flex items-center justify-center h-full">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                    className="text-center"
                  >
                    <h3 className="text-lg font-medium">{skill.name}</h3>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
