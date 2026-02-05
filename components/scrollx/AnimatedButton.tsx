import React from "react";
import { cn } from "../../lib/utils";

const variantClasses: Record<string, string> = {
  default: "bg-black text-white hover:bg-gray-900",
  outline: "border border-black/15 text-gray-700 hover:border-black/30 bg-white/80",
  ghost: "text-gray-700 hover:bg-black/5",
};

const sizeClasses: Record<string, string> = {
  sm: "px-4 py-2 text-xs",
  md: "px-6 py-3 text-sm",
  lg: "px-7 py-3 text-base",
};

const roundedClasses: Record<string, string> = {
  none: "rounded-none",
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  full: "rounded-full",
};

type AnimatedButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  glow?: boolean;
  shimmerColor?: string;
  shimmerSize?: string;
  shimmerDuration?: string;
  hideAnimations?: boolean;
  background?: string;
  rounded?: "none" | "sm" | "md" | "lg" | "full";
  uppercase?: boolean;
  asChild?: boolean;
  textEffect?: "none" | "gradient";
};

export const AnimatedButton: React.FC<AnimatedButtonProps> = ({
  className,
  children,
  variant = "default",
  size = "md",
  glow = false,
  shimmerColor = "rgba(255, 255, 255, 0.45)",
  shimmerSize = "180px",
  shimmerDuration = "2.6s",
  hideAnimations = false,
  background,
  rounded = "sm",
  uppercase = false,
  asChild = false,
  textEffect = "none",
  style,
  ...props
}) => {
  const baseClasses = cn(
    "relative inline-flex items-center justify-center gap-3 font-semibold tracking-wide transition-all overflow-hidden",
    variantClasses[variant],
    sizeClasses[size],
    roundedClasses[rounded],
    uppercase && "uppercase text-[11px] tracking-[0.2em]",
    className
  );

  const contentClasses = cn(
    "relative z-10",
    textEffect === "gradient" &&
      "bg-clip-text text-transparent bg-gradient-to-r from-white via-white/80 to-white"
  );

  const buttonStyles: React.CSSProperties = {
    ...(style ?? {}),
    background: background ?? style?.background,
    boxShadow: glow ? "0 20px 45px rgba(0, 0, 0, 0.15)" : style?.boxShadow,
  };

  const shimmer = !hideAnimations ? (
    <span
      className="scrollx-shimmer pointer-events-none absolute inset-0"
      style={{
        background: `linear-gradient(120deg, transparent 0%, ${shimmerColor} 50%, transparent 100%)`,
        width: shimmerSize,
        transform: "translateX(-150%)",
        animation: `scrollx-shimmer ${shimmerDuration} linear infinite`,
      }}
    />
  ) : null;

  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children, {
      className: cn(baseClasses, (children as React.ReactElement).props?.className),
      style: buttonStyles,
    });
  }

  return (
    <button className={baseClasses} style={buttonStyles} {...props}>
      <span className={contentClasses}>{children}</span>
      {shimmer}
    </button>
  );
};
