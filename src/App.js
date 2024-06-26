// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Report from './components/Report';
import EmergencyCall from './components/EmergencyCall';
import PageSettings from './components/PageSettings';
import UserProfile from './components/UserProfile';
import Home from './components/Home';
import AdoptPet from './components/AdoptPet';
import Splash from './components/Splash';
import Register from './components/Register';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Store from './components/Store';
import PasswordRecovery from './components/PasswordRecovery';
import Footer from './components/Footer';
import { ThemeProvider } from './context/ThemeContext';
import { PetProvider } from './context/PetContext';
import { AuthProvider } from './context/AuthContext';
import { ReportProvider } from './context/ReportContext';

function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  const handleLogin = () => setIsLoggedIn(true);
  const handleRegister = () => setIsLoggedIn(true);
  const handlePasswordRecovery = () => {
    console.log('Correo de recuperación de contraseña enviado');
  };

  return (
    <ThemeProvider>
      <PetProvider>
        <AuthProvider>
          <ReportProvider>
            <Router>
              <div className="App">
                <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
                <Routes>
                  <Route path="/" element={isLoggedIn ? <Navigate to="/dashboard" /> : <Splash />} />
                  <Route path="/home" element={<Home />} />
                  <Route path="/report" element={<Report />} />
                  <Route path="/emergency" element={<EmergencyCall />} />
                  <Route path="/settings" element={<PageSettings />} />
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
                <Footer />
              </div>
            </Router>
          </ReportProvider>
        </AuthProvider>
      </PetProvider>
    </ThemeProvider>
  );
}

export default App;
