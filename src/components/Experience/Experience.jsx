import React from "react";
import "./Experience.css";
import ExperienceCard from "./ExperienceCard";
import { EXPERIENCE_DATA } from "../../constants/experienceData";

const Experience = ({ company }) => {
  return (
    <div id="experience-container">
      <div className="header">
        <h1 className="skillsHeading">Skills & Tools</h1>
      </div>
      <div className="card-container">
        <ExperienceCard company={EXPERIENCE_DATA} />
        <ExperienceCard company={EXPERIENCE_DATA} />
      </div>
    </div>
  );
};

export default Experience;
