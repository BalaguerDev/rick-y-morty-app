import React from 'react';
import Logo from '../../assets/img/Rick_and_Morty.svg.png'
import SearchBar from '../SearchBar/SearchBar';
import '../../styles/header.css'

const Header = ({ handleSearch }) => {
  return (
    <div className="header">
        <img src={Logo} alt="Logo Rick y Morty" />
        <SearchBar handleSearch={handleSearch} className="searchBar" />
    </div>
  );
};

export default Header;