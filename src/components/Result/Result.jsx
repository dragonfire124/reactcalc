import React from 'react';
import './Result.scss';

const Result = ({ children }) => {
  return (
    <div className="Result">
      <div className="Result-container">{children}</div>
    </div>
  );
};

export default Result;
