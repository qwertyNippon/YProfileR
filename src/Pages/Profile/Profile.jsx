import React from "react";
import './Profile.css'

function Profile() {
    
    return (
        <>
            <header>
                <div class="container">
                    <nav>
                        <div class="logo">
                            <a href="#"><span>UserName</span></a>
                        </div>
                    </nav>
                </div>
            </header>

            <section class="home">
                <div class="container">
                    <div class="home-info">
                        <div class="left">
                            <h3>Hello, I'm</h3>
                            <h1>Yurika Henry</h1>
                            <h4>
                                I am a  <span class="multiple"></span>
                            </h4>
                            <p>
                                insert details Lorem,  ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
                            </p>
                            <div class="btn">
                                <button>Download...</button>
                            </div>
                        </div>
                        <div class="right">
                            <div class="profile">
                                <img src="images/profile.jpg" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Profile