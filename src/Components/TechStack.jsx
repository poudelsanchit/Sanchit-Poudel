import React from "react";
const TechStack = React.forwardRef((props,ref) => {

    return (
      <>
        <div className="w-full flex justify-center text-txtprimary " ref={ref}>
          <div className="flex  flex-col  gap-5 min-h-screen pt-20 w-full z-50">
            <div className="tracking-[0.2em] font-semibold text-xl flex  ">
            <div className="w-8/12 ">Tech Stack</div>

            </div>
            
          </div>
        </div>
      </>
    );
  
     
  }
)
  
  export default TechStack