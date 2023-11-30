import PropTypes from 'prop-types';
import { useState, useRef, useEffect } from 'react';
import './PuzzleThree.css';

export default function PuzzleThree({
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
    if (answer.toLowerCase() === 'aliens') {
      setWinConditions([...winConditions, answer]);
      puzzleCompleted(3);
      onClose();
      setIsDisabled();
    } else {
      setIncorrect('Incorrect: Please try again');
    }
  };

  return (
    <div tabIndex="-1" ref={modalRef} className="popup">
      <p role="alert">{incorrect}</p>
      <h1 tabIndex="0">Riddle</h1>
      <p tabIndex="0">
        "We come from a place beyond the stars, With shiny ships that blink near
        and far. You've seen us in movies, books, and more, Do you know what we
        are, or are you unsure?"
      </p>
      <label htmlFor="answer" />
      <input
        id="answer"
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

PuzzleThree.propTypes = {
  onClose: PropTypes.func.isRequired,
  winConditions: PropTypes.array.isRequired,
  setWinConditions: PropTypes.func.isRequired,
  setIsDisabled: PropTypes.func.isRequired
};
