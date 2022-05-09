import React from 'react';
import './PersonalAmount.scss';
export const PersonalAmount = ({ label, data }) => {
  const total = 0;
  return (
    <div className="PersonalAmount">
      <div className="PersonalAmountText">
        <p>{label}</p>
        <p>/ person</p>
      </div>
      <div className="PersonalAmountPrice">
        <p>{data === 0 ? '$0.00 MXN' : `$ ${data} MXN`}</p>
      </div>
    </div>
  );
};
