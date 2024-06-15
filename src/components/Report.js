// src/components/Report.js
import React, { useState, useContext } from 'react';
import { ReportContext } from '../context/ReportContext';
import './Report.css';

const Report = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [report, setReport] = useState({
    type: '',
    description: '',
    contactInfo: '',
    photo: null,
  });

  const { addReport, reports } = useContext(ReportContext);

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };

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
    addReport(report);
    setReport({
      type: '',
      description: '',
      contactInfo: '',
      photo: null,
    });
  };

  return (
    <div className="page-container">
      {!selectedOption ? (
        <div className="button-container">
          <button onClick={() => handleOptionSelect('report')} className="option-button">Enviar Reporte</button>
          <button onClick={() => handleOptionSelect('adopt')} className="option-button">Dar en Adopción</button>
        </div>
      ) : (
        <>
          <h2>{selectedOption === 'report' ? 'Enviar Reporte' : 'Dar en Adopción'}</h2>
          <p>
            {selectedOption === 'report'
              ? 'Utiliza este formulario para reportar cualquier problema o situación urgente relacionada con nuestras mascotas.'
              : 'Utiliza este formulario para dar en adopción una mascota.'}
          </p>
          <form onSubmit={handleSubmit}>
            <label>
              Tipo de reporte:
              <input
                type="text"
                name="type"
                value={report.type}
                onChange={handleChange}
                placeholder={selectedOption === 'report' ? 'Tipo de reporte' : 'Tipo de adopción'}
              />
            </label>
            <label>
              Descripción del problema:
              <textarea
                name="description"
                value={report.description}
                onChange={handleChange}
                placeholder={selectedOption === 'report' ? 'Descripción del problema' : 'Descripción de la mascota'}
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
            <button type="submit">Enviar {selectedOption === 'report' ? 'reporte' : 'solicitud de adopción'}</button>
          </form>
          <div className="reports-list">
            <h3>Reportes enviados</h3>
            {reports.map((rep, index) => (
              <div key={index} className="report-item">
                <p><strong>Tipo:</strong> {rep.type}</p>
                <p><strong>Descripción:</strong> {rep.description}</p>
                <p><strong>Contacto:</strong> {rep.contactInfo}</p>
                {rep.photo && <img src={URL.createObjectURL(rep.photo)} alt="Foto del reporte" />}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Report;
