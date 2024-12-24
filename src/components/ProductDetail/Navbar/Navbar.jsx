// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="max-w-md mx-auto bg-white min-h-auto p-4 rounded-b-3xl">
      <div className="flex justify-between items-center mb-6">
        <Link to="/products">
          {" "}
          <button className="p-2 hover:bg-gray-100 rounded-full ">
            <img src="../../../../media/ArrowIcon.svg" alt="" />
          </button>
        </Link>
        <h1 className="font-poppin font-medium text-base leading-5">
          Product Details
        </h1>
        <button className="p-2 hover:bg-gray-100 rounded-full">
          <img src="../../../../media/Download.svg" alt="" />
        </button>
      </div>

      <div className="flex flex-col justify-center items-center gap-2 ">
        <img
          src="../../../../media/whisper.svg"
          alt="Always ultra thin"
          className="w-52 h-auto object-contain rounded-2xl shadow "
        />
        <div className="flex justify-center items-center gap-1 mt-2">
          <div className="w-4 h-[3px] rounded-full bg-purple-600"></div>
          <div className="w-1 h-1 rounded-full bg-gray-300"></div>
          <div className="w-1 h-1 rounded-full bg-gray-300"></div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
