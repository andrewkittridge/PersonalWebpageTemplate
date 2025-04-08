import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <section id="about" className="py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
        <Card className="max-w-4xl mx-auto">
          <CardContent className="p-6">
            <p className="text-lg leading-relaxed">
              Results-driven Full-Stack Web Developer with over seven years of experience in designing, 
              developing, and delivering secure, scalable, and high-performance enterprise applications. 
              I specialize in leveraging Java, Spring Framework, JavaScript, and Oracle SQL to create 
              robust solutions that meet stringent operational requirements.
            </p>
            <p className="text-lg leading-relaxed mt-4">
              My career highlights include modernizing legacy systems—such as transitioning Struts-based 
              applications to Spring—optimizing database performance, and enhancing user interfaces to 
              improve both functionality and user satisfaction.
            </p>
            <p className="text-lg leading-relaxed mt-4">
              Holding an active Secret Security Clearance, I thrive in Agile environments and have a 
              proven track record of delivering STIG-compliant, mission-critical software for government 
              and enterprise clients. Beyond my professional work, I am passionate about mentoring junior 
              developers and exploring innovative technologies, as demonstrated by personal projects 
              integrating React and Large Language Model (LLM) APIs.
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
}
