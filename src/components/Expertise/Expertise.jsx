import React from "react";
import "./Expertise.css";

const Expertise = ({ icons }) => {
  return (
    <div className="scroller-wrapper">
      {[...Array(4)].map((_, rowIdx) => (
        <div
          key={rowIdx}
          className={`scroll-row ${rowIdx % 2 === 0 ? "left" : "right"}`}
        >
          <div className="scroll-content">
            {icons.map((icon, i) => (
              <div key={i} className="icon-wrapper">
                <img src={icon.url} alt={icon.name} className="icon" />
                <span className="tooltip">{icon.name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Expertise;
