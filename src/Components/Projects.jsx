import Project1 from "../assets/image.png";
import Project2 from "../assets/project2light.png";
import Project3 from "../assets/project3.png";

import { FaReact, FaNodeJs } from "react-icons/fa";
import { BiLogoMongodb, BiLogoTailwindCss } from "react-icons/bi";

import React, { useState } from "react";
import ProjectCard from "./ProjectCard";

const Projects = React.forwardRef((props, ref) => {
  const [isHovered, setIsHovered] = useState(false);

  const projectsData = [
    {
      projectname: "Clothify",
      projectLocation: "An Ecommerce app",
      projectImage: Project1,
      link: 'https://clothifyios.vercel.app/',
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
      projectname: "Notes",
      projectLocation: "A note taking app",
      projectImage: Project2,
      link: 'https://notesios.vercel.app/',
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
      projectname: "Fixturehub",
      projectLocation: "Stay on top of all your favorite sports.",
      projectImage: Project3,
      link: 'https://fixturehub.vercel.app/',
      bgColor: "#001616",
      tech: [
        {
          name: "ReactJs",
          logo: <FaReact />,
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
        className="w-full flex justify-center min-h-screen text-txtprimary"
        ref={ref}
      >
        <div className="flex flex-col h-auto w-full z-50 items-center gap-10">
          <div className="tracking-[0.2em] font-semibold text-xl w-full">
            Projects
          </div>
          <div className=" w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 flex-col text-4xl font-[550] tracking-tight gap-10 mr-2">
              {projectsData.map((data, index) => {
                return ( 
                 <ProjectCard data={data} projectsdata={projectsData}/>
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
