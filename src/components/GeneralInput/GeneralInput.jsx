import React from 'react';
import CustomInput from '../CustomInput';

import './GeneralInput.scss';
const GeneralInput = ({ label, icon, Total = 0, setState }) => {
  return (
    <div className="GeneralInput">
      <div className="GeneralInput-container">
        <div className="GeneralInput-content">
          <p>{label}</p>
          <CustomInput icon={icon} Total={Total} setState={setState} />
        </div>
      </div>
    </div>
  );
};

export default GeneralInput;
