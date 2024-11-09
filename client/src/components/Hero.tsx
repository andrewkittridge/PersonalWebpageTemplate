import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="h-screen flex items-center justify-center relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center space-y-6"
      >
        <h1 className="text-6xl md:text-8xl font-bold">
          Andrew Kittridge
        </h1>
        <h2 className="text-xl md:text-2xl text-muted-foreground">
          Full-Stack Web Developer
        </h2>
        <p className="max-w-2xl mx-auto text-muted-foreground">
          Specializing in Java, Spring, and Enterprise Applications
        </p>
        <div className="flex gap-4 justify-center">
          <Button size="lg" asChild>
            <a href="#contact">Get in Touch</a>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <a href="#experience">View Work</a>
          </Button>
        </div>
      </motion.div>
      <motion.div
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-2 bg-primary rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  );
}
