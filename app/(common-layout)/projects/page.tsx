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
        A portfolio of production-ready work centered on performance, intuitive
        usability, and well-structured code, created with industry-leading tools
        and best practices. Meticulously crafted for real-world solutions.
      </MotionSubHeading>
      <MotionSubHeading className="mt-2">
        From concept to deployment — engineered with clean code.
      </MotionSubHeading>

      {/* projects   */}
      <ProjectsGrid projects={projectsData} />
    </Container>
  );
};

export default ProjectPage;
