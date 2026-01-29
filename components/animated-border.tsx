"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { GlowLine } from "@/components/glow-line";

export function AnimatedCard({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
} & React.ComponentProps<typeof motion.div>) {
  return (
    <motion.div
      {...props}
      className={cn(
        "bg-background/60 relative overflow-hidden rounded-xl border border-slate-600/10 shadow-xs transition-all duration-300 dark:border-slate-50/10 dark:shadow-sm",
        className,
      )}
    >
      {children}

      {/* Shared border accents */}
      <GlowLine className="top-10 left-0 h-1/2 w-px bg-linear-to-b" />
      <GlowLine className="right-10 bottom-0" />
    </motion.div>
  );
}
