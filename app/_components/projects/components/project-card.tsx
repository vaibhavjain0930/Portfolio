"use client";

import { ExternalLink, Github } from "lucide-react";
import React from "react";
import { ProjectData } from "../constant";
import { MouseGlow } from "@/components/mouse-glow";
import { AnimatedCard } from "@/components/animated-border";
import { useMouseGlow } from "@/hooks/useMouseGlow";
import Heading from "@/components/heading";
import { SubHeading } from "@/components/sub-heading";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export const ProjectCard = ({ ...project }: ProjectData) => {
  const { x, y, handleMouseMove } = useMouseGlow();
  return (
    <AnimatedCard
      onMouseMove={handleMouseMove}
      initial={{ y: 50, opacity: 0.8, filter: "blur(8px)" }}
      whileInView={{
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
        transition: {
          duration: 0.2,
          delay: 1 * 0.02,
          ease: "easeInOut",
        },
      }}
      viewport={{ once: true }}
      className="relative px-6 h-full py-6 md:py-10 hover:shadow-lg shadow-none duration-200 transition-all"
    >
      <CardContent {...project} />
      <MouseGlow x={x} y={y} />
    </AnimatedCard>
  );
};

function CardContent({
  title,
  description,
  stack,
  image,
  liveLink,
  githubLink,
  learning,
}: ProjectData) {
  return (
    <div className="space-y-4">
      <Heading as="h5" className="font-normal">
        {title}
      </Heading>
      <SubHeading className="text-sm">{description}</SubHeading>

      {/* Stack Pills */}
      <div className="flex flex-wrap gap-2">
        {stack.map((tech) => (
          <Badge
            key={tech}
            variant={"outline"}
            className="text-muted-foreground"
          >
            {tech}
          </Badge>
        ))}
      </div>

      {/* Learning */}
      <SubHeading className="text-sm">
        Leaning : <span className="italic">{learning}</span>
      </SubHeading>

      {/* Links */}
      <div className="relative z-10 flex gap-4 pt-2">
        {githubLink && (
          <Link
            href={githubLink}
            target="_blank"
            className="text-muted-foreground hover:text-primary flex items-center gap-1 text-sm transition-colors duration-200"
          >
            <Github size={16} /> Code
          </Link>
        )}
        {liveLink && (
          <Link
            href={liveLink}
            target="_blank"
            className="text-s hover:text-primary flex items-center gap-2 transition-colors duration-200"
          >
            <ExternalLink size={16} /> Live
          </Link>
        )}
      </div>
    </div>
  );
}
