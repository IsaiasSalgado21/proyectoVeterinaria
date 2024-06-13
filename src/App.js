// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Report from './components/Report';
import EmergencyCall from './components/EmergencyCall';
import Settings from './components/Settings';
import UserProfile from './components/UserProfile';
import Home from './components/Home';
import AdoptPet from './components/AdoptPet';
import Splash from './components/Splash';
import Register from './components/Register';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Store from './components/Store';
import PasswordRecovery from './components/PasswordRecovery';

function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  const handleLogin = () => setIsLoggedIn(true);
  const handleRegister = () => setIsLoggedIn(true);
  const handlePasswordRecovery = () => {
    // Lógica después de la recuperación de contraseña
    console.log('Correo de recuperación de contraseña enviado');
  };

  return (
    <Router>
      <div className="App">
        <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        <Routes>
          <Route path="/" element={<Splash />} />
          <Route path="/home" element={<Home />} />
          <Route path="/report" element={<Report />} />
          <Route path="/emergency" element={<EmergencyCall />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/adopt" element={<AdoptPet />} />
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/register" element={<Register onRegister={handleRegister} />} />
          <Route path="/store" element={<Store />} />
          {isLoggedIn ? (
            <Route path="/dashboard" element={<Dashboard />} />
          ) : (
            <Route path="*" element={<Navigate to="/login" />} />
          )}
          <Route path="/passrec" element={<PasswordRecovery />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
