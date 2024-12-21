import React from "react";

const SearchBar = () => {
  return (
    <div className="w-full max-w-4xl mx-auto p-4 flex items-center gap-4">
      <div className="flex-1 bg-white rounded-xl shadow-sm flex items-center px-4 py-3">
        <span className="text-gray-400 mr-2">
          <img className="w-6 h-6 " src="../../../media/search.svg" alt="" />
        </span>
        <input
          type="text"
          placeholder="Search"
          className="w-full bg-transparent outline-none text-[#7C7C7C] font-poppin font-normal text-[14px] leading-[21px] placeholder-gray-400"
        />
        <span className="">
          <img
            className="w-5 h-4"
            src="../../../media/NavRightLogo.svg"
            alt=""
          />
        </span>
      </div>

      <div className="bg-white rounded-xl shadow-sm p-3">
        <span className="">
          <img src="../../../media/Shoping.svg" alt="" />
        </span>
      </div>
    </div>
  );
};

export default SearchBar;
