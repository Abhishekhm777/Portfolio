import React from "react";
import profile_icon from "../../images/profile_icon.png";
import "./AboutMeSection.css";
import { getDatabase, ref, push, set } from "firebase/database";
import { formatDateTime } from "../../utills/dateFormator";

const AboutMeSection = () => {
  // Trigger actual CV download

  const handleDownloadClick = () => {
    window.location.href =
      "https://drive.google.com/uc?export=download&id=1CWThcg-rUrx0keOPhpN9LT0Rk86yf8V8";

    const db = getDatabase();
    const downloadsRef = ref(db, "cvDownloads");
    const newDownloadRef = push(downloadsRef);
    const timestamp = formatDateTime();
    set(newDownloadRef, {
      timestamp: timestamp,
      userAgent: navigator.userAgent,
    });
  };

  return (
    <section id="aboutMe">
      <div id="aboutSection">
         
        <p>
          Hello, <br />
          I'm Abhishek HM
        </p>
        <p>
          <span className="gradient-text">Frontend Developer</span>
        </p>
        <p id="descriptionText">
          A tech enthusiast, akin to working in a fast-paced environment,
          experienced in architecting and building cross-platform applications,
          and coordinating with teams responsible for various layers of product
          infrastructure.
        </p>
        <h1 onClick={handleDownloadClick} className="download-btn">
          Download CV
        </h1>
        {/* <a href="https://drive.google.com/uc?export=download&id=1CWThcg-rUrx0keOPhpN9LT0Rk86yf8V8">
        <h1 className="download-btn">Download CV</h1>
        </a> */}
      </div>

      <div id="aboutProfileSection">
        <img src={profile_icon} alt="Abhishek" className="profilePic" />
      </div>
    </section>
  );
};

export default AboutMeSection;
