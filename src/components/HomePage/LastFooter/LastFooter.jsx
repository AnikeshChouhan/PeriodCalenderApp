import React from "react";
import { CalendarDays, ShoppingCart, Heart, Settings } from "lucide-react";
import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";

const NavigationItem = ({ icon: Icon, label, theme }) => (
  <div className={`flex flex-col items-center`}>
    <div
      className={`p-2 rounded-full ${label === "Today" ? "bg-[#AB49C0]" : ""}`}
    >
      <Icon
        className={`w-5 h-5 ${
          theme === "light" || label === "Today" ? "text-white" : "text-black"
        } 
        `}
      />
    </div>
    <p
      className={`font-poppin font-normal text-xs  ${
        theme === "light" && label === "Today"
          ? "text-white"
          : label !== "Today"
          ? "text-[#78787f]"
          : "text-black"
      }`}
    >
      {label}
    </p>
  </div>
);

const LastFooter = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={`p-2 mt-3 rounded-2xl flex justify-between items-center px-10 lowershado ${
        theme === "light" ? "bg-[#202020]" : "bg-[#EFEFFE]"
      }`}
    >
      <NavigationItem icon={CalendarDays} label="Today" theme={theme} />
      <NavigationItem icon={ShoppingCart} label="Shop" theme={theme} />
      <NavigationItem icon={Heart} label="Safe Care" theme={theme} />
      <NavigationItem icon={Settings} label="Setting" theme={theme} />
    </div>
  );
};

export default LastFooter;
// // eslint-disable-next-line no-unused-vars
// import React from "react";
// const Other = () => {
//   return (
//     <div className="p-2 mt-3 lowershado rounded-2xl border-black flex justify-between items-center px-10 text-black">
//       <div
//         className="flex flex-col items-center
//       "
//       >
//         <div className="bg-[#8B19A4] p-2 rounded-full">
//           <img src="../../../media/solar_calendar-broken.svg" alt="" />
//         </div>
//         <p className="otherPoppiin text-xs font-normal">Today</p>
//       </div>

//       <div
//         className="flex flex-col items-center
//       "
//       >
//         <div className="p-[11px]">
//           <img src="../../../media/Vector (1).svg" alt="" />
//         </div>
//         <p className="otherPoppiin text-xs font-normal text-[#91919b]">Shop</p>
//       </div>

//       <div
//         className="flex flex-col items-center
//       "
//       >
//         <div className="p-[11px]">
//           <img src="../../../media/heart.svg" alt="" />
//         </div>
//         <p className="otherPoppiin text-xs font-normal text-[#91919b]">
//           Safe Care
//         </p>
//       </div>

//       <div
//         className="flex flex-col items-center
//       "
//       >
//         <div className="p-[11px] relative ">
//           <img src="../../../media/Vector (2).svg" alt="" />
//           <img
//             className="absolute top-[41%] left-[39.5%]"
//             src="../../../media/Vector (3).svg "
//             alt=""
//           />
//         </div>
//         <p className="otherPoppiin text-xs font-normal text-[#91919b]">
//           Setting
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Other;
