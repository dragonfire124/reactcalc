import React from 'react';
import './App.scss';
import Calculator from './components/Calculator';
import Header from './components/Header';
import FormTips from './components/FormTips';
import GeneralInput from './components/GeneralInput';
import Result from './components/Result';
import Tips from './components/Tips';
import { PersonalAmount } from './components/PersonalAmount';
import { ResetButton } from './components/ResetButton/ResetButton';

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

export default function App() {
  /*
  const [tips, setTips] = React.useState(0);
  const [total, setTotal] = React.useState(0);
  const [personas, setPersonas] = React.useState(1);
*/
  const [state, setState] = React.useState({
    Total: 0,
    Tips: 0,
    TipsAmount: 0,
    Person: 1,
    tipsByPerson: 0,
    AmountByPerson: 0,
  });
  console.log('Totales', state);

  return (
    <div className="App">
      <div className="App-container">
        <div className="App-content">
          <Header />
          <Calculator>
            <FormTips>
              <GeneralInput label="Bill" icon="dolar" name="Amount" />
              <Tips />
              <GeneralInput
                label="Number of People"
                icon="people"
                name="Person"
              />
            </FormTips>
            <Result>
              <section>
                <PersonalAmount label="Tip Amount" data={state.tipsByPerson} />
                <PersonalAmount label="Total" data={state.AmountByPerson} />
              </section>
              <ResetButton />
            </Result>
          </Calculator>
        </div>
      </div>
    </div>
  );

  {
    /* 
          <FormTips>
            <GeneralInput label="Bill" icon="dolar" />
            <Tips />
            <GeneralInput label="Number of people" icon="people" />
          </FormTips>
          <Result>
            <div className="">
              <p>Total a pagar</p>
              <p>{total === 0 ? '$0.00 MXN' : `$ ${total} MXN`}</p>
            </div>
            <div className="">
              <p>Total de propina</p>
              <p>{tips === 0 ? '$0.00 MXN' : `$ ${tips} MXN`}</p>
            </div>
            <div className="">
              <p>Propina por persona</p>
              <p>
                {tipsByPerson === 0 ? '$0.00 MXN' : `$ ${tipsByPerson} MXN`}
              </p>
            </div>
            <div className="">
              <p>Monto por Persona</p>
              <p>$0.00MXN</p>
            </div>
            <div className="">
              <p>Total por persona</p>
              <p>$0.00MXN</p>
            </div>
          </Result>
        </Calculator>
      </div>
    </div>
  </main>;
} */
  }
}
