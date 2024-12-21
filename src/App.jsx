import React, { useContext } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Collecter from "./components02/Collecter/Collecter";
import Collecter2 from "./components/Collecter2/Collecter2";
import { ThemeContext } from "./components02/Context/ThemeContext";
import Collecter3 from "./components/ProductDetail/Collecter3/COllecter3";

const App = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`w-screen h-screen ${
        theme === "light" ? "bg-[#202020]" : "bg-[#EFEFFE]"
      }`}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Collecter />} />
          <Route path="/Products" element={<Collecter2 />} />
          <Route path="/ProductDetails" element={<Collecter3 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
