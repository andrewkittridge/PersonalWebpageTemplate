import { motion, Variants } from "framer-motion";

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
    rotateX: 45,
    translateZ: -40,
    y: 16,
    filter: "blur(4px)",
  },
  visible: {
    opacity: 1,
    rotateX: 0,
    translateZ: 0,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
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
      style={{ perspective: "600px" }}
      variants={containerVariants}
      transition={{ delayChildren: delay }}
      {...animationProps}
    >
      {words.map((word: string, i: number) => (
        <motion.span
          key={`${word}-${i}`}
          variants={wordVariants}
          className="inline-block"
          style={{ transformStyle: "preserve-3d" }}
        >
          {word}
        </motion.span>
      ))}
    </MotionTag>
  );
}
