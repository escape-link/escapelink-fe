import './App.css';
import Header from './components/Header/Header';
import Story from './components/Story/Story';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import RoomOne from './components/RoomOne/RoomOne';
import ErrorHandling from './components/ErrorHandling/ErrorHandling';
import Leaderboard from './components/Leaderboard/Leaderboard';

function App() {
  return (
      <div>
        <Routes>
          <Route path='/' element={<><Header /><LandingPage /></>} />
          <Route path='room/:displayedRoomName' element={<><Header /><Story /></>} />
          <Route path='roomOne/:displayedRoomName/:backendData' element={<RoomOne />} />
          <Route path='leaderboard' element={<Leaderboard />}/>
          <Route path='*' element={<ErrorHandling />}/>
        </Routes>
      </div>
    );
}

export default App;
