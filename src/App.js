import React, { useState, useEffect } from 'react';
import { fetchCharacters } from './services/api';
import CharacterList from './components/CharacterList/CharacterList';
import SearchBar from './components/SearchBar/SearchBar';

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const results = await fetchCharacters(searchTerm);
        setCharacters(results);
        setError(null);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, [searchTerm]);

  return (
    <div className="App">
      <SearchBar handleSearch={setSearchTerm} />
      {error ? <p>{error}</p> : <CharacterList characters={characters} />}
    </div>
  );
};

export default App;
