import React from 'react';
import './Calculator.scss';
import Result from '../Result';
import FormTips from '../FormTips';

const Calculator = () => {
  return (
    <div className="Calculator">
      <div className="Calculator-container">
        <div className="Calculator-content">
          <FormTips />
          <Result />
        </div>
      </div>
    </div>
  );
};

export default Calculator;
