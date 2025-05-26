import React from "react";
import "./SkillsAndToolsSection.css";
import GridView from "./GridView";
import { FRAMEWORKS, LANGUAGES, TOOLS } from "../../constants/const";
import Expertise from "../Expertise/Expertise";

const SkillsAndTools = () => {
  const Content = ({ icon, text }) => {
    return (
      <div className="component">
        <img src={icon} alt={text} className="icon" />
        <p>{text}</p>
      </div>
    );
  };

  return (
    <div id="skills-container">
      <div className="header">
        <h1 className="skillsHeading">Skills & Tools</h1>
      </div>

      <div className="contentContainer">
        <Expertise icons={TOOLS} />
        <div className="gradient-border">
          <div className="content">
            <GridView header={"Programming Languages"} items={LANGUAGES} />
          </div>
        </div>

        <div className="gradient-border">
          <div className="content">
            <GridView header={"Frameworks & Tools"} items={FRAMEWORKS} />
          </div>
        </div>
        <Expertise icons={TOOLS} />
      </div>
    </div>
  );
};

export default SkillsAndTools;
