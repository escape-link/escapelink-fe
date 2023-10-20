import React from 'react';
import './LandingPage.css';
import { useNavigate } from 'react-router-dom';

export default function LandingPage() {
  const navigate = useNavigate();
  let displayedRoomName = ''; // This is the variable you wanted to set.

  const goToRoom = (roomName) => {
    displayedRoomName = roomName;
    navigate(`/${displayedRoomName}`);
  };

  return (
    <div className="landing-page">
      Welcome to EscapeLink! Choose your room
      <div className="buttons">
        <button onClick={() => goToRoom('wheres-bob')} className="Room-One">Alien Escape!</button>
        <button>Coming Soon</button>
        <button>Coming Soon</button>
        <button>Coming Soon</button>
        <button>Coming Soon</button>
      </div>
    </div>
  );
}






