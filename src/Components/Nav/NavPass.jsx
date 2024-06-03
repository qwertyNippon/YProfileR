// NavPass.jsx
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { DataContext } from "../../context/DataProvider";
import Icons from '../Icons/Profile_icons';
import ArrowDownIcons from '../Icons/ArrowDown_icons';
import LanguageIcons from '../Icons/Langauge_icons';
import './NavPass.css';
import Logo from '../../assets/Logo.png';
import i18next from 'i18next';
import LanguageSelection from '../Language/LanguageSelection';

function NavPass() {
    const { t } = useTranslation();
    const { user, setUser } = useContext(DataContext);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const navigate = useNavigate();

    const fallbackLanguage = i18next.options.resources[0]; // Extract language code

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const changeLanguage = (language) => {
        i18next.changeLanguage(language);
        setIsDropdownOpen(false); // Close dropdown after changing language
    };

    const logout = () => {
        setUser(null);
        navigate('/home');
    };

    return (
        <>
            <div className="headerA">
                <div className="container">
                    <nav>
                        <div className="logo">
                            <Link to="/Home"><img className="LogoPic" src={Logo} alt="Logo" /></Link>
                        </div>
                        <ul>
                            <Link to="/Home"><p className="navLinks">{t('Dashboard')}</p></Link>
                            <Link to='/FindTeacher'><p className="navLinks">{t('FindT')}</p></Link>
                        </ul>
                    </nav>
                </div>
                <div>
                    <nav>
                        <ul>
                            <div className="lang-container">
                                <Link to='#' className="navLinks"><LanguageIcons /></Link>
                                <Link to='#' className="navLinks" onClick={toggleDropdown}><ArrowDownIcons /></Link>
                                {isDropdownOpen && (
                                    <div className="dropdown-menu">
                                        <ul>
                                            <li onClick={() => changeLanguage('en')}>English</li>
                                            <li onClick={() => changeLanguage('es')}>Español</li>
                                            <li onClick={() => changeLanguage('fr')}>Français</li>
                                        </ul>
                                    </div>
                                )}
                            </div>
                            <span className="noShow">
                                <button className="friendButt"><Link to='#' className="navLinks">{t('referF')}</Link></button>
                            </span>
                            <Link to='#' className="navLinks"><Icons /></Link>
                        </ul>
                    </nav>
                </div>
            </div>
            <hr className="noShow hr" />
            <header>
                <div className="noShow">
                    <nav>
                        <ul>
                            <div className="selectOptions">
                                <button><Link to='/MyMessages'>{t('messages')}</Link></button>
                            </div>
                            <div className="selectOptions">
                                <button><Link to='/MyLessons'>{t('lessons')}</Link></button>
                            </div>
                            <div className="selectOptions">
                                <button><Link to='/Classroom'>{t('classroom')}</Link></button>
                            </div>
                            <div className="selectOptions">
                                <button><Link to='/Calendar'>{t('calendar')}</Link></button>
                            </div>
                            <div className="selectOptions">
                                <button><Link to='/Statistics'>{t('statistics')}</Link></button>
                            </div>
                            <div className="selectOptions">
                                <button><Link to='/Profile'>{t('profile')}</Link></button>
                            </div>
                            <div className="selectOptions">
                                <button><Link to='/Settings'>{t('settings')}</Link></button>
                            </div>
                            <div className="selectOptions">
                                <button><Link to='/Community'>{t('community')}</Link></button>
                            </div>
                        </ul>
                    </nav>
                </div>
            </header>
            <hr className="noShow hr" />
            {user && (
                <li>
                    <div className="logsign">
                        <Link className="textD" to="/" onClick={logout}>LOGOUT</Link>
                    </div>
                </li>
            )}
        </>
    );
}

export default NavPass;
