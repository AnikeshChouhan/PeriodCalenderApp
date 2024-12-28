import React, { useContext } from "react";

import HeroSection from "../HeroSection/HeroSection";
import HeroSection2 from "../HeroSection/HeroSection2";
import Footer from "../Footer/Footer";
import LastFooter from "../LastFooter/LastFooter";
import { ThemeContext } from "../Context/ThemeContext";
import CycleSection from "../CycleSection/CycleSection";
import Nav from "../Navbar/Navbar";

const Collecter = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={` overflow-x-auto ${
        theme === "light" ? "bg-[#202020]" : "bg-[#EFEFFE]"
      }`}
    >
      <Nav />
      {theme === "light" ? <HeroSection2 /> : <HeroSection />}
      <CycleSection />
      <Footer />
      <LastFooter />
    </div>
  );
};

export default Collecter;
