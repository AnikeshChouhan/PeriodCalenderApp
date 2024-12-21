import React from "react";

const Navbar = () => {
  return (
    <div className="max-w-md mx-auto bg-white min-h-screen p-4">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <button className="p-2 hover:bg-gray-100 rounded-full">
          <img src="../../../../media/ArrowIcon.svg" alt="" />
        </button>
        <h1 className="font-poppin font-medium text-base leading-5">
          Product Details
        </h1>
        <button className="p-2 hover:bg-gray-100 rounded-full">
          <img src="../../../../media/Download.svg" alt="" />
        </button>
      </div>

      {/* Product Image */}
      <div className="mb-6">
        <img
          src="../../../../media/whisper.svg"
          alt="Always ultra thin"
          className="w-full h-64 object-contain bg-gray-50 rounded-lg"
        />
        <div className="flex justify-center gap-1 mt-2">
          <div className="w-5 h-1 bg-purple-600"></div>
          <div className="w-4 h-1  bg-gray-300"></div>
          <div className="w-4 h-1  bg-gray-300"></div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
