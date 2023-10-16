import React, { useState } from "react";
import PuzzleOne from "../PuzzleOne/PuzzleOne";
import PuzzleTwo from "../PuzzleTwo/PuzzleTwo";
import PuzzleFour from "../PuzzleFour/PuzzleFour";
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
  const [showPuzzleFour, setShowPuzzleFour] = useState(false);

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

  return (
    <article className="room" style={{ "--room-bg": `url(${blueBackground})` }}>
      <button className="clock-btn">
        <img className="clock" src={clock} alt="clock" />
      </button>
      <button className="plant-btn" onClick={handlePlantClick}>
        <img className="plant" src={plant} alt="plant" />
      </button>
      <button className="bike-btn">
        <img className="bike" src={bike} alt="bike" />
      </button>
      <button className="door-btn">
        <img className="door" src={door} alt="door" />
      </button>
      <button className="board-btn">
        <img className="board" src={board} alt="board" />
      </button>
      <button className="desk-comp-btn" onClick={handleDeskCompClick}>
        <img className="desk-comp" src={deskComp} alt="desk" />
      </button>
      <button className="lamp-btn">
        <img className="lamp" src={lamp} alt="lamp" />
      </button>
      <button className="radio-btn" onClick={handleRadioClick}>
        <img className="radio" src={radio} alt="radio" />
      </button>

      {showPuzzleOne && <PuzzleOne onClose={handleClosePuzzleOne} />}

      {showPuzzleTwo && <PuzzleTwo onClose={handleClosePuzzleTwo} />}

      {showPuzzleFour && <PuzzleFour onClose={handleClosePuzzleFour} />}
    </article>
  );
}
