// src/components/UserProfile.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './UserProfile.css';

const UserProfile = () => {
  const [userProfile, setUserProfile] = useState({
    username: '',
    age: '',
    gender: '',
    phone: '',
    firstName: '',
    lastName: '',
    history: '',
    email: '',
    address: '',
    profilePhoto: null,
    accountType: 'user',
    reports: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserProfile({ ...userProfile, [name]: value });
  };

  const handleFileChange = (e) => {
    setUserProfile({ ...userProfile, profilePhoto: e.target.files[0] });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica para enviar los datos del perfil actualizados
    console.log('Perfil actualizado:', userProfile);
  };

  const handleBack = () => {
    navigate(-1); // Navega hacia atrás en el historial
  };

  return (
    <div className="page-container">
      <h2>Perfil del Usuario</h2>
      <p>Actualiza tu información personal y detalles de contacto.</p>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre de Usuario:
          <input type="text" name="username" value={userProfile.username} onChange={handleChange} required />
        </label>
        <label>
          Edad:
          <input type="number" name="age" value={userProfile.age} onChange={handleChange} required />
        </label>
        <label>
          Sexo:
          <select name="gender" value={userProfile.gender} onChange={handleChange} required>
            <option value="">Seleccione</option>
            <option value="male">Masculino</option>
            <option value="female">Femenino</option>
            <option value="other">Otro</option>
          </select>
        </label>
        <label>
          Número de teléfono:
          <input type="tel" name="phone" value={userProfile.phone} onChange={handleChange} required />
        </label>
        <label>
          Nombres:
          <input type="text" name="firstName" value={userProfile.firstName} onChange={handleChange} required />
        </label>
        <label>
          Apellidos:
          <input type="text" name="lastName" value={userProfile.lastName} onChange={handleChange} required />
        </label>
        <label>
          Historial:
          <textarea name="history" value={userProfile.history} onChange={handleChange} required></textarea>
        </label>
        <label>
          Dirección de correo electrónico:
          <input type="email" name="email" value={userProfile.email} onChange={handleChange} required />
        </label>
        <label>
          Dirección:
          <input type="text" name="address" value={userProfile.address} onChange={handleChange} required />
        </label>
        <label>
          Foto de perfil:
          <input type="file" name="profilePhoto" onChange={handleFileChange} />
        </label>
        <label>
          Tipo de Cuenta:
          <select name="accountType" value={userProfile.accountType} onChange={handleChange} required>
            <option value="user">Usuario</option>
            <option value="admin">Administrador</option>
          </select>
        </label>
        <label>
          Reportes:
          <textarea name="reports" value={userProfile.reports} onChange={handleChange} required></textarea>
        </label>
        <button type="submit">Guardar Cambios</button>
      </form>
      <button className="back-button" onClick={handleBack}>Regresar</button>
    </div>
  );
};

export default UserProfile;
