import React, { useContext } from "react";
import { Moon, Sun } from "lucide-react";
import { ThemeContext } from "../Context/ThemeContext";

const svgImgs = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <svg
      width="18"
      height="20"
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8.38008 18.8225C8.53956 19.1126 8.77401 19.3545 9.05893 19.523C9.34385 19.6915 9.66879 19.7804 9.9998 19.7804C10.3308 19.7804 10.6558 19.6915 10.9407 19.523C11.2256 19.3545 11.46 19.1126 11.6195 18.8225M4.28314 6.43639C4.28314 4.92024 4.88543 3.46618 5.95751 2.3941C7.02959 1.32202 8.48365 0.719727 9.9998 0.719727C11.516 0.719727 12.97 1.32202 14.0421 2.3941C15.1142 3.46618 15.7165 4.92024 15.7165 6.43639C15.7165 13.1058 18.5748 15.0114 18.5748 15.0114H1.4248C1.4248 15.0114 4.28314 13.1058 4.28314 6.43639Z"
        stroke={theme === "light" ? "#fff" : "#000000"}
        stroke-width="1.35"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

const Nav = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav
      className={`w-full max-w-screen-xl mx-auto px-4 sm:px-6 ${
        theme === "light" ? " bg-[#202020]" : "bg-[#EFEFFE]"
      }`}
    >
      <div className="flex items-center justify-between py-4">
        <div className="flex items-center gap-1">
          <img
            className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover"
            src="../../../media/Profile photo.svg"
            alt="Profile"
          />
          <span
            className={`text-[14px]  leading-5 sm:text-xl font-raleway font-semibold ${
              theme === "light" ? "text-white" : "text-black"
            } `}
          >
            Hello, Olivai!
          </span>
        </div>
        <div className="flex items-center justify-cente">
          <div> {svgImgs()}</div>
          <button
            onClick={toggleTheme}
            className={`p-2 rounded-full ${
              theme === "dark" ? "text-black" : "text-white"
            }`}
          >
            {theme === "light" ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>
      </div>

      <div
        className={`relative bg-white rounded-xl p-4 sm:p-6  mr-2 sm:mx-4 mb-6`}
      >
        <div className="flex justify-between items-center">
          <div className="">
            <h3 className="font-poppin font-semibold text-[15px] leading-6 sm:text-base ">
              24 August
            </h3>
            <p
              className={`font-poppin font-normal text-xs leading-4 sm:text-sm text-[#979797]`}
            >
              Last period date
            </p>
          </div>

          <div className="absolute left-1/2 -top-5 transform -translate-x-1/2">
            <div
              className={`${
                theme === "light" ? "bg-[#202020]" : "bg-[#EFEFFE]"
              } p-2 sm:p-3 rounded-full`}
            >
              <img
                src="../../../media/calendar (1).svg"
                alt="Calendar"
                className="w-6 h-6 sm:w-8 sm:h-8"
              />
            </div>
          </div>

          <div className="flex flex-col">
            <h3 className="font-poppin font-semibold text-[15px] leading-6  sm:text-base ">
              29 September
            </h3>
            <p
              className={`font-poppin font-normal text-xs leading-4 sm:text-sm text-[#979797]`}
            >
              Next period date
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
