import React from "react";
import Graph from "../assets/blob.svg";
import SanchitImage from "../assets/sanchit.png";
import SanchitImage1 from "../assets/img2.jpg";
import SanchitImage2 from "../assets/img3.jpeg";
import SanchitImage3 from "../assets/img4.webp";

const Intro = ({ scrollToAboutMe }) => {
  const handleReadMoreClick = () => {
    scrollToAboutMe();
  };

  return (
    <div className="flex lg:flex-row  sm:flex-col  flex-col-reverse   h-auto sm:min-h-screen   font-Roboto ">
      <div className="flex flex-col sm:w-full sm:pt-48 gap-4 pt-3 ">
        <div className="tracking-[0.2em] font-bold text-xl sm:text-3xl">
          Sanchit Poudel
        </div>
        <div className="flex flex-wrap text-7xl font-[750]  tracking-tight  ">
          <p className="text-txtsecondary text-3xl sm:text-6xl">
            Software Enginner
          </p>
        </div>
        <div className="flex flex-wrap text-xl  pt-2 font-normal  ">
          <p className="text-txtprimary ">
            <p>
              I'm a  Fullstack Developer studying software engineering
              in Nepal.
            </p>
            <p className="hidden sm:flex">
              Passionate about technology, problem-solving, and continuous
              learning, contributing to the vibrant tech community while honing
              skills and expanding knowledge.
            </p>
          </p>
        </div>

        <div className="flex flex-wrap text-xl  pt-10 font-normal   ">
          <div
            className="h-12 w-32 rounded-md bg-txtsecondary text-white flex justify-center items-center font-Poppins text-base cursor-pointer"
            onClick={handleReadMoreClick}
          >
            Read More
          </div>
        </div>
      </div>
      <div className="sm:w-3/4  sm:mt-28  flex justify-center  items-center ">
        <img
          loading={"lazy"}
          src={'https://images.unsplash.com/photo-1714811741988-74140fdf158a?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'}
          alt=""
          className=" sm:h-[28rem] rounded-md object-cover sm:w-10/12 w-full pt-28 sm:pt-0 sm:pr-0  pr-5"
        />
      </div>
    </div>
  );
};

export default Intro;
