import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from "@/components/ui/card";
import { EXPERIENCE } from "@/lib/constants";
import { useSectionAnalytics } from "@/hooks/use-section-analytics";

export default function Experience() {
  const sectionRef = useSectionAnalytics<HTMLDivElement>('Experience');

  return (
    <div ref={sectionRef}>
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Work Experience
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          My professional journey and key accomplishments.
        </p>
      </div>

      <div className="relative mt-16">
        <div className="absolute left-1/2 -ml-px h-full w-px bg-border hidden md:block"></div>

        {EXPERIENCE.map((exp, index) => (
          <motion.div
            key={index}
            className={`group relative mb-8 flex md:items-center ${
              index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            }`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div className="hidden md:flex absolute top-5 left-1/2 -ml-4 mt-1 h-8 w-8 items-center justify-center rounded-full bg-background border-2 border-primary">
              <Briefcase className="h-4 w-4 text-primary" />
            </div>
            
            <div className="w-full md:w-1/2 p-2">
              <ExperienceCard exp={exp} align={index % 2 === 0 ? 'md:text-left' : 'md:text-right'} />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

const ExperienceCard = ({ exp, align }: { exp: typeof EXPERIENCE[0], align: string }) => {
  return (
    <Card className={`w-full transform transition-transform duration-300 group-hover:scale-105 ${align}`}>
      <CardHeader>
        <CardTitle>{exp.title}</CardTitle>
        <CardDescription>
          {exp.company} | {exp.location}
          <span className="block text-xs text-muted-foreground">{exp.period}</span>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2 list-disc pl-5 text-sm text-muted-foreground">
          {exp.achievements.map((achievement, i) => (
            <li key={i}>{achievement}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};
