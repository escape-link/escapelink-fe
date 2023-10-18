import { useState } from 'react';
import './PuzzleThree.css';

export default function PuzzleThree({
  onClose,
  winConditions,
  setWinConditions
}) {
  const [answer, setAnswer] = useState('');
  const [incorrect, setIncorrect] = useState('');


  const handleSubmit = () => {
    if (answer === 'alien') {
      setWinConditions([...winConditions, answer]);
      onClose();
    } else {
      setIncorrect('Incorrect: Please try again');
    }
  };

  return (
    <div className="popup">
      <p>{incorrect}</p>
      <h2>Riddle</h2>
      <p>
        "I come from a place beyond the stars, With shiny ships that blink near
        and far. You've seen me in movies, books, and more, Do you know what I
        am, or are you unsure?"
      </p>
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
