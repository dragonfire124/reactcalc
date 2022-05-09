import React from 'react';

export const PersonalAmount = () => {
  const total = 0;
  return (
    <div className="PersonalAmount">
      <p>Total a pagar</p>
      <p>{total === 0 ? '$0.00 MXN' : `$ ${total} MXN`}</p>
    </div>
  );
};
