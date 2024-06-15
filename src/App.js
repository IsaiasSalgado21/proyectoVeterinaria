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
import { PetProvider } from './context/PetProvider';
import AuthProvider, { AuthContext } from './context/AuthContext';

function App() {
  return (
    <ThemeProvider>
      <PetProvider>
        <AuthProvider>
          <Router>
            <div className="App">
              <Navbar />
              <Routes>
                <Route path="/" element={<Splash />} />
                <Route path="/home" element={<Home />} />
                <Route path="/report" element={<Report />} />
                <Route path="/emergency" element={<EmergencyCall />} />
                <Route path="/settings" element={<PageSettings />} />
                <Route path="/profile" element={<UserProfile />} />
                <Route path="/adopt" element={<AdoptPet />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/store" element={<Store />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/passrec" element={<PasswordRecovery />} />
                <Route path="*" element={<Navigate to="/" />} />
              </Routes>
              <Footer />
            </div>
          </Router>
        </AuthProvider>
      </PetProvider>
    </ThemeProvider>
  );
}

export default App;
