import './Story.css';
import background from '../../assets/big-donut.jpg';
import { useNavigate, useParams } from 'react-router-dom';
import fetchGameLink from '../../apiCalls';

export default function Story() {
  const navigate = useNavigate();
  const { displayedRoomName } = useParams(); // Getting the room name from the URL

  const startGame = async () => {
    try {
      const gameData = await fetchGameLink();
      navigate(`/${displayedRoomName}/${gameData.game_name}`);
    } catch (err) {
      console.log(`${err.message}`);
    }
  };

  return (
    <section className='landing-page-body' style={{ '--background': `url(${background})` }}>
      <div className='story-and-button'>
        <div className='story'>
          <p>
            You and your team are fringe scientists working on top-secret experimental airframes in a Nevada black site for the US Air Force. Bob, your eccentric colleague, has gone missing, and strange occurrences have been happening in his office.
          </p>
          <br></br>
          <p>
            Bob is a peculiar scientist known for his eccentricity. He's been missing for a few days, and unusual sounds and radio broadcasts from his office have raised concerns. Your base commander initiated a lockdown and access override after Bob mysteriously disappeared on Doughnut Friday, a tradition he never misses.
          </p>
          <br></br>
          <p>
            Objective: Find clues in Bob's office to uncover his whereabouts and the secrets he may have left behind.
          </p>
          <br></br>
          <p>
            Now it's your team's mission to enter Bob's office to find out what happened.
          </p>
          <p>
            Are you ready to begin your escape room adventure?
          </p>
        </div>
        <button className='start-game' onClick={startGame}>Start Game</button>
      </div>
    </section>
  );
}
