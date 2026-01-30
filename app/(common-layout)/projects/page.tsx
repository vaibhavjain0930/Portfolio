import Container from "@/components/container";
import { MotionHeading } from "@/components/motion-heading";
import { MotionSubHeading } from "@/components/motion-sub-heading";
import { projectsData } from "./_components/constant";
import { ProjectsGrid } from "./_components/project-grid";

const ProjectPage = () => {
  return (
    <Container>
      <MotionHeading as="h2">Projects</MotionHeading>
      <MotionSubHeading className="mt-4 w-4/5">
        A showcase of production-ready projects focused on performance,
        usability, and clean code, built using industry-standard tools and best
        practices. Crafted with attention to detail and real-world use cases.
      </MotionSubHeading>
      <MotionSubHeading className="mt-2">
        From concept to deployment — crafted with clean code.
      </MotionSubHeading>

      {/* projects   */}
      <ProjectsGrid projects={projectsData} />
    </Container>
  );
};

export default ProjectPage;