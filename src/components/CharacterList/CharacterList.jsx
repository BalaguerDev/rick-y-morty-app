import React, { useState } from 'react';

import '../../styles/characterList.css';

const CharacterList = ({ characters }) => {
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  const handleCharacterClick = (character) => {
    setSelectedCharacter(selectedCharacter === character ? null : character);
  };

  return (
    <div className="character-list-container">
      <h2 className="character-list-title">Lista de personajes</h2>
      {characters.length === 0 ? (
        <p className="no-characters-message">No se encontraron personajes con esa búsqueda</p>
      ) : (
        <ul className="character-list">
          {characters.map((character) => (
            <li
              className={`character-item ${selectedCharacter === character ? 'selected' : ''}`}
              key={character.id}
              onClick={() => handleCharacterClick(character)}
            >
              <div className={`nameCharacter ${selectedCharacter === character ? 'hidden' : ''}`}>
                <h2 className="character-name">{character.name}</h2>
              </div>
              <div className="card-container">
                <div className="card-face">
                  <img className="character-image" src={character.image} alt={character.name} />
                  {selectedCharacter === character && (
                    <div className="character-details">
                      <h2>{character.name}</h2>
                      <p>Especie: {character.species}</p>
                      <p>Género: {character.gender}</p>
                      <p>Ubicación: {character.location.name}</p>
                      <p>Origen: {character.origin.name}</p>
                    </div>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CharacterList;
