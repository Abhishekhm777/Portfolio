// ProgrammingLanguages.jsx
import React from "react";
import "./Languages.css";

const GridView = ({ header, items }) => {
  return (
    <div className="lang-container">
      <h2 className="header">{header}</h2>
      <div className="grid">
        {items?.map((lang, idx) => (
          <div className="item" key={idx}>
            <img src={lang.img} alt={lang.name} />
            <p>{lang.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default React.memo(GridView);
