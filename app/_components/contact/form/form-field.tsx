"use client";

import { motion } from "motion/react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

interface FormFieldProps {
  field: {
    type: "text" | "email" | "textarea";
    label: string;
    name: string;
    required: boolean;
    rows?: number;
  };
  index: number;
}

export const FormField = ({ field, index }: FormFieldProps) => {
  const { type, label, name, required, rows } = field;

  const [isActive, setIsFocused] = useState(false);

  return (
    <motion.div
      className="relative mt-8"
      initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      {/* Floating Label */}
      <motion.label
        htmlFor={name}
        initial={false}
        animate={{
          y: isActive ? -22 : 0,
          opacity: isActive ? 1 : 0.68,
          scale: isActive ? 0.85 : 1,
          color: isActive ? "hsl(var(--background))" : "hsl(var(--primary))",
        }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="text-muted-foreground pointer-events-none absolute top-2 left-0 origin-left text-sm tracking-wide"
      >
        {label}
        {required && <span className="text-primary">*</span>}
      </motion.label>

      {/* Input / Textarea */}
      {type === "textarea" ? (
        <Textarea
          id={name}
          name={name}
          required={required}
          rows={rows ?? 4}
          onFocus={() => setIsFocused(true)}
          onBlur={(e) => setIsFocused(!!e.target.value)}
          className="input-underline h-32 resize-none pt-6 tracking-wide"
        />
      ) : (
        <Input
          id={name}
          type={type}
          name={name}
          required={required}
          onFocus={() => setIsFocused(true)}
          onBlur={(e) => setIsFocused(!!e.target.value)}
          className="input-underline pt-6"
        />
      )}
    </motion.div>
  );
};
