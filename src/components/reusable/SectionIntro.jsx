import React from "react";

const SectionIntro = ({title, heading, introSize}) => {
  return (
    <section className="text-white mt-16 flex flex-col justify-center items-start">
      <div>
        <span className={`flex text-${introSize} gap-3`}>
          <h1>{title}</h1>
          <span className="font-light"> ———> </span>
        </span>
        <h1 className=" text-4xl">{heading}</h1>
      </div>
    </section>
  );
};

export default SectionIntro;
