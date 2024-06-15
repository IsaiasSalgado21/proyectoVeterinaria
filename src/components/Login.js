// src/components/Login.js
import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import Loading from './Loading';
import './Auth.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      login(email, password);
      setIsLoading(false);
      navigate('/dashboard');
    }, 2000);
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
