import React, { useState, useEffect } from "react";
import "./RoomHeader.css";
import alien from "../../assets/alien.png";

export default function RoomHeader() {
  const [timer, setTimer] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval;

    if (isActive) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer + 0.01);
      }, 10);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [isActive]);

  const startTimer = () => {
    setIsActive(!isActive);
  };

  return (
    <header>
      <h1>Escape Link</h1>
      <img className="alien" src={alien} alt="alien" />
      <button onClick={startTimer}>
        {isActive ? "Stop Timer" : "Start Timer"}
      </button>
      <p>
        Time Elapsed: {timer.toFixed(2)} seconds
      </p>
    </header>
  );
}


