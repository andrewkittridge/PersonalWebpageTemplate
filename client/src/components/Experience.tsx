import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const experiences = [
  {
    title: "Web Developer",
    company: "MetroStar",
    period: "Nov 2022 - Present",
    description: "Leading web development initiatives and creating client-focused solutions",
  },
  {
    title: "Associate Programmer",
    company: "General Dynamics Information Technology",
    period: "Jul 2018 - Nov 2022",
    description: "Developed and maintained enterprise web applications for the Marine Corps TSO. Led migration to jQuery, improving development time and user experience.",
  },
  {
    title: "Associate Consultant",
    company: "InfoReliance",
    period: "Jul 2017 - Jul 2018",
    description: "Supported enterprise web applications within the TSO of the Marine Corps. Identified and fixed security vulnerabilities found from Fortify SCA.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-bold text-center mb-12">Experience</h2>
        <div className="max-w-4xl mx-auto space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-bold">{exp.title}</h3>
                      <p className="text-muted-foreground">{exp.company}</p>
                    </div>
                    <span className="text-sm text-muted-foreground">{exp.period}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{exp.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
