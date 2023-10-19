import './App.css';
import Header from './components/Header/Header';
import Story from './components/Story/Story';
import { Route, Routes } from 'react-router-dom'
import Room from './components/RoomOne/RoomOne'
import Chat from './components/Chat/Chat';
import LandingPage from './components/LandingPage/LandingPage';

function App() {
  return (
    <div>
       <Routes>
        <Route path='/' element = {
          <>
          <Header />
          <LandingPage />
          </>
          } 
          />
          <Route path='/roomID' element={<Story/>}/>
           <Route path='/room/:roomName' element={
        <>
          <Room />
          <Chat />
        </>
        } />
      </Routes>
    
    </div>
  );
}

export default App;
