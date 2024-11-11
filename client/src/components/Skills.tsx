import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { SKILLS_CATEGORIES } from "@/lib/constants";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
    },
  },
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 relative overflow-hidden">
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
          Skills
        </motion.h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          {Object.entries(SKILLS_CATEGORIES).map(([category, skills], index) => (
            <motion.div
              key={category}
              variants={item}
              className="tesla-card group"
            >
              <Card className="h-full bg-transparent border-none">
                <motion.div
                  className="p-6 h-full"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <h3 className="text-xl font-semibold mb-4 capitalize">
                    {category}
                  </h3>
                  <ul className="space-y-2">
                    {skills.map((skill, skillIndex) => (
                      <motion.li
                        key={skillIndex}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: skillIndex * 0.1 }}
                        className="flex items-center space-x-2"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                        <span className="text-muted-foreground">{skill}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
