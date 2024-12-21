import React from "react";

const HeroSection2 = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[55%] rounded-xl">
      <div className="relative w-screen h-56">
        <div
          className="absolute -inset-3 "
          style={{
            background: "radial-gradient(circle, #4C1B55 0%, #202020 75%)",
            backgroundSize: "100% 100%",

            backgroundPosition: "center",
          }}
        >
          {/* Main content container */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center text-center text-white">
            {/* Text content with increased sizes */}
            <p
              className="text-[14px] font-poppin font-semibold 
              sm:text-xl"
            >
              8 Day Left
            </p>
            <h1 className=" font-DarkGro font-bold mb-2 text-[48px]  leading-[65px] sm:text-5xl ">
              Sep 29
            </h1>
            <p className=" font-workSans text-[14px] leading-4 font-medium  sm:text-xl mb-8">
              Next Period
            </p>

            {/* Period Start Button */}
            <button className=" font-poppin w-36 h-10  bg-[#8B19A4] text-[16px] leading-6 font-normal rounded-full shadow-md hover:bg-[#70359b] transition-colors duration-200">
              Period Start
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection2;
