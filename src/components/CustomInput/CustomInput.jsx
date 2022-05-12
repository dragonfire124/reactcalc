import React from 'react';
import './CustomInput.scss';
import { CalculatorContext } from '../../Context/Calculator/CalculatorContext';

export const CustomInput = ({ placeholder, icon, name }) => {
  const Context = useContext(CalculatorContext);

  const onChange = ({ target }) => {
    Context.setInfo(target.value, target.name);
  };

  return (
    <div className="CustomInput">
      <div className="CustomInput-container">
        <div className="CustomInput-content">
          <img src={icon === 'people'} alt={placeholder} />
          <input className="InputCero" type="number" onChange={onChange} />
        </div>
      </div>
    </div>
  );
};

export default CustomInput;
