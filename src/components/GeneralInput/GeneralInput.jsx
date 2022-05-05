import React from 'react';
import { CustomInput } from '../CustomInput';
export const GeneralInput = ({ label, icon }) => {
  return (
    <div className="GeneralInput">
      <div className="GeneralInput-container">
        <div className="GeneralInput-content">
          <p>{label}</p>
          <CustomInput icon={icon} />
        </div>
      </div>
    </div>
  );
};
