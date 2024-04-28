import React from "react";
import { forwardRef } from "react";
const Career = React.forwardRef((props,ref) => {
  const careerlist = [
    {
      time: "Now",
      position: "Jr Architect",
      company: "Mantra Architects",
    },
    {
      time: "2023",
      position: "Completed Bachelor",
      company: "Institute of Engineering, Pulchowk Campus",
    },
    {
      time: "2017",
      position: "Completed +2",
      company: "Sagarmatha Secondary School",
    },
  ];
    return (
      <>
        <div className="w-full flex justify-center text-txtprimary " ref={ref}>
          <div className="flex  flex-col  gap-5 min-h-screen pt-20 w-full z-50">
            <div className="tracking-[0.2em] font-semibold text-xl flex  ">
            <div className="w-8/12 ">My Journey</div>

            </div>
            <div className="flex  flex-col   sm:text-4xl  text-xl font-[550] tracking-tight">
            {careerlist.map((data,index)=>{
              return (
                <div
                  className="h-40 border-y-[1px] border-[#272522] w-full flex  shadow-[32px 32px 44px #050505,-32px -32px 44px #151515;]"
                >
                  <div className="w-8/12 flex   sm:gap-52 gap-20 items-center">
                    <div>{data.time}</div>
                    <div className="flex flex-col gap-1">
                      <div>{data.position}</div>
                      <div className="text-base font-light tracking-wide">
                        {data.company}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
            
            </div>
          </div>
        </div>
      </>
    );
  
     
  }
)
  
  export default Career