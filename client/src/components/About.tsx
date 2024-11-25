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
              I'm a Web Developer at MetroStar with over 7 years of experience in designing, 
              developing, and maintaining applications focused on client success. Armed with a 
              B.S. in Computer Science, I specialize in Java, JavaScript, Spring, and enterprise 
              web applications.
            </p>
            <p className="text-lg leading-relaxed mt-4">
              Previously, I developed enterprise web applications for the Marine Corps Technology 
              Services Organization while at General Dynamics Information Technology and InfoReliance, 
              where I focused on creating secure, user-friendly solutions that drive real business results.
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  );
}
