import * as actionTypes from './actionTypes';

export const setCharacters = characters => ({
  type: actionTypes.SET_CHARACTERS,
  payload: characters
});

export const setError = error => ({
  type: actionTypes.SET_ERROR,
  payload: error
});