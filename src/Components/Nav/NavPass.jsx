import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { DataContext } from "/Users/orlan/OneDrive/Documents/PostCodingTemple/OnlineLanguagePro/YProfileR/YuriProfileReact/src/context/DataProvider";
import Icons from '../Icons/Profile_icons';
import ArrowDownIcons from '../Icons/ArrowDown_icons';
import LanguageIcons from '../Icons/Langauge_icons';
import './NavPass.css';
import Logo from '../../assets/Logo.png';
import i18next from 'i18next';
import LanguageSelection from '../Language/LanguageSelection';


function NavPass() {
    const [Language, setLanguage] = useState([{ language: fallbackLanguage}]);
    const { user, setUser } = useContext(DataContext);
    // const get_info = async () => {
        //     const url = 'http://127.0.0.1:5000/api/API'
        // will need 2 change above
        //     const response = await axios.get(url) 
        //     return response.status === 200 ? response.data : null
        // }
        // const users_name = async () => {
            //     const data = await get_info()
            //     console.log(data)
            // }
            
    var fallbackLanguage = i18next.options.resources[0]; // Extract language code
    const { t} = useTranslation()

    const logout = () => {
        setUser(null)
      }

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
    };

    const changeLanguage = (language) => {
        i18next.changeLanguage(language);
        setIsDropdownOpen(false); // Close dropdown after changing language
      };

    return (
        <>

            <div className="headerA">
                <div className="container">
                    <nav>
                        <div className="logo">
                            <a href="/Home"><img className="LogoPic" src={Logo} alt="Logo" /></a>
                        </div>
                        <ul>
                            <Link to="/Home"><p className="navLinks">{t('Dashboard')}</p></Link>
                            <Link to='/FindTeacher'><p className="navLinks">{t('FindT')}</p></Link>
                        </ul>
                    </nav>
                </ div>
                <div className="">
                    <nav>
                        <ul>
                            <div className="lang-container">
                                <Link to='#' className="navLinks"><LanguageIcons /></Link>
                                <Link to='#' className="navLinks" onClick={toggleDropdown}><ArrowDownIcons /></Link>
                                {isDropdownOpen && (
                                    <div   className="dropdown-menu">
                                        <ul>
                                            <li onClick={() => { changeLanguage('en'); LanguageSelection(fallbackLanguage = i18next.options.resources[0]); }}>English</li>
                                            <li id="LangLi" onClick={() => { changeLanguage('es'); LanguageSelection(fallbackLanguage = i18next.options.resources[1]); }}>Español</li>
                                            <li onClick={() => { changeLanguage('fr'); LanguageSelection(fallbackLanguage = i18next.options.resources[2]); }}>Français</li>
                                        </ul>
                                    </div>
                                    // the default is set as english, need to find a way to change it with each click
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
                <hr className="noShow hr"/>
            <header>
                <div className="noShow" >
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
                <hr className="noShow hr"/>


                    {/* {!user ? null : 
                        
                        <>
                        <li>
                        <div className="logsign">
                        <Link className="textD" to="/" onClick={()=>logout()}>LOGOUT</Link>
                        </div>
                        </li>
                        </>
                    } */}
                    
        </>
    );
}

export default NavPass;