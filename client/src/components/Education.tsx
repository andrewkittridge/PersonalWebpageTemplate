import { motion } from "framer-motion";
import { GraduationCap, FolderGit2, Link } from "lucide-react";
import { EDUCATION, PERSONAL_PROJECTS } from "@/lib/constants";
import { useSectionAnalytics } from "@/hooks/use-section-analytics";

export default function Education() {
  const sectionRef = useSectionAnalytics<HTMLDivElement>('Education');

  return (
    <section ref={sectionRef}>
      {/* Typography-focused header */}
      <div className="text-center content-spacing">
        <h2 className="text-4xl md:text-5xl font-light tracking-tight text-foreground">
          Education & Projects
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Educational background and personal projects showcasing Java and web development expertise.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Education Section */}
        <motion.article
          className="minimal-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <GraduationCap className="w-5 h-5 text-muted-foreground" />
              <h3 className="text-lg font-medium text-foreground">Education</h3>
            </div>
            
            <div className="space-y-3">
              <div>
                <h4 className="text-lg font-medium text-foreground">{EDUCATION.degree}</h4>
                <p className="text-muted-foreground">
                  {EDUCATION.institution}, {EDUCATION.location}
                </p>
                <p className="text-sm text-muted-foreground/70">{EDUCATION.graduationDate}</p>
              </div>
              <p className="text-muted-foreground leading-relaxed">{EDUCATION.description}</p>
            </div>
          </div>
        </motion.article>

        {/* Personal Projects Section */}
        <motion.article
          className="minimal-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <FolderGit2 className="w-5 h-5 text-muted-foreground" />
              <h3 className="text-lg font-medium text-foreground">Personal Projects</h3>
            </div>
            
            <div className="space-y-6">
              {PERSONAL_PROJECTS.map((project, index) => (
                <div key={index} className="space-y-3">
                  <div className="space-y-2">
                    <h4 className="text-lg font-medium text-foreground">
                      <a 
                        href={project.url} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="inline-flex items-center gap-2 hover:text-muted-foreground transition-colors duration-200"
                      >
                        <span>{project.title}</span>
                        <Link className="w-4 h-4" />
                      </a>
                    </h4>
                    <p className="text-sm text-muted-foreground/70">{project.status}</p>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                  
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {project.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-muted-foreground/50 mt-1">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </motion.article>
      </div>
    </section>
  );
} 