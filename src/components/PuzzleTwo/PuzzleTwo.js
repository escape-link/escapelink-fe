import { useState } from 'react';
import './PuzzleTwo.css';

export default function PuzzleTwo({
  onClose,
  winConditions,
  setWinConditions,
  setIsDisabled
}) {
  const [answer, setAnswer] = useState('');
  const [incorrect, setIncorrect] = useState('');

  const handleChange = (e) => {
    setIncorrect('');
    setAnswer(e.target.value);
  };

  const handleSubmit = () => {
    if (answer === '94.5') {
      setWinConditions([...winConditions, answer]);
      onClose();
      setIsDisabled()
    } else {
      setIncorrect('Incorrect: Please try again');
    }
  };


  return (
    <div className="popup">
      <p>{incorrect}</p>
      <h2>Radio Frequency Puzzle</h2>
      <p>
        Decode the radio frequency: what station should you tune in to? The
        first digit of the radio station is the second digit of the year of the
        year area 51 was founded. The second is the only number whose English
        name has the same number of letters as its value. For the last digit,
        which follows a decimal point, look for the Leo constellation and figure
        its placement within the zodiac calendar.
      </p>
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
