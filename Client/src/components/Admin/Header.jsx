import { useState } from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import { FaSignOutAlt, FaKey, FaUserCog } from 'react-icons/fa';
import { PiUserCircleDuotone } from "react-icons/pi";
import { AiOutlineMenu } from 'react-icons/ai';
import { CiCircleChevDown, CiSearch } from "react-icons/ci";
import { BsBook, BsClipboard2, BsPower } from 'react-icons/bs';
import { VscCalendar, VscDashboard } from "react-icons/vsc";
import { LuUser2 } from "react-icons/lu";
import { HiOutlineChatBubbleLeftRight } from "react-icons/hi2";
import { US, FR, MA } from 'country-flag-icons/react/3x2';
import '../../styles/Admin/_Header.scss';
import logo from '../../assets/cink.png';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

const Header = ({ selectedLanguage, onLanguageChange }) => {
    const [showProfileDetails, setShowProfileDetails] = useState(false); 
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);
    const { t } = useTranslation(); 
    const navigate = useNavigate(); // Replace useHistory with useNavigate

    const toggleSidebar = () => {
        setIsSidebarCollapsed(!isSidebarCollapsed);
    };

    const languages = [
        { code: 'en', label: 'English', flag: <US className="flag-icon" /> },
        { code: 'fr', label: 'Français', flag: <FR className="flag-icon" /> },
        { code: 'ma', label: 'Marocain', flag: <MA className="flag-icon" /> },
    ];

    const languageOptions = languages.map((language) => ({
        value: language.code,
        label: (
            <div className="language-option">
                {language.flag}
                <span>{language.label}</span>
            </div>
        ),
    }));

    const handleClick = () => {
        setShowProfileDetails(!showProfileDetails); 
    };

    const handleLogout = () => {
        // Redirect the user to the home page on logout
        navigate("/");
    };

    return (
        <div>
            <div className={`sidebar ${isSidebarCollapsed ? 'collapsed' : ''}`}>
                <img src={logo} alt="Logo" className={`logo ${isSidebarCollapsed ? 'small-logo' : ''}`} />
                <div className="menu">
                    <ul>
                        <li><a onClick={() => navigate("/")} className={`link ${isSidebarCollapsed ? 'hidden' : ''}`}> <span><VscDashboard /></span><span className="text">{t('dashboard')}</span></a></li>
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
                <div className="language-dropdown">
                    <Select
                        options={languageOptions}
                        value={languageOptions.find((option) => option.value === selectedLanguage)}
                        onChange={onLanguageChange}
                        className="react-select-container"
                        classNamePrefix="react-select"
                    />
                </div>
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

Header.propTypes = {
    selectedLanguage: PropTypes.string.isRequired,
    onLanguageChange: PropTypes.func.isRequired,
};

export default Header;
