import React from "react";
import SocialMediaIcon from "./SocialMediaIcon";
import { socialMediaData } from "../../data/socials";

const SocialMedia = () => {
  return (
    <div className=" flex flex-col gap-8">
      <div className=" flex gap-4 items-center">
        {socialMediaData.map(({ icon: Icon, link }, index) => (
          <SocialMediaIcon key={index} Icon={Icon} link={link} />
        ))}
      </div>
      <div className=" h-0.5 bg-gray-200 w-full" />
    </div>
  );
};

export default SocialMedia;
