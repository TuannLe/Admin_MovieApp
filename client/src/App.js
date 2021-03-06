import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import Home from './pages/Home'
import ListMovie from './pages/ListMovie';
import AddMovie from './pages/AddMovie'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Detail from './components/Detail'
import SignIn from '../src/pages/SignIn'
import ListCategory from '../src/pages/ListCategory'
import store, { persistor } from '../src/redux/store'
import RequireAuth from '../src/components/RequireAuth'

function App() {

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
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
                  <Route path="/list-category" element={< ListCategory />} />
                </Routes>
              </RequireAuth>
              <Routes>
                <Route path="/sign-in" element={<SignIn />} />
              </Routes>
            </div>
          </div>
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;
