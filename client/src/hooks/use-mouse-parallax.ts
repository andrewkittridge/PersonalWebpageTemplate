import { useEffect } from "react";
import { useMotionValue, useSpring, MotionValue } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";

interface MouseParallax {
  x: MotionValue<number>;
  y: MotionValue<number>;
}

export function useMouseParallax(intensity = 1): MouseParallax {
  const isMobile = useIsMobile();
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);

  const x = useSpring(rawX, { stiffness: 80, damping: 20, mass: 0.5 });
  const y = useSpring(rawY, { stiffness: 80, damping: 20, mass: 0.5 });

  useEffect(() => {
    if (isMobile) return;

    const handleMouseMove = (e: MouseEvent) => {
      const centerX = (e.clientX / window.innerWidth - 0.5) * 2;
      const centerY = (e.clientY / window.innerHeight - 0.5) * 2;
      rawX.set(centerX * intensity * 20);
      rawY.set(centerY * intensity * 20);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [isMobile, intensity, rawX, rawY]);

  return { x, y };
}
