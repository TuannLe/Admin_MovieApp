import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './components/Navbar'

function App() {
  return (
    <Router>
      <div className="w-full h-full flex flex-row">
        <div className="w-60 h-screen bg-[#1c3b6a]">
          <Navbar />
        </div>
        <Routes>
          <Route path="/" element={< Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
