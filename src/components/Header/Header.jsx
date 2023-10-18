import React, { useState, useEffect } from 'react';
import Logo from '../../assets/img/Rick_and_Morty.svg.png';
import SearchBar from '../SearchBar/SearchBar';
import '../../styles/header.css';

const Header = ({ handleSearch }) => {
  const [isSticky, setIsSticky] = useState(false);
  const [isShrunk, setIsShrunk] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 0) {
        setIsSticky(true);
        setIsShrunk(true);
      } else {
        setIsSticky(false);
        setIsShrunk(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`header ${isSticky ? 'sticky' : ''}`}>
      <img
        src={Logo}
        alt="Logo Rick y Morty"
        className={isShrunk ? 'shrunk' : ''} // Agrega una clase cuando la imagen se ha encogido
      />
      <SearchBar handleSearch={handleSearch} className="searchBar" />
    </div>
  );
};

export default Header;
