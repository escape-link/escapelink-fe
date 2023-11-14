import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import PuzzleOne from '../PuzzleOne/PuzzleOne';
import PuzzleThree from '../PuzzleThree/PuzzleThree';
import PuzzleTwo from '../PuzzleTwo/PuzzleTwo';
import PuzzleFour from '../PuzzleFour/PuzzleFour';
import PuzzleFive from '../PuzzleFive/PuzzleFive';
import './RoomOne.css';
import blueBackground from '../../assets/room/blue-bg.png';
import clock from '../../assets/room/clock.png';
import plant from '../../assets/room/plant.png';
import door from '../../assets/room/door.png';
import board from '../../assets/room/board.png';
import radio from '../../assets/room/radio.png';
import lamp from '../../assets/room/lamp.png';
import deskComp from '../../assets/room/desk-comp.png';
import bike from '../../assets/room/bike-front.png';
import VictoryPage from '../VictoryPage/VictoryPage';
import Cipher from '../Cipher/Cipher';
import Chat from '../Chat/Chat';
import { createConsumer } from '@rails/actioncable';
import { useParams } from 'react-router-dom';

export default function RoomOne() {
  const [openPopup, setOpenPopup] = useState(null);
  const [lampClicked, setLampClicked] = useState(false);
  const [winConditions, setWinConditions] = useState([]);
  const [isDisabled, setIsDisabled] = useState({
    puzzleOne: false,
    puzzleTwo: false,
    puzzleThree: false,
    puzzleFour: false,
    puzzleFive: false
  });
  const [showVictoryPage, setShowVictoryPage] = useState(false);
  const [isCipherVisible, setIsCipherVisible] = useState(false);
  const { backendData } = useParams();
  const [allMessages, setAllMessages] = useState([]);
  const [subscription, setSubscription] = useState(null);
  const [dataSubscription, setDataSubscription] = useState(null);

  const toggleCipherVisibility = () => {
    setIsCipherVisible(!isCipherVisible);
  };

  useEffect(() => {
    const cable = createConsumer('wss://escapelink-be-42ffc95e6cf7.herokuapp.com/cable');
    const newSubscription = cable.subscriptions.create(
      { channel: 'GameChannel', room: backendData },
      {
        received: (data) => {
          setAllMessages((allMessages) => [
            ...allMessages,
            `${data.nickname}: ${data.message}`
          ]);
        }
      }
    );

    const newDataSubscription = cable.subscriptions.create(
      { channel: 'DataChannel', game_name: backendData },
      {
        received: (data) => {
          if (data.puzzle_identifier === 1) {
            setPuzzleState('puzzleOne');
          }
          if (data.puzzle_identifier === 2) {
            setPuzzleState('puzzleTwo');
          }
          if (data.puzzle_identifier === 3) {
            setPuzzleState('puzzleThree');
          }
          if (data.puzzle_identifier === 4) {
            setPuzzleState('puzzleFour');
          }
          if (data.puzzle_identifier === 5) {
            setPuzzleState('puzzleFive');
          }
          if (data.game_over) {
            setShowVictoryPage(true);
          }
        }
      }
    );

    setDataSubscription(newDataSubscription);
    setSubscription(newSubscription);

    return () => {
      cable.disconnect();
      newSubscription.unsubscribe();
      newDataSubscription.unsubscribe();
    };
  }, [backendData]);

  const puzzleCompleted = (puzzleIdentifier) => {
    dataSubscription.send({
      puzzle_identifier: puzzleIdentifier
    });
  };


  useEffect(() => {
    if (winConditions.length === 5) {
      dataSubscription.send({ game_over: true });
      setShowVictoryPage(true);
    }
  }, [winConditions, dataSubscription]);

  const setPuzzleState = (puzzleNum) => {
    setIsDisabled((prevIsDisabled) => ({
      ...prevIsDisabled,
      [puzzleNum]: true
    }));
  };

  const roomStyle = {
    "--room-bg": lampClicked ? "none" : `url(${blueBackground})`,
  };

  const handlePopupOpen = (popupName) => {
    setOpenPopup(popupName);
  };

  const handlePopupClose = () => {
    setOpenPopup(null);
  };

  const puzzles = [
    { identifier: 'puzzleTwo', image: radio, class: 'radio'},
    { identifier: 'puzzleOne', image: deskComp, class: 'deskComp'},
    { identifier: 'puzzleThree', image: clock, class: 'clock' },
    { identifier: 'puzzleFour', image: plant, class: 'plant' },
    { identifier: 'puzzleFive', image: bike, class: 'bike'},
  ];

  const handlePuzzleClick = (puzzleName) => {
    handlePopupOpen(puzzleName);
  };

  const handleLampClick = () => {
    setLampClicked(!lampClicked);
  };

  return (
    <div>
      {showVictoryPage ? (
        <VictoryPage />
      ) : (
        <article
          className={`room ${lampClicked ? 'invert-colors' : ''}`}
          style={roomStyle}>
             {puzzles.map((puzzle) => (
            <button
              key={puzzle.identifier}
              className={`${puzzle.class}-btn ${
                isDisabled[puzzle.identifier] ? 'disabled' : 'active'
              }`}
              onClick={() => handlePuzzleClick(puzzle.identifier)}
              tabIndex={isDisabled[puzzle.identifier] ? -1 : 0}
            >
              <img
                className={puzzle.class}
                src={puzzle.image}
                alt={puzzle.class}
              />
            </button>
          ))}
          <button className="door-btn" tabIndex={0}>
            <img className="door" src={door} alt="door" />
          </button>
          <button
            className="board-btn"
            onClick={toggleCipherVisibility}
            tabIndex={isCipherVisible ? 0 : -1}>
            <img className="board" src={board} alt="board" />
          </button>
          <button className="lamp-btn" onClick={handleLampClick} tabIndex={0}>
            <img className="lamp" src={lamp} alt="lamp" />
          </button>
          {openPopup === "puzzleOne" && (
            <PuzzleOne
              setIsDisabled={() => setPuzzleState('puzzleOne')}
              winConditions={winConditions}
              setWinConditions={setWinConditions}
              onClose={handlePopupClose}
              puzzleCompleted={puzzleCompleted}
            />
          )}
          {openPopup === "puzzleTwo" && (
            <PuzzleTwo
              setIsDisabled={() => setPuzzleState('puzzleTwo')}
              winConditions={winConditions}
              setWinConditions={setWinConditions}
              onClose={handlePopupClose}
              puzzleCompleted={puzzleCompleted}
            />
          )}
          {openPopup === "puzzleThree" && (
            <PuzzleThree
              setIsDisabled={() => setPuzzleState('puzzleThree')}
              winConditions={winConditions}
              setWinConditions={setWinConditions}
              onClose={handlePopupClose}
              puzzleCompleted={puzzleCompleted}
            />
          )}
          {openPopup === "puzzleFour" && (
            <PuzzleFour
              setIsDisabled={() => setPuzzleState('puzzleFour')}
              winConditions={winConditions}
              setWinConditions={setWinConditions}
              onClose={handlePopupClose}
              puzzleCompleted={puzzleCompleted}
            />
          )}
          {openPopup === "puzzleFive" && (
            <PuzzleFive
              setIsDisabled={() => setPuzzleState('puzzleFive')}
              winConditions={winConditions}
              setWinConditions={setWinConditions}
              onClose={handlePopupClose}
              puzzleCompleted={puzzleCompleted}
            />
          )}
          <Chat
            backendData={backendData}
            allMessages={allMessages}
            subscription={subscription}
          />
          {roomStyle['--room-bg'] === 'none' && (
            <span className="alpha-centauri">⏃⌰⌿⊑⏃ ☊⟒⋏⏁⏃⎍⍀⟟</span>
          )}
        </article>
      )}

      {isCipherVisible && <Cipher onClose={toggleCipherVisibility} />}
    </div>
  );
}

PuzzleOne.propTypes = {
  setIsDisabled: PropTypes.func.isRequired,
  winConditions: PropTypes.array.isRequired,
  setWinConditions: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired
};

PuzzleTwo.propTypes = {
  setIsDisabled: PropTypes.func.isRequired,
  winConditions: PropTypes.array.isRequired,
  setWinConditions: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired
};

PuzzleThree.propTypes = {
  setIsDisabled: PropTypes.func.isRequired,
  winConditions: PropTypes.array.isRequired,
  setWinConditions: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired
};

PuzzleFour.propTypes = {
  setIsDisabled: PropTypes.func.isRequired,
  winConditions: PropTypes.array.isRequired,
  setWinConditions: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired
};

PuzzleFive.propTypes = {
  setIsDisabled: PropTypes.func.isRequired,
  winConditions: PropTypes.array.isRequired,
  setWinConditions: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired
};
