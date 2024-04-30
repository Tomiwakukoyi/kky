import React from "react";
import SectionIntro from "./reusable/SectionIntro";
import WorkExperience from "./reusable/WorkExperience";

const Work = () => {
  return (
    <section className="px-9">
      <SectionIntro title="WORK" heading="Work Experience" />
      <WorkExperience />
    </section >
  );
};

export default Work;
