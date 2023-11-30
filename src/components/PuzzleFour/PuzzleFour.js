import PropTypes from 'prop-types';
import { useState, useRef, useEffect } from 'react';
import './PuzzleFour.css';

export default function PuzzleFour({
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
    if (answer.toLowerCase() === 'alpha centauri') {
      setWinConditions([...winConditions, answer]);
      puzzleCompleted(4);
      onClose();
      setIsDisabled(true);
    } else {
      setIncorrect('Incorrect: Please try again');
    }
  };

  return (
    <div tabIndex="-1" ref={modalRef} className="popup">
      <p role="alert">{incorrect}</p>
      <h1 tabIndex="0">Some truths can only be found in the dark. </h1>
      <p tabIndex="0">
        Search the room. Might there be a hidden message we can't see just yet?
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

PuzzleFour.propTypes = {
  onClose: PropTypes.func.isRequired,
  winConditions: PropTypes.array.isRequired,
  setWinConditions: PropTypes.func.isRequired,
  setIsDisabled: PropTypes.func.isRequired
};
