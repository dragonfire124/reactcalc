import React from 'react';

export const PersonalAmount = () => {
  const total = 0;
  return (
    <div className="PersonalAmount">
      <div className="PersonalAmountText">
        <p>Total a pagar</p>
        <p>/ person</p>
      </div>
      <div className="PersonalAmountPrice">
      <p>{total === 0 ? '$0.00 MXN' : `$ ${total} MXN`}</p>
      </div>
    </div>
  );
};
