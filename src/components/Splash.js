import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Splash.css';

const Splash = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/home');
    }, 5000); // 5 segundos

    // Limpia el temporizador si el componente se desmonta antes de que el temporizador se complete
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="splash-container">
      <img src="/logo.png" alt="Veterinary Logo" className="splash-logo" />
      <h1>Welcome to Our Veterinary Clinic</h1>
    </div>
  );
};

export default Splash;
