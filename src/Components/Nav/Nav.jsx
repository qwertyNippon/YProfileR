import React from "react";
import { styled } from "styled-components";
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
        THIS IS NAV
        </>
            // <header>
            //     <div className="container">
            //         <nav>
            //             <div className="logo">
            //                 <a href="#"><span>Logo</span></a>
            //             </div>
            //             <ul>
            //                 <Link><a href="{{ url_for('home') }}">Dashboard</a></Link>
            //                 <Link><a href="#">Find a Teacher</a></Link>
            //             </ul>
            //             <hr />
            //             <ul>
            //                 <Link><a href="#">Profile</a></Link>
            //                 <Link><a href="#">Courses</a></Link>
            //                 <Link><a href="#">Contact</a></Link>
            //                 <Link><a href="#">FAQ</a></Link>
            //                 {user ? 
            //                 <>
            //                 <Link><a href="https://yport.onrender.com/">Home</a></Link>
                            
            //                 </>
            //                 : null}
                            
            //                 {!user ? null :

            //                     <>
            //                     <li>
            //                         <div className="logsign">
            //                         <Link className="textD" to="/" onClick={()=>logout()}>LOGOUT</Link>
            //                         </div>
            //                     </li>
            //                     </>
            //                     }                        
            //             </ul>
                        // {/* <Nav className="hamburger">
                        //     <div className="bar"></div>
                        // </Nav> */}
            //         </nav>
            //     </div>
            // </header>
    );
}

// const NavStyled = styled.Nav`
// .container {
//     max-width: 1250px;
//     width: 100%;
//     margin: 0 auto;
// }

// header {
//     background: var(--bg-color);
//     height: 90px;
//     display: flex;
//     align-items: center;
//     justify-content: center;
// }

// nav {
//     display: flex;
//     align-items: center;
//     justify-content: space-between;
// }

// nav .logo {
//     z-index: 1;
// }

// nav .logo a {
//     text-decoration: none;
//     font-size: 32px;
//     font-weight: 600;
//     color: var(--white);
// }

// nav .logo a span {
//     color: var(--text-color);
// }

// nav ul {
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     gap: 35px;
//     font-size: 18px;
//     list-style: none;
//     z-index: 1;
// }

// nav ul li a {
//     text-decoration: none;
//     color: var(--white);
//     transition: 0.4s ease;
// }

// nav ul li a:hover {
//     color: var(--text-color);
// }

// nav .hamburger {
//     position: relative;
//     width: 30px;
//     cursor: pointer;
//     appearance: none;
//     background: none;
//     outline: none;
//     border: none;
//     display: none;
//     scale: 0.8;
// }

// nav .hamburger .bar,
// nav .hamburger::after,
// nav .hamburger::before {
//     content: '';
//     display: block;
//     width: 100%;
//     height: 3px;
//     background: var(--white);
//     margin: 6px 0;
//     transition: 0.4s;
// }

// nav .hamburger.active::before {
//     transform: rotate(-45deg) translate(-8px, 5px);
// }

// nav .hamburger.active::after {
//     transform: rotate(45deg) translate(-8px, -5px);
// }

// nav .hamburger.active .bar {
//     opacity: 0;
// }
// `;

export default Nav;