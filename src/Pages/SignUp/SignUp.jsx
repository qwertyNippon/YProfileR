import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import './SignUp.css'


function SignUp() {
    const [email, setEmail] = useState()
    const [userName, setUserName] = useState()
    const [password, setPassword] = useState()

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        console.log(form);
        let vals = {};
        vals['email']= e.target[0].value;
        vals['username']= e.target[1].value;
        vals['pass'] = e.target[2].value;
        console.log(vals);
        axios.post(`${BASE_URL}/signup`, JSON.stringify(vals), {
            // when sight goes live the above address needs to change
            headers: { "Content-Type": "application/json" }
        }
        )
        .then(function (response) {
            // console.log(response);
            navi('/login')
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    return (
        < >
            <div className="makeCenter top">
                <div className="container_login makeCenter">
                    <div className="Login makeCenter space">Sign up</div>

                    <div className="choose ">
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
                    
                    <div className="login-form">
                        <input type="email" placeholder="Email" className="input-field" />
                        <input type="text" placeholder="Username" className="input-field" />
                        <input type="password" placeholder="Password" className="input-field" />
                        <input type="password" placeholder="Confirm Password" className="input-field" />
                        <button type="submit" className="submit-button">Login</button>
                    </div>

                    <div className="bottomText space">By clicking Log in or Continue with, you agree to Preply <Link><a href="#" className="TOS">Terms of Use</a></Link> and <Link><a href="#" className="TOS">Privacy Policy</a></Link></div>


                </div>
            </div>
        </>
    )
}

export default SignUp