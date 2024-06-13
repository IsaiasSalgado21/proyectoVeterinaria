// src/components/Dashboard.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h2>Dashboard</h2>
      <p>Welcome to the Veterinary Clinic Dashboard.</p>
      
      <div className="table-container">
        <h3>Mascotas en Adopción</h3>
        <Link to="/store?category=adoption">
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
              <tr>
                <td>Max</td>
                <td>2 años</td>
                <td>Labrador</td>
                <td><button>Ver Más</button></td>
              </tr>
              <tr>
                <td>Luna</td>
                <td>1 año</td>
                <td>Beagle</td>
                <td><button>Ver Más</button></td>
              </tr>
            </tbody>
          </table>
        </Link>
      </div>

      <div className="table-container">
        <h3>Productos y Servicios</h3>
        <Link to="/store?category=products">
          <table>
            <thead>
              <tr>
                <th>Producto</th>
                <th>Precio</th>
                <th>Ver Más</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Comida para perros</td>
                <td>$20</td>
                <td><button>Ver Más</button></td>
              </tr>
              <tr>
                <td>Juguetes para gatos</td>
                <td>$15</td>
                <td><button>Ver Más</button></td>
              </tr>
            </tbody>
          </table>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
