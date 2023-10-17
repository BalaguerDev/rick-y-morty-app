import * as actionTypes from './actionTypes';

export const setSearchTerm = term => ({
    type: actionTypes.SET_SEARCH_TERM,
    payload: term
})

export const setStatus = status => ({
    type: actionTypes.SET_STATUS,
    payload: status
  });
  
  export const setSpecies = species => ({
    type: actionTypes.SET_SPECIES,
    payload: species
  });
  
  export const setGender = gender => ({
    type: actionTypes.SET_GENDER,
    payload: gender
  });