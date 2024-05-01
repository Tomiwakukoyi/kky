import React from "react";
import SocialMedia from "./reusable/SocialMedia";

const Contact = () => {
  return (
   <section className="mt-10 flex flex-col gap-4">
     <div className="flex flex-col gap-3">
      <h1 className=" text-2xl">Let's talk about your project!</h1>
      <p>
        If you have a project or idea you'd like to develop or enhance, or if
        you're seeking team collaboration opportunities, feel free to reach out
        to me.
      </p>
    </div>

    <SocialMedia />
   </section>
  );
};

export default Contact;
