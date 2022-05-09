import React from 'react';

export const PersonalAmount = ({ label , data}) => {
  const total = 0;
  return (
    <div className="PersonalAmount">
      <div className="PersonalAmountText">
        <p>{label}</p>
        <p>/ person</p>
      </div>
      <div className="PersonalAmountPrice">
        <p>{total === 0 ? '$0.00 MXN' : `$ ${total} MXN`}</p>
      </div>
    </div>
  );
};
