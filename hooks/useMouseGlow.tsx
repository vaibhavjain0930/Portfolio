"use client";

import { useMotionValue, useSpring } from "motion/react";

export function useMouseGlow() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const x = useSpring(mouseX, { stiffness: 400, damping: 35 });
  const y = useSpring(mouseY, { stiffness: 400, damping: 35 });

  function handleMouseMove(e: React.MouseEvent<HTMLElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  }

  return { x, y, handleMouseMove };
}
