// Import statements
import background from '../assets/background.png';
import '../styles/_Home.scss';

import HeaderSection from "./HeaderSection";
import Apply from './apply';
import Customer from './customer';
import Education from './education';
import FAQPage from './FAQPage';
import About from "./About";
import Footer from "./Footer";
import Partners from './partners';
import Discover from "./DiscoverPage";

// HeroSection component definition
export default function HeroSection() {
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
          <p className="BigTitle">CINK Digital <br />Innovation</p>
          <p className="Description">
            Ready to embark on a journey of digital discovery? <br />
            Join CINK Digital Innovation today and unlock a world of <br />
            knowledge and networking opportunities. Let´s innovate together
          </p>
          <div className="LearnMore">
            <div className="Content">Learn More</div>
          </div>
          <div className="Sign">
            <p>Sign in</p>
          </div>
        </div>
      </div>
      <About />
      <Education />
      <Discover />
      <Apply />
      <Customer />
      <FAQPage />
      <Partners />
      <Footer />
    </>
  );
}
