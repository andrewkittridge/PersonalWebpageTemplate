import { Variants } from "framer-motion";

export const depthCardVariants: Variants = {
  hidden: {
    opacity: 0,
    rotateX: 6,
    translateZ: -60,
    y: 30,
  },
  visible: {
    opacity: 1,
    rotateX: 0,
    translateZ: 0,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

export const slideFromDepth: Variants = {
  hidden: {
    opacity: 0,
    rotateY: 8,
    x: -40,
  },
  visible: {
    opacity: 1,
    rotateY: 0,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export const heroTextVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
    filter: "blur(8px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

export const fadeInUp: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};
