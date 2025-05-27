import React from "react";
import "./ExperienceCard.css";

const elevations = [
  {
    boxShadow: "10px 44px 40px rgba(0, 0, 0, 0.3)",
    transform: "translateY(-20px)",
    zIndex: 3,
  },
  {
    boxShadow: "12px 18px 32px rgba(0, 0, 0, 0.25)",
    transform: "translateY(-10px)",
    zIndex: 2,
  },
  {
    boxShadow: "0 0px 0px rgba(0, 0, 0, 0.2)",
    transform: "translateY(30px)",
    zIndex: 1,
  },
];

const ExperienceCard = ({ company, index }) => {
  const elevation = elevations[index] || elevations[2];

  return (
    <div className="experience-card" style={elevation}>
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
