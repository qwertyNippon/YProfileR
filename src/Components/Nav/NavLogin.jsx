import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ArrowDownIcons from '../Icons/ArrowDown_icons';
import LanguageIcons from '../Icons/Langauge_icons';
import LanguageSelection from '../Language/LanguageSelection';
import i18next from 'i18next';
import './NavLogin.css'
import Logo from '../../assets/Logo.png'

function NavLogin() {

    const { t} = useTranslation()

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
    };

    const changeLanguage = (language) => {
        i18next.changeLanguage(language);
        setIsDropdownOpen(false); // Close dropdown after changing language
      };
    
    return (
        < >
            <div className="containerNavLogin">
                <div className="logo">
                    <a href="#"><img className="LogoPic" src={Logo} alt="Logo" /></a>
                </div>
                <ul className="menu">
                    <li><Link to='#'>Find tutors</Link></li>
                    <li><Link to='#'>Become a tutor</Link></li>
                </ul>

                <div className="log_butt_right_container">
                    <div className="block">
                        <div className="lang-container">
                            <Link to='#' className="navLinks"><LanguageIcons /></Link>
                            <Link to='#' className="navLinks" onClick={toggleDropdown}><ArrowDownIcons /></Link>
                            {isDropdownOpen && (
                                <div className="dropdown-menu">
                                    <ul>
                                        <li onClick={() => { changeLanguage('en'); LanguageSelection(fallbackLanguage = i18next.options.resources[0]); }}>English</li>
                                        <li onClick={() => { changeLanguage('es'); LanguageSelection(fallbackLanguage = i18next.options.resources[1]); }}>Spanish</li>
                                        <li onClick={() => { changeLanguage('fr'); LanguageSelection(fallbackLanguage = i18next.options.resources[2]); }}>French</li>
                                    </ul>
                                </div>
                                // the default is set as english, need to find a way to change it with each click
                            )}
                        </div>
                    </div>
                    <button className="friendButt log_butt_right"><Link to="/login"><i className="fa-solid fa-arrow-right-to-bracket"></i> Log in</Link></button>
                </div>
            </div>
            <hr />
        </>
    )
}

export default NavLogin
