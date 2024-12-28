// eslint-disable-next-line no-unused-vars
import React from "react";

const Header = () => {
  return (
    <nav>
      <img
        className="ml-3 p-5 "
        src="../../../media/mingcute_right-fill.svg"
        alt=""
      />
      <div className="flex justify-center items-center">
        <img
          className="w-[107px] h-[109px]"
          src="../../../media/Profile photo (1).svg"
          alt=""
        />
      </div>
      <div className="  text-center tracking-[-0.3px] font-poppin font-semibold text-lg text-white">
        {" "}
        <p>Sign in and synchronize your date</p>
        <p className="text-sm  font-medium tracking-[-0.3px] ">
          Sign in and synchronize your date
        </p>
      </div>
    </nav>
  );
};

export default Header;
