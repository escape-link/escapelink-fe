import './Chat.css';
import {useState } from 'react';
import { useParams } from 'react-router-dom';
import ChatWindow from '../ChatWindow/ChatWindow';
// import { WebSocketContext } from '../Context/WebSocketContext';



export default function Chat({subscription, allMessages}) {
  // const subscription = useContext(WebSocketContext)
  // const location = useLocation();
  // const allMessages = location.state.allMessages
  // const subscription = location.state.subscription;
  const [nickname, setNickname] = useState('');
  const [currentMessage, setCurrentMessage] = useState('');
  // const [allMessages, setAllMessages] = useState([]);
  // const [subscription, setSubscription] = useState(null);
  const [hasNickname, setHasNickname] = useState(false);
  const { gameName } = useParams();
  const [chatOpen, setChatOpen] = useState(false)

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

  const handleSubmitMessage = (e) => {
    subscription.send({
      nickname: nickname,
      message: currentMessage
    });
    setCurrentMessage('');
  };

  const handleNickname = () => {
    localStorage.setItem(`nickname_${gameName}`, nickname);
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
