"use client";

import React from "react";
import { cn } from "../../lib/utils";
import { motion } from "framer-motion";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  glow?: boolean;
  hoverGlow?: boolean;
  className?: string;
  animate?: boolean;
  delay?: number;
}

export const Card: React.FC<CardProps> = ({
  children,
  glow = false,
  hoverGlow = true,
  className,
  animate = true,
  delay = 0,
  ...props
}) => {
  const content = (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950/40 p-6 backdrop-blur-xl transition-all duration-500",
        hoverGlow && "hover:border-zinc-700/80 hover:bg-zinc-950/80 hover:shadow-2xl hover:shadow-indigo-500/5",
        glow && "border-zinc-700 bg-zinc-900/20 shadow-lg shadow-indigo-500/5",
        className
      )}
      {...props}
    >
      {/* Dynamic glow effect inside the borders */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_50%_120%,rgba(99,102,241,0.08),transparent_60%)]" />
      {children}
    </div>
  );

  if (animate) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
        className="h-full"
      >
        {content}
      </motion.div>
    );
  }

  return content;
};
export default Card;
