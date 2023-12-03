import { useState, useRef, useEffect } from 'react';
import './PuzzleTwo.css';
import PropTypes from 'prop-types';

export default function PuzzleTwo({
  onClose,
  winConditions,
  setWinConditions,
  setIsDisabled,
  puzzleCompleted
}) {
  const [answer, setAnswer] = useState('');
  const [incorrect, setIncorrect] = useState('');
  const modalRef = useRef();

  useEffect(() => {
    if (modalRef.current) {
      modalRef.current.focus();
    }
  }, []);

  const handleChange = (e) => {
    setIncorrect('');
    setAnswer(e.target.value);
  };

  const handleSubmit = () => {
    if (answer === '94.5') {
      setWinConditions([...winConditions, answer]);
      puzzleCompleted(2);
      onClose();
      setIsDisabled();
    } else {
      setIncorrect('Incorrect: Please try again');
    }
  };

  return (
    <div tabIndex="-1" ref={modalRef} className="popup">
      <p role="alert">{incorrect}</p>
      <h1 tabIndex="0">Radio Frequency: Tune to the correct station.</h1>
      <p tabIndex="0">
        The first digit of the radio station is the second digit of
        the year area 51 was founded. The second is the only number whose
        English name has the same number of letters as its value. For the last
        digit, which follows a decimal point, look for the Leo constellation and
        figure its placement within the zodiac calendar.
      </p>
      <label htmlFor="answer" />
      <input
        id="answer"
        type="text"
        value={answer}
        onChange={handleChange}
        placeholder="ex: 89.7"
      />
      <button onClick={handleSubmit}>Submit</button>
      <button onClick={onClose}>Close</button>
    </div>
  );
}

PuzzleTwo.propTypes = {
  onClose: PropTypes.func.isRequired,
  winConditions: PropTypes.array.isRequired,
  setWinConditions: PropTypes.func.isRequired,
  setIsDisabled: PropTypes.func.isRequired
};
