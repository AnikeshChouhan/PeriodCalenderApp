// eslint-disable-next-line no-unused-vars
// import React from "react";
// import "./HeroSection.css";
// import { useEffect } from "react";

// const HeroSection = () => {
//   return (
//     <div className="flex flex-col items-center justify-center min-h-[55%] rounded-xl">
//       <div className="relative w-screen h-96 ">
//         <div className="absolute top-[98px] left-[-101px] w-[190px] h-[220px] bg-[#EECFF4] rounded-[50%] sizefordiv:w-[150px] sizefordiv:h-[190px] sizefordivmore:w-[120px] sizefordivmore:h-[160px]"></div>

//         <div className="absolute top-[103px] right-[-86px] w-[180px] h-[220px] rounded-[50%] bg-[#EECFF4] sizefordiv:w-[150px] sizefordiv:h-[190px] sizefordivmore:w-[120px] sizefordivmore:h-[160px]"></div>

//         <div className="absolute rounded-full top-1/2 left-1/2 w-48 h-48 -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center shadow-lg gap-2">
//           <div className="relative">
//             <div className="absolute rounded-full top-1/2 left-1/2 w-56 h-56 -translate-x-1/2 -translate-y-1/2 bg-[#8B19A4] text-white  flex flex-col justify-center items-center shadow-lg gap-2 sizefordiv:w-52 sizefordiv:h-52 sizefordivmore:w-48 sizefordivmore:h-48">
//               <p className="Hero_Popppin ">8 Day Left</p>
//               <p className="Hero_Popppin_Bold">Sep 29</p>
//               <p className="Hero_Popppin ">Next Period</p>
//             </div>

//             <div className=" Hero_Shadow  w-[9px] h-[9px] absolute  top-[-134px] left-[-34px] bg-blue-400 rounded-full"></div>

//             <div className=" Hero_Shadow  w-[9px] h-[9px] absolute  top-[-125px] left-[-63px] bg-blue-400 rounded-full"></div>
//             <div className=" Hero_Shadow  w-[9px] h-[9px] absolute  top-[-112px] left-[-84px] bg-blue-400 rounded-full"></div>

//             <div className=" Hero_Shadow  w-[9px] h-[9px] absolute  top-[-124px] left-[59px] bg-[#F92A2A] rounded-full"></div>

//             <div className=" Hero_Shadow  w-[9px] h-[9px] absolute  top-[-110px] left-[80px] bg-[#F92A2A] rounded-full"></div>

//             <div className=" Hero_Shadow  w-[9px] h-[9px] absolute  top-[-90px] left-[101px] bg-[#F92A2A] rounded-full"></div>

//             <div className=" Hero_Shadow w-[20px] h-[20px] absolute top-[-77px] left-[107px] bg-[#F92A2A] rounded-full p-4 flex justify-center items-center text-white">
//               04
//             </div>

//             <div className=" Hero_Shadow  w-[9px] h-[9px] absolute  top-[-36px] left-[127px] bg-[#F92A2A] rounded-full"></div>

//             <div className=" Hero_Shadow  w-[9px] h-[9px] absolute  top-[64px] left-[111px] bg-[#9BCB3B] rounded-full"></div>
//             <div className=" Hero_Shadow  w-[9px] h-[9px] absolute  top-[83px] left-[97px] bg-[#9BCB3B] rounded-full"></div>
//             <div className=" Hero_Shadow  w-[9px] h-[9px] absolute  top-[100px] left-[79px] bg-[#9BCB3B] rounded-full"></div>
//             <div className=" Hero_Shadow  w-[9px] h-[9px] absolute  top-[114px] left-[58px] bg-[#9BCB3B] rounded-full"></div>
//             <div className=" Hero_Shadow  w-[9px] h-[9px] absolute  top-[123px] left-[36px] bg-[#9BCB3B] rounded-full"></div>
//             <div className=" Hero_Shadow  w-[9px] h-[9px] absolute  top-[128px] left-[12px] bg-[#9BCB3B] rounded-full"></div>
//             <div className="Hero_Shadow  w-[9px] h-[9px] absolute top-[129px] left-[-12px] bg-[#9BCB3B] rounded-full"></div>

