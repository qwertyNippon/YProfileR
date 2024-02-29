import React from "react";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { DataContext } from "/Users/orlan/OneDrive/Documents/PostCodingTemple/OnlineLanguagePro/YProfileR/YuriProfileReact/src/context/DataProvider";
import Icons from '../Icons/Profile_icons';
import './Nav.css'

function Nav() {
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
            {/* {user ? */}
            <header1>
                <div className="container">
                    <nav>
                        <div className="logo">
                            <a href="#"><span>Logo</span></a>
                        </div>
                        <ul>

                                <Link><a href="{{ url_for('home') }}"><p className="navLinks">Dashboard</p></a></Link>
                            
                            <Link><a href="#"><p className="navLinks">Find a Teacher</p></a></Link>
                        </ul>
                    </nav>
                </ div>
                <div className="">
                    <nav>
                        <ul>
                            <span className="">
                                <button className="friendButt"><Link><a className="navLinks" href="#">refer a friend</a></Link></button>
                            </span> 
                            <Link><a className="navLinks" href="#"><Icons /></a></Link>
                        </ul>
                    </nav>
                </div>
            </ header1>
                    <hr />
            <header>
                <div className="" >
                    <nav>
                        <ul>
                            <div className="selectOptions">
                                <button><Link><a href="#">messages</a></Link></button>
                            </div>
                            <div className="selectOptions">
                                <button><Link><a href="#">my lessons</a></Link></button>
                            </div>
                            <div className="selectOptions">
                                <button><Link><a href="#">classroom</a></Link></button>
                            </div>
                            <div className="selectOptions">
                                <button><Link><a href="#">calendar</a></Link></button>
                            </div>
                            <div className="selectOptions">
                                <button><Link><a href="#">statistics</a></Link></button>
                            </div>
                            <div className="selectOptions">
                                <button><Link><a href="#">my profile</a></Link></button>
                            </div>
                            <div className="selectOptions">
                                <button><Link><a href="#">settings</a></Link></button>
                            </div>
                            <div className="selectOptions">
                                <button><Link><a href="#">community</a></Link></button>
                            </div>
                        </ul>
                    </nav>
                </div>
                <hr />
            </header>
                {/* : null}  */}


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

export default Nav;