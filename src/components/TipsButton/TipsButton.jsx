import React, { useContext } from 'react';
import './TipsButton.scss';
//Import Context
import { CalculatorContext } from '../../Context/Calculator/CalculatorContext';

export const TipsButton = ({ item }) => {
  const { Calc } = useContext(CalculatorContext);

  const HandleTips = () => {
    Calc(item);
  };

  return (
    <>
      {item === 'Custom' ? (
        <input className="TipsButtonCustom" placeholder={item} />
      ) : (
        <button className="TipsButton" onClick={HandleTips}>
          {item}%
        </button>
      )}
    </>
  );
};


/*
const TipsButton = ({ item }) => {
  return <button>{item}%</button>;
};
*/
export default TipsButton;
