import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Lobby } from './components/Lobby';
import { Room } from './components/Room';

function App() {
  return (
    <div className="app">
      <Router>
         <Routes>
           <Route path="/" element={<Lobby />} />
           <Route path="/room/:roomId" element={<Room />}/>
         </Routes>
      </Router>
    </div>
  );
}

export default App;