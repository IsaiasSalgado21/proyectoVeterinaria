// src/components/Dashboard.js
import React from 'react';
import { Link } from 'react-router-dom';
import PetCard from './PetCard';
import './Dashboard.css';

import MaxLabrador from './img/MaxLabrador.jpg';
import LunaBeagle from './img/LunaBeagle.jpg';

import JuguetesGatos from './img/JuguetesGatos.jpg';
import AlimentoPerros from './img/AlimentoPerros.jpg';

// Datos de ejemplo para mascotas y productos
const pets = [
  { name: 'Max', age: '2 años', breed: 'Labrador', image: MaxLabrador },
  { name: 'Luna', age: '1 año', breed: 'Beagle', image: LunaBeagle }
  ];

const products = [
  { name: 'Comida para perros', price: '$20', image: AlimentoPerros },
  { name: 'Juguetes para gatos', price: '$15', image: JuguetesGatos }
];


const Dashboard = () => {
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
              species="Perro"
              breed={pet.breed}
              size="Mediano"
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
