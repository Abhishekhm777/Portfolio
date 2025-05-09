import React  from "react";
import TopBar from "../components/TopBar/TopBar";
import Cards from "../components/Cards/Cards";
import AboutMeSection from "../components/AboutMe/AboutMeSection";


const LandingScreen = () =>{

    return(
        <div id="landingScren">
         <TopBar/>
         <AboutMeSection/>
          <Cards/>

        </div>
    )
}

export default LandingScreen;