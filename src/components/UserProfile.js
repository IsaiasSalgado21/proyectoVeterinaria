// src/components/UserProfile.js
import React from 'react';

const UserProfile = () => {
  return (
    <div className="page-container">
      <h2>Perfil del Usuario</h2>
      <p>Actualiza tu información personal y detalles de contacto.</p>
      <form>
        <label>
          Nombre:
          <input type="text" name="name" />
        </label>
        <label>
          Dirección de correo electrónico:
          <input type="email" name="email" />
        </label>
        <label>
          Número de teléfono:
          <input type="tel" name="phone" />
        </label>
        <label>
          Dirección:
          <input type="text" name="address" />
        </label>
        <label>
          Foto de perfil:
          <input type="file" name="profilePhoto" />
        </label>
      </form>
    </div>
  );
};

export default UserProfile;
