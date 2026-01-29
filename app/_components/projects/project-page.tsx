import Container from "@/components/container";
import { MotionHeading } from "@/components/motion-heading";
import { MotionSubHeading } from "@/components/motion-sub-heading";
import { projectsData } from "./constant";
import { ProjectCard } from "./components/project-card";
import { ProjectsGrid } from "./components/project-grid";

export const Projects = () => {
  return (
    <Container className="md:mt-8">
      <PageHeading />
      <ProjectsGrid projects={projectsData} />
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
