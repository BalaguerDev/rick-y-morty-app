import React, { useState, useEffect, useCallback } from 'react';
import { fetchCharacters } from './services/api';
import Header from './components/Header/Header';
import Pagination from './components/Pagination/Pagination';
import './styles/globalStyles.css';
import CharacterList from './components/Characters/CharacterList';

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [totalPages, setTotalPages] = useState(1);
  const [error, setError] = useState(null);
  const [cache, setCache] = useState({});

  const fetchData = useCallback(async () => {
    try {
      if (cache[page] && cache[page].searchTerm === searchTerm) {
        setCharacters(cache[page].characters);
        setTotalPages(cache[page].totalPages);
        setError(null);
      } else {
        const response = await fetchCharacters(searchTerm, page);
        setCharacters(response.results);
        setTotalPages(response.info.pages);
        setError(null);

        setCache((prevCache) => ({
          ...prevCache,
          [page]: {
            searchTerm: searchTerm,
            characters: response.results,
            totalPages: response.info.pages,
          },
        }));
      }
    } catch (error) {
      setError(error.message);
    }
  }, [searchTerm, page, cache]);

  const handleNextPage = () => {
    if (page < totalPages) {
      setPage(page + 1);
    }
  };

  const handlePrevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
    setPage(1);
  };

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div className="App">
      <Header handleSearch={handleSearch} />
      {error ? <p>{error}</p> : <CharacterList characters={characters} />}
      <Pagination
        page={page}
        totalPages={totalPages}
        handlePrevPage={handlePrevPage}
        handleNextPage={handleNextPage}
        setPage={setPage}
      />
    </div>
  );
};

export default App;
