// src/components/Store.js
import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import './Store.css';

const Store = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const category = searchParams.get('category');

  const [selectedPet, setSelectedPet] = useState(null);

  const petsForAdoption = [
    { id: 1, name: 'Max', age: '2 años', breed: 'Labrador', image: '/images/max.jpg', gender: 'Macho', size: 'Grande', weight: '25kg', vaccination: 'Completa', species: 'Perro' },
    { id: 2, name: 'Luna', age: '1 año', breed: 'Beagle', image: '/images/luna.jpg', gender: 'Hembra', size: 'Mediana', weight: '15kg', vaccination: 'Parcial', species: 'Perro' },
  ];

  const productsAndServices = [
    { id: 1, name: 'Comida para perros', price: '$20' },
    { id: 2, name: 'Juguetes para gatos', price: '$15' },
  ];

  const handlePetClick = (pet) => {
    setSelectedPet(pet);
  };

  useEffect(() => {
    setSelectedPet(null); // Reset selected pet when category changes
  }, [category]);

  return (
    <div className="store-container">
      <h2>Pet Store</h2>

      {category === 'adoption' && (
        <div>
          <h3>Mascotas en Adopción</h3>
          <table>
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Edad</th>
                <th>Raza</th>
                <th>Ver Más</th>
              </tr>
            </thead>
            <tbody>
              {petsForAdoption.map(pet => (
                <tr key={pet.id}>
                  <td>{pet.name}</td>
                  <td>{pet.age}</td>
                  <td>{pet.breed}</td>
                  <td><button onClick={() => handlePetClick(pet)}>Ver Más</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {category === 'products' && (
        <div>
          <h3>Productos y Servicios</h3>
          <table>
            <thead>
              <tr>
                <th>Producto</th>
                <th>Precio</th>
                <th>Ver Más</th>
              </tr>
            </thead>
            <tbody>
              {productsAndServices.map(product => (
                <tr key={product.id}>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                  <td><button>Ver Más</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {selectedPet && (
        <div className="pet-details">
          <h3>Detalles de {selectedPet.name}</h3>
          <img src={selectedPet.image} alt={selectedPet.name} />
          <p><strong>Edad:</strong> {selectedPet.age}</p>
          <p><strong>Sexo:</strong> {selectedPet.gender}</p>
          <p><strong>Tamaño:</strong> {selectedPet.size}</p>
          <p><strong>Peso:</strong> {selectedPet.weight}</p>
          <p><strong>Vacunación:</strong> {selectedPet.vaccination}</p>
          <p><strong>Raza:</strong> {selectedPet.breed}</p>
          <p><strong>Especie:</strong> {selectedPet.species}</p>
          <button className="details-button">Ver Más Detalles</button>
        </div>
      )}
    </div>
  );
};

export default Store;
