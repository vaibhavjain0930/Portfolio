import Container from "@/components/container";
import { MotionHeading } from "@/components/motion-heading";
import { MotionSubHeading } from "@/components/motion-sub-heading";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { ProjectsGrid } from "./project-grid";
import { projectsData } from "./constant";

export const Projects = () => {
  return (
    <Container className="md:mt-8">
      <PageHeading />
      <ProjectsGrid projects={projectsData} />
      <MoreButton />
    </Container>
  );
};

function PageHeading() {
  return (
    <>
      <MotionHeading as="h2">
        Thing I <span className="text-muted-foreground">Built</span>
      </MotionHeading>
      <MotionSubHeading className="mt-2">
        Projects created to understand core concepts, solve problems, and gain
        hands-on development experience.
      </MotionSubHeading>
    </>
  );
}

function MoreButton() {
  return (
    <div className="text-center">
      <Link href="/projects" aria-label="See all projects">
        <Button variant={"ghost"} className="relative dark:hover:bg-background group mx-auto mt-4 cursor-pointer hover:bg-background w-30 overflow-hidden">
          See More{" "}
          <ChevronDown className="absolute right-0 h-5 w-5 -translate-y-6   transition-all duration-300 group-hover:translate-y-0 opacity-0 group-hover:opacity-100" />
          <ChevronDown className="absolute right-0 h-5 w-5 translate-y-0 transition-all duration-300 group-hover:translate-y-6 group-hover:opacity-0" />
        </Button>
      </Link>
    </div>
  );
}