import React from "react";
import './Profile.css'

function Profile() {
    
    return (
        <>
            <div className='makeCenter'>
                <div className="headerProfile">
                    <div className="container">
                        <nav>
                            <div className="logo">
                                <a href="#"><span>UserName</span></a>
                            </div>
                        </nav>
                    </div>
                </div>

                <section className="home">
                    <div className="container">
                        <div className="home-info">
                            <div className="makeCenter">
                                <h3>Price</h3>
                                <h3>Introduce yourself</h3>
                                <h3>Language experience</h3>
                                <h1>Certificates/Qualifications</h1>
                                <p>qwertyuikmnbvfghnbvfghb</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Profile