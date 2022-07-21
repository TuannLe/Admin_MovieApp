import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Provider } from "react-redux";
import Home from './pages/Home'
import ListMovie from './pages/ListMovie';
import AddMovie from './pages/AddMovie'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Detail from './components/Detail'
import SignIn from '../src/pages/SignIn'
import store from '../src/redux/store'
import RequireAuth from '../src/components/RequireAuth'

function App() {

  return (
    <Provider store={store}>
      <Router>
        <div className="w-full h-screen flex flex-row overflow-hidden bg-[#1c3b6a]">
          <div className="h-screen bg-[#1c3b6a]">
            <Navbar />
          </div>
          <div className="flex flex-col flex-1">
            <Header />
            <RequireAuth>
              <Routes>
                <Route path="/" element={< Home />} />
                <Route path="/list-movie" element={< ListMovie />} />
                <Route path="/add-movie" element={< AddMovie />} />
                <Route path="/detail-movie" element={< Detail />} />
              </Routes>
            </RequireAuth>
            <Routes>
              <Route path="/sign-in" element={<SignIn />} />
            </Routes>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
