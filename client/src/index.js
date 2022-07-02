import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import SignIn from './pages/SignIn';

const root = ReactDOM.createRoot(document.getElementById('root'));
const currentUser = false

root.render(
  <React.StrictMode>
    {currentUser ? (
      <App />
    ) : (
      <SignIn />
    )}
  </React.StrictMode>
);
