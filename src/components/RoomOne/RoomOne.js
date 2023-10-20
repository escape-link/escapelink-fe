import React, { useState, useEffect } from "react";
import PuzzleOne from "../PuzzleOne/PuzzleOne";
import PuzzleThree from "../../PuzzleThree/PuzzleThree";
import PuzzleTwo from "../PuzzleTwo/PuzzleTwo";
import PuzzleFour from "../PuzzleFour/PuzzleFour";
import PuzzleFive from "../PuzzleFive/PuzzleFive";
import "./RoomOne.css";
import blueBackground from "../../assets/room/blue-bg.png";
import clock from "../../assets/room/clock.png";
import plant from "../../assets/room/plant.png";
import door from "../../assets/room/door.png";
import board from "../../assets/room/board.png";
import radio from "../../assets/room/radio.png";
import lamp from "../../assets/room/lamp.png";
import deskComp from "../../assets/room/desk-comp.png";
import bike from "../../assets/room/bike-front.png";
import VictoryPage from "../VictoryPage/VictoryPage";
import RoomHeader from "../RoomHeader/RoomHeader";
import Cipher from "../Cipher/Cipher";
import Chat from "../Chat/Chat";
// import { useLocation } from "react-router-dom";
import { createConsumer } from "@rails/actioncable";
import { useParams } from "react-router-dom";

