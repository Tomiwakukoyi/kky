import React from "react";
import SectionIntro from "./reusable/SectionIntro";
import WorkExperience from "./reusable/WorkExperience";

const Work = () => {
  return (
    <section className="overflow-x-hidden flex flex-col gap-4">
      <SectionIntro title="WORK" heading="Work Experience" />
      <>
        <div className=" text-gray-200 max-auto">———————————————————————</div>
        <WorkExperience />
      </>
    </section>
  );
};

export default Work;
