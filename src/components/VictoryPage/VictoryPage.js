import './VictoryPage.css';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import background from '../../assets/big-donut.jpg';
import Leaderboard from '../Leaderboard/Leaderboard';

export default function VictoryPage() {
  const navigate = useNavigate();
  const [openLeaderboard, setOpenLeaderboard] = useState(false);

  const handleBackToStoryClick = () => {
    navigate('/');
  };

  const handleLeaderboardClick = () => {
    setOpenLeaderboard(!openLeaderboard);
  };

  return (
    <div
      className="victory-page"
      style={{ '--background': `url(${background})` }}>
      {openLeaderboard && (
        <Leaderboard handleLeaderboardClick={handleLeaderboardClick} />
      )}
      <div tabIndex="0" className="room-one-completion">
        <h1>
          Room 1 complete. A portal opens...Bob must be even further away than
          we thought.
        </h1>
        <p>Your journey has just begun.</p>
        <button className="back-home" onClick={handleBackToStoryClick}>
          Home
        </button>
        {!openLeaderboard && (
          <button className="see-leaderboard" onClick={handleLeaderboardClick}>
            View Leaderboard
          </button>
        )}
      </div>
    </div>
  );
}
