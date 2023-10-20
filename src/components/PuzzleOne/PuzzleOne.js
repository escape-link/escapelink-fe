import { useState } from 'react';
import './PuzzleOne.css'

export default function PuzzleOne({   
  onClose,
  winConditions,
  setWinConditions,
  setIsDisabled
}) {
  const [answer, setAnswer] = useState('');
  const [incorrect, setIncorrect] = useState('');  

  const handleChange = (e) => {
    setIncorrect('')
    setAnswer(e.target.value)
  }

  const handleSubmit = () => {
    if (answer.toLowerCase() === 'portal') {
      setWinConditions([...winConditions, answer]);
      onClose();
      setIsDisabled();
    } else {
      setIncorrect('Incorrect: Please try again');
    }
  };
  return (
    <div className="popup">
      <p>{incorrect}</p>
      <h2>Looks like Bob's been decoding a cipher...maybe he kept some notes on his whiteboard? </h2>
      <p>What does it mean?</p>
      <input
        type="text"
        value={answer}
        onChange={handleChange}
        placeholder="Enter answer"
      />
      <button onClick={handleSubmit}>Submit</button>
      <button onClick={onClose}>Close</button>
    </div>
  );
}
