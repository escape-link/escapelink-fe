import React, { useState, useEffect } from 'react';
import Chat from '../Chat/Chat';
import { useParams } from 'react-router-dom';
import PuzzleOne from '../PuzzleOne/PuzzleOne';
import PuzzleFour from '../PuzzleFour/PuzzleFour';
import './Room.css';
import blueBackground from '../../assets/room/blue-bg.png';
import plant from '../../assets/room/plant.png';
import deskComp from '../../assets/room/desk-comp.png';
import { createConsumer } from '@rails/actioncable';


export default function Room({ socket }) {
  const [allUsersReady, setAllUsersReady] = useState(false);
  const [showPuzzleOne, setShowPuzzleOne] = useState(false);
  const [showPuzzleFour, setShowPuzzleFour] = useState(false);
  const { roomName } = useParams();
  const [subscription, setSubscription] = useState(null); // New WebSocket subscription state

  // Establish a WebSocket connection when the component mounts
  useEffect(() => {
    if (socket) {
      const cable = createConsumer('ws://localhost:3000/cable');
      const newSubscription = cable.subscriptions.create(
        { channel: 'GameChannel', room: roomName },
        {
          received: (data) => {
            if (data.action === 'start_game') {
              setAllUsersReady(true);
            } else {
              // Handle other WebSocket messages here if needed
            }
          },
        }
      );

      setSubscription(newSubscription);

      return () => {
        cable.disconnect();
        newSubscription.unsubscribe();
      };
    }
  }, [socket, roomName]);

  const handleDeskCompClick = () => {
    setShowPuzzleOne(true);
  };

  const handleClosePuzzleOne = () => {
    setShowPuzzleOne(false);
  };

  const handlePlantClick = () => {
    setShowPuzzleFour(true);
  };

  const handleClosePuzzleFour = () => {
    setShowPuzzleFour(false);
  };

  const handleEveryoneHereClick = async () => {
    console.log("Everyone's Here button clicked");

    // Ensure that the socket object exists before emitting the event
    if (socket) {
      // Send a WebSocket message to mark users as ready
      const message = {
        action: 'mark_users_ready',
        nickname: 'some_nickname', // Replace with the actual nickname
      };

      // Use the existing WebSocket subscription to send the message
      subscription.send(message);
    }
  };

  return (
    <div className="gameContainer">
      {!allUsersReady ? (
        <div>
          Waiting for everyone to be ready...
          <button onClick={handleEveryoneHereClick}>Everyone's here!</button>
        </div>
      ) : (
        <>
          <article className='room' style={{ '--room-bg': `url(${blueBackground})` }}>
            {/* Your room elements and puzzles go here */}
            <button className='plant-btn' onClick={handlePlantClick}>
              <img className='plant' src={plant} alt='plant' />
            </button>
            <button className='desk-comp-btn' onClick={handleDeskCompClick}>
              <img className='desk-comp' src={deskComp} alt='desk' />
            </button>
          </article>
          {showPuzzleOne && (
            <PuzzleOne onClose={handleClosePuzzleOne} />
          )}
          {showPuzzleFour && (
            <PuzzleFour onClose={handleClosePuzzleFour} />
          )}
        </>
      )}
      <Chat onAllUsersReady={() => {
        console.log("All users are ready through Chat component");
        setAllUsersReady(true);
      }} />
    </div>
  );
}
