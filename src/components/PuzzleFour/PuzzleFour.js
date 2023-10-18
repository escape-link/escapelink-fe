import { useState } from 'react';
import './PuzzleFour.css'

export default function PuzzleFour ({   
  onClose,
  winConditions,
  setWinConditions
}) {
  const [answer, setAnswer] = useState('');
  const [incorrect, setIncorrect] = useState('');

  const handleChange = (e) => {
    setIncorrect('')
    setAnswer(e.target.value)
  }

  const handleSubmit = () => {
    if (answer.toLowerCase() === 'alpha centauri') {
      setWinConditions([...winConditions, answer]);
      onClose();
    } else {
      setIncorrect('Incorrect: Please try again');
    }
  };

  return (
    <div className="popup">
      <p>{incorrect}</p>
    <h2>Some truths can only be found in the dark. </h2>
    <p>Search the room. Might there be a hidden message we can't see just yet?</p>
    <input
      type="text"
      value={answer}
      onChange={handleChange}
      placeholder="Enter answer"
    />
    <button onClick={handleSubmit}>Submit</button>
    <button onClick={onClose}>Close</button>
  </div>
  )
}