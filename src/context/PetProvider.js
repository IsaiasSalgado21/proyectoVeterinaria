// src/context/PetProvider.js
import React, { createContext, useState } from 'react';
import MaxLabrador from '../components/img/MaxLabrador.jpg';
import LunaBeagle from '../components/img/LunaBeagle.jpg';
import GatoFido from '../components/img/GatoFido.jpg';
import GatoWhiskers from '../components/img/GatoWhiskers.jpg';
export const PetContext = createContext();

export const PetProvider = ({ children }) => {
  const [pets, setPets] = useState([
    {
      name: 'Max',
      age: '2 años',
      species: 'Perro',
      breed: 'Labrador',
      size: 'Mediano',
      image: MaxLabrador,
    },
    {
      name: 'Luna',
      age: '1 año',
      species: 'Perro',
      breed: 'Beagle',
      size: 'Mediano',
      image: LunaBeagle,
    },
    {
      name: 'Fido',
      age: '2 años',
      species: 'Gato',
      breed: 'Siamés',
      size: 'Mediano',
      image: GatoFido,
    },
    {
      name: 'Whiskers',
      age: '3 años',
      species: 'Gato',
      breed: 'Siamés',
      size: 'Pequeño',
      image: GatoWhiskers,
    },
  ]);

  return (
    <PetContext.Provider value={{ pets, setPets }}>
      {children}
    </PetContext.Provider>
  );
};
