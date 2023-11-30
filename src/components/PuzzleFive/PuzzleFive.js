import PropTypes from 'prop-types';
import { useState, useRef, useEffect } from 'react';
import './PuzzleFive.css';

export default function PuzzleFive({
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
    if (answer.toLowerCase() === 'will smith') {
      setWinConditions([...winConditions, answer]);
      puzzleCompleted(5);
      onClose();
      setIsDisabled(true);
    } else {
      setIncorrect('Incorrect: Please try again');
    }
  };

  return (
    <div tabIndex="-1" ref={modalRef} className="popup">
      <p role="alert">{incorrect}</p>
      <h1 tabIndex="0">The slap heard round the world.</h1>
      <p tabIndex="0">
        This actor is famous for defeating an enemy society with Jeff Goldblum
        and also notably slapped the human known as Chris Rock. We suspect Bob
        has disappeared to where they came from.
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

PuzzleFive.propTypes = {
  onClose: PropTypes.func.isRequired,
  winConditions: PropTypes.array.isRequired,
  setWinConditions: PropTypes.func.isRequired,
  setIsDisabled: PropTypes.func.isRequired
};
