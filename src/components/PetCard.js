// src/components/PetCard.js
import React from 'react';
import './PetCard.css';

const PetCard = ({ name, age, species, breed, size, image }) => {
  return (
    <div className="pet-card">
      <img src={image} alt={name} className="pet-card-image" />
      <div className="pet-card-content">
        <h3>{name}</h3>
        <p>Edad: {age}</p>
        <p>Especie y raza: {species}, {breed}</p>
        <p>Tamaño: {size}</p>
        <button>Ver detalles</button>
      </div>
    </div>
  );
};

export default PetCard;
