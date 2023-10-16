import { useState } from 'react';
import './PuzzleFour.css'

export default function PuzzleFour ({ onClose, onSubmit }) {
  const [answer, setAnswer] = useState('');

  const handleSubmit = () => {
    onSubmit(answer);
    onClose();
  };
  return (
    <div className="popup">
    <h2>Some truths can only be found in the dark. </h2>
    <p>Search the room. Might there be a hidden message we can't see just yet?</p>
    <input
      type="text"
      value={answer}
      onChange={(e) => setAnswer(e.target.value)}
      placeholder="Enter answer"
    />
    <button onClick={handleSubmit}>Submit</button>
    <button onClick={onClose}>Close</button>
  </div>
  )
}