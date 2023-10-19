import React, { useState, useEffect } from 'react';

const Chat = () => {
  const [gameName, setGameName] = useState(null);
  const [hasNickname, setHasNickname] = useState(false);
  const [nickname, setNickname] = useState('');
  const [newMessage, setNewMessage] = useState('');
  const [allMessages, setAllMessages] = useState([]);
  const [ws, setWs] = useState(null);

  const roomId = 1; // Define roomId at component scope

  useEffect(() => {
    const ws = new WebSocket('ws://localhost:3000/cable');
    setWs(ws);

    const fetchGameDetails = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/v0/games', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ room_id: roomId, game_name: gameName }), // Updated
        });

        const data = await response.json();
        setGameName(data.game_name);
      } catch (error) {
        console.error('Error fetching game details:', error);
      }
    };

    fetchGameDetails();

    ws.onopen = () => {
      console.log('WebSocket connected');
    };

    ws.onmessage = (event) => {
      const receivedData = JSON.parse(event.data);
      if (receivedData.type && receivedData.message) {
        setAllMessages((prevMessages) => [
          ...prevMessages,
          `${receivedData.type}: ${receivedData.message}`,
        ]);
      }
    };

    ws.onclose = () => {
      console.log('WebSocket disconnected');
    };

    const storedNickname = localStorage.getItem(`nickname_${roomId}`);
    if (storedNickname) {
      setNickname(storedNickname);
      setHasNickname(true);
    }

    return () => {
      ws.close();
    };
  }, []);

  const handleNewMessage = (e) => {
    e.preventDefault();
    if (ws) {
      ws.send(JSON.stringify({ type: 'chat', message: newMessage }));
    }
    setAllMessages([...allMessages, `${nickname}: ${newMessage}`]);
    setNewMessage('');
  };

  const handleNickname = (e) => {
    e.preventDefault();
    localStorage.setItem(`nickname_${roomId}`, nickname);
    setHasNickname(true);
  };

  return (
    <div>
      <h2>{gameName ? `Room: ${gameName}` : 'Loading...'}</h2>
      {!hasNickname ? (
        <form onSubmit={handleNickname}>
          <input
            type="text"
            placeholder="Enter your nickname"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
          />
          <button type="submit">Set Nickname</button>
        </form>
      ) : (
        <>
          <div>
            {allMessages.map((message, index) => (
              <div key={index}>{message}</div>
            ))}
          </div>
          <form onSubmit={handleNewMessage}>
            <input
              type="text"
              placeholder="Type a message"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
            />
            <button type="submit">Send</button>
          </form>
        </>
      )}
    </div>
  );
};

export default Chat;
