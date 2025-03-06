import React, { createContext, useState, useContext, useEffect } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // Siempre comienza en light mode (false = light, true = dark)
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Verificar si hay una preferencia guardada al cargar
  useEffect(() => {
    const storedTheme = localStorage.getItem('dark-theme');
    if (storedTheme) {
      setIsDarkMode(storedTheme === 'true');
    }
  }, []);

  // Actualizar el DOM cuando cambia el modo
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark-theme');
      localStorage.setItem('dark-theme', 'true');
    } else {
      document.documentElement.classList.remove('dark-theme');
      localStorage.setItem('dark-theme', 'false');
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
