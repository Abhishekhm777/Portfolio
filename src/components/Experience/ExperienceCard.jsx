import React from "react";
import "./ExperienceCard.css";

const ExperienceCard = ({ company }) => {
  return (
    <div className="experience-card">
      <div className="experience-header">
        <img
          src={company?.logo}
          alt={`${company?.name} Logo`}
          className="company-logo"
        />
        <div className="company-container">
          <h3 className="company-name">{company?.name}</h3>
          <p className="employment-type">
            {company?.type} · {company?.duration}
          </p>
        </div>
      </div>

      {company?.roles?.map((role, index) => (
        <div className="role-entry" key={index}>
          <div className="role-timeline"></div>
          <div className="role-details">
            <h4 className="role-title">{role.title}</h4>
            <p className="duration-location">
              {role?.period} · {role?.totalDuration}
              <br />
              {role?.location}
            </p>
            <p className="skills">💠 {role?.skills}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ExperienceCard;
