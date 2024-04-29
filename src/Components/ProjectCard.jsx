import React, { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";

const ProjectCard = ({ data, projectsdata }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <a
      href={data?.link}
      target="_blank"
      className={`relative sm:h-[30rem] h-[24rem]  w-full shadow-lg rounded-lg cursor-pointer flex text-white font-Poppins  flex-col gap-5 hover:scale-[1.02] transition-all duration-300`}
      style={{ backgroundColor: data.bgColor }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHovered && (
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="px-10 py-3 rounded-md bg-white text-black font-Poppins text-sm opacity-100 z-50">
            Show live project
          </div>
        </div>
      )}

      <div className="flex justify-between p-6">
        <div className="flex flex-col gap-2">
          <div className="text-lg font-normal tracking-wide">
            {data?.projectname}
          </div>
          <div className="text-sm font-light tracking-wide text-txttertiary">
            {data?.projectLocation}
          </div>
        </div>
        <div className="w-10 h-10 bg-white rounded-full flex justify-center items-center text-black text-lg">
          <IoIosArrowForward />
        </div>
      </div>

      <div
        className="h-max rounded-lg bg-txttertiary mx-6  "
        style={isHovered ? { opacity: "80%" } : null}
      >
        <img
          src={data.projectImage}
          alt=""
          className="object-scale-down h-full rounded-lg"
        />
      </div>
      <div className="flex justify-between items-center relative mx-6 ">
        {data.tech.map((techItem, index) => (
          <div
            key={index}
            className="text-white font-Poppins text-base flex justify-between w-full"
          >
            <div className="flex justify-center items-center gap-1 w-full sm:text-base text-xs">
              {techItem.logo}
              {techItem.name}
            </div>
          </div>
        ))}
      </div>
    </a>
  );
};

export default ProjectCard;
