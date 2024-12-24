// eslint-disable-next-line no-unused-vars
import React from "react";

const Header = () => {
  return (
    <nav>
      <img src="../../media/mingcute_right-fill.png" alt="" />

      <div className="flex justify-center items-center">
        <img
          className="w-16 h-16"
          src="../../../media/Profile photo.svg"
          alt=""
        />
      </div>
      <div className="text-center poppins-thin text-white text-xl">
        {" "}
        <p>Sign in and synchronize your date</p>
        <p className="text-sm  poppins-thin ">
          Sign in and synchronize your date
        </p>
      </div>
    </nav>
  );
};

export default Header;
