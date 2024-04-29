import { forwardRef } from "react";
import React from "react";
import { BiSolidRightArrow } from "react-icons/bi";

const AboutMe = React.forwardRef((props, ref) => {
  return (
    <>
      <div className="sm:flex flex-col sm:min-h-screen  sm:pt-20 gap-4 hidden " ref={ref}>
        <div className="tracking-[0.4em] font-semibold flex items-center">
          ABOUT ME
        </div>
        <div className="flex flex-wrap sm:text-6xl text-2xl  font-[750]  font-Poppins tracking-wide">
          <p className="sm:leading-[4.4rem] font-Poppins ">
            I'm a<span className="text-txtsecondary"> software engineer </span>{" "}
            driven by passion, weaving code into innovative solutions that
            resonate with users. Each project is an opportunity to create
            something impactful, elegant, and enduring.
          </p>
        </div>
      </div>
    </>
  );
});

export default AboutMe;
