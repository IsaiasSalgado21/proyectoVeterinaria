// src/components/Dashboard.js
import React, { useContext } from 'react';
import PetCard from './PetCard';
import './Dashboard.css';
import { PetContext } from '../contexts/PetProvider';

import JuguetesGatos from './img/JuguetesGatos.jpg';
import AlimentoPerros from './img/AlimentoPerros.jpg';

const products = [
  { name: 'Comida para perros', price: '$20', image: AlimentoPerros },
  { name: 'Juguetes para gatos', price: '$15', image: JuguetesGatos }
];

const Dashboard = () => {
  const { pets } = useContext(PetContext);

  return (
    <div className="dashboard-container">
      <h2>Dashboard</h2>
      <p>Welcome to the Veterinary Clinic Dashboard.</p>

      <div className="section">
        <h3>Mascotas en Adopción</h3>
        <div className="card-list">
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

      <div className="section">
        <h3>Productos y Servicios</h3>
        <div className="card-list">
          {products.map((product, index) => (
            <div key={index} className="product-card">
              <img src={product.image} alt={product.name} className="product-image" />
              <div className="product-content">
                <h4>{product.name}</h4>
                <p>{product.price}</p>
                <button>Ver Más</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
