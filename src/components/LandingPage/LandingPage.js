import './LandingPage.css';
import { useNavigate} from 'react-router-dom';

export default function LandingPage() {
  const navigate = useNavigate();

  const goToRoom = (roomName) => {
    const displayedRoomName = encodeURIComponent(roomName);
    navigate(`room/${displayedRoomName}` );
  };

  return (
    <div className="landing-page">
      <h2 className='welcome'>Choose your room!</h2>
      <div className="buttons">
        <button onClick={() => goToRoom('Where\'s Bob?')} className="room-one">Alien Escape!</button>
        <button className='coming-soon'>Coming Soon</button>
        <button className='coming-soon'>Coming Soon</button>
        <button className='coming-soon'>Coming Soon</button>
        <button className='coming-soon'>Coming Soon</button>
      </div>
    </div>
  );
}
