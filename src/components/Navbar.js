// src/components/Navbar.js
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import './Navbar.css';

const Navbar = () => {
  const { isLoggedIn, logout } = useContext(AuthContext);

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/" className="nav-link">
          <i className="nav-icon home-icon"></i>Inicio
        </Link>
        <Link to="/adopt" className="nav-link">
          Adoptar Mascotas
        </Link>
        <Link to="/services" className="nav-link">
          Servicios
        </Link>
        <Link to="/store" className="nav-link">
          Tienda
        </Link>
        <Link to="/report" className="nav-link">
          Reporte
        </Link>
      </div>
      <div className="navbar-center">
        <div className="search-container">
          <input type="text" className="search-input" placeholder="Buscar..." />
          <select className="filter-select">
            <option value="">Especie</option>
            <option value="dog">Perro</option>
            <option value="cat">Gato</option>
          </select>
          <select className="filter-select">
            <option value="">Raza</option>
          </select>
          <select className="filter-select">
            <option value="">Edad</option>
          </select>
          <select className="filter-select">
            <option value="">Tamaño</option>
          </select>
          <button className="search-button">Buscar</button>
        </div>
      </div>
      <div className="navbar-right">
        {isLoggedIn ? (
          <>
            <Link to="/profile" className="nav-link">
              <i className="nav-icon user-icon"></i>Perfil
            </Link>
            <Link to="/" className="nav-link" onClick={logout}>
              Salir
            </Link>
          </>
        ) : (
          <>
            <Link to="/settings" className="nav-link">
              Opciones
            </Link>
            <Link to="/login" className="nav-link">
              Iniciar Sesión
            </Link>
            <Link to="/register" className="nav-link">
              Registrarse
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
