// src/components/Splash.js
import React from 'react';
import './Splash.css';

const Splash = () => {
  return (
    <div className="splash-container">
      <img src="/logo.png" alt="Veterinary Logo" className="splash-logo" />
      <h1>Welcome to Our Veterinary Clinic</h1>
    </div>
  );
};

export default Splash;
