import React from "react";
import profile_icon from '../../images/profile_icon.png';
import './AboutMeSection.css'


const AboutMeSection = () =>{
    return(
        <div id="aboutMe">
            <div id="aboutSection">
  <p>Hello, <br />I'm Abhishek HM</p>
  <p><span className="gradient-text">Frontend Developer</span></p>
  <p id='descriptionText'>A tech enthusiast, akin to working in a fast-paced environment, experienced in architecting and building
cross-platform applications, and coordinating with teams responsible for various layers of product
infrastructure.</p>
<div className="download-btn">
  Download CV
</div>
            </div>

            <div id="aboutProfileSection">
                <img src={profile_icon} alt="Abhishek" className="profilePic"/>
            </div>

            

            
        </div>
    )
}

export default AboutMeSection;