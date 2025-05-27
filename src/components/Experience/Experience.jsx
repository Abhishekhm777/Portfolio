import React from "react";
import "./Experience.css";
import ExperienceCard from "./ExperienceCard";

const Experience = ({ companies }) => {
  return (
    <section id="experience-container">
      <div className="header">
        <h1 className="skillsHeading">Experience</h1>
      </div>
      <div className="card-container">
        {companies?.map((company, index) => {
          return <ExperienceCard company={company} index={index} key={index} />;
        })}
      </div>
    </section>
  );
};

export default Experience;
