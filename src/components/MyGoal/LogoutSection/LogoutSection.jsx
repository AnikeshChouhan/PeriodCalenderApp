import React from "react";
import { AiOutlineRight } from "react-icons/ai";
import { Navigate } from "react-router-dom";

const LogoutSection = () => {
  const handleLogout = () => {
    localStorage.setItem("LoggedIn", false);
    const islogged = localStorage.getItem("LoggedIn");
    console.log(islogged);
    !islogged ? <Navigate to="/Login" /> : " ";
    window.location.reload();
  };

  return (
    <div className="bg-white rounded-lg mx-h-screen mb-24 m-3">
      {[
        { label: "My Profile" },
        { label: "My Orders" },
        { label: "Saved Addresses" },
        { label: "Theme", extra: "System Default" },
      ].map((item, index) => (
        <React.Fragment key={index}>
          <div className="flex justify-between items-center mx-2 p-3">
            <h4 className="font-poppin text-sm font-normal tracking-tight whitespace-nowrap">
              {item.label}
            </h4>
            <h4 className="font-poppin text-sm font-normal tracking-tight whitespace-nowrap">
              {item.extra || <AiOutlineRight />}
            </h4>
          </div>
          {index !== 3 && (
            <div className="mx-3 border-b border-b-gray-400"></div>
          )}
        </React.Fragment>
      ))}
      <div className="p-3">
        <span
          onClick={handleLogout}
          className="text-red-500 font-poppin font-bold ml-2 text-sm tracking-tight cursor-pointer"
        >
          Logout
        </span>
      </div>
    </div>
  );
};

export default LogoutSection;

// import React from "react";
// import { AiOutlineRight } from "react-icons/ai";
// const LogoutSection = () => {
//   return (
//     <div className="bg-white rounded-lg mx-h-screen pb-24 mb-24 m-3 ">
//       <div className="flex justify-between items-center mx-2 p-3 ">
//         <h4 className="font-poppin text-sm font-normal tracking-tight whitespace-nowrap">
//           My Profile
//         </h4>
//         <h4 className="font-poppin text-sm font-normal tracking-tight whitespace-nowrap">
//           <AiOutlineRight />
//         </h4>
//       </div>
//       <div className=" mx-3 border-b  border-b-gray-400 "></div>
//       <div className="flex justify-between items-center mx-2 p-3 ">
//         <h4 className="font-poppin text-sm font-normal tracking-tight whitespace-nowrap">
//           My Orders
//         </h4>
//         <h4 className="font-poppin text-sm font-normal tracking-tight whitespace-nowrap">
//           <AiOutlineRight />
//         </h4>
//       </div>
//       <div className=" mx-3 border-b  border-b-gray-400 "></div>
//       <div className="flex justify-between items-center mx-2 p-3 ">
//         <h4 className="font-poppin text-sm font-normal tracking-tight whitespace-nowrap">
//           Saved Addresses
//         </h4>
//         <h4 className="font-poppin text-sm font-normal tracking-tight whitespace-nowrap">
//           <AiOutlineRight />
//         </h4>
//       </div>
//       <div className=" mx-3 border-b  border-b-gray-400 "></div>
//       <div className="flex  justify-between items-center mx-2 p-3 ">
//         <h4 className="font-poppin text-sm font-normal tracking-tight whitespace-nowrap">
//           Theme
//         </h4>
//         <h4 className="font-poppin text-sm font-normal tracking-tight whitespace-nowrap">
//           System Default
//           <select name="" id="">
//             <option value="Light"></option>
//             <option value="Black"></option>
//           </select>
//         </h4>
//       </div>
//       <div className=" mx-3 border-b  border-b-gray-400 "></div>
//       {/* <button className="-mb-1">Logout</button> */}
//       <div className=" p-3">
//         <span className="text-red-500 font-poppin font-bold ml-2  text-sm  tracking-tight cursor-pointer">
//           Logout
//         </span>
//       </div>
//     </div>
//   );
// };

// export default LogoutSection;
