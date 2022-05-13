import React from 'react';
import './FormTips.scss';
import GeneralInput from '../GeneralInput';

const FormTips = ({ children }) => {
  return (
    <div className="FormTips">
      <div className="FormTips-Container">
        <div className="FormTips-Content">{children}</div></div>
    </div>
  );
};

export default FormTips;
