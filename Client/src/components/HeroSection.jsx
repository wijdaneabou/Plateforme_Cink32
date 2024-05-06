import React from "react";
import background from '../assets/background.png';
import HeaderSection from "./HeaderSection";
import Apply from './apply'
import Customer from './customer'
import Education from './education'
import FAQPage from './FAQPage';
import '../styles/index.css';
import About from "./About";
import Footer from "./Footer";
import Partners from './partners';
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
        <About />
        <Education />
      
        <Apply />
        <Customer />
        <FAQPage />
        <Footer />
      </>
    );
};
