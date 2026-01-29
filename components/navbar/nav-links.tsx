"use client";

import Link from "next/link";
import { navItemsProps } from "./nav-bar";
import { useState } from "react";
import { motion } from "motion/react";

export const NavLinks = ({ navItems }: { navItems: navItemsProps[] }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <ul className="relative flex items-center">
      {navItems.map(({ title, href, Icon }, index) => (
        <NavItem
          key={title}
          title={title}
          href={href}
          Icon={Icon}
          index={index}
          hoveredIndex={hoveredIndex}
          setHoveredIndex={setHoveredIndex}
        />
      ))}
    </ul>
  );
};

// Nav items
const NavItem = ({
  title,
  href,
  Icon,
  index,
  hoveredIndex,
  setHoveredIndex,
}: {
  title: string;
  href: string;
  Icon: any;
  index: number;
  hoveredIndex: number | null;
  setHoveredIndex: (i: number | null) => void;
}) => {
  return (
    <Link
      href={href}
      target={`${href.startsWith("http") ? "_blank" : "_self"}`}
      className="group text-muted-foreground hover:text-foreground/90 focus-visible:ring-ring relative flex items-center gap-2 px-3 py-2 text-sm font-medium focus-visible:ring-2 focus-visible:outline-none md:px-4"
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
    >
      {hoveredIndex === index && (
        <motion.span
          layoutId="hovered-span"
          className="pointer-events-none absolute inset-0 rounded-full bg-neutral-100 dark:bg-neutral-800"
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 35,
          }}
        />
      )}

      <Icon className="relative z-10 h-4 w-4 transition-transform md:hidden inline-block" />

      <span className="relative z-10 hidden sm:inline">{title}</span>
    </Link>
  );
};
