import PropTypes from 'prop-types';
import { useState, useRef, useEffect } from 'react';
import './PuzzleOne.css';

export default function PuzzleOne({
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
    if (answer.toLowerCase() === 'portal') {
      setWinConditions([...winConditions, answer]);
      puzzleCompleted(1);

      onClose();
      setIsDisabled();
    } else {
      setIncorrect('Incorrect: Please try again');
    }
  };

  return (
    <div tabIndex="-1" ref={modalRef} className="popup">
      <p role="alert">{incorrect}</p>
      <h1 tabIndex="0">
        Looks like Bob's been decoding a cipher...maybe he kept some notes on
        his whiteboard?{' '}
      </h1>
      <p tabIndex="0">What does ⌿⍜⍀⏁⏃⌰ mean?</p>
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

PuzzleOne.propTypes = {
  onClose: PropTypes.func.isRequired,
  winConditions: PropTypes.array.isRequired,
  setWinConditions: PropTypes.func.isRequired,
  setIsDisabled: PropTypes.func.isRequired
};
