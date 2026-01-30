"use client";

import Link from "next/link";
import { navItemsProps } from "./nav-bar";
import { useState } from "react";
import { motion } from "motion/react";
import { usePathname } from "next/navigation";

export const NavLinks = ({ navItems }: { navItems: navItemsProps[] }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const pathName = usePathname();

  return (
    <ul className="relative flex items-center">
      {navItems.map(({ title, href, Icon }, index) => {
        const isInternal = href.startsWith("/");
        const isActive = isInternal && pathName === href;
        return (
          <NavItem
            key={title}
            title={title}
            href={href}
            Icon={Icon}
            index={index}
            hoveredIndex={hoveredIndex}
            setHoveredIndex={setHoveredIndex}
            isActive={isActive}
          />
        );
      })}
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
  isActive,
}: {
  title: string;
  href: string;
  Icon: any;
  index: number;
  hoveredIndex: number | null;
  setHoveredIndex: (i: number | null) => void;
  isActive: boolean;
}) => {
  return (
    <Link
      href={href}
      target={`${href.includes("http") ? "_blank" : "_self"}`}
      className="group text-muted-foreground hover:text-foreground/90 focus-visible:ring-ring relative flex items-center gap-2 px-3 py-2 text-sm font-medium focus-visible:ring-2 focus-visible:outline-none md:px-4"
      onMouseEnter={() => setHoveredIndex(index)}
      onMouseLeave={() => setHoveredIndex(null)}
    >
      {/* hover pill  */}
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

      {/* Active glow underline */}
      {isActive && (
        <motion.span
          layoutId="active-underline"
          className="via-primary pointer-events-none absolute md:-bottom-1 -bottom-1.5 left-1/2 h-[0.1rem] w-full -translate-x-1/2 bg-linear-to-r from-transparent to-transparent"
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 25,
          }}
        />
      )}

      <Icon
        className={`relative z-10 inline-block h-4 w-4 md:hidden ${isActive ? "text-foreground" : ""}`}
      />

      <span
        className={`relative z-10 hidden sm:inline ${isActive ? "text-foreground" : ""}`}
      >
        {title}
      </span>
    </Link>
  );
};