"use client";
import { motion } from "motion/react";
import { SubHeading } from "./sub-heading";

export const MotionSubHeading = ({
  children,
  className,
}: {
  children: string | React.ReactNode;
  className?: string;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <SubHeading className={className}>{children}</SubHeading>
    </motion.div>
  );
};
