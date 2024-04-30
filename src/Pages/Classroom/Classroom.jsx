import React, { useState, useEffect, useRef } from "react";
import io from 'socket.io-client';
import Peer from 'peerjs';
import axios from 'axios';

function Classroom() {
    const [data, setData] = useState('');
    const [isMuted, setIsMuted] = useState(true);
    const [isCameraOn, setIsCameraOn] = useState(true);
    const [isGridLayout, setIsGridLayout] = useState(true);
    const [cameraStream, setCameraStream] = useState(null);

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

    const videoGridRef = useRef(null);
    const socket = useRef(io());
    const myPeer = useRef(new Peer(undefined, {
        host: '/Classroom',
        port: 'http://127.0.0.1:5000/' // Change port to match Flask backend
    }));
    const peers = useRef({});

    useEffect(() => {
        navigator.mediaDevices.getUserMedia({ video: true, audio: true })
        .then(stream => {
            const myVideo = document.createElement('video');
            // myVideo.muted = true;
            addVideoStream(myVideo, stream);

            myPeer.current.on('call', call => {
                call.answer(stream);
                const video = document.createElement('video');
                call.on('stream', userVideoStream => {
                    addVideoStream(video, userVideoStream);
                });
            });

            socket.current.on('user-connected', userId => {
                connectToNewUser(userId, stream);
            });
        });

        socket.current.on('user-disconnected', userId => {
            if (peers.current[userId]) {
                peers.current[userId].close();
                delete peers.current[userId];
            }
        });

        myPeer.current.on('open', id => {
            socket.current.emit('join-room', ROOM_ID, id);
        });

        if (!isCameraOn) {
            if (cameraStream) {
                cameraStream.getTracks().forEach((track) => track.stop());
                setCameraStream(null);
            }
        } else {
            const getCameraStream = async () => {
                const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
                setCameraStream(stream);
            };

            getCameraStream();
        }
    }, []);

    function addVideoStream(video, stream) {
        video.srcObject = stream;
        video.addEventListener('loadedmetadata', () => {
            video.play();
        });
        videoGridRef.current.appendChild(video);
    }

    function connectToNewUser(userId, stream) {
        const call = myPeer.current.call(userId, stream);
        const video = document.createElement('video');
        call.on('stream', userVideoStream => {
            addVideoStream(video, userVideoStream);
        });
        call.on('close', () => {
            video.remove();
        });

        peers.current[userId] = call;
    }

    function handleEndCall() {
        // Close all peer connections
        Object.values(peers.current).forEach(call => {
            call.close();
        });
        // Remove all video elements from the grid
        while (videoGridRef.current.firstChild) {
            videoGridRef.current.removeChild(videoGridRef.current.firstChild);
        }
    }

    function handleChangeView() {
        // Toggle between grid and single view
        setIsGridLayout(prevState => !prevState);
    }

    function handleAddNewUser() {
        // Implement logic to add new user to the call
    }

    function handleRemoveUser(userId) {
        // Close peer connection with the specified user
        if (peers.current[userId]) {
            peers.current[userId].close();
            delete peers.current[userId];
        }
    }


    function handleToggleMute() {
        // Toggle mute state
        setIsMuted(prevState => !prevState);
        
        // Access the local audio stream and toggle mute
        navigator.mediaDevices.getUserMedia({ audio: true })
        .then(stream => {
            console.log('getUserMedia success');
            const audioTracks = stream.getAudioTracks();
            if (audioTracks.length > 0) {
                audioTracks.forEach(track => {
                    console.log('Track:', track);
                    console.log('Previous mute state:', track.enabled);
                    track.enabled = !isMuted; // Toggle mute state for each audio track
                    console.log('New mute state:', track.enabled);
                });
            }
        })
        .catch(error => {
            console.error('Error toggling mute:', error);
        });
    }
    

    function handleToggleCamera() {
        console.log('Attempting to toggle camera...');
        navigator.mediaDevices.getUserMedia({ video: true, audio: true })
        .then(stream => {
            console.log('getUserMedia success');
            const videoTracks = stream.getVideoTracks();
            if (videoTracks.length > 0) {
                console.log('Video tracks found:', videoTracks);
                videoTracks[0].enabled = !isCameraOn; // Toggle the camera state
                setIsCameraOn(prevState => !prevState); // Update the camera state
                console.log('Camera state toggled successfully');
            }
        })
        .catch(error => {
            console.error('Error toggling camera:', error);
        });
    }



    return (
        <>
            <div className="makeCenter">
                <div ref={videoGridRef} className={`video-grid ${isGridLayout ? 'grid-layout' : 'single-layout'}`}></div>
                <div className="buttons-container">
                    <button onClick={handleChangeView}>{isGridLayout ? "Switch to Single View" : "Switch to Grid View"}</button>
                    <button onClick={handleAddNewUser}>Add New User</button>
                    <button onClick={() => handleRemoveUser(userId)}>Remove User</button>
                    <button onClick={handleToggleMute}>{!isMuted ? "Unmute" : "Mute"}</button>
                    <button onClick={handleToggleCamera}>{isCameraOn ? "Turn Off Camera" : "Turn On Camera"}</button>
                    <button onClick={handleEndCall}>End Call</button>
                </div>
            </div>
            <div>
                <button onClick={sendData}>Send Data</button>
                <p>Response: {data}</p>
            </div>
        </>
    )
}

export default Classroom;
