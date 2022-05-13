//importa comopnonte
import React, { createContext, useState } from 'react';

//declarar crea dos componentes
export const CalculatorContext = createContext();

const initalState = {
  Total: 0,
  Amount: 0,
  Tips: 0,
  TipsAmount: 0,
  Person: 1,
  tipsByPerson: 0,
  AmountByPerson: 0,
};

export const CalculatorProvider = ({ children }) => {
  const [state, setState] = useState(initalState);

  const setInfo = (info, name) => {
    setState({
      ...state,
      [name]: info,
    });
  };

  const Calc = (Tips) => {
    const TipsAmount = state.Amount * (Tips / 100);
    const Total = Number(state.Amount) + Number(TipsAmount);
    const tipsByPerson = TipsAmount / state.Person;
    const AmountByPerson = Total / state.Person;

    setState({
      ...state,
      Total,
      tipsByPerson,
      AmountByPerson,
      TipsAmount,
    });
  };

  return (
    <CalculatorContext.Provider
      value={{
        Person: state.Person,
        Amount: state.Amount,
        tipsByPerson: state.tipsByPerson,
        AmountByPerson: state.AmountByPerson,
        setInfo,
        Calc,
      }}
    >
      {children}
    </CalculatorContext.Provider>
  );
};

/*
export const CalculatorProvider = ({ children }) => {
  const [state, setState] = useState(initialState);

  const setInfo = (info, name) => {
    setState({ ...state, [name]: info });
  };
  return (
    <CalculatorContext.Provider value={{ state, setInfo }}>
      {children}
    </CalculatorContext.Provider>
  );
};

*/
