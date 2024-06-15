// src/context/AuthContext.js
import React, { createContext, useState, useEffect } from 'react';

// Crea el contexto
export const AuthContext = createContext();

// Define el proveedor del contexto
export const AuthProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  const register = (userData) => {
    setUsers([...users, userData]);
    setCurrentUser(userData);
  };

  const login = (email, password) => {
    const user = users.find((user) => user.email === email && user.password === password);
    if (user) {
      setCurrentUser(user);
    } else {
      alert('Email or password incorrect');
    }
  };

  const logout = () => {
    setCurrentUser(null);
  };

  return (
    <AuthContext.Provider value={{ users, currentUser, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
