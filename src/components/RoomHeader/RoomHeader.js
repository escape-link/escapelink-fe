import React, { useState, useEffect } from "react";
import "./RoomHeader.css";
import alien from "../../assets/alien.png";

export default function RoomHeader() {
  const [timer, setTimer] = useState(0);
  const [isActive, setIsActive] = useState(true);

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

  const minutes = Math.floor(timer / 60);
  const seconds = timer % 60;

  return (
    <header className="room-header">
      <h1>Operation: Find Bob!!!</h1>
      <img className="alien" src={alien} alt="alien" />
      <p>
        Time Elapsed: {minutes}:{seconds.toFixed(2).padStart(5, "0")}
      </p>
    </header>
  );
}

