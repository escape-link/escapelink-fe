import './Story.css';
import background from '../../assets/big-donut.jpg';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { fetchGameLink } from '../../apiCalls';
import { useState, useEffect } from 'react';
import Leaderboard from '../Leaderboard/Leaderboard';
import Loading from '../Loading/Loading';

export default function Story() {
  const navigate = useNavigate();
  const { displayedRoomName } = useParams();
  const [openLeaderboard, setOpenLeaderboard] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const decodedDisplayedRoomName = encodeURIComponent(displayedRoomName);
  const [copied, setCopied] = useState(false);
  const [gameName, setGameName] = useState(null);
  const [gameData, setGameData] = useState(null);

  function copy() {
    const additionalValue = 'One';
    const updatedUrl = `${window.location.origin}/room${additionalValue}/${decodedDisplayedRoomName}/${gameName}`;

    const el = document.createElement('input');
    el.value = updatedUrl;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  }

  useEffect(() => {
    const getRoomName = async () => {
      try {
        const decodedDisplayedRoomName = encodeURIComponent(displayedRoomName);
        const data = await fetchGameLink(decodedDisplayedRoomName);
        setGameData(data);
        setGameName(data.game_name);
      } catch (err) {
        console.log(`${err.message}`);
      }
    };
    getRoomName();
  }, [displayedRoomName]);

  const startGame = () => {
    try {
      const decodedDisplayedRoomName = encodeURIComponent(displayedRoomName);
      navigate(`/roomOne/${decodedDisplayedRoomName}/${gameData.game_name}`);
    } catch (err) {
      console.log(`${err.message}`);
    }
  };

  const handleLeaderboardClick = () => {
    setOpenLeaderboard(!openLeaderboard);
  };

  useEffect(() => {
    const image = new Image();
    image.src = background;
    image.onload = () => {
      setIsImageLoaded(true);
    };
  }, []);

  return (
    <section
      className="story-body"
      style={{ '--background': `url(${background})` }}>
      {!isImageLoaded ? (
        <Loading />
      ) : (
        <>
          {openLeaderboard && (
            <Leaderboard handleLeaderboardClick={handleLeaderboardClick} />
          )}
          <div className="back-home-container">
            <Link to={'/'} className="back-home">
              Back To Home
            </Link>
          </div>

          <div className="story-and-button">
            <div tabIndex="0" className="story">
              <p>
                You and your team are fringe scientists working on top-secret
                experimental airframes in a Nevada black site for the US Air
                Force. Bob, your eccentric colleague, has gone missing, and
                strange occurrences have been happening in his office.
              </p>
              <br></br>
              <p>
                Bob is a peculiar scientist known for his eccentricity. He's
                been missing for a few days, and unusual sounds and radio
                broadcasts from his office have raised concerns. Your base
                commander initiated a lockdown and access override after Bob
                mysteriously disappeared on Doughnut Friday, a tradition he
                never misses.
              </p>
              <br></br>
              <p>
                Objective: Find clues in Bob's office to uncover his whereabouts
                and the secrets he may have left behind.
              </p>
              <br></br>
              <p>
                Now it's your team's mission to enter Bob's office to find out
                what happened.
              </p>
              <p>Are you ready to begin your escape room adventure?</p>
            </div>
            <button className="start-game" onClick={startGame}>
              Start Game
            </button>

            <button className="copy" onClick={copy}>
              {!copied ? 'Copy Link to Share' : 'Copied!'}
            </button>
          </div>

          <div className="see-leaderboard-container">
            {!openLeaderboard && (
              <button
                className="see-leaderboard"
                onClick={handleLeaderboardClick}>
                View Leaderboard
              </button>
            )}
          </div>
        </>
      )}
    </section>
  );
}
