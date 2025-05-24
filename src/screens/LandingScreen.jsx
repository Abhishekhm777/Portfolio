import React from "react";
import Cards, { cardData } from "../components/cards/Cards";
import AboutMeSection from "../components/aboutMe/AboutMeSection";
import ContactMe from "../components/contactMe/ContactMe";
import AutoCarousel from "../components/carousel/AutoCarousel";
import SkillsAndTools from "../components/skillsAndTools/SkillsAndTools";

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
