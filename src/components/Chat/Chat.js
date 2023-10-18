import './Chat.css';
import { useEffect, useState } from 'react';
import { createConsumer } from '@rails/actioncable';
import { useParams } from 'react-router-dom';

export default function Chat({ onAllUsersReady }) {
  const [nickname, setNickname] = useState('');
  const [currentMessage, setCurrentMessage] = useState('');
  const [allMessages, setAllMessages] = useState([]);
  const [subscription, setSubscription] = useState(null);
  const [hasNickname, setHasNickname] = useState(false);
  const { roomName } = useParams();

  useEffect(() => {
    const nicknameExist = localStorage.getItem(`nickname_${roomName}`);
    if (nicknameExist) {
      setNickname(nicknameExist);
      setHasNickname(true);
    }

    const cable = createConsumer('ws://localhost:3000/cable');
    const newSubscription = cable.subscriptions.create(
      { channel: 'GameChannel', room: roomName },
      {
        received: (data) => {
          if (data.action === 'start_game') {
            onAllUsersReady();
          } else {
            setAllMessages((allMessages) => [
              ...allMessages,
              `${data.nickname}: ${data.message}`
            ]);
          }
        }
      }
    );

    setSubscription(newSubscription);

    return () => {
      cable.disconnect();
      newSubscription.unsubscribe();
    };
  }, [roomName]);

  const handleSubmitMessage = (e) => {
    e.preventDefault(); // Prevent default form submission
    subscription.send({
      nickname: nickname,
      message: currentMessage
    });
    setCurrentMessage('');
  };

  const handleNickname = () => {
    localStorage.setItem(`nickname_${roomName}`, nickname);
    setHasNickname(true);
  };

  return (
    <div>
      {!hasNickname ? (
        <div>
          <label htmlFor="nickname">Nickname:</label>
          <input
            id="nickname"
            name="nickname"
            placeholder="Enter your name"
            type="text"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
          />
          <button onClick={handleNickname}>Enter</button>
        </div>
      ) : (
        <div className="chat-container">
          <div className="chat-window">
            {allMessages.map((message, index) => (
              <div key={index}>{message}</div>
            ))}
          </div>
          <form onSubmit={handleSubmitMessage}>
            <input
              type="text"
              value={currentMessage}
              onChange={(e) => setCurrentMessage(e.target.value)}
            />
            <button type="submit">Send</button>
          </form>
        </div>
      )}
    </div>
  );
}
