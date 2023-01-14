import React, { useState } from 'react';
import styles from '../styles/Calculator.module.css';
import calculate from '../logic/calculate';
// eslint-disable-next-line react/prefer-stateless-function

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

  return (
    <section className={styles.calculatorTotal}>
      <div className={styles.container}>
        <div className={styles.display}>
          {total}
          {operation}
          {next}
        </div>
        <div className={styles.buttons}>
          <button type="button" className={styles.btnNumbers} onClick={handleClick}>AC</button>
          <button type="button" className={styles.btnNumbers} onClick={handleClick}>+/-</button>
          <button type="button" className={styles.btnNumbers} onClick={handleClick}>%</button>
          <button type="button" className={`${styles.btnNumbers} ${styles.btnOperation}`} onClick={handleClick}>/</button>
        </div>
        <div className={styles.buttons}>
          <button type="button" className={styles.btnNumbers} onClick={handleClick}>7</button>
          <button type="button" className={styles.btnNumbers} onClick={handleClick}>8</button>
          <button type="button" className={styles.btnNumbers} onClick={handleClick}>9</button>
          <button type="button" className={`${styles.btnNumbers} ${styles.btnOperation}`} onClick={handleClick}>x</button>
        </div>
        <div className={styles.buttons}>
          <button type="button" className={styles.btnNumbers} onClick={handleClick}>4</button>
          <button type="button" className={styles.btnNumbers} onClick={handleClick}>5</button>
          <button type="button" className={styles.btnNumbers} onClick={handleClick}>6</button>
          <button type="button" className={`${styles.btnNumbers} ${styles.btnOperation}`} onClick={handleClick}>-</button>
        </div>
        <div className={styles.buttons}>
          <button type="button" className={styles.btnNumbers} onClick={handleClick}>1</button>
          <button type="button" className={styles.btnNumbers} onClick={handleClick}>2</button>
          <button type="button" className={styles.btnNumbers} onClick={handleClick}>3</button>
          <button type="button" className={`${styles.btnNumbers} ${styles.btnOperation}`} onClick={handleClick}>+</button>
        </div>
        <div className={styles.buttons}>
          <button type="button" className={`${styles.btnNumbers} ${styles.zeroBtn}`} onClick={handleClick}>0</button>
          <button type="button" className={styles.btnNumbers} onClick={handleClick}>.</button>
          <button type="button" className={`${styles.btnNumbers} ${styles.btnOperation}`} onClick={handleClick}>=</button>
        </div>
      </div>
    </section>
  );
};

export default Calculator;
