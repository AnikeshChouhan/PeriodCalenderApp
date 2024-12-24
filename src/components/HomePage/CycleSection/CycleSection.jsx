import React, { useContext } from "react";
import { ThemeContext } from "../Context/ThemeContext";

const CycleCard = ({ date, label, theme }) => (
  <div
    className={` rounded-md p-2 min-w-[101px] h-[69px] flex flex-col justify-center items-center ${
      theme === "light" ? "bg-[#8B19A4]" : "bg-white"
    }`}
  >
    <span
      className={`font-poppin font-medium text-base ${
        theme === "light" ? "text-white" : "text-[#8B19A4]"
      }  whitespace-nowrap text-base`}
    >
      {date}
    </span>
    <span
      className={`font-poppin font-medium text-xs ${
        theme === "light" ? "text-white" : "text-[#8B19A4]"
      }  whitespace-nowrap text-xs`}
    >
      {label}
    </span>
  </div>
);

const CycleSection = () => {
  const { theme } = useContext(ThemeContext);
  const cycles = [
    { date: "Sep 29", label: "Next Period" },
    { date: "Sep 30", label: "Next Period" },
    { date: "Sep 29", label: "Next Period" },
  ];

  return (
    <div>
      <div className=" md:px-5 mb-7">
        <p
          className={`mb-[-8px] p-5 pl-3 inline-block whitespace-nowrap font-poppin font-medium text-[14px] leading-[15px] ${
            theme === "light" ? " text-white" : "text-black"
          }`}
        >
          Cycle Phase
        </p>

        <div
          className=" text-center flex justify-between items-center px-3 gap-5 
          extraSmall:px-2 extraSmall:gap-2 extraSmall:text-sm moreExtraSmall:flex-wrap"
        >
          {cycles.map((cycle, index) => (
            <CycleCard
              key={index}
              date={cycle.date}
              label={cycle.label}
              theme={theme}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CycleSection;
