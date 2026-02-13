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

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={ref}
      className={`glow-card ${alwaysGlow ? "glow-card-active" : ""} ${span} ${className}`}
      style={style}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Radial mouse highlight */}
      {isHovered && (
        <div
          className="pointer-events-none absolute inset-0 z-0 opacity-0 transition-opacity duration-300"
          style={{
            opacity: isHovered ? 1 : 0,
            background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(139, 92, 246, 0.06), transparent 60%)`,
          }}
        />
      )}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