//             <div className=" Hero_Shadow  w-[9px] h-[9px] absolute  top-[-13px] left-[130px] bg-[#DEDEDE] rounded-full"></div>
//             <div className=" Hero_Shadow  w-[9px] h-[9px] absolute  top-[15px] left-[128px] bg-[#DEDEDE] rounded-full"></div>
//             <div className=" Hero_Shadow  w-[9px] h-[9px] absolute  top-[41px] left-[122px] bg-[#DEDEDE] rounded-full"></div>
//             <div className=" Hero_Shadow  w-[9px] h-[9px] absolute  top-[126px] left-[-37px] bg-[#DEDEDE] rounded-full"></div>
//             <div className=" Hero_Shadow  w-[9px] h-[9px] absolute  top-[118px] left-[-61px] bg-[#DEDEDE] rounded-full"></div>
//             <div className=" Hero_Shadow  w-[9px] h-[9px] absolute  top-[106px] left-[-82px] bg-[#DEDEDE] rounded-full"></div>
//             <div className=" Hero_Shadow  w-[9px] h-[9px] absolute  top-[85px] left-[-103px] bg-[#DEDEDE] rounded-full"></div>
//             <div className=" Hero_Shadow  w-[9px] h-[9px] absolute  top-[69px] left-[-117px] bg-[#DEDEDE] rounded-full"></div>
//             <div className=" Hero_Shadow  w-[9px] h-[9px] absolute  top-[51px] left-[-128px] bg-[#DEDEDE] rounded-full"></div>
//             <div className=" Hero_Shadow  w-[9px] h-[9px] absolute  top-[29px] left-[-134px] bg-[#DEDEDE] rounded-full"></div>

//             <div className=" Hero_Shadow  w-[9px] h-[9px] absolute  top-[7px] left-[-138px] bg-[#DEDEDE] rounded-full"></div>
//             <div className=" Hero_Shadow  w-[9px] h-[9px] absolute  top-[-18px] left-[-136px] bg-[#DEDEDE] rounded-full"></div>

//             <div className=" Hero_Shadow  w-[9px] h-[9px] absolute  top-[-48px] left-[-131px] bg-[#DEDEDE] rounded-full"></div>

//             <div className=" Hero_Shadow  w-[9px] h-[9px] absolute  top-[-72px] left-[-120px] bg-[#DEDEDE] rounded-full"></div>

//             <div className=" Hero_Shadow  w-[9px] h-[9px] absolute  top-[-94px] left-[-104px] bg-[#DEDEDE] rounded-full"></div>
//           </div>
//         </div>
//       </div>

//       <button className="w-40 h-12 mb-2 bg-[#8B19A4] Hero_Popppin_verysimple py-2 px-6 rounded-full shadow-md hover:bg-[#70359b]">
//         Period Start
//       </button>
//     </div>
//   );
// };

// export default HeroSection;

// eslint - disable - next - line no - unused - vars
// optimaize way
// import React, { useMemo } from "react";

// const HeroSection = () => {
// Function to generate points in a circle
// const generateCirclePoints = (
//   count,
//   radius,
//   centerX,
//   centerY,
//   startAngle = -90
// ) => {
//   return Array.from({ length: count }, (_, index) => {
//     const angle = (startAngle + (index * 360) / count) * (Math.PI / 180);
//     return {
//       x: centerX + radius * Math.cos(angle),
//       y: centerY + radius * Math.sin(angle),
//       angle: angle * (180 / Math.PI),
//     };
//   });
// };

// Calculate dot positions for different sections
// const dots = useMemo(() => {
//   const radius = 70; // Base radius for the circle of dots
//   const centerX = 0;
//   const centerY = 0;

