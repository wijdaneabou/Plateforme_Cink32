import React from "react";
import background from '../assets/background.png';
import HeaderSection from "./HeaderSection";
import '../styles/index.css';
export default function HeroSection () {
  return (
      <>
       <div className="hero-container">
      <HeaderSection />
      <div className="container-background">
        <img
                loading="lazy"
                src={background}
                className="img"
              />
        </div>
        <div className="DescriptionCINK">
          <p className="BigTitle">CINK Digital <br></br>Innovation</p>
          <p className="Description">Ready to embark on a journey of digital discovery? <br></br>Join CINK Digital Innovation today and unlock a world of <br></br> knowledge and networking opportunities. Let's innovate together</p>
         
          <div className="LearnMore"><div className="Content">Learn More</div></div>
          <div className="Sign"><p>Sign in</p></div>
        
        </div>
        </div>
      </>
    );
};
