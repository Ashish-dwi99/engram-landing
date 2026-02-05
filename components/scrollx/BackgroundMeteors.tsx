import React, { useMemo } from "react";
import { cn } from "../../lib/utils";

type BackgroundMeteorsProps = {
  className?: string;
  children?: React.ReactNode;
  meteors?: number;
};

export const BackgroundMeteors: React.FC<BackgroundMeteorsProps> = ({
  className,
  children,
  meteors = 18,
}) => {
  const meteorStyles = useMemo(() => {
    return Array.from({ length: meteors }, () => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 35}%`,
      animationDelay: `${Math.random() * 6}s`,
      animationDuration: `${4 + Math.random() * 4}s`,
    }));
  }, [meteors]);

  return (
    <div className={cn("relative overflow-hidden bg-white", className)}>
      <div className="absolute inset-0">
        {meteorStyles.map((style, index) => (
          <span
            key={`meteor-${index}`}
            className="scrollx-meteor"
            style={style}
          />
        ))}
      </div>
      <div className="relative z-10 h-full w-full">{children}</div>
    </div>
  );
};
