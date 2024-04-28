import React, { useEffect, useRef } from "react";
import io from 'socket.io-client';
import Peer from 'peerjs';

function Classroom() {
    const videoGridRef = useRef(null);
    const socket = useRef(io());
    const myPeer = useRef(new Peer(undefined, {
        host: '/Classroom',
        port: '3001'
    }));
    const peers = useRef({});

    useEffect(() => {
        navigator.mediaDevices.getUserMedia({ video: true, audio: true })
        .then(stream => {
            const myVideo = document.createElement('video');
            myVideo.muted = true;
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


    return (
        <>
            <div className="makeCenter">
                <div ref={videoGridRef} className="video-grid"></div>
            </div>
        </>
    )
}

export default Classroom