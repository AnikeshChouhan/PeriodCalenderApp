import React from "react";
import { CalendarDays, ShoppingCart, Heart, Settings } from "lucide-react";
import { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";
import { Link, useLocation } from "react-router-dom";

const NavigationItem = ({ icon: Icon, route, label, theme, isActive }) => (
  <Link to={route}>
    <div className={`flex flex-col items-center`}>
      <div className={`p-2 rounded-full ${isActive ? "bg-[#AB49C0]" : ""}`}>
        <Icon
          className={`w-5 h-5 ${
            theme === "light" || isActive ? "text-white" : "text-black"
          } 
        `}
        />
      </div>
      <p
        className={`font-poppin font-normal text-xs  ${
          theme === "light" && isActive
            ? "text-white"
            : label !== "Today"
            ? "text-[#78787f]"
            : "text-black"
        }`}
      >
        {label}
      </p>
    </div>
  </Link>
);

const LastFooter = () => {
  const { theme } = useContext(ThemeContext);
  const location = useLocation();
  return (
    <div
      className={`fixed bottom-0 left-0 right-0 p-2 mt-3 rounded-2xl flex justify-between items-center px-10 lowershado ${
        theme === "light" ? "bg-[#202020]" : "bg-[#EFEFFE]"
      }`}
    >
      <NavigationItem
        icon={CalendarDays}
        label="Today"
        route="/"
        theme={theme}
        isActive={location.pathname === "/"}
      />{" "}
      <NavigationItem
        icon={ShoppingCart}
        label="Shop"
        route="/Products"
        theme={theme}
        isActive={location.pathname === "/Products"}
      />
      <NavigationItem icon={Heart} label="Safe Care" theme={theme} />
      <NavigationItem
        icon={Settings}
        route="/MyGoal"
        label="Setting"
        theme={theme}
        isActive={location.pathname === "/MyGoal"}
      />
    </div>
  );
};

export default LastFooter;
