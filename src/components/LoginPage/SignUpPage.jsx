import React, { useState } from "react";
import {
  getLocalStorageData,
  setLocalStorageData,
} from "../../Storage/LocalStorage";
import { useNavigate } from "react-router-dom";

// import { BiSolidHide } from "react-icons/bi";
// import { BiSolidShow } from "react-icons/bi";

const formhandler = (e) => {
  e.PreventDefault();
};

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center p-6">
      <div className="mb-16 w-12 h-14 relative top-20 right-44 ">
        <img
          className="absolute "
          onClick={() => {
            navigate("/Login");
          }}
          src="../../../../media/ArrowIcon.svg"
          alt=""
        />
      </div>
      <div className="relative w-64 h-64 bg-purple-600 rounded-full flex items-center justify-center">
        <div className="bg-white p-2 rounded-3xl">
          <img
            src="../../../media/LoginHandLogo.svg"
            alt="Profile preview"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

const LoginForm = () => {
  const [signUpData, setSignUpData] = useState({
    fullName: "",
    email: "",
    password: "",
    dateOfBirth: "",
  });

  const navigate = useNavigate();
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSignUpData({ ...signUpData, [name]: value });
  };

  const handleSaveToLocalStorage = () => {
    const existingUsers = getLocalStorageData("users") || [];

    const updatedUsers = [...existingUsers, signUpData];

    setLocalStorageData("users", updatedUsers);

    alert("Data added successfully!");
    navigate("/Login");
  };
  return (
    <form onSubmit={formhandler}>
      <div className="p-6 flex flex-col gap-4">
        <h1 className="font-poppin font-semibold text-base">
          Sign up <br />
          <span className="text-xs text-[#8F8F98]">Basic Information</span>
        </h1>
        <input
          name="fullName"
          value={signUpData.fullName}
          onChange={handleInputChange}
          type="text"
          placeholder="Full Name"
          className="w-full p-3 border rounded-lg font-poppin font-medium text-sm text-[#8391A1]"
        />
        <input
          name="email"
          value={signUpData.email}
          onChange={handleInputChange}
          type="email"
          placeholder="Email Id"
          className="w-full p-3 border rounded-lg font-poppin font-medium text-sm text-[#8391A1]"
        />
        <input
          name="password"
          value={signUpData.password}
          onChange={handleInputChange}
          type={passwordVisible ? "text" : "password"}
          placeholder="Password"
          className="w-full p-3 border rounded-lg font-poppin font-medium text-sm text-[#8391A1]"
        />

        <input
          name="dateOfBirth"
          value={signUpData.dateOfBirth}
          onChange={handleInputChange}
          type="text"
          placeholder="Date of Birth DD/MM/YYYY"
          className="w-full p-3 border rounded-lg font-poppin font-medium text-sm text-[#8391A1]"
        />

        <button
          onClick={handleSaveToLocalStorage}
          className="w-full bg-[#8B19A4] text-white font-poppin font-semibold text-sm p-3 rounded-sm"
        >
          Sign up
        </button>
        <div className=" flex justify-center items-center">
          <h1 className="font-poppin font-normal text-[10px] leading-5">
            If you already have an account{" "}
            <span
              onClick={() => {
                navigate("/Login");
              }}
              className="text-xs text-[#8B19A4] font-semibold ml-3"
            >
              Sign in?
            </span>
          </h1>
        </div>
      </div>
    </form>
  );
};

const SignUpPage = () => {
  // localStorage.clear();
  return (
    //   bg-[#efeffe]
    <div className="max-w-md mx-auto bg-white min-h-screen">
      <Header />
      <LoginForm />
    </div>
  );
};

export default SignUpPage;
