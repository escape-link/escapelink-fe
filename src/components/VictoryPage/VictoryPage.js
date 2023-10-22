import './VictoryPage.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import background from '../../assets/big-donut.jpg'

export default function VictoryPage() {
  const navigate = useNavigate();

  const handleBackToStoryClick = () => {
    navigate('/');
  };

  return (
    <div className="victory-page" style={{ '--background': `url(${background})` }}>
      <div className='room-one-completion'>
      <h2>Room 1 complete. A portal opens...Bob must be even further away than we thought.</h2>
      <p>Your journey has just begun.</p>
      <button className='back-home' onClick={handleBackToStoryClick}>Home</button>
      </div>
    
    </div>
  );
}

