import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import './Profile.css'

function Profile() {

    const { t} = useTranslation()

    const [text, setText] = useState("");
    const [textareaHeight, setTextareaHeight] = useState("63px");
  
    const handleChange = (event) => {
      setText(event.target.value);
      setTextareaHeight(`${event.target.scrollHeight}px`);
      };

    
    return (
        <>
            <div className='makeCenter'>
                <div className="headerProfile">
                    <div className="container">
                        <nav>
                            <div className="logo">
                                <h1><span>{t('Username')}</span></h1>
                            </div>
                        </nav>
                    </div>
                </div>

                <section className="home">
                    <div className="container">
                        <div className="home-info">
                            <div className="makeCenter">
                                <h3>{t('Price')}</h3>

                                <div className="input-container">
                                    <input
                                        type="text"
                                        placeholder="First Name"
                                        className="text-input"
                                    />
                                    <input
                                        type="text"
                                        placeholder="Last Name"
                                        className="text-input"
                                    />
                                <h3 className="makeCenter">{t('IntroduceYourself')}</h3>
                                    <div className="" >
                                        <div>
                                            <textarea className="text-input-Intro"
                                                value={text}
                                                onChange={handleChange}
                                                style={{ height: textareaHeight, overflow: "hidden"}}
                                                placeholder="Introduce Yourself"
                                            />
                                        </div>
                                    </div>
                                </div>
                                
                                <h3>{t('LanguageExperience')}</h3>

                                <h5 className="addLan">add another language</h5>
                                <div>
                                    <div></div>
                                    <div></div>
                                </div>
                                <h1>{t('CertificatesQualifications')}</h1>
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