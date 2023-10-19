import React, { useState, useEffect, useCallback } from 'react';
import { fetchCharacters } from './services/api';
import Header from './components/Header/Header';
import Pagination from './components/Pagination/Pagination';
import './styles/globalStyles.css';
import CharacterCards from './components/Characters/CharacterCards';
import ErrorFoundSearchBar from './components/Error/ErrorFoundSearchBar';

// URL del GIF de error.
const errorGifUrl = 'https://giphy.com/embed/XeS1TdPIAI0FSBcwXn';


const App = () => {
  // Estados para almacenar datos de personajes, 
  // término de búsqueda, página actual
  // total de páginas, errores y cache


  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [totalPages, setTotalPages] = useState(1);
  const [error, setError] = useState(null);
  const [cache, setCache] = useState({});

  // Función para obtener datos de personajes desde la API usando el término de búsqueda y el número de página.
  const fetchData = useCallback(async () => {
    try {

      // Verifica si los datos para la página actual y el término de búsqueda ya están en caché.
      if (cache[page] && cache[page].searchTerm === searchTerm) {
        setCharacters(cache[page].characters);
        setTotalPages(cache[page].totalPages);
        setError(null);
      } else {
        const response = await fetchCharacters(searchTerm, page);
        setCharacters(response.results);
        setTotalPages(response.info.pages);
        setError(null);

        // Almacena los datos recuperados en caché para futuras referencias.
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
      setCharacters([])
    }
  }, [searchTerm, page, cache]);

  // Funciones para manejar la paginación de incremento y decremento
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

  // Función para manejar la búsqueda de personajes por término.
  const handleSearch = (term) => {
    setSearchTerm(term);
    setPage(1);
  };

  // Efecto para cargar datos de personajes cuando el término de búsqueda o la página cambian.
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div className="App">
      <Header handleSearch={handleSearch} />
      {error ? (
        <>
          <h1>No lo se, Rick, parece falso </h1>
          <ErrorFoundSearchBar message="No encontramos ningún personaje con ese nombre, prueba a modificar la búsqueda" gifUrl={errorGifUrl} />
        </>
      ) : (
          <CharacterCards characters={characters} />
      )}
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