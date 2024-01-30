import React from "react";
import { Link, useNavigate } from "react-router-dom";
// import { styled } from "styled-components";
import { useState, createContext, useContext } from "react";
// import { DataContext } from "../context/DataProvider";
import axios from "axios";

const UserContext = createContext();

function Login() {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const { user, setUser } = useContext(DataContext);
    const navigate = useNavigate()

    function backTo(){
        navigate('/Signup')
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        console.log(form);
        let vals = {};
        vals['username']= e.target[0].value;
        vals['pass'] = e.target[1].value;
        console.log(vals);
        const response = await axios.post('http://127.0.0.1:5000/login', JSON.stringify(vals), {
            headers: { "Content-Type": "application/json" },
        }
        )
        .then((response) => handleData(response.data))

    }
        const handleData = (data) => {
            if (data.message === "authenticated") {
                    setUser(data.data);
                    
                console.log(data)
                navigate('/explore')
                    
        } else if (data.message === "username not found"){
             alert('username not found')
        }
    }
    return (
        <LoginStyled >

        </LoginStyled>
    )
}

// const LoginStyled = styled.Login`
//     display: flex;
//     align-items: center;
// `;

export default Login