import axios from 'axios';

const baseURL = 'https://rickandmortyapi.com/api/';
const api = axios.create({ baseURL });

export const fetchCharacters = async (searchTerm) => {
  try {
    const response = await api.get('character', { params: { name: searchTerm } });
    const { results } = response.data;
    return results;
  } catch (error) {
    throw new Error('No se encontraron personajes con esa búsqueda');
  }
};