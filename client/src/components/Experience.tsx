import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const experiences = [
  {
    title: "Web Developer",
    company: "MetroStar",
    period: "Nov 2022 - Present",
    description: "Leading web development initiatives and creating client-focused solutions for the Marine Corps TSO",
  },
  {
    title: "Associate Programmer",
    company: "General Dynamics Information Technology",
    period: "Jul 2018 - Nov 2022",
    description: "Developed and maintained enterprise web applications for the Marine Corps TSO.",
  },
  {
    title: "Associate Consultant",
    company: "InfoReliance",
    period: "Jul 2017 - Jul 2018",
    description: "Supported enterprise web applications within the TSO of the Marine Corps.",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, x: -20 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
    },
  },
};

export default function Experience() {
  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-4"
      >
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Experience
        </motion.h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-4xl mx-auto space-y-6"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={item}
              className="tesla-card"
            >
              <Card className="bg-transparent border-none overflow-hidden">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <CardHeader>
                    <CardTitle className="flex justify-between items-start">
                      <div>
                        <motion.h3 
                          className="text-xl font-bold"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ delay: 0.2 }}
                        >
                          {exp.title}
                        </motion.h3>
                        <motion.p 
                          className="text-muted-foreground"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ delay: 0.3 }}
                        >
                          {exp.company}
                        </motion.p>
                      </div>
                      <motion.span 
                        className="text-sm text-muted-foreground"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.4 }}
                      >
                        {exp.period}
                      </motion.span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <motion.p 
                      className="text-muted-foreground"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: 0.5 }}
                    >
                      {exp.description}
                    </motion.p>
                  </CardContent>
                </motion.div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
