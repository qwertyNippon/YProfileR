// SignUp.jsx
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import './SignUp.css';

const BASE_URL = 'http://localhost:5000'; // Replace with your Flask backend URL

function SignUp() {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        const vals = {
            email: email,
            username: username,
            password: password,
            confirm_password: confirmPassword,
        };

        axios.post(`${BASE_URL}/register`, JSON.stringify(vals), {
            headers: { "Content-Type": "application/json" }
        })
        .then(function (response) {
            console.log(response);
            navigate('/login');
        })
        .catch(function (error) {
            console.log(error);
        });
    };

    const handleLoginClick = () => {
        navigate('/login');
    };

    return (
        <>
            <div className="makeCenter top">
                <div className="container_login makeCenter">
                    <div className="Login makeCenter space">Sign up</div>

                    <div className="choose ">
                        <Link to='#'>Sign up as tutor</Link>
                        <div className="">or</div>
                        <Link to='#'>Sign up as a student</Link>
                    </div>

                    <div>INSERT GOOGLE AND OTHER LOGINS</div>

                    <div className="parent ">
                        <hr className="grid-hr" />
                        <div className="grid-item">or</div>
                        <hr className="grid-hr" />
                    </div>
                    
                    <form className="login-form" onSubmit={handleSubmit}>
                        <input
                            type="email"
                            placeholder="Email"
                            className="input-field"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <input
                            type="text"
                            placeholder="Username"
                            className="input-field"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            className="input-field"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <input
                            type="password"
                            placeholder="Confirm Password"
                            className="input-field"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                        <button type="submit" className="submit-button">Sign up</button>
                    </form>

                    <div className="bottomText space">
                        By clicking Sign up or Continue with, you agree to Preply 
                        <Link to="#" className="TOS">Terms of Use</Link> and 
                        <Link to="#" className="TOS">Privacy Policy</Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SignUp;
