import React, { useState, useEffect } from 'react';
import { fetchCharacters } from './services/api';
import CharacterList from './components/CharacterList/CharacterList'; 
import Header from './components/Header/Header'; 
import Pagination from './components/Pagination/Pagination'; 
import './styles/globalStyles.css'; 

const App = () => {
  const [characters, setCharacters] = useState([]); 
  const [page, setPage] = useState(1); 
  const [searchTerm, setSearchTerm] = useState(''); 
  const [totalPages, setTotalPages] = useState(1); 
  const [error, setError] = useState(null); 

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
    setSearchTerm(term); // Actualiza el término de búsqueda
    setPage(1); // Restablece la página a 1 al realizar una nueva búsqueda
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        
        const response = await fetchCharacters(searchTerm, page);
        setCharacters(response.results); 
        setTotalPages(response.info.pages);
        setError(null); 
      } catch (error) {
        setError(error.message); 
      }
    };

    fetchData(); 
  }, [searchTerm, page]);


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
