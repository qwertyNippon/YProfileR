import React from "react";
import { styled } from "styled-components";

function Button() {
    
    return (
        <ButtonStyled >
            <header>
                <div class="container">
                    <nav>
                        <div class="logo">
                            <a href="#"><span>Yuri</span> Japan</a>
                        </div>
                        <ul>
                            <li><a href="https://yport.onrender.com/">Home</a></li>
                            <li><a href="#">Profile</a></li>
                            <li><a href="#">Courses</a></li>
                            <li><a href="#">Contact</a></li>
                            <li><a href="#">FAQ</a></li>
                        </ul>
                        <button class="hamburger">
                            <div class="bar"></div>
                        </button>
                    </nav>
                </div>
            </header>
        </ButtonStyled>
    )
}

const ButtonStyled = styled.button`
    display: flex;
    align-items: center;
`;

export default Button