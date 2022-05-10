import React from 'react';
import './Tips.scss';
import TipsButton from '../TipsButton';

const TipsPercent = [
  { tip: 5, onclick ="porcentaje(e)"},
  { tip: 10 },
  { tip: 15 },
  { tip: 25 },
  { tip: 50 },
];

const Tips = () => {
  return (
    <div className="Tips">
      <div className="Tips-container">
      <p>Select Tip</p>
        <div className="Tips-content">
         

          {TipsPercent.map((item) => (
            <TipsButton key={item.tip} item={item.tip}  />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tips;
