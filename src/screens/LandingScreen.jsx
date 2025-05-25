import React from "react";
import Cards from "../components/Cards/Cards";
import AboutMeSection from "../components/AboutMe/AboutMeSection";
import ContactMe from "../components/ContactMe/ContactMe";
import SkillsAndTools from "../components/SkillsAndTools/SkillsAndTools";

const LandingScreen = () => {
  return (
    <div id="landingScren">
      <AboutMeSection />
      <Cards />
      <SkillsAndTools />
      <ContactMe />
      {/* <AutoCarousel images={cardData} /> */}
    </div>
  );
};

export default LandingScreen;
