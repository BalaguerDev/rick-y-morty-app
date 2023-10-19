import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faEarthEurope, faVenus, faMars, faDna, faHeart, faSkull, faVirusCovid, faUser, faSpaghettiMonsterFlying, faPaw, faRobot, faDragon } from '@fortawesome/free-solid-svg-icons';
import '../../styles/characterList.css';

const CharacterCards = ({ characters }) => {
    const [selectedCharacter, setSelectedCharacter] = useState(null);

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
    };

    const genderIcons = {
        Male: faMars,
        Female: faVenus,
        unknown: faDna,
    };

    const handleCharacterClick = (character) => {
        setSelectedCharacter(selectedCharacter === character ? null : character);
    };

    return (
        <div className="wrapper">
            <h1>Lista de Personajes</h1>
            <div className="cols">
                {characters.map((character) => {
                    const isSelected = selectedCharacter === character;
                    const selectedSpeciesIcon = speciesIcons[character.species] || faDragon;
                    return (
                        <div
                            key={character.id}
                            className={`col ${isSelected ? 'hover' : ''}`}
                            onClick={() => handleCharacterClick(character)}
                        >
                            <div className="container">
                                <div className={`front ${isSelected ? 'selected' : ''}`} style={{ backgroundImage: `url(${character.image})` }}>
                                    <div className="inner">
                                        <div className="titleNameCharacter">
                                            <p>{character.name}</p>
                                            <span>
                                                <FontAwesomeIcon icon={character.status === 'unknown' ? faVirusCovid : statusIcons[character.status]} /> - <FontAwesomeIcon icon={genderIcons[character.gender]} /> {character.gender}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className={`back ${isSelected ? 'selected' : ''}`} style={{ backgroundImage: `url(${character.image})` }}>
                                    <div className="inner">
                                        <img src={character.image} alt={character.name} />
                                        <p>ESPECIE:</p>
                                        <span>
                                            <FontAwesomeIcon icon={selectedSpeciesIcon} /> {character.species}
                                        </span>
                                        <p>LOCALIZACIÓN:</p>
                                        <span>
                                            <FontAwesomeIcon icon={faMapMarkerAlt} /> {character.location.name}
                                        </span>
                                        <p>ORIGEN:</p>
                                        <span>
                                            <FontAwesomeIcon icon={faEarthEurope} /> {character.origin.name}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default CharacterCards;
