import React, { useState } from 'react'
import Puzzle1 from '../Puzzle1/PuzzleOne'
import './Room.css'
import blueBackground from '../../assets/room/blue-bg.png'
import clock from '../../assets/room/clock.png'
import plant from '../../assets/room/plant.png'
import door from '../../assets/room/door.png'
import board from '../../assets/room/board.png'
// import bike from '../../assets/room/bike.png'
import radio from '../../assets/room/radio.png'
// import desk from '../../assets/room/desk.png'
// import laptop from '../../assets/room/laptop.png'
import lamp from '../../assets/room/lamp.png'
import deskComp from '../../assets/room/desk-comp.png'
import bike from '../../assets/room/bike-front.png'

export default function Room() {
  const [showPuzzle1, setShowPuzzle1] = useState(false);

  const handleDeskCompClick = () => {
    setShowPuzzle1(true);
  };

  const handleClosePuzzle1 = () => {
    setShowPuzzle1(false);
  };

  return (
    <article className='room' style={{ '--room-bg': `url(${blueBackground})` }}>
      <button className='clock-btn'><img className='clock' src={clock} alt='clock' /></button>
      <button className='plant-btn'><img className='plant' src={plant} alt='plant' /></button>
      <button className='bike-btn'><img className='bike' src={bike} alt='bike' /></button>
      <button className='door-btn'><img className='door' src={door} alt='door' /></button>
      <button className='board-btn'><img className='board' src={board} alt='board' /></button>
      <button className='desk-comp-btn' onClick={handleDeskCompClick}><img className='desk-comp' src={deskComp} alt='desk' /></button>
      <button className='lamp-btn'><img className='lamp' src={lamp} alt='lamp' /></button>
      <button className='radio-btn'><img className='radio' src={radio} alt='radio' /></button>

      {showPuzzle1 && (
        <Puzzle1 onClose={handleClosePuzzle1} />
      )}
    </article>
  );
}