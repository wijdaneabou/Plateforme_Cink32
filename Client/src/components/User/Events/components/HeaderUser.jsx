import  { useState } from 'react'; // Importing React and useState hook
import logo from '../../../../assets/Logo_off.png'; // Importing logo image
import { NavLink } from 'react-router-dom'; // Importing NavLink component from react-router-dom for navigation
import { IoIosSearch } from 'react-icons/io'; // Importing search icon from react-icons library
import { CgProfile } from 'react-icons/cg'; // Importing profile icon from react-icons library
import { RiMenuSearchLine } from "react-icons/ri"; // Importing menu search line icon from react-icons library
import { PiTicket } from "react-icons/pi"; // Importing ticket icon from react-icons library
import { GoReport } from "react-icons/go"; // Importing report icon from react-icons library
import { CiSettings } from "react-icons/ci"; // Importing settings icon from react-icons library
import '../styles/HeaderUser.scss'; // Importing SCSS stylesheet for the navbar

const HeaderUser = () => {
  // State to manage mobile view toggle
  const [isMobile, setIsMobile] = useState(false);
  // State to manage sidebar visibility
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);

  // Function to determine the class name for NavLink
  const getClassName = ({ isActive }) => "navlink" + (isActive ? " active-link" : "");

  // Function to toggle mobile view and sidebar visibility
  const toggleSidebar = () => {
    setIsMobile(!isMobile); // Toggle mobile state
    setIsSidebarVisible(!isSidebarVisible); // Toggle sidebar visibility state
  };

  return (
    <div className="navbar-container">
      {/* Navigation bar */}
      <nav className="navbar">
        {/* Logo section */}
        <div className="navbar__logo">
          <img src={logo} alt="Logo" /> {/* Displaying logo image */}
        </div>
        
        {/* Navigation links, toggle class based on isMobile state */}
        <ul className={`navbar__links ${isMobile ? 'navbar__links--mobile' : ''}`}>
          <li><NavLink to="/home" className={getClassName}>Home</NavLink></li>
          <li><NavLink to="/courses" className={getClassName}>Courses</NavLink></li>
          <li><NavLink to="/events" className={getClassName}>Events</NavLink></li>
          <li><NavLink to="/chat" className={getClassName}>Forum</NavLink></li>
          <li><NavLink to="/jobs" className={getClassName}>Jobs</NavLink></li>
        </ul>
        
        {/* Other navbar items like search and profile */}
        <div className="navbar__others">
          {/* Search bar */}
          <div className="navbar__others__search">
            <IoIosSearch className="icon" /> {/* Search icon */}
            <input type="text" placeholder="Search" /> {/* Search input field */}
          </div>
          {/* Profile icon */}
          <div className="navbar__others__profile">
            <CgProfile className="icon" /> {/* Profile icon */}
          </div>
        </div>
        
        {/* Button to toggle mobile view and sidebar */}
        <button className="navbar__toggle" onClick={toggleSidebar}>
          {isMobile ? '✕' : '☰'} {/* Toggle button text changes based on isMobile state */}
        </button>
      </nav>

      {/* Sidebar component */}
      <div className={`sidebar ${isSidebarVisible ? 'sidebar--mobile' : ''}`}>
        {/* Sidebar navigation links */}
        <ul>
          <li><NavLink to="/home" className={getClassName}><span className="icon"><RiMenuSearchLine /></span> Overview</NavLink></li>
          <li><NavLink to="/courses" className={getClassName}><span className="icon"><PiTicket /></span> Tickets</NavLink></li>
          <li><NavLink to="/events" className={getClassName}><span className="icon"><GoReport /></span> Reports</NavLink></li>
          <li><NavLink to="/forum" className={getClassName}><span className="icon"><CiSettings /></span> Settings</NavLink></li>
        </ul>
      </div>
    </div>
  );
}

export default HeaderUser; // Exporting the TestNavbar component as the default export