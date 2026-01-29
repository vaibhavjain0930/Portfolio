import React from "react";
import { experience, ExperienceData } from "./experience-data";
import { CircleCheck, Fan } from "lucide-react";
import { MotionSubHeading } from "@/components/motion-sub-heading";
import { MotionHeading } from "@/components/motion-heading";

export const ExperienceInSights = () => {
  return (
    <div className="flex flex-col gap-2 mt-1">
      {experience.map((item, index) => {
        return <ExperienceCard key={index} {...item} />;
      })}
    </div>
  );
};

function ExperienceCard({
  role,
  company,
  period,
  description,
}: ExperienceData) {
  return (
    <div className="mt-4">
      <MotionHeading as="h5" className="flex items-center gap-2">
        <CircleCheck className="h-5 w-5" />
        {role}
      </MotionHeading>
      <div className="md:ml-4  mt-1">
        <MotionHeading
          as="h6"
          className="text-muted-foreground text-shadow-none"
        >
          {company}
        </MotionHeading>
        <MotionSubHeading>{period}</MotionSubHeading>
        <div className="md:ml-2 ml-0 mt-2">
          {description.map((item, index) => {
            return (
              <MotionSubHeading key={index} className="w-full">
                <Fan className="text-background fill-primary h-5 w-5 inline mr-1" />
                {item}
              </MotionSubHeading>
            );
          })}
        </div>
      </div>
    </div>
  );
}
