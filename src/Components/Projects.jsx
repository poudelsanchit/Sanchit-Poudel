import Project1 from "../assets/image.png";
import Project2 from "../assets/project2.jpg";
import Project3 from "../assets/project3.jpg";
import { FaReact,FaNodeJs  } from "react-icons/fa";
import { BiLogoMongodb,BiLogoTailwindCss  } from "react-icons/bi";

import { IoIosArrowForward } from "react-icons/io";
import React from "react";
import { forwardRef } from "react";
const Projects = React.forwardRef((props, ref) => {
  const projectsData = [
    {
      projectname: "Clothify",
      projectLocation: "An Ecommerce app",
      projectImage: Project1,
      bgColor: "#001616",
      tech: [
        {
          name: "ReactJs",
          logo: <FaReact />,
        },
        {
          name: "MongoDB",
          logo: <BiLogoMongodb />,
        },
        {
          name: "Node.js",
          logo: <FaNodeJs />,
        },
        {
          name: "Tailwind",
          logo: <BiLogoTailwindCss />,
        },
      ],
    },
    {
      projectname: "Clothify",
      projectLocation: "An Ecommerce app",
      projectImage: Project1,
      bgColor: "#001616",
      tech: [
        {
          name: "ReactJs",
          logo: <FaReact />,
        },
        {
          name: "MongoDB",
          logo: <BiLogoMongodb />,
        },
        {
          name: "Node.js",
          logo: <FaNodeJs />,
        },
        {
          name: "Tailwind",
          logo: <BiLogoTailwindCss />,
        },
      ],
    }, {
      projectname: "Clothify",
      projectLocation: "An Ecommerce app",
      projectImage: Project1,
      bgColor: "#001616",
      tech: [
        {
          name: "ReactJs",
          logo: <FaReact />,
        },
        {
          name: "MongoDB",
          logo: <BiLogoMongodb />,
        },
        {
          name: "Node.js",
          logo: <FaNodeJs />,
        },
        {
          name: "Tailwind",
          logo: <BiLogoTailwindCss />,
        },
      ],
    },
  ];

  return (
    <>
      <div
        className="w-full flex justify-center min-h-screen text-txtprimary  "
        ref={ref}
      >
        <div className="flex  flex-col   h-auto  w-full z-50 items-center  gap-10">
          <div className="tracking-[0.2em] font-semibold text-xl   w-full ">
            Projects
          </div>
          <div className="w-9/12 sm:w-full  ">
            <div className="grid grid-cols-1 sm:grid-cols-2   flex-col   text-4xl  font-[550] tracking-tight gap-10">
              {projectsData.map((data) => {
                return (
                  <div
                    className={`sm:h-[25rem]  h-[20rem] 
     shadow-lg rounded-lg cursor-pointer flex text-white font-Poppins p-6 flex-col gap-5 hover:scale-[1.02] transition-all duration-300`}
                    style={{ backgroundColor: data.bgColor }}
                  >
                    <div className="flex justify-between">
                      <div className="flex flex-col gap-2">
                        <div className="text-lg font-normal tracking-wide ">
                          {data?.projectname}
                        </div>
                        <div className="text-sm font-light  tracking-wide text-txttertiary">
                          {data?.projectLocation}
                        </div>
                      </div>
                      <div className="w-10 h-10 bg-white rounded-full flex justify-center items-center text-black text-lg">
                        <IoIosArrowForward />
                      </div>
                    </div>

                    <div className="h-max  rounded-lg bg-txttertiary">
                      <img
                        src={data.projectImage}
                        alt=""
                        className="object-scale-down h-full rounded-lg"
                      />
                    </div>
                    <div className="flex">
                      {data.tech.map((techItem, index) => (
                        <div
                          key={index}
                          className=" text-white font-Poppins text-base flex justify-between w-full"
                        >
                          <div className="flex justify-center items-center gap-1 w-full">
                            {techItem.logo}
                            {techItem.name}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
});

export default Projects;
