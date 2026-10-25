import React from "react";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import MainSection from "./components/MainSection";
import FooterSection from "./components/FooterSection";

const App = () => {
  return (
    <>
      {/* <Home/> */}

      <Navbar />
      <HeroSection />
      <MainSection />
      <FooterSection />
    </>
  );
};

export default App;
