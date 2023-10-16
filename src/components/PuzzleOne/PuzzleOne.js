import React, { useState } from 'react';
import './PuzzleOne.css'

export default function PuzzleOne({ onClose, onSubmit }) {
  const [answer, setAnswer] = useState('');

  const handleSubmit = () => {
    onSubmit(answer);
    onClose();
  };

  return (
    <div className="popup">
      <h2>What's that displayed on Bob's computer? Looks like a cipher...maybe he kept some notes on his whiteboard? </h2>
      <p>Decode the cipher: what does the message on Bob's computer mean?</p>
      <input
        type="text"
        value={answer}
        onChange={(e) => setAnswer(e.target.value)}
        placeholder="Enter answer"
      />
      <button onClick={handleSubmit}>Submit</button>
      <button onClick={onClose}>Close</button>
    </div>
  );
}
