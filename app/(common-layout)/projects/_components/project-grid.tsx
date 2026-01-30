"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import Image from "next/image";
// @ts-ignore
import { ProjectData } from "./constant";
import { ProjectCard } from "./project-card";

export function ProjectsGrid({ projects }: { projects: ProjectData[] }) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const pathName = usePathname();
  const isHome = pathName === "/";

  const visibleProjects = isHome ? projects.slice(0, 4) : projects;
  return (
    <div className="mt-8 grid md:grid-cols-2">
      {visibleProjects.map((project, index) => (
        <div
          className="relative p-4"
          key={`project-${project.title}-${index}`}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <ProjectCard key={project.title} {...project} />
          {hoveredIndex === index && (
            <motion.span
              layoutId="project-pill"
              className="absolute inset-0 -z-10 rounded-md bg-neutral-100/50 dark:bg-neutral-800/50"
              transition={{
                type: "spring",
                stiffness: 500,
                damping: 35,
              }}
            />
          )}
        </div>
      ))}

       {!isHome && (
        <div className="text-muted-foreground flex items-center justify-center p-10">
          <Link href={"https://github.com/vaibhavjain0930"} target="_blank">
            <Button
              variant={"ghost"}
              className="flex cursor-pointer flex-col hover:bg-transparent dark:hover:bg-transparent"
            >
              <Image src="/github.png" alt="github" width={200} height={200} />
              <div>
                <Github className="mr-2 mb-1 inline-block" size={16} />
                Explore more on GitHub
              </div>
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
}