import { useState } from 'react';
import './PuzzleFive.css'

export default function PuzzleFive ({   
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
    if (answer.toLowerCase() === 'Will Smith') {
      setWinConditions([...winConditions, answer]);
      onClose();
    } else {
      setIncorrect('Incorrect: Please try again');
    }
  };

  return (
    <div className="popup">
      <p>{incorrect}</p>
      <h2>The slap heard round the world.</h2>
      <p>This actor is famous for defeating an enemy society with Jeff Goldblum and also notably slapped the human known as Chris Rock. We suspect Bob has disappeared to where they came from.</p>
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