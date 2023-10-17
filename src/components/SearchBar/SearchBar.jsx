import React from 'react';

const SearchBar = ({ handleSearch }) => {
  return (
    <input
      type="text"
      placeholder="Busca a tu personaje"
      onChange={e => handleSearch(e.target.value)}
    />
  );
};

export default SearchBar;