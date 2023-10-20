import "./Cipher.css";
import "../../assets/room/Cipher.png";

export default function Cipher({ onClose }) {
  return (
    <div className="popup">
      <h2>
        Here are some of Bob's notes. Looks like he got ahead of us on the
        cipher.
      </h2>
      <p>
        A ⏃ B ⏚ C ☊ D ⎅ E ⟒ F ⎎ G ☌ H ⊑ I ⟟ J ⟊ K ☍ L ⌰ M ⋔ N ⋏ O ⍜ P ⌿ Q ⍾ R ⍀
        S ⌇ T ⏁ U ⎍ V ⎐ W ⍙ X ⌖ Y ⊬ Z ⋉
      </p>
      <p>Decode the cipher: ⌿⍜⍀⏁⏃⌰</p>
      <button onClick={onClose}>Close</button>
    </div>
  );
}
