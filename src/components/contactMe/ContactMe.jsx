import React, { useEffect, useState } from "react";
import "./ContactMe.css";
import instagram from "../../icons/instagram.png";
import github from "../../icons/github-logo.png";
import linkedin from "../../icons/linkedin.png";
import gmail from "../../icons/email.png";

const ContactMe = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 100;

      if (scrollBottom) {
        requestAnimationFrame(() => setAnimate(true));
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="contactme">
      <h1 className="contactText">Contact me</h1>
      <h1 className="reachOutText">
        Feel free to reach out me for any questions and opportunities.
      </h1>
      <div className={`socialIcons ${animate ? "animate" : ""}`}>
        <img src={instagram} alt="instagram_icon" />
        <img src={linkedin} alt="instagram_icon" />
        <img src={github} alt="instagram_icon" />
        <img src={gmail} alt="instagram_icon" />
      </div>
    </div>
  );
};

export default ContactMe;
