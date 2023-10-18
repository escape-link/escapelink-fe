import React, { useState } from "react";
import PuzzleOne from "../PuzzleOne/PuzzleOne";
import PuzzleThree from "../../PuzzleThree/PuzzleThree";
import PuzzleTwo from "../PuzzleTwo/PuzzleTwo";
import PuzzleFour from "../PuzzleFour/PuzzleFour";
import PuzzleFive from "../PuzzleFive/PuzzleFive";
import "./Room.css";
import blueBackground from "../../assets/room/blue-bg.png";
import clock from "../../assets/room/clock.png";
import plant from "../../assets/room/plant.png";
import door from "../../assets/room/door.png";
import board from "../../assets/room/board.png";
import radio from "../../assets/room/radio.png";
import lamp from "../../assets/room/lamp.png";
import deskComp from "../../assets/room/desk-comp.png";
import bike from "../../assets/room/bike-front.png";

export default function Room() {
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
    puzzleFive: false
  })
  console.log(winConditions)

  const setPuzzleState = (puzzleNum, isDisabled) => {
    setIsDisabled ({...puzzleNum,[puzzleNum]: isDisabled })
  }

console.log('2',isDisabled.puzzleTwo)
console.log('3',isDisabled.puzzleThree)

  const roomStyle = {
    "--room-bg": lampClicked ? 'none' : `url(${blueBackground})`,
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

  return (
    <article
    className={`room ${lampClicked ? "invert-colors" : ""}`} style={roomStyle}
    >
      <button className={`clock-btn ${isDisabled.puzzleThree ? 'disabled': 'active'}`} onClick={handleClockClick}>
        <img className="clock" src={clock} alt="clock" />
      </button>
      <button className={`plant-btn ${isDisabled.puzzleFour ? 'disabled': 'active'}`}  onClick={handlePlantClick}>
        <img className="plant" src={plant} alt="plant" />
      </button>
      <button className={`bike-btn ${isDisabled.puzzleFive ? 'disabled': 'active'}`}  onClick={handleBikeClick}>
        <img className="bike" src={bike} alt="bike" />
      </button>
      <button className="door-btn">
        <img className="door" src={door} alt="door" />
      </button>
      <button className="board-btn">
        <img className="board" src={board} alt="board" />
      </button>
      <button className={`desk-comp-btn ${isDisabled.puzzleOne ? 'disabled': 'active'}`} onClick={handleDeskCompClick}>
        <img className="desk-comp" src={deskComp} alt="desk" />
      </button>
      <button className="lamp-btn" onClick={handleLampClick}>
        <img className="lamp" src={lamp} alt="lamp" />
      </button>
      <button className={`radio-btn ${isDisabled.puzzleTwo ? 'disabled': 'active'}`} onClick={handleRadioClick}>
        <img className="radio" src={radio} alt="radio" />
      </button>
      {showPuzzleOne && <PuzzleOne isDisabled={isDisabled} setIsDisabled={(isDisabled) => setPuzzleState('puzzleOne', isDisabled)} winConditions={winConditions} setWinConditions={setWinConditions} onClose={handleClosePuzzleOne} />}
      {showPuzzleTwo && <PuzzleTwo isDisabled={isDisabled} setIsDisabled={(isDisabled) => setPuzzleState('puzzleTwo', isDisabled)} winConditions={winConditions} setWinConditions={setWinConditions} onClose={handleClosePuzzleTwo} />}
      {showPuzzleThree && <PuzzleThree isDisabled={isDisabled} setIsDisabled={(isDisabled) => setPuzzleState('puzzleThree', isDisabled)} winConditions={winConditions} setWinConditions={setWinConditions} onClose={handleClosePuzzleThree} />}
      {showPuzzleFour && <PuzzleFour isDisabled={isDisabled} setIsDisabled={(isDisabled) => setPuzzleState('puzzleFour', isDisabled)} winConditions={winConditions} setWinConditions={setWinConditions} onClose={handleClosePuzzleFour} />}
      {showPuzzleFive && <PuzzleFive isDisabled={isDisabled} setIsDisabled={(isDisabled) => setPuzzleState('puzzleFive', isDisabled)} winConditions={winConditions} setWinConditions={setWinConditions} onClose={handleClosePuzzleFive} />}
    </article>
  );
}