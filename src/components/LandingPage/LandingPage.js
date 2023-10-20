import React, { useState, useEffect } from 'react';
import './LandingPage.css';
import { useNavigate, useParams } from 'react-router-dom';
import { createConsumer } from '@rails/actioncable';

export default function LandingPage() {
  // const { gameName } = useParams();
  // const [allMessages, setAllMessages] = useState([]);
  // const [subscription, setSubscription] = useState(null);
  // const [nickname, setNickname] = useState('');
  // const [hasNickname, setHasNickname] = useState(false);

  const navigate = useNavigate();
  let displayedRoomName = ''; // This is the variable you wanted to set.

  const goToRoom = (roomName) => {
    displayedRoomName = roomName;
    navigate(`/${displayedRoomName}` );
  };
  
  // { state: { allMessages } }
  // useEffect(() => {
  //   const nicknameExist = localStorage.getItem(`nickname_${gameName}`);
  //   if (nicknameExist) {
  //     setNickname(nicknameExist);
  //     setHasNickname(true);
  //   }

  //   const cable = createConsumer(
  //     // 'wss://escapelink-be-42ffc95e6cf7.herokuapp.com/cable'
  //     'ws://localhost:3000/cable'
  //   );
  //   const newSubscription = cable.subscriptions.create(
  //     { channel: 'GameChannel', game: gameName },
  //     {
  //       received: (data) => {
  //         setAllMessages((allMessages) => [
  //           ...allMessages,
  //           `${data.nickname}: ${data.message}`
  //         ]);
  //       }
  //     }
  //   );

  //   setSubscription(newSubscription)

  //   return () => {
  //     cable.disconnect()
  //     newSubscription.unsubscribe()
  //   }
  // }, [gameName]);

  return (
    <div className="landing-page">
      Welcome to EscapeLink! Choose your room
      <div className="buttons">
        <button onClick={() => goToRoom('wheres-bob')} className="Room-One">Alien Escape!</button>
        <button>Coming Soon</button>
        <button>Coming Soon</button>
        <button>Coming Soon</button>
        <button>Coming Soon</button>
      </div>
    </div>
  );
}






