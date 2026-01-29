import { MotionHeading } from "@/components/motion-heading";
import Container from "../../../components/container";
import { MotionSubHeading } from "@/components/motion-sub-heading";
import { Skills } from "./skills-component";

export const SkillsPage = () => {
  return (
    <Container className="">
      <SkillSectionHeading />
      <Skills className="mt-8" />
    </Container>
  );
};

function SkillSectionHeading() {
  return (
    <>
      <div className="flex gap-2">
        <MotionHeading as="h2" className="tracking-tighter">Core</MotionHeading>
        <MotionHeading as="h2" className="text-muted-foreground tracking-tighter">
          Competencies
        </MotionHeading>
      </div>
      <MotionSubHeading className="mt-2 md:w-2xl">
        A snapshot of my technical strengths, covering frontend development,
        backend fundamentals, tooling, and modern development workflows.
      </MotionSubHeading>
    </>
  );
}
