import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import "./Cipher.css";

export default function Cipher({ onClose }) {
  const modalRef = useRef()

  useEffect(() => {
    if (modalRef.current) {
      modalRef.current.focus()
    }
  }, [])

  return (
    <div tabIndex="-1" ref={modalRef} className="popup">
      <h1 tabIndex='0'>
        Here are some of Bob's notes. Looks like he got ahead of us on the
        cipher.
      </h1>
      <p tabIndex='0'>
        A ⏃ B ⏚ C ☊ D ⎅ E ⟒ F ⎎ G ☌ H ⊑ I ⟟ J ⟊ K ☍ L ⌰ M ⋔ N ⋏ O ⍜ P ⌿ Q ⍾ R ⍀
        S ⌇ T ⏁ U ⎍ V ⎐ W ⍙ X ⌖ Y ⊬ Z ⋉
      </p>
      <button onClick={onClose}>Close</button>
    </div>
  );
}

Cipher.propTypes = {
  onClose: PropTypes.func.isRequired,
};
