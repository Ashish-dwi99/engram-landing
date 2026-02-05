import React, { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";
import { cn } from "../../lib/utils";

type VenomBeamProps = {
  className?: string;
  children?: React.ReactNode;
};

type Node = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
};

const createNodes = (count: number, width: number, height: number): Node[] =>
  Array.from({ length: count }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    vx: (Math.random() - 0.5) * 0.25,
    vy: (Math.random() - 0.5) * 0.25,
    radius: 1.6 + Math.random() * 1.8,
  }));

export default function VenomBeam({ className, children }: VenomBeamProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId = 0;
    let nodes: Node[] = [];

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const density = rect.width < 640 ? 22 : 42;
      nodes = createNodes(density, rect.width, rect.height);
    };

    const drawFrame = (time: number) => {
      const { width, height } = canvas.getBoundingClientRect();
      ctx.fillStyle = "rgba(245, 246, 252, 0.22)";
      ctx.fillRect(0, 0, width, height);
      ctx.globalCompositeOperation = "lighter";

      const maxDistance = 170;

      nodes.forEach((node) => {
        node.x += node.vx + Math.sin(time * 0.00035 + node.x) * 0.06;
        node.y += node.vy + Math.cos(time * 0.0005 + node.y) * 0.06;

        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;
      });

      for (let i = 0; i < nodes.length; i += 1) {
        for (let j = i + 1; j < nodes.length; j += 1) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < maxDistance) {
            const alpha = (1 - dist / maxDistance) * 0.28;
            ctx.strokeStyle = `rgba(126, 137, 190, ${alpha})`;
            ctx.lineWidth = 0.7;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      nodes.forEach((node) => {
        ctx.fillStyle = "rgba(120, 130, 190, 0.85)";
        ctx.shadowBlur = 12;
        ctx.shadowColor = "rgba(150, 170, 230, 0.45)";
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fill();
      });

      ctx.globalCompositeOperation = "source-over";
      ctx.shadowBlur = 0;

      animationId = requestAnimationFrame(drawFrame);
    };

    const drawStatic = () => {
      const { width, height } = canvas.getBoundingClientRect();
      ctx.fillStyle = "#f7f7fb";
      ctx.fillRect(0, 0, width, height);

      nodes.forEach((node) => {
        ctx.fillStyle = "rgba(120, 130, 190, 0.85)";
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fill();
      });
    };

    resize();

    if (prefersReducedMotion) {
      drawStatic();
      const handleResize = () => {
        resize();
        drawStatic();
      };
      window.addEventListener("resize", handleResize);
      return () => {
        cancelAnimationFrame(animationId);
        window.removeEventListener("resize", handleResize);
      };
    }

    ctx.fillStyle = "#f7f7fb";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    animationId = requestAnimationFrame(drawFrame);
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, [prefersReducedMotion]);

  return (
    <div className="relative w-full overflow-hidden bg-[#f7f7fb]">
      <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.9),transparent_40%)]" />
      <div className={cn("relative z-10", className)}>{children}</div>
    </div>
  );
}
