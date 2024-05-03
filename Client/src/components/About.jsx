//import React from 'react';
import '../styles/AboutPage.scss';
import PropTypes from 'prop-types';

const About = ({ isDarkMode }) => {
  return (
    <div className={`about ${isDarkMode ? 'dark-mode' : ''}`}>
      <h1>
        <span className="first-letter-blue">E</span>mpowering{" "}
        <span className="first-letter-blue">L</span>earners and{" "}
        <span className="first-letter-blue">P</span>rofessionals{" "}
        <span className="first-letter-blue">T</span>hrough{" "}
        <span className="first-letter-blue">D</span>igital{" "}
        <span className="first-letter-blue">I</span>nnovation
      </h1>
      <p>
        CINK is a leading digital innovation platform that offers top-tier
        educational courses, interactive workshops, and a vibrant community for
        networking in the tech industry. Our mission is to equip individuals and
        professionals with the skills and opportunities needed to excel in the
        digital era, fostering innovation and professional growth. Join CINK
        today to transform your digital knowledge and connect with leading
        experts in technology.
      </p>
    </div>
  );
};

About.propTypes = {
  isDarkMode: PropTypes.bool.isRequired
};

export default About;
