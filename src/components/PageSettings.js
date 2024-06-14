import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import './PageSettings.css';

const PageSettings = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const handleThemeChange = (event) => {
    setTheme(event.target.value);
  };

  return (
    <div className="page-settings-container">
      <h2>Configuración de la Página</h2>
      <form>
        <label htmlFor="theme-select">Seleccione el tema:</label>
        <select id="theme-select" value={theme} onChange={handleThemeChange}>
          <option value="light">Claro</option>
          <option value="dark">Oscuro</option>
        </select>
      </form>
    </div>
  );
};

export default PageSettings;
