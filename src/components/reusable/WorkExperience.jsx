import React from "react";
import workExperiences from "../../data/workExp";

const WorkExperience = () => {
  return (
    <div className="px-3">
      {workExperiences.map((experience, index) => (
        <div
          key={index}
          className="flex flex-col items-start justify-center gap-3 pb-2"
        >
          <div className=" flex flex-col gap-2">
            <h1>
              {experience.companyName} //
              <span className=" text-blue-700"> {experience.date}</span>
            </h1>
            <span className=" text-2xl">{experience.position}</span>
          </div>

          <ul className=" flex flex-col gap-2">
            {experience.description.map((desc, i) => (
              <li key={i}>
                <span className=" text-2xl font-semibold"> ·</span> {desc}
              </li>
            ))}
          </ul>
          <div className=" mx-auto w-screen bg-gray-200  h-0.5 border-none " />
        </div>
      ))}
    </div>
  );
};

export default WorkExperience;
