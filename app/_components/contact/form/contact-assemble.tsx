"use client";

import { socialData } from "./contact-type";
import { Form } from "./contact-form";
import { motion } from "motion/react";

export const ContactForm = () => {
  return (
    <motion.div
      className="relative pt-2 pb-10"
      initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="flex flex-col-reverse gap-10 md:flex-row">
        <Social />
        <Form />
      </div>
    </motion.div>
  );
};

function Social() {
  return (
    <div className="hidden w-fit flex-col gap-4 py-10 md:flex">
      {socialData.map((item, index) => {
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <h1 className="text-muted-foreground text-sm font-thin tracking-wide">
              {item.name}
            </h1>
            <h3 className="text-foreground text-sm font-thin tracking-wide">
              {item.value}
            </h3>
          </motion.div>
        );
      })}
    </div>
  );
}
