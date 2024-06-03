import React from 'react';

const Navbar = ({ onLogout }) => {
  return (
    <nav className="navbar">
      <ul>
        <li><a href="#dashboard">Dashboard</a></li>
        <li><a href="#adoption">Adoption</a></li>
        <li><button onClick={onLogout}>Logout</button></li>
      </ul>
    </nav>
  );
};

export default Navbar;
