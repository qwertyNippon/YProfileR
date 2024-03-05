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
                    <div className="Login makeCenter">Log in</div>

                    <div className="choose">
                        <Link className=""><a href="#">Sign up as tutor</a></Link>
                        <div className="">or</div>
                        <Link className=""><a href="#">Sign up as a student</a></Link>
                    </div>

                    <div>INSERT GOOGLE AND OTHER LOGINS</div>

                    <div class="parent ">
                        <hr className="grid-hr" />
                        <div className="grid-item">or</div>
                        <hr className="grid-hr" />
                    </div>

                    <div>
                        <div>Email</div>
                        <form action=""></form>
                        <div>Password</div>
                        <form action=""></form>
                        <Link><a href="#">Forgot your password?</a></Link>
                    </div>

                    <button>Log in</button>

                    <div>By clicking Log in or Continue with, you agree to Preply <span>Terms of Use</span> and <span>Privacy Policy</span></div>


                </div>
            </div>
        </>
    )
}

export default Login