import React, { createContext, useState } from "react";
import {
  setLocalStorageData,
  getLocalStorageData,
} from "../../Storage/LocalStorage";
import { BiSolidHide } from "react-icons/bi";
import { BiSolidShow } from "react-icons/bi";
import { useNavigate, Navigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center p-6">
      <div className="mb-16 w-12 h-14 relative top-20 right-44 ">
        <img
          className="absolute "
          onClick={() => {
            navigate("/SignUp");
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

export const ProtectedRoute = ({ children }) => {
  const isLoggedIn = getLocalStorageData("LoggedIn");

  return isLoggedIn ? children : <Navigate to="/Login" />;
};
const LoginForm = () => {
  const navigate = useNavigate();
  const LoginContext = createContext();

  const [LoginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleSaveToLocalStorage = () => {
    const saveData = getLocalStorageData("users").find((value) => {
      if (
        value.email === LoginData.email &&
        value.password === LoginData.password
      ) {
        setLocalStorageData("LoggedIn", true);
        return true;
      } else {
        setLocalStorageData("LoggedIn", false);
        return false;
      }
    });
    // console.log(saveData);

    saveData ? navigate("/") : navigate("/Login");
    saveData
      ? alert("Right Email and Password")
      : alert("Wrong password and Email");
  };

  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...LoginData, [name]: value });
  };

  return (
    <div className="p-6 flex flex-col gap-4">
      <h1 className="font-poppin font-semibold text-base">Sign In</h1>
      <input
        name="email"
        value={LoginData.email}
        onChange={handleInputChange}
        type="email"
        placeholder="Email Id"
        className="w-full p-3 border rounded-lg font-poppin font-medium text-sm text-[#8391A1]"
      />
      <input
        name="password"
        value={LoginData.password}
        onChange={handleInputChange}
        type={passwordVisible ? "text" : "password"}
        placeholder="Password"
        className="w-full p-3 border rounded-lg font-poppin font-medium text-sm text-[#8391A1]"
      />
      <button
        className="translate-x-[335px] translate-y-[-55px]"
        type="button"
        onClick={togglePasswordVisibility}
        style={{
          padding: "4px",
          fontSize: "12px",
          cursor: "pointer",
        }}
      >
        {passwordVisible ? (
          <BiSolidHide size={20} />
        ) : (
          <BiSolidShow size={20} />
        )}
      </button>
      <h3 className="text-end font-poppin font-semibold text-[10px] text-[#8B19A4]">
        Forgot Password
      </h3>
      <button
        onClick={handleSaveToLocalStorage}
        className="w-full bg-[#8B19A4] text-white font-poppin font-semibold text-sm p-3 rounded-lg"
      >
        Continue
      </button>
      <div className=" flex justify-center items-center">
        <h1 className="font-poppin font-normal text-[10px] leading-5">
          If you don’t have an account{" "}
          <span
            onClick={() => {
              navigate("/SignUp");
            }}
            className="text-xs text-[#8B19A4] font-semibold ml-3"
          >
            Sign up?
          </span>
        </h1>
      </div>
    </div>
  );
};

const LoginPage = () => {
  // localStorage.clear();
  return (
    //   bg-[#efeffe]
    <div className="max-w-md mx-auto bg-white min-h-screen">
      <Header />
      <LoginForm />
    </div>
  );
};

export default LoginPage;
