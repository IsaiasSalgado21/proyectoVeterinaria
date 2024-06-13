// src/components/Register.js
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import './Auth.css';

const Register = ({ onRegister }) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica de registro
    if (password === confirmPassword) {
      onRegister();
    } else {
      alert('Passwords do not match!');
    }
  };

  return (
    <div className="auth-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="name"
          placeholder="Nombre de Usuario"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
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
        <input
          type="password"
          placeholder="Confirmar Contraseña"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button type="submit">Registrarse</button>
        <p className="redirect-text">
            <Link to="/login" className="redirect-link">Iniciar Sesion</Link>
        </p>
        <p className="redirect-text">
            <Link to="/login" className="redirect-link">Recuperar contraseña</Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
