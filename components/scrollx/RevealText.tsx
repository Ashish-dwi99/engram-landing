import React, { useMemo, useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { cn } from "../../lib/utils";

type RevealDirection = "up" | "down" | "left" | "right";

type RevealTextProps = {
  children: React.ReactNode;
  className?: string;
  boxClassName?: string;
  delay?: number;
  duration?: number;
  stagger?: number;
  direction?: RevealDirection;
  mode?: "auto" | "manual";
  once?: boolean;
};

const getOffset = (direction: RevealDirection, distance: number) => {
  switch (direction) {
    case "up":
      return { x: 0, y: distance };
    case "down":
      return { x: 0, y: -distance };
    case "left":
      return { x: distance, y: 0 };
    case "right":
      return { x: -distance, y: 0 };
    default:
      return { x: 0, y: distance };
  }
};

export const RevealText: React.FC<RevealTextProps> = ({
  children,
  className,
  boxClassName,
  delay = 0,
  duration = 0.7,
  stagger = 0.06,
  direction = "up",
  mode = "manual",
  once = true,
}) => {
  const ref = useRef<HTMLSpanElement | null>(null);
  const prefersReducedMotion = useReducedMotion();
  const isInView = useInView(ref, { once, margin: "-10% 0px" });
  const isActive = prefersReducedMotion ? true : isInView;

  const offset = getOffset(direction, 18);

  const words = useMemo(() => {
    if (mode !== "auto") return null;
    if (typeof children !== "string") return null;
    return children.split(" ").filter(Boolean);
  }, [children, mode]);

  if (mode === "auto" && words) {
    return (
      <motion.span
        ref={ref}
        className={cn("inline-block", boxClassName)}
        initial="hidden"
        animate={isActive ? "visible" : "hidden"}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: stagger,
              delayChildren: delay,
            },
          },
        }}
      >
        {words.map((word, index) => (
          <motion.span
            key={`${word}-${index}`}
            className={cn("inline-block", className)}
            variants={{
              hidden: { opacity: 0, x: offset.x, y: offset.y },
              visible: {
                opacity: 1,
                x: 0,
                y: 0,
                transition: {
                  duration,
                  ease: [0.22, 0.61, 0.36, 1],
                },
              },
            }}
          >
            {word}
            {index < words.length - 1 ? " " : ""}
          </motion.span>
        ))}
      </motion.span>
    );
  }

  return (
    <motion.span
      ref={ref}
      className={cn("inline-block", boxClassName)}
      initial={{ opacity: 0, x: offset.x, y: offset.y }}
      animate={isActive ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x: offset.x, y: offset.y }}
      transition={{
        duration: prefersReducedMotion ? 0 : duration,
        delay: prefersReducedMotion ? 0 : delay,
        ease: [0.22, 0.61, 0.36, 1],
      }}
    >
      <span className={className}>{children}</span>
    </motion.span>
  );
};
