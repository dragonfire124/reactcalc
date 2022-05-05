import React from 'react';
import './App.css';
import Calculator from './components/Calculator/';
import Header from './componenents/Header';
import FormTips from './componenents/FormTips';
import  GeneralInput  from './componenents/GeneralInput';
import Result from './componenents/Result';
import Tips from './componenents/Tips';

export default function App() {
  return <Calculator />;
}

const TipCalc = (amount, tipsAmount = 15) => {
  return amount * (tipsamount / 100);
};

const TotalCalc = (amount, tipsAmount) => {
  return parseFloat(amount) + parseFloat(tipsAmount);
};

const TipsByPerson = () => {
  return parseFloat(tipsAmount) / parseFloat(PersonNumber);
};

const AmountByPerson = (amount, PersonNumber) => {
  return amount / PersonNumber;
};

return;
<div className="App">
  <div className="App-container">
    <div className="App-content">
      <Header />
      <Calculator>
        <FormTips>
          <GeneralInput label="Bill" icon="dolar" />
          <Tips />
          <GeneralInput label="Number of people" icon="people" />
        </FormTips>
        <Result></Result>
      </Calculator>
    </div>
  </div>
</div>;
