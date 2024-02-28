import React from "react";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { DataContext } from "/Users/orlan/OneDrive/Documents/PostCodingTemple/OnlineLanguagePro/YProfileR/YuriProfileReact/src/context/DataProvider";
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
                <header>
                    <div className="container">
                        <nav>
                            <div className="logo">
                                <a href="#"><span>Logo</span></a>
                            </div>
                            <ul>
                                <Link><a href="{{ url_for('home') }}">Dashboard</a></Link>
                                <Link><a href="#">Find a Teacher</a></Link>
                                <Link><a href="#">recommend to a friend</a></Link>
                                <Link><a href="#">icon</a></Link>
                            </ul>
                            <hr />
                            <ul>
                                <Link><a href="#">messages</a></Link>
                                <Link><a href="#">my lessons</a></Link>
                                <Link><a href="#">classroom</a></Link>
                                <Link><a href="#">calendar</a></Link>
                                <Link><a href="#">statistics</a></Link>
                                <Link><a href="#">my profile</a></Link>
                                <Link><a href="#">settings</a></Link>
                                <Link><a href="#">community</a></Link>
                            </ul>
                            <hr />
                        </nav>
                    </div>
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