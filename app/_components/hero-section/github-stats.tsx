import { MotionHeading } from "@/components/motion-heading";
import { MotionSubHeading } from "@/components/motion-sub-heading";
import { getPublicRepoCount } from "@/lib/github";
import { CornerRightUpIcon } from "lucide-react";
import Link from "next/link";

export default async function GitHubStats() {
  const repoCount = await getPublicRepoCount();
  const experience = "+1";

  return (
    <section className="px-4 md:mt-20 mt-18">
      <div className="flex items-center gap-10">
        {/* Years of experience  */}
        <div>
          <MotionHeading as="h1" className="tracking-tighter">
            {experience}
          </MotionHeading>
          <MotionSubHeading className="text-sm tracking-normal md:mb-1">
            Years of Experience
          </MotionSubHeading>
        </div>

        {/* Repositories  */}
        <div>
          <MotionHeading as="h1" className="tracking-tighter">
            {repoCount}+
          </MotionHeading>
          <MotionSubHeading className="text-sm tracking-normal md:mb-1">
            Public Repositories
          </MotionSubHeading>
        </div>

        <div>
          <MotionSubHeading className="hover:text-foreground duration-300 font-normal transition-all">
            <Link href={"https://github.com/vaibhavjain0930"} target="blank">
              Check Projects <CornerRightUpIcon className="inline" />
            </Link>
          </MotionSubHeading>
        </div>
      </div>
    </section>
  );
}
