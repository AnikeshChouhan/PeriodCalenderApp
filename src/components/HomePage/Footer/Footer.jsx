import React, { useContext } from "react";
// import { ThemeContext } from "../Context/ThemeContext.jsx";
const Footer = () => {
  // const { theme } = useContext(ThemeContext);
  return (
    <div className=" px-3 py-2 flex justify-between items-center bg-white rounded-xl m-2 mb-8">
      <div class="text-[#8B19A4] font-montserrat">
        <div className="relative">
          <img
            className="absolute translate-x-32 -translate-y-3 "
            src="../../../media/Ellipse 72.svg"
            alt=""
          />
          {/* <p className=" absolute translate-x-32 w-2 h-2 bg-[#8B19A4] rounded-full border-2 border-[#8B19A4] flex "></p> */}
        </div>
        <span className="text-[22px] font-normal italic">Ensuring That </span>
        <br />
        <span className="text-[22px] font-bold italic">
          Eat A{" "}
          <span className=" text-[22px] font-bold italic">Balance Diet</span>
        </span>
        <div className="relative">
          <img
            className="absolute translate-x-12 translate-y-1 sm:translate-x-44"
            src="../../../media/Ellipse 72 (1).svg"
            alt=""
          />
        </div>
      </div>
      <div className=" flex justify-center items-center ">
        <div>
          <img src="../../../media/girlImage.svg" alt="" />
        </div>

        <div
          class="flex justify-center items-center"
          style={{
            backgroundImage: `url("../../../media/Group 5.svg")`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <img src="../../../media/Group 9.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
