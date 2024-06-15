// src/components/AdoptPet.js
import React, { useContext }  from 'react';
import { PetContext } from '../context/PetProvider';

import PetCard from './PetCard';
import './AdoptPet.css';

const AdoptPet = () => {
  const { pets } = useContext(PetContext);

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
