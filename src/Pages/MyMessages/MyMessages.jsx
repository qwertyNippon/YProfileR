import React, { useState } from 'react';
import axios from 'axios';
import Sidebar from './Sidebar';
import MessageArea from './MessageArea';
import StudentDetails from './StudentDetails';
import './MyMessages.css';

function MyMessages() {
    const [data, setData] = useState('');

    const backend = 'http://127.0.0.1:5000';

    const sendData = () => {
        axios.post(`${backend}/api/data`, { message: 'Hello from React' })
            .then(response => {
                setData(response.data.message);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    };

    return (
        <>
            <div className="main-container">
                <Sidebar />
                <MessageArea />
                <StudentDetails />
            </div>
            <div>
                <button onClick={sendData}>Send Data</button>
                <p>Response: {data}</p>
            </div>
        </>

      );
}


export default MyMessages;