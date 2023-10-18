import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons';
import '../../styles/searchBar.css';

const SearchBar = ({ handleSearch }) => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    const newValue = e.target.value;
    setInputValue(newValue);
    handleSearch(newValue);
  };

  const clearInput = () => {
    setInputValue('');
    handleSearch('');
  };

  return (
    <div className="search-bar-container">
      <input
        type="text"
        placeholder="Busca a tu personaje"
        name="buscador"
        onChange={handleChange}
        value={inputValue}
      />
      {inputValue ? (
        <FontAwesomeIcon icon={faTimes} className="searchbar-icon" onClick={clearInput} />
      ) : (
        <FontAwesomeIcon icon={faSearch} className="searchbar-icon" />
      )}
    </div>
  );
};

export default SearchBar;
