import { useState } from 'react';
import { FaSignOutAlt, FaKey, FaUserCog } from 'react-icons/fa';
import { PiUserCircleDuotone } from "react-icons/pi";
import { AiOutlineMenu } from 'react-icons/ai';
import { CiCircleChevDown, CiSearch } from "react-icons/ci";
import { BsBook, BsClipboard2, BsPower } from 'react-icons/bs';
import { VscCalendar, VscDashboard } from "react-icons/vsc";
import { LuUser2 } from "react-icons/lu";
import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2";
import '../styles/_Header.scss';
import logo from '../../../assets/cink.png';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const [showProfileDetails, setShowProfileDetails] = useState(false); 
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
    const navigate = useNavigate(); // Replace useHistory with useNavigate

    const toggleSidebar = () => {
        setIsSidebarCollapsed(!isSidebarCollapsed);
    };

    const handleClick = () => {
        setShowProfileDetails(!showProfileDetails); 
    };

    const handleLogout = () => {
        // Redirect the user to the home page on logout
        navigate("/");
    };

    return (
        <div>
            <div className={`sidebar ${isSidebarCollapsed ? '' : 'mobile-hidden'} ${isSidebarCollapsed ? 'collapsed' : ''}`}>
                <img src={logo} alt="Logo" className={`logo ${isSidebarCollapsed ? 'small-logo' : ''}`} />
                <div className="menu">
                    <ul>
                        <li><a onClick={() => navigate("/")} className={`link ${isSidebarCollapsed ? 'hidden' : ''}`}> <span><VscDashboard /></span><span className="text">Dashboard</span></a></li>
                        <li><a onClick={() => navigate("/admins")} className={`link ${isSidebarCollapsed ? 'hidden' : ''}`}><span><LuUser2 /></span> <span className="text">Admins</span></a></li>
                        <li><a onClick={() => navigate("/reports")} className={`link ${isSidebarCollapsed ? 'hidden' : ''}`}><span><HiOutlineChatBubbleLeftRight /></span><span className="text">Reports</span></a></li>
                        <li><a onClick={() => navigate("/courses")} className={`link ${isSidebarCollapsed ? 'hidden' : ''}`}><span><BsBook /></span><span className="text">Courses</span></a></li>
                        <li><a onClick={() => navigate("/events")} className={`link ${isSidebarCollapsed ? 'hidden' : ''}`}><span><VscCalendar /></span><span className="text">Events</span></a></li>
                        <li><a onClick={() => navigate("/todo")} className={`link ${isSidebarCollapsed ? 'hidden' : ''}`}><span><BsClipboard2 /></span><span className="text">To-Do</span></a></li>
                        <div className='logout'><a onClick={handleLogout} className={`link ${isSidebarCollapsed ? 'hidden' : ''}`}><span><BsPower /></span><span className="text">Logout</span></a></div>
                    </ul>
                </div>
            </div>
            <div className={`header ${isSidebarCollapsed ? 'expanded' : ''}`}>
                <AiOutlineMenu className='menu-icon' onClick={toggleSidebar} />
                <div className='search-bar'>
                    <CiSearch className="search-icon" />
                    <input type="text" placeholder="Search..." className="search-input" />
                </div>
                <div className='flex-grow' />
                <div className='user-profile'>
                    <PiUserCircleDuotone />
                    <div>
                        <p>Hamza</p>
                        <p className='user-role'>Admin</p>
                    </div>
                    {showProfileDetails && (
                        <div className='profile-details'>
                            <a onClick={() => navigate("/manage-account")} className='profile-option'>
                                <FaUserCog className="icon manage-account-icon" />
                                <span>Manage Account</span>
                            </a>
                            <a onClick={() => navigate("/change-password")} className='profile-option'>
                                <FaKey className="icon change-password-icon" />
                                <span>Change Password</span>
                            </a>
                            <a className='profile-option' onClick={handleLogout}>
                                <FaSignOutAlt className="icon logout-icon" />
                                <span>Log out</span>
                            </a>
                        </div>
                    )}
                </div>
                <button onClick={handleClick}><CiCircleChevDown /></button>
            </div>
        </div>
    );
};

Header.propTypes = {};

export default Header;
