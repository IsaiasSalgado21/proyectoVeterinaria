// src/components/PasswordRecovery.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Auth.css';

const PasswordRecovery = ({ onPasswordRecovery }) => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para la recuperación de contraseña
    onPasswordRecovery();
  };

  return (
    <div className="auth-container">
      <h2>Recuperar Contraseña</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Enviar</button>
        <p className="redirect-text">
            <Link to="/login" className="redirect-link">Iniciar Sesión</Link>
        </p>
        <p className="redirect-text">
            <Link to="/register" className="redirect-link">Registrarse</Link>
        </p>
      </form>
    </div>
  );
};

export default PasswordRecovery;
