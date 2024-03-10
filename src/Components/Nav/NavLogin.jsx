import React from "react";
import { Link } from "react-router-dom";
import './NavLogin.css'
import Logo from '../../assets/Logo.png'

function NavLogin() {
    
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
                    <button className="friendButt log_butt_right"><Link to="/login"><i className="fa-solid fa-arrow-right-to-bracket"></i> Log in</Link></button>
                </div>
            </div>
            <hr />
        </>
    )
}

export default NavLogin