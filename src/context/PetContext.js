// src/context/PetContext.js
import React, { createContext, useState } from 'react';

export const PetContext = createContext();

export const PetProvider = ({ children }) => {
  const [pets, setPets] = useState([]);

  const addPet = (pet) => {
    setPets((prevPets) => [...prevPets, pet]);
  };

  const removePet = (petId) => {
    setPets((prevPets) => prevPets.filter(pet => pet.id !== petId));
  };

  const updatePet = (updatedPet) => {
    setPets((prevPets) =>
      prevPets.map((pet) => (pet.id === updatedPet.id ? updatedPet : pet))
    );
  };

  return (
    <PetContext.Provider value={{ pets, addPet, removePet, updatePet }}>
      {children}
    </PetContext.Provider>
  );
};
