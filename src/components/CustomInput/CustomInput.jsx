import React from 'react';
import './CustomInput.scss';
const CustomInput = ({ placeholder, icon, state, setState }) => {
  const onChange = ({ target }) => {
    console.log(target.value);
  };

  return (
    <div className="CustomInput">
      <div className="CustomInput-container">
        <div className="CustomInput-content">
          <img src={icon === 'people'} alt={placeholder} />
          <input className="InputCero" type="number" />
        </div>
      </div>
    </div>
  );
};

export default CustomInput;
