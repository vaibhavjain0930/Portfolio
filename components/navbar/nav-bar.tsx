"use client";
import { Home, FileBracesCorner, Github, Linkedin, Earth } from "lucide-react";
import { ToggleModeButton } from "../toggle-theme";
import { NavLinks } from "./nav-links";
import { NavLogo } from "./nav-logo";

import { motion } from "motion/react";

export interface navItemsProps {
  title: string;
  href: string;
  Icon: any;
}

export const NavBar = () => {
  const navItems: navItemsProps[] = [
    {
      title: "Home",
      href: "/",
      Icon: Home,
    },
    {
      title: "Projects",
      href: "/projects",
      Icon: FileBracesCorner,
    },
    {
      title : "Blog",
      href : "#blog",
      Icon : Earth
    },
    {
      title: "GitHub",
      href: "https://github.com/vaibhavjain0930",
      Icon: Github,
    },
    {
      title: "LinkedIn",
      href: "https://www.linkedin.com/in/vaibhav-jain-5b1768330/",
      Icon: Linkedin,
    },
  ];

  return (
    <header className="sticky top-0 left-0 z-50 w-full">
      <div className="flex items-center justify-between px-4 py-5 backdrop-blur-md md:px-2">
        {/* logo icon  */}
        <NavLogo />

        <motion.nav
          className="border-border bg-background/70 relative flex max-w-fit items-center gap-2 overflow-hidden rounded-full border p-1 shadow-lg"
          initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
          whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* glow line  */}
          <div className="dark:via-foreground/40 absolute top-0 left-0 h-px w-1/2 bg-linear-to-r from-transparent to-transparent"></div>

          {/* Navigation Links */}
          <NavLinks navItems={navItems} />

          {/* Divider */}
          <span className="bg-border mx-1 h-6 w-px" />

          {/* Theme Toggle */}
          <ToggleModeButton />
        </motion.nav>
      </div>
    </header>
  );
};
