import React from "react";
import { FaLocationArrow } from "react-icons/fa6";

const Contact = React.forwardRef((props,ref) => {
    return (
      <>
        <div className="w-full flex justify-center text-txtprimary pt-32  " ref={ref}>
          <div className="flex  flex-col  gap-5 h-screen  w-full z-50">
            <div className="tracking-[0.2em] font-semibold text-xl flex justify-center  ">
              <div className="w-full flex flex-col gap-14 ">
                <div className="flex gap-2 flex-col mb-5">
                  <div className="text-3xl"> Let's collaborate</div>
                  <div className="text-xs text-txttertiary">
                    kendritp23@gmail.com
                  </div>
                </div>
                <div className="flex  text-xs justify-between gap-10 ">
                  <div className="flex flex-col gap-2 w-full">
                    <label htmlFor="">NAME</label>
                    <input
                      type="text"
                      className="w-full bg-[#121212] h-10 rounded-md focus:outline-none pl-4 text-lg font-Poppins font-normal tracking-wide"
                    />
                  </div>
                  <div className="flex flex-col gap-2 w-full">
                    <label htmlFor="">EMAIL</label>
                    <input
                      type="text"
                      className="w-full bg-[#121212] h-10 rounded-md focus:outline-none pl-4 text-lg font-Poppins font-normal tracking-wide"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2 w-full text-xs">
                  <label htmlFor="">MESSAGE</label>
                  <textarea
                    type="text"
                    className="w-full bg-[#121212] focus:outline-none p-4 text-lg font-Poppins tracking-wide font-normal rounded-md h-64"
                  />
                </div>
                <div className="gap-1 ml-auto bg-txtsecondary text-white rounded-md h-12 w-28 flex justify-center items-center text-lg tracking-normal  cursor-pointer  opacity-90 hover:opacity-100">
                  <div>Send</div>
                  <FaLocationArrow />
                </div>
              </div>
            </div>
            <div className="flex  flex-col   text-4xl  font-[550] tracking-tight"></div>
          </div>
        </div>
      </>
    );
  
     
  }
)
  export default Contact