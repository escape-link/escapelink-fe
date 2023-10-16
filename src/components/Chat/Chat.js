import './Chat.css';
import { useEffect, useState } from 'react';
import { createConsumer } from '@rails/actioncable';
import { useParams } from 'react-router-dom';

export default function Chat() {
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

    const cable = createConsumer(
      'wss://escapelink-be-42ffc95e6cf7.herokuapp.com/cable'
    );
    const newSubscription = cable.subscriptions.create(
      { channel: 'GameChannel', room: roomName },
      {
        received: (data) => {
          setAllMessages((allMessages) => [
            ...allMessages,
            `${data.nickname}: ${data.message}`
          ]);
        }
      }
    );

    setSubscription(newSubscription)

    return () => {
      cable.disconnect()
      newSubscription.unsubscribe()
    }
  }, [roomName]);

  const handleSubmitMessage = (e) => {
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
          <label htmlFor="nickname" />
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
        <div>
          <p>Greetings {nickname}</p>
          <label htmlFor="currentMessage" />
          <textarea
            id="currentMessage"
            name="currentMessage"
            placeholder="Enter message here"
            rows="4"
            cols="33"
            value={currentMessage}
            onChange={(e) => setCurrentMessage(e.target.value)}
          />
          <button onClick={handleSubmitMessage}>Send</button>
        </div>
      )}
      <p>{allMessages}</p>
    </div>
  );
}
