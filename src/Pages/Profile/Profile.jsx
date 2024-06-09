import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import axios from 'axios';
import LanguageSelection from '../../Components/Language/LanguageSelection';
import './Profile.css';
import uploadIcon from '../../../src/assets/uploadIcon.png';

function Profile() {
    const { t } = useTranslation();

    const [userData, setUserData] = useState(null);
    const [error, setError] = useState(null);
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [text, setText] = useState("");
    const [textCertz, setTextCertz] = useState("");
    const [textareaHeight, setTextareaHeight] = useState("63px");
    const [textareaHeightCertz, setTextareaHeightCertz] = useState("63px");
    const [imgLink, setImgLink] = useState(null);
    const [selectedFile, setSelectedFile] = useState(null);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await axios.get('/profile/Profile');
                setUserData(response.data);
            } catch (error) {
                setError('Error fetching user profile data');
            }
        };
    
        fetchUserData();
    }, []);

    const handleChangeFirstName = (e) => {
        setFirstName(e.target.value);
    };

    const handleChangeLastName = (e) => {
        setLastName(e.target.value);
    };

    const handleChange = (event) => {
        setText(event.target.value);
        setTextareaHeight(`${event.target.scrollHeight}px`);
    };

    const handleChangeCertz = (event) => {
        setTextCertz(event.target.value);
        setTextareaHeightCertz(`${event.target.scrollHeight}px`);
    };

    const handleFileChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            setSelectedFile(e.target.files[0]);
            const link = URL.createObjectURL(e.target.files[0]);
            setImgLink(link);
        }
    };

    const handleDrop = (e) => {
        e.preventDefault();
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            setSelectedFile(e.dataTransfer.files[0]);
            const link = URL.createObjectURL(e.dataTransfer.files[0]);
            setImgLink(link);
        }
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    const handleSave = () => {
        const formData = new FormData();
        formData.append('username', firstName); // Change 'firstname' to 'username'
        formData.append('lastname', lastName);
        formData.append('bio', text);
        formData.append('certz', textCertz);
        formData.append('photo', selectedFile);
    
        axios.post('/profile/Profile', formData, { // Change '/profile' to '/profile/Profile'
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        .then(response => {
            console.log('Profile saved successfully!');
        })
        .catch(error => {
            console.error('Error saving profile:', error);
        });
    };
    const { line1, line1a, line2 } = t('upLoadImage');

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
                                        value={firstName}
                                        onChange={handleChangeFirstName}
                                        placeholder={t('FName')}
                                        className="text-input"
                                    />
                                    <input
                                        type="text"
                                        value={lastName}
                                        onChange={handleChangeLastName}
                                        placeholder={t('LName')}
                                        className="text-input"
                                    />
                                    <h3 className="makeCenter">{t('IntroduceYourself')}</h3>
                                    <div className="">
                                        <div>
                                            <textarea className="text-input-Intro"
                                                value={text}
                                                onChange={handleChange}
                                                style={{ height: textareaHeight, overflow: "hidden" }}
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
                                <div className="">
                                    <div>
                                        <textarea className="text-input-Intro"
                                            value={textCertz}
                                            onChange={handleChangeCertz}
                                            style={{ height: textareaHeightCertz, overflow: "hidden" }}
                                            placeholder={t('LstCertz')}
                                        />
                                    </div>
                                </div>

                                <div className="hero">
                                    <div id="drop-area" onDragOver={handleDragOver} onDrop={handleDrop}>
                                        <input type="file" accept="image/*" id="input-file" hidden onChange={handleFileChange} />
                                        <label htmlFor="input-file">
                                            <div id="img-view" style={{ backgroundImage: imgLink ? `url(${imgLink})` : 'none', border: imgLink ? 'none' : '2px dashed #ccc' }}>
                                                {imgLink ? '' : <><img src={uploadIcon} alt="upload icon" /><p>{line1} <br /> {line1a}</p><span>{line2}</span></>}
                                            </div>
                                        </label>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <button className="SaveBut" onClick={handleSave}>{t('Save')}</button>
                </section>
            </div>
        </>
    );
}

export default Profile;
