import React from 'react';
import './Tips.scss';
import TipsButton from '../TipsButton';

const TipsPercent = [
  { tip: 5 },
  { tip: 10 },
  { tip: 15 },
  { tip: 25 },
  { tip: 50 },
];

const Tips = () => {
  return (
    <div className="Tips">
      <div className="Tips-container">
        <div className="Tips-content">
          <p>Select Tip</p>
          {TipsPercent.map((item) => (
            <TipsButton key={item.tip} item={item.tip} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tips;
