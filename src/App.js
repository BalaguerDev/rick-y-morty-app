import React, { useState, useEffect } from 'react';
import { fetchCharacters } from './services/api';
import CharacterList from './components/CharacterList/CharacterList';
import Header from './components/Header/Header';
import './styles/globalStyles.css';

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [error, setError] = useState(null);

  const fetchData = async (pageNumber) => {
    try {
      const results = await fetchCharacters(searchTerm, pageNumber);
      setCharacters(results);
      setError(null);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchData(page);
  }, [searchTerm, page]); 

  const handleNextPage = () => {
    setPage(page + 1);
  };

  const handlePrevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  return (
    <div className="App">
      <Header handleSearch={setSearchTerm} />
      {error ? <p>{error}</p> : <CharacterList characters={characters} />}
      <button onClick={handlePrevPage} disabled={page === 1}>
        Anterior
      </button>
      <button onClick={handleNextPage}>Siguiente</button>
    </div>
  );
};

export default App;
