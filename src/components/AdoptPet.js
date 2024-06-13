// src/components/AdoptPet.js
import React from 'react';
import PetCard from './PetCard';
import './AdoptPet.css';

const pets = [
  {
    name: 'Fido',
    age: '2 años',
    species: 'Perro',
    breed: 'Labrador',
    size: 'Mediano',
    image: 'https://via.placeholder.com/150'
  },
  {
    name: 'Whiskers',
    age: '3 años',
    species: 'Gato',
    breed: 'Siamés',
    size: 'Pequeño',
    image: 'https://via.placeholder.com/150'
  },
  // Añade más mascotas aquí
];

const AdoptPet = () => {
  return (
    <div className="page-container">
      <h2>Adoptar una Mascota</h2>
      <p>Encuentra a tu nuevo amigo peludo en nuestra lista de mascotas disponibles para adopción.</p>
      <div className="pet-list">
        {pets.map((pet, index) => (
          <PetCard
            key={index}
            name={pet.name}
            age={pet.age}
            species={pet.species}
            breed={pet.breed}
            size={pet.size}
            image={pet.image}
          />
        ))}
      </div>
    </div>
  );
};

export default AdoptPet;
