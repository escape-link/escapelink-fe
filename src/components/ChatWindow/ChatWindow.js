import './ChatWindow.css'

export default function ChatWindow({currentMessage, setCurrentMessage, handleSubmitMessage, openPopOutChat, allMessages}) {

    const messagesToAdd = allMessages.map((message, index) => (
      <div key={index}className='popout-chat'>
        <p>{message}</p>
    </div> 
    ));
  
    return <div className='messages-container'>
      <button onClick={() => openPopOutChat()}>X</button>
      {messagesToAdd}
      <label htmlFor='currentMessage'/>
      <textarea 
        id='currentMessage'
        name='currentMessage'
        placeholder='Enter message here'
        type='text'
        rows='4'
        cols='33'
        value={currentMessage}
        onChange={e => setCurrentMessage(e.target.value)}
      />
      <button onClick={handleSubmitMessage}>Send</button>
      
      </div>;
  

}