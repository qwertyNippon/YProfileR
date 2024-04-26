import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import LanguageSelection from '../../Components/Language/LanguageSelection';
// import LanguageColumn from '../../Components/Language/LanguageColumn';
import './Profile.css'

function Profile() {

    const { t} = useTranslation()

    // const LanguageColumn = ({ languages })

    const [text, setText] = useState("");
    const [textCertz, setTextCertz] = useState("");
    const [textareaHeight, setTextareaHeight] = useState("63px");
    const [textareaHeightCertz, setTextareaHeightCertz] = useState("63px");
  
    const handleChange = (event) => {
      setText(event.target.value);
      setTextareaHeight(`${event.target.scrollHeight}px`);
      };

    const handleChangeCertz = (event) => {
      setTextCertz(event.target.value);
      setTextareaHeightCertz(`${event.target.scrollHeight}px`);
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
                                        placeholder={t('FName')}
                                        className="text-input"
                                    />
                                    <input
                                        type="text"
                                        placeholder={t('LName')}
                                        className="text-input"
                                    />
                                <h3 className="makeCenter">{t('IntroduceYourself')}</h3>
                                    <div className="" >
                                        <div>
                                            <textarea className="text-input-Intro"
                                                value={text}
                                                onChange={handleChange}
                                                style={{ height: textareaHeight, overflow: "hidden"}}
                                                placeholder={t('IntroduceYourself')}
                                            />
                                        </div>
                                    </div>
                                </div>
                                
                                <h3>{t('LanguageExperience')}</h3>
                                <LanguageSelection />

                                <div>
                                    <div></div>
                                    <div></div>
                                </div>
                                <h3>{t('CertificatesQualifications')}</h3>
                                <div className="" >
                                        <div>
                                            <textarea className="text-input-Intro"
                                                value={textCertz}
                                                onChange={handleChangeCertz}
                                                style={{ height: textareaHeightCertz, overflow: "hidden"}}
                                                placeholder={t('LstCertz')}
                                            />
                                        </div>
                                    </div>
                                {/* <LanguageDisplay /> */}




                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Profile