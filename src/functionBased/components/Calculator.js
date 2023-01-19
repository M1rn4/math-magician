/* eslint-disable import/no-absolute-path */
import React, { useState } from 'react';
import calculate from '../../logic/calculate';

import '../../styles/calculator.css';

const Calculator = () => {
  const [value, setValue] = useState({
    total: null,
    next: null,
    operation: null,
  });
  const handleClick = (e) => {
    setValue((state) => calculate(state, e.target.textContent));
  };
  const { total, next, operation } = value;
  const buttonsCalculate = ['AC', '+/-', '%', '÷', 7, 8, 9, 'x', 4, 5, 6, '-', 1, 2, 3, '+', 0, '.', '='];

  return (
    <section className="calculatorTotal">
      <div className="container">
        <div className="calculator">
          <div className="display">
            <p>
              {total}
              {operation}
              {next}
            </p>
          </div>
          <div className="buttons">
            {buttonsCalculate.map((btn) => (
              <button type="button" className="btnNumbers" onClick={handleClick} key={btn}>{btn}</button>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Calculator;
