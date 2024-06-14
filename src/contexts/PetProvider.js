// src/contexts/PetProvider.js
import React, { createContext, useState } from 'react';

export const PetContext = createContext();

export const PetProvider = ({ children }) => {
  const [pets, setPets] = useState([
    {
      name: 'Max',
      age: '2 años',
      species: 'Perro',
      breed: 'Labrador',
      size: 'Mediano',
      image: require('../components/img/MaxLabrador.jpg').default
    },
    {
      name: 'Luna',
      age: '1 año',
      species: 'Perro',
      breed: 'Beagle',
      size: 'Mediano',
      image: require('../components/img/LunaBeagle.jpg').default
    },
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
  ]);

  return (
    <PetContext.Provider value={{ pets, setPets }}>
      {children}
    </PetContext.Provider>
  );
};
