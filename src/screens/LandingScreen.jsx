import React from "react";
import Cards from "../components/Cards/Cards";
import AboutMeSection from "../components/AboutMe/AboutMeSection";

const LandingScreen = () => {
  return (
    <div id="landingScren">
      <AboutMeSection />
      <Cards />
    </div>
  );
};

export default LandingScreen;
