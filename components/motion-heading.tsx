"use client";

import Heading from "@/components/heading";
import { motion } from "motion/react";

export const MotionHeading = ({
  children,
  className,
  as = "h1",
}: {
  children: string | React.ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <Heading as={as} className={className}>
        {children}
      </Heading>
    </motion.div>
  );
};
