
// src/hooks/useMenuToggle.js
import { useState } from 'react';

const useMenuToggle = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the menu
  const toggleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return {
    isMenuOpen,
    toggleMenu,
  };
};

export default useMenuToggle;
