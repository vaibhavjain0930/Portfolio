"use client";

import Heading from "@/components/heading";
import { frontend, backend, tool } from "./skills-data";
import { cn } from "@/lib/utils";
import Marquee from "react-fast-marquee";
import { motion } from "motion/react";

export const Skills = ({ className }: { className: string }) => {
  return (
    <div className={className}>
      {/* frontend development tools  */}
      <StackTitle title={frontend.name} />
      <SkillsMarquee data={frontend.data} direction="left" />

      {/* backend development tools  */}
      <StackTitle title={backend.name} />
      <SkillsMarquee data={backend.data} direction="right" />

      {/* other tools and technologies  */}
      <StackTitle title={tool.name} />
      <SkillsMarquee data={tool.data} direction="left" />
      <DashLine className="mt-6" />
    </div>
  );
};

//line component
function DashLine({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "border-muted-foreground/70 h-px w-full border border-dashed",
        className,
      )}
    ></div>
  );
}

// Skill section title with fade-in
function StackTitle({ title }: { title: string }) {
  return (
    <motion.div
      className="my-2 flex items-center justify-between md:gap-4 gap-2 md:my-6"
      initial={{ y: 20, opacity: 0, filter: "blur(8px)" }}
      whileInView={{ y: 0, opacity: 1, filter: "blur(0px)" }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
    >
      <DashLine />
      <span className="text-muted-foreground/70 relative text-xs font-medium tracking-tight whitespace-nowrap uppercase select-none">
        {title}

        <span className="via-primary absolute inset-0 top-5 hidden h-px bg-linear-to-r from-transparent to-transparent dark:inline"></span>
      </span>
      <DashLine />
    </motion.div>
  );
}
// Individual skill with hover and fade-in animation
function SkillName({ title, index }: { title: string; index?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index ? index * 0.1 : 0 }}
      className="flex items-center  md:px-10 px-6 py-2"
    >
      <Heading as='h3' className="text-muted-foreground hover:text-primary font-bold tracking-tight transition-all duration-300 hover:scale-105">
        {title}
      </Heading>
    </motion.div>
  );
}

//marquee component
function SkillsMarquee({
  data,
  className,
  direction,
}: {
  data: string[];
  direction: "left" | "right";
  className?: string;
}) {
  return (
    <Marquee
      className={cn(
        "overflow-hidden mask-r-from-90% mask-l-from-90%",
        className,
      )}
      speed={25}
      pauseOnHover={true}
      direction={direction}
    >
      <div className="flex ">
        {data.map((name) => {
          return <SkillName key={`skill-${name}`} title={name} />;
        })}
      </div>
    </Marquee>
  );
}
