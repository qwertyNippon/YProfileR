import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState, createContext, useContext } from "react";
import axios from "axios";
import './Login.css'

const UserContext = createContext();

function Login() {
    // const [userName, setUserName] = useState('');
    // const [password, setPassword] = useState('');
    // const { user, setUser } = useContext(DataContext);
    // const navigate = useNavigate()

    // function backTo(){
    //     navigate('/Signup')
    // }

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     const form = e.target;
    //     console.log(form);
    //     let vals = {};
    //     vals['username']= e.target[0].value;
    //     vals['pass'] = e.target[1].value;
    //     console.log(vals);
    //     const response = await axios.post(`${BASE_URL}/login`, JSON.stringify(vals), {
    //         headers: { "Content-Type": "application/json" },
    //     }
    //     )
    //     .then((response) => handleData(response.data))

    // }
    //     const handleData = (data) => {
    //         if (data.message === "authenticated") {
    //                 setUser(data.data);
                    
    //             console.log(data)
    //             navigate('/explore')
                    
    //     } else if (data.message === "username not found"){
    //          alert('username not found')
    //     }
    // }
    return (
        < >
            <div className="makeCenter top">
                <div className="container_login makeCenter">
                    <div className="Login makeCenter space">Log in</div>

                    <div className="choose ">
                        <Link to='#'>Sign up as tutor</Link>
                        <div className="">or</div>
                        <Link to='#'>Sign up as a student</Link>
                    </div>

                    <div>INSERT GOOGLE AND OTHER LOGINS</div>

                    <div class="parent ">
                        <hr className="grid-hr" />
                        <div className="grid-item">or</div>
                        <hr className="grid-hr" />
                    </div>
                    
                    <div className="login-form">
                        {/* <input type="email" placeholder="Email" className="input-field" /> */}
                        <input type="text" placeholder="Username" className="input-field" />
                        <input type="password" placeholder="Password" className="input-field" />
                        <button type="submit" className="submit-button">Login</button>
                    </div>

                    <div className="bottomText space">By clicking Log in or Continue with, you agree to Preply <Link><a href="#" className="TOS">Terms of Use</a></Link> and <Link><a href="#" className="TOS">Privacy Policy</a></Link></div>


                </div>
            </div>
        </>
    )
}

export default Login