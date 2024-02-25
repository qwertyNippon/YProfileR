import React from "react";
import { Link, useNavigate } from "react-router-dom";
// import { styled } from "styled-components";
import { useState } from "react";
import axios from "axios";


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
        <SignUpStyled >

        </SignUpStyled>
    )
}

// const HomeStyled = styled.SignUp`
//     display: flex;
//     align-items: center;
// `;

export default SignUp