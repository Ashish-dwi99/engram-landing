import React, { useEffect, useMemo, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";
import { cn } from "../../lib/utils";

type StatItem = {
  value: number;
  label: string;
  suffix?: string;
  prefix?: string;
  duration?: number;
};

type StatsCountProps = {
  title?: string;
  stats: StatItem[];
  className?: string;
  showDividers?: boolean;
};

const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

export const StatsCount: React.FC<StatsCountProps> = ({
  title,
  stats,
  className,
  showDividers = true,
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-20% 0px" });
  const prefersReducedMotion = useReducedMotion();
  const [currentValues, setCurrentValues] = useState<number[]>(() =>
    stats.map(() => 0)
  );

  const titleParts = useMemo(() => {
    if (!title) return null;
    const match = title.split(/\bWITH\b/i);
    if (match.length !== 2) return { before: title, after: null };
    return {
      before: match[0].trim(),
      after: match[1].trim(),
    };
  }, [title]);

  useEffect(() => {
    if (!isInView) return;

    if (prefersReducedMotion) {
      setCurrentValues(stats.map((stat) => stat.value));
      return;
    }

    const durations = stats.map((stat) => stat.duration ?? 1200);
    const start = performance.now();
    let rafId = 0;

    const tick = (now: number) => {
      const nextValues = stats.map((stat, index) => {
        const duration = durations[index];
        const progress = Math.min((now - start) / duration, 1);
        return stat.value * easeOutCubic(progress);
      });

      setCurrentValues(nextValues);

      if (nextValues.some((value, index) => value < stats[index].value)) {
        rafId = requestAnimationFrame(tick);
      }
    };

    rafId = requestAnimationFrame(tick);

    return () => cancelAnimationFrame(rafId);
  }, [isInView, prefersReducedMotion, stats]);

  return (
    <div ref={ref} className={cn("space-y-8", className)}>
      {title ? (
        <div>
          <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900">
            {titleParts?.before}
            {titleParts?.after ? (
              <span className="block text-gray-500">WITH {titleParts.after}</span>
            ) : null}
          </h3>
        </div>
      ) : null}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {stats.map((stat, index) => {
          const value = Math.round(currentValues[index] ?? 0);
          return (
            <div
              key={`${stat.label}-${index}`}
              className={cn(
                "rounded-2xl border border-black/5 bg-white/80 p-6 shadow-[0_12px_30px_rgba(0,0,0,0.05)]",
                showDividers && index > 0 && "md:border-l md:border-black/10 md:pl-8"
              )}
            >
              <div className="text-3xl font-semibold text-gray-900 mb-2">
                {stat.prefix ?? ""}
                {value}
                {stat.suffix ?? ""}
              </div>
              <p className="text-sm text-gray-500 leading-relaxed">{stat.label}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
