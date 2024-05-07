import React from "react";
import SectionIntro from "./reusable/SectionIntro";
import WorkExperience from "./reusable/WorkExperience";

const Work = () => {
  return (
    <section className="overflow-x-hidden flex flex-col gap-4">
      <SectionIntro title="WORK" heading="Work Experience" />
      <>
        <div className=" bg-gray-200 mx-auto w-screen h-0.5" />
        <WorkExperience />
      </>
    </section>
  );
};

export default Work;
