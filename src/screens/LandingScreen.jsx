import React from "react";
import Cards from "../components/Cards/Cards";
import AboutMeSection from "../components/AboutMe/AboutMeSection";
import ContactMe from "../components/ContactMeSection/ContactMeSection";
import SkillsAndTools from "../components/SkillsAndFooterSection/SkillsAndToolsSection";
import Experience from "../components/Experience/Experience";
import { EXPERIENCE_DATA } from "../constants/experienceData";

const LandingScreen = () => {
  return (
    <div id="landingScren">
      <AboutMeSection />
      <Cards />
      <Experience companies={EXPERIENCE_DATA} />
      <SkillsAndTools />
      <ContactMe />
      {/* <AutoCarousel images={cardData} /> */}
    </div>
  );
};

export default LandingScreen;
