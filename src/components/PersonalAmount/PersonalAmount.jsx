import React, { useContext } from 'react';
import './PersonalAmount.scss';

import { CalculatorContext } from '../../Context/Calculator/CalculatorContext';

export const PersonalAmount = ({ label }) => {
  const { AmountByPerson, tipsByPerson } = useContext;
  CalculatorContext;

  const show = label == 'Tips' ? tipsByPerson : AmountByPerson;
  return (
    <div className="PersonalAmount">
      <div className="PersonalAmountText">
        <p>{label}</p>
        <p>/ person</p>
      </div>
      <div className="PersonalAmountPrice">
        <p>{show ==0? ' $0.00': show}</p>
      </div>
    </div>
  );
};
