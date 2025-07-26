import { motion } from "framer-motion";
import { GraduationCap, FolderGit2, Link } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { EDUCATION, PERSONAL_PROJECTS } from "@/lib/constants";
import { useSectionAnalytics } from "@/hooks/use-section-analytics";

export default function Education() {
  const sectionRef = useSectionAnalytics<HTMLDivElement>('Education');

  return (
    <section id="education" ref={sectionRef}>
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Andrew Kittridge's Education & Projects
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Educational background and personal projects showcasing Java and web development expertise.
        </p>
      </div>

      <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Education Column */}
        <motion.article
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Card className="h-full">
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className="p-2 rounded-full bg-primary/10 text-primary">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <CardTitle>Education</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold">{EDUCATION.degree}</h3>
                <CardDescription>
                  {EDUCATION.institution}, {EDUCATION.location} ({EDUCATION.graduationDate})
                </CardDescription>
              </div>
              <p className="text-sm text-muted-foreground">{EDUCATION.description}</p>
            </CardContent>
          </Card>
        </motion.article>

        {/* Personal Projects Column */}
        <motion.article
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Card className="h-full">
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className="p-2 rounded-full bg-primary/10 text-primary">
                  <FolderGit2 className="w-6 h-6" />
                </div>
                <CardTitle>Personal Projects</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              {PERSONAL_PROJECTS.map((project, index) => (
                <div key={index}>
                  <div className="flex justify-between items-start">
                    <h3 className="text-lg font-semibold">
                      <a 
                        href={project.url} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="group inline-flex items-center gap-2 hover:text-primary transition-colors"
                      >
                        <span>{project.title}</span>
                        <Link className="w-4 h-4" />
                      </a>
                    </h3>
                    <Badge variant="outline">{project.status}</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">{project.description}</p>
                  <ul className="mt-3 list-disc pl-5 space-y-1 text-sm text-muted-foreground">
                    {project.highlights.map((highlight, i) => (
                      <li key={i}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </CardContent>
          </Card>
        </motion.article>
      </div>
    </section>
  );
} 