import React from 'react';

const CustomInput = ({ placeholder, icon, state, setState }) => {
  const onChange = ({ target }) => {
    console.log(target.value);
  };

  return (
    <div ClassName="CustomInput">
      <div ClassName="CustomInput-container">
        <div ClassName="CustomInput-content">
          <img src={icon === 'people'} alt={placeholder} />
          <input ClassName="InputCero" type="number" />
        </div>
      </div>
    </div>
  );
};

export default CustomInput;
