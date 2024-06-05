// src/components/Report.js
import React, { useState } from 'react';

const Report = () => {
  const [report, setReport] = useState({
    type: '',
    description: '',
    contactInfo: '',
    photo: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReport((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setReport((prevState) => ({
      ...prevState,
      photo: e.target.files[0],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí manejarías el envío del reporte
    console.log(report);
  };

  return (
    <div className="page-container">
      <h2>Enviar Reporte</h2>
      <p>Utiliza este formulario para reportar cualquier problema o situación urgente relacionada con nuestras mascotas.</p>
      <form onSubmit={handleSubmit}>
        <label>
          Tipo de reporte:
          <input
            type="text"
            name="type"
            value={report.type}
            onChange={handleChange}
          />
        </label>
        <label>
          Descripción del problema:
          <textarea
            name="description"
            value={report.description}
            onChange={handleChange}
          />
        </label>
        <label>
          Información de contacto:
          <input
            type="text"
            name="contactInfo"
            value={report.contactInfo}
            onChange={handleChange}
          />
        </label>
        <label>
          Foto (opcional):
          <input type="file" onChange={handleFileChange} />
        </label>
        <button type="submit">Enviar reporte</button>
      </form>
    </div>
  );
};

export default Report;
