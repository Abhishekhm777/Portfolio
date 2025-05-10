import React from "react";
import Cards from "../components/cards/Cards";
import AboutMeSection from "../components/aboutMe/AboutMeSection";
import ContactMe from "../components/contactMe/ContactMe";

const LandingScreen = () => {
  return (
    <div id="landingScren">
      <AboutMeSection />
      <Cards />
      <ContactMe />
    </div>
  );
};

export default LandingScreen;
