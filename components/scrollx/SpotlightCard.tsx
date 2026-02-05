import React, { useRef } from "react";
import { cn } from "../../lib/utils";

type SpotlightCardProps = React.HTMLAttributes<HTMLDivElement> & {
  spotlightColor?: string;
};

export const SpotlightCard: React.FC<SpotlightCardProps> = ({
  className,
  spotlightColor = "255, 255, 255",
  style,
  children,
  ...props
}) => {
  const cardRef = useRef<HTMLDivElement | null>(null);

  const handleMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    cardRef.current.style.setProperty("--spotlight-x", `${x}px`);
    cardRef.current.style.setProperty("--spotlight-y", `${y}px`);
  };

  const handleLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.setProperty("--spotlight-x", "50%");
    cardRef.current.style.setProperty("--spotlight-y", "50%");
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={cn("relative overflow-hidden group", className)}
      style={{
        ...(style ?? {}),
        ["--spotlight-color" as string]: spotlightColor,
        ["--spotlight-x" as string]: "50%",
        ["--spotlight-y" as string]: "50%",
      }}
      {...props}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(600px circle at var(--spotlight-x) var(--spotlight-y), rgba(var(--spotlight-color), 0.2), transparent 45%)",
        }}
      />
      <div className="relative z-10 h-full">{children}</div>
    </div>
  );
};
