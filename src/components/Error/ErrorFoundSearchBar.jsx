import React from 'react';

const ErrorFoundSearchBar = ({ message, gifUrl }) => (
  <div className="error-container">
    <div className="gifError">
      <iframe
        src={gifUrl}
        style={{ pointerEvents: 'none', borderRadius: '20px' }}
        frameBorder="0"
        title="error-gif"
      ></iframe>
    </div>
    <p className="error-message">{message}</p>
  </div>
);

export default ErrorFoundSearchBar;