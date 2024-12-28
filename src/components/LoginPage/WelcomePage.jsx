import React, { useState } from "react";
import {
  setLocalStorageData,
  getLocalStorageData,
} from "../../Storage/LocalStorage.js";

const Header = () => {
  return (
    <div className="flex flex-col items-center p-6">
      <h1 className="font-urbanist font-bold text-3xl text-[#8B19A4] mb-6">
        Welcome back! Glad <br /> to see you. Again!
      </h1>
      <div className="relative w-64 h-64 bg-purple-600 rounded-full flex items-center justify-center">
        <div className="bg-white p-2 rounded-3xl">
          <img
            src="../../../media/illustration.svg"
            alt="Profile preview"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

const LoginForm = () => {
  // const [email, setEmail] = useState([]);

  // const [password, setPassword] = useState([]);
  return (
    <div className="p-6 flex flex-col gap-4">
      <input
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        type="email"
        placeholder="Email Id"
        className="w-full p-3 border rounded-lg font-poppin font-medium text-sm text-[#8391A1]"
      />
      <button
        onClick={() => {
          setLocalStorageData(id, email);
        }}
        className="w-full bg-[#8B19A4] text-white font-poppin font-semibold text-sm p-3 rounded-lg"
      >
        Continue
      </button>

      <button className="mt-5  bg-[#8B19A4] text-white font-poppin font-semibold text-sm p-3">
        {" "}
        Sign in / Sign up
      </button>

      <div className="flex items-center gap-4 my-4">
        <div className="flex-1 h-px bg-gray-300"></div>
        <span className="font-urbanist font-semibold text-sm text-black">
          Or
        </span>
        <div className="flex-1 h-px bg-gray-300"></div>
      </div>

      <button className="w-full flex items-center justify-center gap-2 p-3 border rounded-lg bg-[#8B19A4] text-white font-poppin font-semibold text-sm">
        <img
          src="../../../media/GoogleLogo.svg"
          alt="Google icon"
          className="w-6 h-6"
        />
        Sign up with google
      </button>
    </div>
  );
};

const WelcomePage = () => {
  // localStorage.clear();
  return (
    <div className="max-w-md mx-auto bg-white min-h-screen">
      <Header />
      <LoginForm />
    </div>
  );
};

export default WelcomePage;
