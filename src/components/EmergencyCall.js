// src/components/EmergencyCall.js
import React, { useState } from 'react';

const EmergencyCall = () => {
  const [emergency, setEmergency] = useState({
    reason: '',
    contactInfo: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmergency((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí manejarías la llamada de emergencia
    console.log(emergency);
  };

  return (
    <div className="page-container">
      <h2>Llamada de Urgencia</h2>
      <p>En caso de una emergencia, completa este formulario y nos pondremos en contacto contigo de inmediato.</p>
      <form onSubmit={handleSubmit}>
        <label>
          Motivo de la urgencia:
          <input
            type="text"
            name="reason"
            value={emergency.reason}
            onChange={handleChange}
          />
        </label>
        <label>
          Información de contacto:
          <input
            type="text"
            name="contactInfo"
            value={emergency.contactInfo}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Llamar ahora</button>
      </form>
    </div>
  );
};

export default EmergencyCall;
