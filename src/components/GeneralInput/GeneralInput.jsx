import React from 'react';
import CustomInput from '../CustomInput';

import './GeneralInput.scss';
const GeneralInput = ({ label, icon, name }) => {
  return (
    <div className="GeneralInput">
      <div className="GeneralInput-container">
        <div className="GeneralInput-content">
          <p>{label}</p>
          <CustomInput icon={icon} name={name} />
        </div>
      </div>
    </div>
  );
};

export default GeneralInput;
