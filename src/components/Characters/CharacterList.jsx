import React, { useState } from 'react';
import CharacterItem from './CharacterItem';
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
            <CharacterItem key={character.id} character={character} isSelected={selectedCharacter === character} onClick={handleCharacterClick} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default CharacterList;
