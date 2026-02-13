import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";

interface TextRevealProps {
  children: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  mode?: "animate" | "whileInView";
  delay?: number;
}

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
    },
  },
};

const wordVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 12,
    filter: "blur(4px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

export function TextReveal({
  children,
  className = "",
  as: Tag = "h1",
  mode = "animate",
  delay = 0,
}: TextRevealProps) {
  const words = children.split(" ");

  const MotionTag = motion[Tag] as any;

  const animationProps =
    mode === "whileInView"
      ? {
          initial: "hidden",
          whileInView: "visible",
          viewport: { once: true, margin: "-50px" },
        }
      : {
          initial: "hidden",
          animate: "visible",
        };

  return (
    <MotionTag
      className={`flex flex-wrap gap-x-[0.3em] ${className}`}
      variants={containerVariants}
      transition={{ delayChildren: delay }}
      {...animationProps}
    >
      {words.map((word: string, i: number) => (
        <motion.span key={`${word}-${i}`} variants={wordVariants} className="inline-block">
          {word}
        </motion.span>
      ))}
    </MotionTag>
  );
}
