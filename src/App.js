import './App.css';
import Header from './components/Header/Header';
import Story from './components/Story/Story';
import { Route, Routes } from 'react-router-dom'
import Room from './components/Room/Room'
import Chat from './components/Chat/Chat';

function App() {
  return (
    <div>
       <Routes>
        <Route path='/' element = {
          <>
          <Header />
          <Story />
          </>
          } 
          />
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
