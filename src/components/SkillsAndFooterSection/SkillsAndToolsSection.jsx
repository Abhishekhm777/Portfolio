import React from "react";
import "./SkillsAndToolsSection.css";
import GridView from "./GridView";
import { FRAMEWORKS, LANGUAGES, TOOLS } from "../../constants/const";

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
    <div className="container">
      <div className="header">
        <h1 className="skillsHeading">Skills & Tools</h1>
      </div>

      <div className="contentContainer">
        <div className="gradient-border">
          <div className="content">
            <GridView header={"Programming Languages"} items={LANGUAGES} />
          </div>
        </div>

        <div className="gradient-border">
          <div className="content">
            <GridView header={"Frameworks"} items={FRAMEWORKS} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsAndTools;
