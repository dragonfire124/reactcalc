//importa comopnonte
import React, { createContext, useState } from 'react';

//declarar crea dos componentes
export const CalculatorContext = createContext();

const initialState = {
  Total: 0,
  Amount: 0,
  Tips: 0,
  TipsAmount: 0,
  Person: 1,
  tipsByPerson: 0,
  AmountByPerson: 0,
};

export const CalculatorProvider = ({ children }) => {
  const [state, setState] = useState(initialState);

  const setInfo = (Info, name) => {
    setState({ ...state, [name]: info });
  };
  return (
    <CalculatorContext.Provider value={{ state, setInfo }}>
      {children}
    </CalculatorContext.Provider>
  );
};
