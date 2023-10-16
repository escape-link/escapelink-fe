import { useState } from 'react';
import './PuzzleFive.css'

export default function PuzzleFive ({ onClose, onSubmit }) {
  const [answer, setAnswer] = useState('');

  const handleSubmit = () => {
    onSubmit(answer);
    onClose();
  };

  return (
    <div className="popup">
    <h2>The slap heard round the world.</h2>
    <p>This actor is famous for defeating an enemy society with Jeff Goldblum and also notably slapped the human known as Chris Rock. We suspect Bob has disappeared to where they came from.</p>
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