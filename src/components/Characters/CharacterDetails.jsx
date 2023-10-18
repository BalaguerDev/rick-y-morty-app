import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faGlobe, faEarthEurope } from '@fortawesome/free-solid-svg-icons';

const CharacterDetails = ({ character, statusIcon, speciesIcon, genderIcon }) => {
  const { name, status, species, gender, type, location, origin } = character;

  return (
    <div className="character-details">
      <h2>
        {name}
        <br />
        <span>
          <FontAwesomeIcon icon={statusIcon} />
          &nbsp;{status}
        </span>
      </h2>
      <p>
        {species}&nbsp;
        <FontAwesomeIcon icon={speciesIcon} />
      </p>
      <p>
        {gender}&nbsp;
        <FontAwesomeIcon icon={genderIcon} />
      </p>
      <hr />
      {type && (
        <div className="detailsLocationOrigin">
          <p>TIPO:</p>
          <p> {type}</p>
        </div>

      )}
      <div className="detailsLocationOrigin">
        <p>LOCALIZACIÓN:</p>
        <p>
          <FontAwesomeIcon icon={faMapMarkerAlt} /> {location.name}
        </p>
      </div>
      <div className="detailsLocationOrigin">
        <p>ORIGEN:</p>
        <p>
          <FontAwesomeIcon icon={faEarthEurope} /> {origin.name}
        </p>
      </div>
    </div>
  );
};

export default CharacterDetails;