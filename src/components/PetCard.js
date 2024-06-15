// src/components/PetCard.js
import React, { useState } from 'react';
import './PetCard.css';

const PetCard = ({ name, age, species, breed, size, image }) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => setShowDetails(!showDetails);

  return (
    <div className="pet-card">
      <img src={image} alt={name} className="pet-card-image" />
      <div className="pet-card-content">
        <h3>{name}</h3>
        <p>Edad: {age}</p>
        <p>Especie y raza: {species}, {breed}</p>
        <p>Tamaño: {size}</p>
        <button onClick={toggleDetails}>
          {showDetails ? 'Ocultar detalles' : 'Ver detalles'}
        </button>
        {showDetails && (
          <div className="pet-card-details">
            <p>Información adicional sobre {name}...</p>
            <button onClick={() => alert('¡Mascota adoptada!')}>Adoptar</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default PetCard;
