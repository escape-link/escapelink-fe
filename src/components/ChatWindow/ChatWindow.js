import './ChatWindow.css';

export default function ChatWindow({
  currentMessage,
  setCurrentMessage,
  handleSubmitMessage,
  openPopOutChat,
  allMessages
}) {
  const messagesToAdd = allMessages.map((message, index) => (
    <div key={index} className="popout-chat">
      <p tabIndex='0'>{message}</p>
      <span role ='alert' className='sr-only'>{message}</span>
    </div>
  )); 

  return (
    <div className="messages-container">
      <button aria-label="close" onClick={() => openPopOutChat()}>
        X
      </button>
      {messagesToAdd}
      <label htmlFor="currentMessage" />
      <textarea
        id="currentMessage"
        name="currentMessage"
        placeholder="Enter message here"
        type="text"
        rows="4"
        cols="33"
        value={currentMessage}
        onChange={(e) => setCurrentMessage(e.target.value)}
      />
      <button onClick={handleSubmitMessage}>Send</button>
    </div>
  );
}
