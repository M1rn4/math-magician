import React from 'react';
import styles from '../styles/Calculator.module.css';

// eslint-disable-next-line react/prefer-stateless-function
class Calculator extends React.Component {
  render() {
    return (
      <section className={styles.calculatorTotal}>
        <div className={styles.container}>
          <div className={styles.display}>
            <p>0</p>
          </div>
          <div className={styles.buttons}>
            <button type="button" className={styles.btnNumbers}>AC</button>
            <button type="button" className={styles.btnNumbers}>+/-</button>
            <button type="button" className={styles.btnNumbers}>%</button>
            <button type="button" className={`${styles.btnNumbers} ${styles.btnOperation}`}>/</button>
          </div>
          <div className={styles.buttons}>
            <button type="button" className={styles.btnNumbers}>7</button>
            <button type="button" className={styles.btnNumbers}>8</button>
            <button type="button" className={styles.btnNumbers}>9</button>
            <button type="button" className={`${styles.btnNumbers} ${styles.btnOperation}`}>X</button>
          </div>
          <div className={styles.buttons}>
            <button type="button" className={styles.btnNumbers}>4</button>
            <button type="button" className={styles.btnNumbers}>5</button>
            <button type="button" className={styles.btnNumbers}>6</button>
            <button type="button" className={`${styles.btnNumbers} ${styles.btnOperation}`}>-</button>
          </div>
          <div className={styles.buttons}>
            <button type="button" className={styles.btnNumbers}>1</button>
            <button type="button" className={styles.btnNumbers}>2</button>
            <button type="button" className={styles.btnNumbers}>3</button>
            <button type="button" className={`${styles.btnNumbers} ${styles.btnOperation}`}>+</button>
          </div>
          <div className={styles.buttons}>
            <button type="button" className={`${styles.btnNumbers} ${styles.zeroBtn}`}>0</button>
            <button type="button" className={styles.btnNumbers}>.</button>
            <button type="button" className={`${styles.btnNumbers} ${styles.btnOperation}`}>=</button>
          </div>
        </div>
      </section>
    );
  }
}

export default Calculator;
