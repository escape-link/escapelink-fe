import './VictoryPage.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function VictoryPage() {
  const navigate = useNavigate();

  const handleBackToStoryClick = () => {
    navigate('/');
  };

  return (
    <div className="victory-page">
      <h1>Room 1 complete. A portal opens...Bob must be even further away than we thought.</h1>
      <p>Your journey has just begun.</p>
      <button onClick={handleBackToStoryClick}>Home</button>
    </div>
  );
}

