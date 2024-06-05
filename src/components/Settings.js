// src/components/Settings.js
import React from 'react';

const Settings = () => {
  return (
    <div className="page-container">
      <h2>Configuración</h2>
      <p>Personaliza tus preferencias de cuenta y notificaciones aquí.</p>
      <form>
        <label>
          Cambio de idioma:
          <select>
            <option value="es">Español</option>
            <option value="en">Inglés</option>
          </select>
        </label>
        <label>
          Notificaciones:
          <input type="checkbox" />
        </label>
        <label>
          Privacidad:
          <input type="checkbox" />
        </label>
        <label>
          Preferencias de cuenta:
          <input type="checkbox" />
        </label>
      </form>
    </div>
  );
};

export default Settings;
