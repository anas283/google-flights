import './App.css';
import { Route, Routes } from 'react-router';
import Flights from './pages/flights';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Flights />} />
      </Routes>
    </div>
  );
}

export default App;
