import './App.css';
import Header from './components/Header/Header';
import Story from './components/Story/Story';
import { Route, Routes } from 'react-router-dom';
import Chat from './components/Chat/Chat';
import LandingPage from './components/LandingPage/LandingPage';
import RoomOne from './components/RoomOne/RoomOne';

function App() {
  return (
    <div>
      <Routes>
        {/* Single route for the landing page */}
        <Route path='/' element={<><Header /><LandingPage /></>} />

        {/* Route when only the room name is present in the URL */}
        <Route path='/:displayedRoomName' element={<><Header /><Story /></>} />

        {/* New route to capture data sent by the backend */}
        <Route path='/:displayedRoomName/:backendData' element={<><Header /><RoomOne /><Chat /></>} />
      </Routes>
    </div>
  );
}

export default App;
