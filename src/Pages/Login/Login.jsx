// Login.jsx
import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import './Login.css';
import { UserContext } from '../../context/UserContext';  // Import the UserContext

const BASE_URL = 'http://localhost:5000'; // Replace with your Flask backend URL

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { setUser } = useContext(UserContext);  // Use the UserContext
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const vals = {
            username: username,
            password: password,
        };

        try {
            const response = await axios.post(`${BASE_URL}/login`, vals, {
                headers: { "Content-Type": "application/json" },
            });
            handleData(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    const handleData = (data) => {
        if (data.message === "authenticated") {
            setUser(data.data);
            navigate('/explore');
        } else if (data.message === "username not found") {
            alert('Username not found');
        } else if (data.message === "wrong password") {
            alert('Wrong password');
        }
    };

    return (
        <>
            <div className="makeCenter top">
                <div className="container_login makeCenter">
                    <div className="Login makeCenter space">Log in</div>

                    <div className="choose">
                        <Link to='#'>Sign up as tutor</Link>
                        <div className="">or</div>
                        <Link to='#'>Sign up as a student</Link>
                    </div>

                    <div>INSERT GOOGLE AND OTHER LOGINS</div>

                    <div className="parent">
                        <hr className="grid-hr" />
                        <div className="grid-item">or</div>
                        <hr className="grid-hr" />
                    </div>
                    
                    <form className="login-form" onSubmit={handleSubmit}>
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
                        <button type="submit" className="submit-button">Login</button>
                    </form>

                    <div className="bottomText space">
                        By clicking Log in or Continue with, you agree to Preply 
                        <Link to="#" className="TOS">Terms of Use</Link> and 
                        <Link to="#" className="TOS">Privacy Policy</Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;
