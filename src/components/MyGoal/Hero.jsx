// eslint-disable-next-line no-unused-vars
import React from "react";

const Hero = () => {
  return (
    <div className="flex flex-col justify-start bg-white p-6 gap-5 rounded-lg mt-5 m-2">
      {/*  */}
      <div className="flex border-b  border-b-gray-400 gap-1">
        <img src="../../media/goal 1.png" alt="" />
        <div className="poppins-thin">My Goal</div>
      </div>
      <div className="flex justify-between">
        <div className="flex gap-1">
          <img src="../../media/blood-drop 1.png" alt="" />
          <div className="poppins-thin whitespace-nowrap">Period Length</div>
        </div>
        <div>04</div>
      </div>
      {/*  */}
      <div className="flex justify-between">
        <div className="flex gap-1">
          <img src="../../media/cycle (1) 1.png" alt="" />
          <div className="poppins-thin whitespace-nowrap">Cycle Length</div>
        </div>
        <div>28</div>
      </div>
      {/*  */}
      <div className="flex items-center justify-between bg-gray-100">
        <div className="flex gap-1">
          <img src="../../media/baby 1.png" alt="" />
          <div className="poppins-thin">Pregnancy</div>
        </div>
        <div className="relative inline-flex items-center cursor-pointer">
          <input type="checkbox" className="sr-only peer" />
          <div className="w-10 h-6 bg-gray-300 rounded-full after:absolute after:top-0.5 after:left-0.5 after:bg-purple-400 after:border after:border-gray-300 after:rounded-full after:h-5 after:w-5 "></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
1;
