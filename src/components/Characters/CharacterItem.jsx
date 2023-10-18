import React from 'react';
import CharacterDetails from './CharacterDetails';
import { faVenus, faMars, faDna, faHeart, faSkull, faVirusCovid, faUser, faSpaghettiMonsterFlying, faPaw, faRobot, faDragon } from '@fortawesome/free-solid-svg-icons';

const CharacterItem = ({ character, isSelected, onClick }) => {
  const { name, image } = character;
  const statusIcons = {
    Alive: faHeart,
    Dead: faSkull,
    unknown: faVirusCovid,
  };

  const speciesIcons = {
    Human: faUser,
    Alien: faSpaghettiMonsterFlying,
    Animal: faPaw,
    Robot: faRobot,
    unknown: faDragon,
  };

  const genderIcons = {
    Male: faMars,
    Female: faVenus,
    unknown: faDna,
  };

  const statusIcon = statusIcons[character.status] || statusIcons.unknown;
  const speciesIcon = speciesIcons[character.species] || speciesIcons.unknown;
  const genderIcon = genderIcons[character.gender] || genderIcons.unknown;

  return (
    <li className={`character-item ${isSelected ? 'selected' : ''}`} onClick={() => onClick(character)}>
      <div className={`nameCharacter ${isSelected ? 'hidden' : ''}`}>
        <h2 className="character-name">{name}</h2>
      </div>
      <div className="card-container">
        <div className="card-face">
          <img className="character-image" src={image} alt={name} />
          {isSelected && <CharacterDetails character={character} statusIcon={statusIcon} speciesIcon={speciesIcon} genderIcon={genderIcon} />}
        </div>
      </div>
    </li>
  );
};

export default CharacterItem;
