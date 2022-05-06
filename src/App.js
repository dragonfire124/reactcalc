import React from 'react';
import './App.scss';
import Calculator from './components/Calculator';
import Header from './components/Header';
import FormTips from './components/FormTips';
import GeneralInput from './components/GeneralInput';
import Result from './components/Result';
import Tips from './components/Tips';

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
<main className="App">
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
</main>;
