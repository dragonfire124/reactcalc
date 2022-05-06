import React from 'react';
import './Calculator.scss';
import Result from '../Result';
import FormTips from '../FormTips';

const Calculator = ({ children }) => {
  return (
    <div className="Calculator">
      <div className="Calculator-container">
        <div className="Calculator-content">{children}</div>
      </div>
    </div>
  );
};

export default Calculator;
