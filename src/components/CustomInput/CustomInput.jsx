import React from 'react';

export const CustomInput = ({ placeholder, icon, state, setState }) => {
  const onChange = ({ target }) => {
    console.log(taget.value);
  };

  return (
    <div ClassName="CustomInput">
      <div ClassName="CustomInput-container">
        <div ClassName="CustomInput-content">
          <img src={icon === 'people'} alt={placeholder} />
          <input ClassName="InputCero" type ="number"/>
        </div>
      </div>
    </div>
  );
};
