import React, { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Collecter from "./components/HomePage/Collecter/Collecter";
import Collecter2 from "./components/ShoppingPage/Collecter2/Collecter2";
import { ThemeContext } from "./components/HomePage/Context/ThemeContext";
import Collecter3 from "./components/ProductDetail/Collecter3/COllecter3";
import Collecter4 from "./components/MyGoal/Collecter4";
import Collecter5 from "./components/AddCart/Collector5/Collecter5";
import WelcomePage from "./components/LoginPage/WelcomePage";
import SignUpPage from "./components/LoginPage/SignUpPage";
import LoginPage from "./components/LoginPage/LoginPage";
import { ProtectedRoute } from "./components/LoginPage/LoginPage";
const App = () => {
  // localStorage.clear();

  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`w-screen h-screen ${
        theme === "light" ? "bg-[#202020]" : "bg-[#EFEFFE]"
      }`}
    >
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Collecter />
              </ProtectedRoute>
            }
          />
          <Route path="/Products" element={<Collecter2 />} />
          <Route path="/ProductDetails" element={<Collecter3 />} />
          <Route
            path="/MyGoal"
            element={
              <ProtectedRoute>
                <Collecter4 />
              </ProtectedRoute>
            }
          />
          <Route path="/AddCart" element={<Collecter5 />} />
          <Route path="/WelcomePage" element={<WelcomePage />} />
          <Route path="/SignUp" element={<SignUpPage />}></Route>
          <Route path="/Login" element={<LoginPage />} />{" "}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