//   // Generate points for different sections (blue, red, green, and grey)
//   const blueDots = generateCirclePoints(3, radius, centerX, centerY, -150);
//   const redDots = generateCirclePoints(5, radius, centerX, centerY, -120);
//   const greenDots = generateCirclePoints(7, radius, centerX, centerY, 30);
//   const greyDots = generateCirclePoints(14, radius, centerX, centerY, -60);

//   return {
//     blue: blueDots,
//     red: redDots,
//     green: greenDots,
//     grey: greyDots,
//   };
// }, []);

// eslint-disable-next-line react/prop-types
// const DotComponent = ({ x, y, color, size = 2, children }) => (
//   <div
//     className={`absolute shadow-md rounded-full flex items-center justify-center
//       ${size === 2 ? "w-2 h-2" : "w-5 h-5 text-xs text-white"}`}
//     style={{
//       transform: `translate(${x}px, ${y}px)`,
//       backgroundColor: color,
//       boxShadow: "0px 3px 4px 0px rgba(0, 0, 0, 0.5)",
//     }}
//   >
//     {children}
//   </div>
// );

//   return (
//     <div className="relative w-full max-w-md mx-auto h-[500px] flex flex-col items-center justify-center px-4">
//       {/* Background circles */}
//       <div className="absolute top-[15%] left-0 w-44 h-52 bg-[#EECFF4] rounded-[50%]" />
//       <div className="absolute top-[15%] right-0 w-44 h-52 bg-[#EECFF4] rounded-[50%]" />

//       {/* Main circle with dots */}
//       <div className="relative w-64 h-64">
//         {/* Center purple circle */}
//         <div
//           className="absolute top-1/2 left-1/2 w-48 h-48 -translate-x-1/2 -translate-y-1/2
//           bg-[#8B19A4] rounded-full shadow-lg flex flex-col items-center justify-center gap-1"
//         >
//           <p className="text-white text-sm font-semibold">8 Day Left</p>
//           <p className="text-white text-xl font-bold">Sep 29</p>
//           <p className="text-white text-sm font-semibold">Next Period</p>
//         </div>

//         {/* Dots container */}
//         <div className="absolute top-1/2 left-1/2 w-full h-full -translate-x-1/2 -translate-y-1/2">
//           {/* Blue dots */}
//           {dots.blue.map((dot, i) => (
//             <DotComponent
//               key={`blue-${i}`}
//               x={dot.x}
//               y={dot.y}
//               color="#60A5FA"
//             />
//           ))}

//           {/* Red dots */}
//           {dots.red.map((dot, i) => (
//             <DotComponent
//               key={`red-${i}`}
//               x={dot.x}
//               y={dot.y}
//               color="#F92A2A"
//               size={i === 2 ? 5 : 2}
//             >
//               {i === 2 && "04"}
//             </DotComponent>
//           ))}

//           {/* Green dots */}
//           {dots.green.map((dot, i) => (
//             <DotComponent
//               key={`green-${i}`}
//               x={dot.x}
//               y={dot.y}
//               color="#9BCB3B"
//             />
//           ))}

//           {/* Grey dots */}
//           {dots.grey.map((dot, i) => (
//             <DotComponent
//               key={`grey-${i}`}
//               x={dot.x}
//               y={dot.y}
//               color="#DEDEDE"
//             />
//           ))}
//         </div>
//       </div>

//       {/* Period Start Button */}
//       <button
//         className="mt-8 px-8 py-3 bg-[#8B19A4] text-white rounded-full shadow-md
//         hover:bg-[#70359b] transition-colors duration-200 font-medium text-base"
//       >
//         Period Start
//       </button>
//     </div>
//   );
// };

// export default HeroSection;

import React, { useState, useEffect } from "react";

