import React from 'react';
import './Calculator.scss';
import Result from '../Result';
import FormTips from '../FormTips';

const Calculator = () => {
  return (
    <div className="Calculator">
      <Result />
      <FormTips />
    </div>
  );
};

export default Calculator;
