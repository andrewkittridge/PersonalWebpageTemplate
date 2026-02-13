import { ElementType, HTMLAttributes, ReactNode } from "react";

interface GradientTextProps extends HTMLAttributes<HTMLElement> {
  as?: ElementType;
  animated?: boolean;
  children: ReactNode;
}

export function GradientText({
  as: Tag = "span",
  animated = false,
  className = "",
  children,
  ...props
}: GradientTextProps) {
  return (
    <Tag
      className={`${animated ? "gradient-text-animated" : "gradient-text"} ${className}`}
      {...props}
    >
      {children}
    </Tag>
  );
}
