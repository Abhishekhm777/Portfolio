import React from "react";
import Cards from "../components/Cards/Cards";
import AboutMeSection from "../components/AboutMe/AboutMeSection";
import ContactMe from "../components/ContactMeSection/ContactMeSection";
import SkillsAndTools from "../components/SkillsAndFooterSection/SkillsAndToolsSection";

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
