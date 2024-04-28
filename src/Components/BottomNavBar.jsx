import React from 'react';

const BottomNavBar = () => {
  return (
    <div className="w-full flex justify-center bg-[#0b0b0b] text-txtprimary pb-40">
      
      <div className="w-8/12 flex flex-col gap-10 font-Poppins mt-32 z-50">
        <div className="tracking-[0.3em] font-medium text-base ">CONNECT</div>
        <div className="flex sm:flex-row flex-col justify-evenly w-full sm:gap-10">
          <div className="flex flex-col items-center w-full">
            <div className="flex flex-col sm:h-36 w-full text-lg sm:text-3xl font-bold tracking-wide gap-2">
              <div className="hover:bg-txtsecondary hover:text-black h-full cursor-pointer transition-all px-2">
                Dribble
              </div>
              <div className="hover:bg-txtsecondary hover:text-black h-full cursor-pointer transition-all px-2">
                Instagram
              </div>
              <div className="hover:bg-txtsecondary hover:text-black h-full cursor-pointer transition-all px-2">
                Linkedin
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center w-full">
            <div className="flex flex-col sm:h-36 w-full text-lg sm:text-3xl font-bold tracking-wide gap-2">
              <div className="hover:bg-txtsecondary hover:text-black h-full cursor-pointer transition-all px-2">
                Pintrest
              </div>
              <div className="hover:bg-txtsecondary hover:text-black h-full cursor-pointer transition-all px-2">
                Facebook
              </div>
              <div className="hover:bg-txtsecondary hover:text-black h-full cursor-pointer transition-all px-2">
                Youtube
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center w-full sm:mt-0 mt-40">
            <div className="flex flex-col h-36 w-full text-base font-semibold gap-2">
              <div className="hover:bg-txtsecondary hover:text-black h-full cursor-pointer transition-all px-2 flex flex-col">
                <div>Phone</div>
                <div className="text-xs text-txttertiary">98000000000</div>
              </div>
              <div className="hover:bg-txtsecondary hover:text-black h-full cursor-pointer transition-all px-2 flex flex-col">
                <div>Email</div>
                <div className="text-xs text-txttertiary">kendritp23@gmail.com</div>
              </div>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomNavBar;
