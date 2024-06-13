// src/components/Footer.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); // Navegar hacia atrás en el historial
  };

  return (
    <footer className="footer">
      <div className="footer-left">
        <button onClick={handleBack} className="footer-button">Regresar</button>
      </div>
      <div className="footer-right">
        <a href="/contact" className="footer-link">Contacto</a>
        <a href="/privacy-policy" className="footer-link">Política de Privacidad</a>
        <a href="/terms-of-service" className="footer-link">Términos de Servicio</a>
      </div>
    </footer>
  );
};

export default Footer;
