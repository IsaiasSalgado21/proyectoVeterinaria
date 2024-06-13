// src/components/Login.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Auth.css';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica de autenticación
    onLogin();
  };

  return (
    <div className="auth-container">
      <h2>Inicio de Sesion</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Iniciar Sesion</button>
        <p className="redirect-text">
            <Link to="/register" className="redirect-link">Registrarse</Link>
        </p>
        <p className="redirect-text">
            <Link to="/register" className="redirect-link">Recuperar contraseña</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;
