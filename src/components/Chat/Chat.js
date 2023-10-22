import './Chat.css';
import {useState } from 'react';
import { useParams } from 'react-router-dom';
import ChatWindow from '../ChatWindow/ChatWindow';

export default function Chat({subscription, allMessages}) {
  const [nickname, setNickname] = useState('');
  const [currentMessage, setCurrentMessage] = useState('');
  const [hasNickname, setHasNickname] = useState(false);
  const { backendData } = useParams();
  const [chatOpen, setChatOpen] = useState(false)

  const handleSubmitMessage = (e) => {
    subscription.send({
      nickname: nickname,
      message: currentMessage
    });
    setCurrentMessage('');
  };

  const handleNickname = () => {
    localStorage.setItem(`nickname_${backendData}`, nickname);
    setHasNickname(true);
  };

  const openPopOutChat = () => {
    setChatOpen(!chatOpen)
  }
  
  return (
    <div className='chat'>
       <button className='see-message-btn' onClick={openPopOutChat}>See Messages</button>
    {chatOpen && <ChatWindow allMessages={allMessages} currentMessage={currentMessage} setCurrentMessage={setCurrentMessage} handleSubmitMessage={handleSubmitMessage} openPopOutChat={openPopOutChat} />}
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
        </div>
      )}
    </div>
  );
}
