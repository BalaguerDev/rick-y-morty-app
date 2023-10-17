import React from 'react';

const CharacterList = ({ characters }) => {
  return (
    <>
      <h2>Lista de personajes</h2>
      {characters.length === 0 ? (
        <p>No se encontraron personajes con esa búsqueda</p>
      ) : (
        <ul>
          {characters.map(character => (
            <div key={character.id}>
              <img src={character.image} alt={character.name} />
              <li>{character.name}</li>
              <li>{character.species}</li>
              <li>{character.location.name}</li>
            </div>
          ))}
        </ul>
      )}
    </>
  );
};

export default CharacterList;