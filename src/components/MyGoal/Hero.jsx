// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";

const Hero = () => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <div className="flex flex-col justify-start bg-white p-6 gap-5 rounded-lg mt-5 m-3">
      {/*  */}
      <div className="flex gap-2">
        <img src="../../../media/goal 1.svg" alt="" />
        <div className="font-poppin font-medium text-sm text-blac tracking-tight">
          My Goal
        </div>
      </div>
      <div className="border-b  border-b-gray-400 "></div>
      <div className="flex justify-between">
        <div className="flex gap-1">
          <img src="../../../media/blood-drop 1.svg" alt="" />
          <div className="font-poppin text-sm font-normal tracking-tight whitespace-nowrap">
            Period Length
          </div>
        </div>
        <div className="font-poppin font-semibold text-sm tracking-tight">
          04
        </div>
      </div>
      {/*  */}
      <div className="flex justify-between">
        <div className="flex gap-1">
          <img src="../../../media/cycle (1) 1.svg" alt="" />
          <div className=" whitespace-nowrap font-poppin text-sm font-normal tracking-tight ">
            Cycle Length
          </div>
        </div>
        <div className="font-poppin font-semibold text-sm tracking-tight">
          28
        </div>
      </div>
      {/*  */}
      <div className="flex items-center justify-between">
        <div className="flex gap-1">
          <img src="../../../media/baby 1.svg" alt="" />
          <div className="font-poppin text-sm font-normal tracking-tight ">
            Pregnancy
          </div>
        </div>
        <div className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            className="sr-only peer"
            checked={isChecked}
            onChange={() => setIsChecked(!isChecked)}
          />
          <div className="w-10 h-6 bg-gray-300 rounded-full after:absolute after:top-0.5 after:left-0.5 after:bg-purple-400 after:rounded-full after:h-5 after:w-5 "></div>{" "}
          {/* <div className="w-10 h-6 bg-gray-300 peer-checked:bg-purple-400 rounded-full after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:border after:border-gray-300 after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-4"></div> */}
        </div>
      </div>
    </div>
  );
};
export default Hero;
