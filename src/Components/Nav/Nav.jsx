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
                            </ul>
                            <hr />
                            <ul>
                                <Link><a href="#">Profile</a></Link>
                                <Link><a href="#">Courses</a></Link>
                                <Link><a href="#">Contact</a></Link>
                                <Link><a href="#">FAQ</a></Link>
                                <>
                                    <Link><a href="https://yport.onrender.com/">YuriPro</a></Link>

                                </>

                            </ul>
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