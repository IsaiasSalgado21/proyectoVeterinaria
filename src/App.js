import React, { useState } from 'react';
import Splash from './components/Splash';
import Login from './components/Login';
import Register from './components/Register';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import Adoption from './components/Adoption';
import './App.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [view, setView] = useState('splash');

  const handleLogin = () => {
    setIsAuthenticated(true);
    setView('dashboard');
  };

  const handleRegister = () => {
    setIsAuthenticated(true);
    setView('dashboard');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setView('login');
  };

  if (!isAuthenticated) {
    return (
      <div className="App">
        {view === 'splash' && <Splash />}
        {view === 'login' && <Login onLogin={handleLogin} />}
        {view === 'register' && <Register onRegister={handleRegister} />}
        <div className="auth-buttons">
          <button onClick={() => setView('login')}>Login</button>
          <button onClick={() => setView('register')}>Register</button>
        </div>
      </div>
    );
  }

  return (
    <div className="App">
      <Navbar onLogout={handleLogout} />
      {view === 'dashboard' && <Dashboard />}
      {view === 'adoption' && <Adoption />}
    </div>
  );
}

export default App;
