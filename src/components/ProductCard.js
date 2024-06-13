// src/components/ProductCard.js
import React from 'react';
import './ProductCard.css';

const ProductCard = ({ name, price, image }) => {
  return (
    <div className="product-card">
      <img src={image} alt={name} className="product-image" />
      <div className="product-content">
        <h4>{name}</h4>
        <p>{price}</p>
        <button>Ver Más</button>
      </div>
    </div>
  );
};

export default ProductCard;
