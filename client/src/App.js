import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ListMovie from './pages/ListMovie';
import AddMovie from './pages/AddMovie'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Detail from './components/Detail'

function App() {
  return (
    <Router>
      <div className="w-full h-screen flex flex-row overflow-hidden bg-[#1c3b6a]">
        <div className="w-60 h-screen bg-[#1c3b6a]">
          <Navbar />
        </div>
        <div className="flex flex-col flex-1">
          <Header />
          <Routes>
            <Route path="/" element={< Home />} />
            <Route path="/list-movie" element={< ListMovie />} />
            <Route path="/add-movie" element={< AddMovie />} />
            <Route path="/detail-movie" element={< Detail />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
