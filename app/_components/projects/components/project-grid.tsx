"use client";

import { useState } from "react";
import { ProjectData } from "../constant";
import { ProjectCard } from "./project-card";
import { motion } from "motion/react";

export function ProjectsGrid({ projects }: { projects: ProjectData[] }) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  return (
    <div className="mt-8 grid md:grid-cols-2">
      {projects.map((project, index) => (
        <div
          className="relative p-4"
          key={project.title}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <ProjectCard key={project.title} {...project} />
          {hoveredIndex === index && (
            <motion.span
              layoutId="project-pill"
              className="absolute inset-0 rounded-md -z-10 bg-neutral-100/50 dark:bg-neutral-800/50"
              transition={{
                type: "spring",
                stiffness: 500,
                damping: 35,
              }}
            />
          )}
        </div>
      ))}
    </div>
  );
}
