//import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types'; 
import '../styles/DiscoverPage.scss';
import '../App.css';
import img1 from '../assets/img1.png';
import img2 from '../assets/img2.jpeg';
import img3 from '../assets/img3.jpeg';



const Discover = ({ isDarkMode }) => {
  console.log("isDarkMode:", isDarkMode);
  return (
    <div className={`container ${isDarkMode ? 'dark-mode' : ''}`}>
      <p className='p1'>Latest</p>
      <h1>Discover the Latest Innovations</h1>
      <p className='p1'>Stay updated with our latest news and insights.</p>
      <div className="section-container">
        <div className="section">
          <div className="image-container">
            <img src={img1} alt="The Future of AI in Healthcare" />
          </div>
          <div className="info">
            <h2>The Future of AI in Healthcare</h2>
            <p>Discover how AI is revolutionizing the healthcare industry.</p>
            <a href="https://www.example.com" className="read-more">Read more  <FontAwesomeIcon icon={faAngleRight}  className='icon'/></a>
          </div>
        </div>
        <div className="section">
          <div className="image-container">
            <img src={img2} alt="The Rise of Remote Work" />
          </div>
          <div className="info">
            <h2 >The Rise of Remote Work</h2>
            <p>Explore the benefits and challenges of remote work in the digital age.</p>
            <a href="/" className="read-more">Read more <FontAwesomeIcon icon={faAngleRight}  className='icon'/></a>
          </div>
        </div>
        <div className="section">
          <div className="image-container">
            <img src={img3} alt="The Power of Data Analytics" />
          </div>
          <div className="info">
            <h2>The Power of Data Analytics</h2>
            <p>Unlocking insights and driving business growth through data analytics.</p>
            <a href="/" className="read-more">Read more <FontAwesomeIcon icon={faAngleRight}  className='icon'/></a>
          </div>
        </div>
      </div>
    </div>
  );

};

Discover.propTypes = {
  isDarkMode: PropTypes.bool.isRequired
};

export default Discover;
