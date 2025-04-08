import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { EDUCATION, PERSONAL_PROJECTS } from "@/lib/constants";

export default function Education() {
  return (
    <section id="education" className="py-20">
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
          Education & Projects
        </motion.h2>

        <div className="max-w-4xl mx-auto space-y-12">
          {/* Education */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="bg-transparent">
              <CardHeader>
                <CardTitle className="text-2xl">Education</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-semibold">{EDUCATION.degree}</h3>
                    <span className="text-sm text-muted-foreground">{EDUCATION.graduationDate}</span>
                  </div>
                  <p className="text-muted-foreground">{EDUCATION.institution}, {EDUCATION.location}</p>
                  <p className="mt-4">{EDUCATION.description}</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Personal Projects */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Card className="bg-transparent">
              <CardHeader>
                <CardTitle className="text-2xl">Personal Projects</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  {PERSONAL_PROJECTS.map((project, index) => (
                    <div key={index} className="space-y-3">
                      <div className="flex justify-between items-start">
                        <h3 className="text-xl font-semibold">{project.title}</h3>
                        <span className="text-sm text-muted-foreground">{project.status}</span>
                      </div>
                      <p className="text-muted-foreground">{project.description}</p>
                      <ul className="list-disc pl-5 space-y-2 mt-3">
                        {project.highlights.map((highlight, i) => (
                          <li key={i} className="text-muted-foreground">{highlight}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
} 