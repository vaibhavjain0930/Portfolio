"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { SubHeading } from "../sub-heading";
import Container from "../container";
import { MoveUpRight } from "lucide-react";
import { useState } from "react";

const footerLinks = [
  {
    href: "https://github.com",
    text: "Github",
  },
  {
    href: "https://www.linkedin.com/in/vaibhav-jain-5b1768330/",
    text: "LinkedIn",
  },
  {
    href: "https://twitter.com",
    text: "Twitter",
  },
];

export default function Footer({ className }: { className?: string }) {
  return (
    <Container className="md:mt-0 mt-0">
      <footer
        className={cn("bg-background/60 relative backdrop-blur-xl", className)}
      >
        <motion.div
          initial={{ opacity: 0, y: 25, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="pb-8"
        >
          {/* Divider */}
          <div className="bg-border mb-8 h-px w-full" />

          {/* Bottom */}
          <BottomPart />
        </motion.div>
      </footer>
    </Container>
  );
}

function TopSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <ul className="text-muted-foreground relative mx-auto flex  items-center rounded-full">
      {footerLinks.map((link, index) => (
        <li key={index}>
          <LinkItem
            {...link}
            index={index}
            hoveredIndex={hoveredIndex}
            setHoveredIndex={setHoveredIndex}
          />
        </li>
      ))}
    </ul>
  );
}

function LinkItem({
  href,
  text,
  index,
  hoveredIndex,
  setHoveredIndex,
}: {
  href: string;
  text: string;
  index: number;
  hoveredIndex: number | null;
  setHoveredIndex: (i: number | null) => void;
}) {
  return (
    <Link
      href={href}
      target="_blank"
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
      className="group hover:text-foreground relative flex items-center gap-1 rounded-full px-4 py-2 text-sm font-medium transition-all"
    >
      {hoveredIndex === index && (
        <motion.span
          layoutId="footer-pill"
          className="absolute inset-0 rounded-full bg-neutral-100 dark:bg-neutral-800"
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 35,
          }}
        />
      )}

      <span className="relative z-10">{text}</span>
      <MoveUpRight className="relative z-10 h-4 w-4 translate-y-0 transition-all group-hover:-translate-y-1" />
    </Link>
  );
}

// function bottom part of footer
function BottomPart() {
  return (
    <div className="text-muted-foreground flex flex-col-reverse items-center justify-center md:justify-between text-sm md:flex-row gap-2">
      <div className="flex gap-3 flex-col flex-1 ">
        <SubHeading className="tracking-normal">
          Built with Next.js · Tailwind · Motion
        </SubHeading>
        <SubHeading className="tracking-normal md:mx-0 mx-auto">
          &copy; {new Date().getFullYear()} Vaibhav Jain
        </SubHeading>
      </div>
      <TopSection />
    </div>
  );
}
