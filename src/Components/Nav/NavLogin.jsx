import React from "react";
import './NavLogin.css'
import Logo from '../../assets/Logo.png'

function NavLogin() {
    
    return (
        < >
            <div className="container">
                <div className="logo">
                    <a href="#"><img className="LogoPic" src={Logo} alt="Logo" /></a>
                </div>
            </div>
        </>
    )
}

export default NavLogin