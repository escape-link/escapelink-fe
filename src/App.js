import './App.css';
import Header from './components/Header/Header';
import Story from './components/Story/Story';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import RoomOne from './components/RoomOne/RoomOne';
import ErrorHandling from './components/ErrorHandling/ErrorHandling';
import { useState } from 'react';

function App() {
  return (
      <div>
        <Routes>
          {/* Single route for the landing page */}
          <Route path='/' element={<><Header /><LandingPage /></>} />
  
          {/* Route when only the room name is present in the URL */}
          <Route path='/room/:displayedRoomName' element={<><Header /><Story /></>} />
  
          {/* New route to capture data sent by the backend */}
          <Route path='alienRoom/:displayedRoomName/:backendData' element={<RoomOne />} />
          <Route path='*' element={<ErrorHandling  />}/>
        </Routes>
      </div>
    );
}

export default App;
