import React from "react";
import { useLocation } from 'react-router-dom';
import './Footer.css'

function Footer() {
    
    const location = useLocation();
    const isHome = location.pathname === '/Home';

    return (
        <>
            <footer className= {isHome ? "footer-home" : "footer"} id="FAQ">
                
                <hr className="hr"/>

                <div className="">
                    <div className="row">
                        <div className="">
                            <p className="makeCenter">
                                Copyright &copy; 2024 All Rights Reserved by
                                <div className="column space">
                                    <a href="https://yurikaclasses.onrender.com/" target="_blank">YURI JAPAN</a>
                                    &nbsp;&nbsp;&nbsp;
                                    <a href="https://www.instagram.com/yuri_japan_japanese_education_?igsh=anRsM3YweG43cjNx&utm_source=qr&fbclid=IwAR0KfRjanxLNF1PD7HV5bnSmivmAm_1IQTiuo4qXe3cZfcIVxZZPGVf3_AY" target="_blank" class="fa-brands fa-instagram"></a>
                                    &nbsp;&nbsp;&nbsp;
                                    <a href="https://www.youtube.com/@YURIJAPAN.JapaneseEducation" target="_blank" class="fa-brands fa-youtube"></a>
                                </div>
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer