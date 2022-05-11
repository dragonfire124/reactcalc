import React from 'react';
import './CustomInput.scss';
const CustomInput = ({ placeholder, icon, state, setState }) => {
  const key = icon === 'people' ? 'Person' : 'Total';
  const onChange = ({ target }) => {
    setState({ ...state, ` ${key}`: target.value });
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
