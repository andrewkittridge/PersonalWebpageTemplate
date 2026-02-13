import { CSSProperties, ReactNode, useRef, useState } from "react";

interface GlowCardProps {
  alwaysGlow?: boolean;
  span?: string;
  className?: string;
  style?: CSSProperties;
  children: ReactNode;
}

export function GlowCard({
  alwaysGlow = false,
  span = "",
  className = "",
  style,
  children,
}: GlowCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePos({ x, y });

    // 3D tilt: +-8 degrees
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    setTilt({
      x: ((y - centerY) / centerY) * -8,
      y: ((x - centerX) / centerX) * 8,
    });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setTilt({ x: 0, y: 0 });
  };

  return (
    <div
      ref={ref}
      className={`depth-card ${alwaysGlow ? "depth-card-active" : ""} ${span} ${className}`}
      style={{
        ...style,
        perspective: "800px",
        transform: isHovered
          ? `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`
          : "rotateX(0deg) rotateY(0deg)",
        transition: isHovered
          ? "transform 0.1s ease-out"
          : "transform 0.4s ease-out",
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
    >
      {/* Radial mouse highlight — amber glow */}
      {isHovered && (
        <div
          className="pointer-events-none absolute inset-0 z-0 opacity-0 transition-opacity duration-300"
          style={{
            opacity: isHovered ? 1 : 0,
            background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(240, 168, 48, 0.06), transparent 60%)`,
          }}
        />
      )}
      <div className="relative z-10">{children}</div>
    </div>
  );
}

// Named export alias
export const DepthCard = GlowCard;
