import React from "react";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { DataContext } from "/Users/orlan/OneDrive/Documents/PostCodingTemple/OnlineLanguagePro/YProfileR/YuriProfileReact/src/context/DataProvider";
import Icons from '../Icons/Profile_icons';
import './NavPass.css';
import Logo from '../../assets/Logo.png'

function NavPass() {
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

    const logout = () => {
        setUser(null)
      }

    return (
        <>

            <div className="headerA">
                <div className="container">
                    <nav>
                        <div className="logo">
                            <a href="#"><img className="LogoPic" src={Logo} alt="Logo" /></a>
                        </div>
                        <ul>
                            <Link to="{{ url_for('home') }}"><p className="navLinks">Dashboard</p></Link>
                            <Link to='#'><p className="navLinks">Find a Teacher</p></Link>
                        </ul>
                    </nav>
                </ div>
                <div className="">
                    <nav>
                        <ul>
                            <span className="noShow">
                                <button className="friendButt"><Link to='#' className="navLinks">refer a friend</Link></button>
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
                                <button><Link to='#'>messages</Link></button>
                            </div>
                            <div className="selectOptions">
                                <button><Link to='#'>my lessons</Link></button>
                            </div>
                            <div className="selectOptions">
                                <button><Link to='/Classroom'>classroom</Link></button>
                            </div>
                            <div className="selectOptions">
                                <button><Link to='/Calendar'>calendar</Link></button>
                            </div>
                            <div className="selectOptions">
                                <button><Link to='#'>statistics</Link></button>
                            </div>
                            <div className="selectOptions">
                                <button><Link to='#'>my profile</Link></button>
                            </div>
                            <div className="selectOptions">
                                <button><Link to='#'>settings</Link></button>
                            </div>
                            <div className="selectOptions">
                                <button><Link to='#'>community</Link></button>
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