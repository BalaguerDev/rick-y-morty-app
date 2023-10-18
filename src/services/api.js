import axios from 'axios';

const baseURL = 'https://rickandmortyapi.com/api/';
const api = axios.create({ baseURL });

export const fetchCharacters = async (searchTerm, pageNumber) => {
  try {
    const response = await api.get('character', {
      params: {
        name: searchTerm,
        page: pageNumber, 
      }
    });
    const { results } = response.data;
    return results;
  } catch (error) {
    throw new Error('Error al obtener personajes.'); 
  }
};