export default function RoomOne() {
  // const location= useLocation();
  // const allMessages = location.state.allMessages;
  // const subscription = location.state.subscription;
  const [showPuzzleOne, setShowPuzzleOne] = useState(false);
  const [showPuzzleTwo, setShowPuzzleTwo] = useState(false);
  const [showPuzzleThree, setShowPuzzleThree] = useState(false);
  const [showPuzzleFour, setShowPuzzleFour] = useState(false);
  const [showPuzzleFive, setShowPuzzleFive] = useState(false);
  const [lampClicked, setLampClicked] = useState(false);
  const [winConditions, setWinConditions] = useState([]);
  const [isDisabled, setIsDisabled] = useState({
    puzzleOne: false,
    puzzleTwo: false,
    puzzleThree: false,
    puzzleFour: false,
    puzzleFive: false,
  });
  const [showVictoryPage, setShowVictoryPage] = useState(false);
  const [isCipherVisible, setIsCipherVisible] = useState(false);
  const { gameName } = useParams();
  const [allMessages, setAllMessages] = useState([]);
  const [subscription, setSubscription] = useState(null);
  const [dataSubscription, setDataSubscription] = useState(null); // New State for DataChannel subscription


  const toggleCipherVisibility = () => {
    setIsCipherVisible(!isCipherVisible);
  };


  useEffect(() => {
    const cable = createConsumer(
      'ws://localhost:3000/cable'
      // 'wss://escapelink-be-42ffc95e6cf7.herokuapp.com/cable'
      )
    const newSubscription = cable.subscriptions.create(
      {channel: 'GameChannel', room: gameName},
      {
        received: data => {
          setAllMessages(allMessages => [...allMessages,`${data.nickname}: ${data.message}`])
        }
      }
    )
    setSubscription(newSubscription)
    return () => {
      cable.disconnect()
      newSubscription.unsubscribe()
    }
  }, [gameName])

  useEffect(() => {
    const cable = createConsumer(
      'ws://localhost:3000/cable'
      // 'wss://escapelink-be-42ffc95e6cf7.herokuapp.com/cable'
    );
    const newDataSubscription = cable.subscriptions.create(
      { channel: 'DataChannel', game_name: gameName },
      {
        received: data => {
          // Handle data from backend here
          console.log('Received data from DataChannel:', data);
        }
      }
    );
    setDataSubscription(newDataSubscription);

    return () => {
      cable.disconnect();
      newDataSubscription.unsubscribe();
    };
  }, [gameName]);


  useEffect(() => {
    if (winConditions.length === 5) {
      setShowVictoryPage(true);
    }
  }, [winConditions]);

  const setPuzzleState = (puzzleNum) => {
    setIsDisabled((prevIsDisabled) => ({ ...prevIsDisabled, [puzzleNum]: true }));
  };

  const roomStyle = {
    "--room-bg": lampClicked ? "none" : `url(${blueBackground})`,
  };

  const handleClockClick = () => {
    setShowPuzzleThree(true);
  };
  const handleClosePuzzleThree = () => {
    setShowPuzzleThree(false);
  };

  const handleDeskCompClick = () => {
    setShowPuzzleOne(true);
  };
  const handleClosePuzzleOne = () => {
    setShowPuzzleOne(false);
  };
  const handleRadioClick = () => {
    setShowPuzzleTwo(true);
  };
  const handleClosePuzzleTwo = () => {
    setShowPuzzleTwo(false);
  };
  const handlePlantClick = () => {
    setShowPuzzleFour(true);
  };
  const handleClosePuzzleFour = () => {
    setShowPuzzleFour(false);
  };
  const handleBikeClick = () => {
    setShowPuzzleFive(true);
  };
  const handleClosePuzzleFive = () => {
    setShowPuzzleFive(false);
  };
  const handleLampClick = () => {
    setLampClicked(!lampClicked);
  };

    // New function to send puzzle completion info to DataChannel
    const puzzleCompleted = (puzzleIdentifier) => {
      dataSubscription.send({ puzzle_identifier: puzzleIdentifier });
    };

    // New function to send game over info to DataChannel
    const gameOver = () => {
      dataSubscription.send({ game_over: true });
    };

  return (
    <div>
      <RoomHeader />
      {showVictoryPage ? (
        <VictoryPage />
      ) : (
        <article
          className={`room ${lampClicked ? "invert-colors" : ""}`}
          style={roomStyle}
        >
          <button
            className={`clock-btn ${
              isDisabled.puzzleThree ? "disabled" : "active"
            }`}
            onClick={handleClockClick}
            tabIndex={isDisabled.puzzleThree ? -1 : 0}
          >
            <img className="clock" src={clock} alt="clock" />
          </button>
          <button
            className={`plant-btn ${
              isDisabled.puzzleFour ? "disabled" : "active"
            }`}
            onClick={handlePlantClick}
            tabIndex={isDisabled.puzzleFour ? -1 : 0}
          >
            <img className="plant" src={plant} alt="plant" />
          </button>
          <button
            className={`bike-btn ${
              isDisabled.puzzleFive ? "disabled" : "active"
            }`}
            onClick={handleBikeClick}
            tabIndex={isDisabled.puzzleFive ? -1 : 0}
          >
            <img className="bike" src={bike} alt="bike" />
          </button>
          <button
            className="door-btn"
            tabIndex={0}
          >
            <img className="door" src={door} alt="door" />
          </button>
          <button
            className="board-btn"
            onClick={toggleCipherVisibility}
            tabIndex={isCipherVisible ? 0 : -1}
          >
            <img className="board" src={board} alt="board" />
          </button>
          <button
            className={`desk-comp-btn ${
              isDisabled.puzzleOne ? "disabled" : "active"
            }`}
            onClick={handleDeskCompClick}
            tabIndex={0}
          >
            <img className="desk-comp" src={deskComp} alt="desk" />
          </button>
          <button
            className="lamp-btn"
            onClick={handleLampClick}
            tabIndex={0}
          >
            <img className="lamp" src={lamp} alt="lamp" />
          </button>
          <button
            className={`radio-btn ${
              isDisabled.puzzleTwo ? "disabled" : "active"
            }`}
            onClick={handleRadioClick}
            tabIndex={isDisabled.puzzleTwo ? -1 : 0}
          >
            <img className="radio" src={radio} alt="radio" />
          </button>
          {showPuzzleOne && (
            <PuzzleOne
              setIsDisabled={() => setPuzzleState("puzzleOne")}
              winConditions={winConditions}
              setWinConditions={setWinConditions}
              onClose={handleClosePuzzleOne}
            />
          )}
          {showPuzzleTwo && (
            <PuzzleTwo
              dataSubscription={dataSubscription} // New Prop
              setIsDisabled={() => setPuzzleState("puzzleTwo")}
              winConditions={winConditions}
              setWinConditions={setWinConditions}
              onClose={handleClosePuzzleTwo}
            />
          )}
          {showPuzzleThree && (
            <PuzzleThree
              setIsDisabled={() => setPuzzleState("puzzleThree")}
              winConditions={winConditions}
              setWinConditions={setWinConditions}
              onClose={handleClosePuzzleThree}
            />
          )}
          {showPuzzleFour && (
            <PuzzleFour
              setIsDisabled={() => setPuzzleState("puzzleFour")}
              winConditions={winConditions}
              setWinConditions={setWinConditions}
              onClose={handleClosePuzzleFour}
            />
          )}
          {showPuzzleFive && (
            <PuzzleFive
              setIsDisabled={() => setPuzzleState("puzzleFive")}
              winConditions={winConditions}
              setWinConditions={setWinConditions}
              onClose={handleClosePuzzleFive}
            />
          )}
          <Chat gameName={gameName} allMessages={allMessages} subscription={subscription}/>
        </article>
      )}

      {isCipherVisible && <Cipher onClose={toggleCipherVisibility} />}
    </div>
  );
}
