import { useScroll, useTransform, MotionValue } from "framer-motion";
import { RefObject } from "react";

interface ScrollDepthValues {
  rotateX: MotionValue<number>;
  translateZ: MotionValue<number>;
  opacity: MotionValue<number>;
  scale: MotionValue<number>;
}

interface ScrollDepthOptions {
  target: RefObject<HTMLElement>;
  offset?: [string, string];
  rotateRange?: [number, number];
  zRange?: [number, number];
  opacityRange?: [number, number];
  scaleRange?: [number, number];
}

export function useScrollDepth({
  target,
  offset = ["start end", "end start"],
  rotateRange = [4, 0],
  zRange = [-40, 0],
  opacityRange = [0, 1],
  scaleRange = [0.95, 1],
}: ScrollDepthOptions): ScrollDepthValues {
  const { scrollYProgress } = useScroll({
    target,
    offset: offset as any,
  });

  const rotateX = useTransform(scrollYProgress, [0, 0.5], rotateRange);
  const translateZ = useTransform(scrollYProgress, [0, 0.5], zRange);
  const opacity = useTransform(scrollYProgress, [0, 0.3], opacityRange);
  const scale = useTransform(scrollYProgress, [0, 0.4], scaleRange);

  return { rotateX, translateZ, opacity, scale };
}
