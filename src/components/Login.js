// src/components/Login.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Loading from './Loading';
import './Auth.css';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simular lógica de autenticación
    setTimeout(() => {
      onLogin();
      setIsLoading(false);
      navigate('/dashboard'); // Redirecciona al Dashboard
    }, 2000); // Simula un retraso de 2 segundos para la autenticación
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="auth-container">
      <h2>Inicio de Sesión</h2>
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
        <button type="submit">Iniciar Sesión</button>
      </form>
      <p className="redirect-text">
        <Link to="/register" className="redirect-link">Registrarse</Link>
      </p>
      <p className="redirect-text">
        <Link to="/passrec" className="redirect-link">Recuperar Contraseña</Link>
      </p>
    </div>
  );
};

export default Login;
