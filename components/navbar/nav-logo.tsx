"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { useEffect, useState } from "react";

//nav logo component
export const NavLogo = () => {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Default to light theme for SSR and initial render to prevent hydration mismatch
  const logoTheme = mounted && resolvedTheme === "dark" ? "dark" : "light";
  const logoPath = `/logo-${logoTheme}.png`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <Link href="/">
        <Image
          key={`${logoPath}-${mounted}`} // Force re-render when theme changes or component mounts
          src={logoPath}
          alt="logo"
          width={50}
          height={50}
          className="h-10 w-10 rounded-full md:h-12 md:w-12"
          priority
          unoptimized={true}
        />
      </Link>
    </motion.div>
  );
};
