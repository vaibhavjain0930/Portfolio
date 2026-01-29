"use client";

import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export function MouseGlow({
  x,
  y,
  className,
}: {
  x: any;
  y: any;
  className?: string;
}) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 0, scale: 0.8 }}
      whileHover={{ opacity: 0.3, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 120,
        damping: 20,
      }}
      style={{ x, y }}
      className={cn(
        "absolute top-1/2 left-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-linear-to-tl from-orange-600/70 to-green-500/70 blur-3xl dark:from-blue-300 dark:via-orange-200/50 dark:to-green-300",
        className,
      )}
    />
  );
}
