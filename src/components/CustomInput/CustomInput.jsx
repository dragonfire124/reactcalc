import React from 'react';
import './CustomInput.scss';
const CustomInput = ({ placeholder, icon, Total, setState }) => {
  const onChange = ({ target }) => {
    setState({})

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
