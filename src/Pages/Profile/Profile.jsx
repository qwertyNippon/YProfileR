import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import LanguageSelection from '../../Components/Language/LanguageSelection';
// import LanguageColumn from '../../Components/Language/LanguageColumn';
import './Profile.css';
import uploadIcon from '../../../src/assets/uploadIcon.png';

function Profile() {

    const { t} = useTranslation()

    // Define state to store user profile data
    const [userData, setUserData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUserData = async () => {
          try {
            const response = await axios.get('/profile'); 
            // Assuming Flask endpoint is '/api/profile' THIS WILL NEED TO BE CHANGED
            setUserData(response.data);
          } catch (error) {
            setError('Error fetching user profile data');
          }
        };
    
        fetchUserData();
      }, []);

    // const LanguageColumn = ({ languages })

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [text, setText] = useState("");
    const [textCertz, setTextCertz] = useState("");
    const [textareaHeight, setTextareaHeight] = useState("63px");
    const [textareaHeightCertz, setTextareaHeightCertz] = useState("63px");

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

      const handleSave = () => {
        // Assuming your backend endpoint is '/saveBio' and you're sending a POST request
        fetch('/profile', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ bio: text, certz: textCertz, firstname: firstName, lastname: lastName }),
        })
        .then(response => {
          if (response.ok) {
            console.log('Bio saved successfully!');
            // You can add further actions here if needed
          } else {
            console.error('Failed to save bio');
          }
        })
        .catch(error => {
          console.error('Error saving bio:', error);
        });
      };

    //   js for pictures upload video 10mins in
    const dropArea = document.getElementById('drop-area');
    const inputFile = document.getElementById('input-file');
    const imageView = document.getElementById('img-view');

    inputFile.addEventListener('change', uploadImage);

    function uploadImage(){
        let imgLink = URL.createObjectURL(inputFile.files[0]);
        imageView.style.backgroundImage = `url(${imgLink})`;
    }   

    return (
        <>
        {/* THIS SECTION IS FOR TELLING THE TEACHER AND THE STUDENT'S PROFILE APART */}
            {/* <div> */}
                {/* {error && <p>{error}</p>} */}
                {/* {userData && ( */}
                    {/* <> */}
                        {/* <h1>Welcome, {userData.username}!</h1> */}
                        {/* <p>You are a {userData.teacher ? 'teacher' : 'student'}.</p> */}
                        {/* Use CSS classes or inline styles based on the user's role */}
                        {/* <div className={userData.teacher ? 'teacher-style' : 'student-style'}> */}
                            {/* Your content here */}
                        {/* </div> */}
                    {/* </> */}
                {/* )} */}
            {/* </div> */}

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

                                <div className="hero">
                                    <label htmlFor="input-file" id='drop-area'>
                                        <input type="file" accept="image/*" id='input-file' hidden/>
                                        <div id="img-view">
                                            <img src={uploadIcon} alt="upload icon" />
                                            <p>Drag and drop or click here <br />to upload an image</p>
                                            <span>Upload any images from desktop</span>
                                        </div>
                                    </label>
                                </div>


                            </div>
                        </div>
                    </div>
                    <button className="SaveBut" onClick={handleSave}>{t('Save')}</button>
                </section>
            </div>
        </>
    )
}

export default Profile