const HeroSection = () => {
  const [dots, setDots] = useState([]);

  // Function to generate points in a circle
  const generateCirclePoints = (
    count,
    radius,
    centerX,
    centerY,
    startAngle = -90
  ) => {
    return Array.from({ length: count }, (_, index) => {
      const angle = (startAngle + (index * 360) / count) * (Math.PI / 180);
      return {
        x: centerX + radius * Math.cos(angle),
        y: centerY + radius * Math.sin(angle),
        angle: angle * (180 / Math.PI),
        type: getPointType(index),
      };
    });
  };

  // Function to determine dot type based on index
  const getPointType = (index) => {
    if (index < 3) return "blue";
    if (index < 8) return "red";
    if (index < 11) return "grey";
    if (index < 18) return "green";
    return "grey";
  };

  // Sequential dot generation
  useEffect(() => {
    const generateDotsSequentially = async () => {
      const radius = 110;
      const centerX = -10;
      const centerY = -10;

      // Generate 30 points
      const allPoints = generateCirclePoints(
        30,
        radius,
        centerX,
        centerY,
        -120
      );

      // Add points one by one with a small delay
      for (let i = 0; i < allPoints.length; i++) {
        await new Promise((resolve) => setTimeout(resolve, 1));
        setDots((prev) => [...prev, allPoints[i]]);
      }
    };

    generateDotsSequentially();
  }, []);

  const DotComponent = ({ x, y, type, index }) => {
    const colors = {
      blue: "#60A5FA",
      red: "#F92A2A",
      green: "#9BCB3B",
      grey: "#DEDEDE",
    };

    const isSpecial = type === "red" && index === 13;

    return (
      <div
        className={`absolute  rounded-full flex items-center justify-center
          ${isSpecial ? "w-5 h-5 text-xs text-white" : "w-2 h-2"}`}
        style={{
          transform: `translate(${x}px, ${y}px)`,
          backgroundColor: colors[type],
          boxShadow: "0px 3px 4px 0px rgba(0, 0, 0, 0.5)",
        }}
      >
        {isSpecial && "04"}
      </div>
    );
  };

  return (
    <div className="relative w-full max-w-md mx-auto h-[331px] flex flex-col items-center justify-center px-4">
      <div className="flex flex-col items-center justify-center min-h-[55%] rounded-xl">
        <div className="relative w-screen h-96 ">
          <div className="absolute top-[24px] left-[-95px] w-[190px] h-[220px] bg-[#EECFF4] rounded-[50%] sizefordiv:w-[150px] sizefordiv:h-[190px] sizefordivmore:w-[120px] sizefordivmore:h-[160px]"></div>

          <div className="absolute top-[33px] right-[-86px] w-[180px] h-[220px] rounded-[50%] bg-[#EECFF4] sizefordiv:w-[150px] sizefordiv:h-[190px] sizefordivmore:w-[120px] sizefordivmore:h-[160px]"></div>

          <div className="absolute rounded-full top-[40%] left-1/2 w-48 h-48 -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center gap-2">
            {" "}
            <div className="relative">
              <div className="absolute rounded-full top-[-4px] left-[-5px] w-48 h-48 -translate-x-1/2 -translate-y-1/2 bg-[#8B19A4] text-white  flex flex-col justify-center items-center shadow-lg gap-2 sizefordiv:w-44 sizefordiv:h-44 sizefordivmore:w-40 sizefordivmore:h-40">
                <p className="font-poppin font-semibold text-sm leading-5 ">
                  8 Day Left
                </p>
                <p className="font-poppin font-bold text-xl leading-6">
                  Sep 29
                </p>
                <p className="font-poppin font-semibold text-sm leading-5">
                  Next Period
                </p>
              </div>
              {/* Dots */}
              <div className="absolute top-1/2 left-1/2 w-full h-full -translate-x-1/2 -translate-y-1/2">
                {dots.map((dot, i) => (
                  <DotComponent
                    key={`dot-${i}`}
                    x={dot.x}
                    y={dot.y}
                    type={dot.type}
                    index={i}
                  />
                ))}
              </div>
            </div>
            <button className=" font-poppin font-medium text-base leading-6 absolute top-[210px] left-[10%%] mt-8 px-8 py-3 bg-[#8B19A4] text-white rounded-full shadow-md">
              Period Start
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
