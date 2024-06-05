// src/components/AdoptPet.js
import React from 'react';

const AdoptPet = () => {
  return (
    <div className="page-container">
      <h2>Adoptar una Mascota</h2>
      <p>Encuentra a tu nuevo amigo peludo en nuestra lista de mascotas disponibles para adopción.</p>
      {/* Aquí iría el listado de mascotas disponibles para adopción */}
      <div className="pet-list">
        <div className="pet-item">
          <img src="https://via.placeholder.com/150" alt="Mascota" />
          <h3>Nombre: Fido</h3>
          <p>Edad: 2 años</p>
          <p>Especie y raza: Perro, Labrador</p>
          <p>Tamaño: Mediano</p>
          <button>Ver detalles</button>
        </div>
        {/* Añade más elementos de mascotas según sea necesario */}
      </div>
    </div>
  );
};

export default AdoptPet;
