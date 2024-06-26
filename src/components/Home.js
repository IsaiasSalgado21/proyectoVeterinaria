import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
const Home = () => {
  return (
    <div className="page-container">
      <h1>Bienvenido a Pet Paradise</h1>
      <p>Explora nuestros servicios y encuentra a tu nuevo amigo peludo.</p>
      <p>En Pet Paradise, nos dedicamos a conectar a las mascotas necesitadas con familias amorosas. Ya sea que estés buscando adoptar una nueva mascota, necesites servicios veterinarios, o quieras comprar productos para tus mascotas, ¡tenemos todo lo que necesitas!</p>
      <div className="button-container">
        <Link to="/register" className="btn">Register</Link>
        <Link to="/login" className="btn">Login</Link>
      </div>
    </div>
  );
};

export default Home;
