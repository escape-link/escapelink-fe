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
      setIsDisabled(true);
    } else {
      setIncorrect('Incorrect: Please try again');
    }
  };
  return (
    <div className="popup">
      <p>{incorrect}</p>
      <h2>What's that displayed on Bob's computer? Looks like a cipher...maybe he kept some notes on his whiteboard? </h2>
      <p>Decode the cipher: what does the message on Bob's computer mean?</p>
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
