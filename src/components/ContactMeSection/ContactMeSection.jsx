import React, { useEffect, useState } from "react";
import "./ContactMeSection.css";
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
        <img
          src={instagram}
          alt="instagram_icon"
          onClick={() =>
            window.open("https://www.instagram.com/abhishek_hm/", "_blank")
          }
          style={{ cursor: "pointer" }}
        />
        <img
          src={linkedin}
          alt="linkedin_icon"
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/abhishek-hm-744953155/",
              "_blank"
            )
          }
          style={{ cursor: "pointer" }}
        />
        <img
          src={github}
          alt="github_icon"
          onClick={() =>
            window.open("https://github.com/Abhishekhm777", "_blank")
          }
          style={{ cursor: "pointer" }}
        />
        <img
          src={gmail}
          alt="gmail_icon"
          onClick={() =>
            (window.location.href = "mailto:abhishekhm777@gmail.com")
          }
          style={{ cursor: "pointer" }}
        />
      </div>
    </div>
  );
};

export default ContactMe;
