import React from 'react';
import Graph from '../assets/blob.svg';
import SanchitImage from '../assets/sanchit.png';

const Intro = ({ scrollToAboutMe }) => {
  const handleReadMoreClick = () => {
    scrollToAboutMe();
  };

  return (
    <div className="flex lg:flex-row flex-col  h-auto sm:min-h-screen  gap-10 font-Roboto">
      <div className="flex flex-col sm:w-full pt-48 gap-1">
        <div className="tracking-[0.2em] font-bold text-2xl">
          Sanchit Poudel
        </div>
        <div className="flex flex-wrap text-7xl font-[750] pt-2 tracking-tight ">
          <p>
            <span className="text-txtsecondary text-5xl sm:text-6xl">Software Enginner</span>
          </p>
        </div>
        <div className="flex flex-wrap text-xl  pt-2 font-normal  ">
          <p>
            <span className="text-txtprimary">
            I'm a Fullstack Developer currently studying software enginnering in Nepal.

            </span>
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
      <div className="sm:w-2/4  sm:mt-28  flex justify-center">
        <img
          src={SanchitImage}
          className="shape sm:w-[20rem] sm:h-[20rem] w-96 h-96  object-contain bg-txtsecondary "
        />
      </div>
    </div>
  );
};

export default Intro;
