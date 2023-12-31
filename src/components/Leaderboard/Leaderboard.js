import { useEffect, useRef, useState } from 'react';
import './Leaderboard.css';
import { fetchLeaderboard } from '../../apiCalls';
import Loading from '../Loading/Loading';

export default function Leaderboard({ handleLeaderboardClick }) {
  const [scores, setScores] = useState([]);
  const modalRef = useRef();
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if (modalRef.current) {
      modalRef.current.focus();
    }
  }, []);

  useEffect(() => {
    setIsLoading(false)
    const getLeaderboard = async () => {
      setIsLoading(true)
      try {
        const leaderboardData = await fetchLeaderboard();
        setScores(leaderboardData);
      } catch (err) {
        console.log(err);
      }
      setIsLoading(false)
    };
    getLeaderboard();
  }, []);

  const leaderboardScores = scores
    .sort((a, b) => a.time_seconds - b.time_seconds)
    .map((score, index) => {
      const minutes = Math.floor(score.time_seconds / 60);
      const seconds = score.time_seconds % 60;

      return (
        <li key={score.id} tabIndex={0}>
          <div>{index + 1}</div>
          <div>{score.game_name}</div>
          <div>
            {minutes} minutes {seconds} seconds
          </div>
        </li>
      );
    });

  return ( 
  
    <div tabIndex="-1" ref={modalRef}  className={`leaderboard-container${isLoading ? ' loading' : ''}`}>
     {  isLoading ?  <Loading /> :
      <>
      <button
        aria-label="close"
        className="exit"
        onClick={() => handleLeaderboardClick()}>
        X
      </button>
      
      <h1 tabIndex="0" className="leaderboard">
        Leaderboard
      </h1>
      <div tabIndex="0" className="leaderboard-header">
        <div>Place</div>
        <div>Name</div>
        <div>Time</div>
      </div>
      <ol className="leaderboard-list">{leaderboardScores}</ol>
      </>
      }
    </div>

  );
}
