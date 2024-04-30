import React from "react";
import Certification from "./reusable/Certification";
import certifications from "../data/certifications";
import SectionIntro from "./reusable/SectionIntro";

const Certifications = () => {
  return (
    <div className="px-9 flex flex-col gap-10">
      <SectionIntro title="CERTIFICATIONS" heading="" />
      <section className="flex flex-col gap-6">
        {certifications.map((certification, index) => (
          <Certification key={index} certTitle={certification.title} />
        ))}
      </section>
    </div>
  );
};

export default Certifications;
